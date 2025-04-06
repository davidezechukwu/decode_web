'use client'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import {
    Grid,
    GridColumn,
    GridToolbar,
    GridColumnMenuFilter,
    GridColumnMenuCheckboxFilter
} from "@progress/kendo-react-grid"
import { SvgIcon } from '@progress/kendo-react-common'
import * as svgIcons from '@progress/kendo-svg-icons'
import { ExcelExport, ExcelExportColumn } from "@progress/kendo-react-excel-export"
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { filterBy, orderBy } from "@progress/kendo-data-query";
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl'
import { usePathname, useRouter } from 'next/navigation'
import {
    API_TYPE,
    Copy,
    HTTPUtils,
    HTTP_ENCODING_TYPE,
    HTTP_METHOD,
    LocalisationUtils,
    UseUserNotifications,
    UseUserResponse
} from '@/lib'
import {Loading } from '@/components'
import { Suspense } from 'react'
import styles from '@/app/[locale]/layout.module.scss'
import { ILookup, INotificationRequest, ModelIdType, ServiceErrorCodesEnum } from '@david.ezechukwu/core'

export default function UserNotificationsPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    loadMessages(copy.Telerik, locale)
    const router = useRouter()
    const CurrentPath = usePathname()
    const [IsAuthenticating, UserResponse, _] = UseUserResponse()
    const [IsLoadingUserNotifications, UserNotifications, SetUserNotifications] = UseUserNotifications({ Locale: locale, UserId: UserResponse?.UserId })
    
    const [Sort, SetSort] = useState([{ field: "Id", dir: "desc" }])    
    const [Filter, SetFilter] = useState({ logic: "and", filters: [{ field: "Id", operator: "isnotnull" }] })        
    const [Page, SetPage] = useState({ skip: 0, take: 5 })
    const [PageSizeValue, SetPageSizeValue] = useState()
    const [Data, SetData] = useState(orderBy(filterBy(UserNotifications, Filter as any), Sort as any).slice(Page.skip, Page.take + Page.skip))
    
    const OnPageChange = (event: any) => {
        const targetEvent = event.targetEvent
        const take = targetEvent.value === copy.Common.All ? UserNotifications.length : event.page.take
        if (targetEvent.value) {
            SetPageSizeValue(targetEvent.value)
        }
        SetPage({ ...event.page, take })
    }

    const OnFilter = (event: any) => {
        SetFilter(event.filter as any)
        SetData(orderBy(filterBy(UserNotifications, Filter as any), Sort as any).slice(Page.skip, Page.take + Page.skip))
        SetPage({ skip: 0, take: 5 })
    }

    const OnSort = (event: any) => {
        SetSort(event.sort as any)
        SetData(orderBy(filterBy(UserNotifications, Filter as any), Sort as any).slice(Page.skip, Page.take + Page.skip))
    }

    const gridRef = useRef(null);
    const excelExportRef = useRef(null);
    const OnExportAsExcel = () => {
        if (excelExportRef.current !== null && gridRef.current !== null) {
            (excelExportRef.current as any).save(UserNotifications, (gridRef.current as any).columns);
        }
    }

    let PDFExportRef = useRef(null)
    const OnExportAsPDF = () => {
        if (PDFExportRef) {
            ( PDFExportRef as any).save(UserNotifications);
        }
    }
        
    const OnMarkRead = async (event: any, dataItem: any, id: ModelIdType) => {
        try {
            const cell = event.target.closest('td')
            const row = cell.closest('tr')
            const cellIndex = cell.cellIndex
            const columnAction = row.cells[cellIndex]
            const statusCell = row.cells[cellIndex - 1]
            columnAction.innerHTML = ""
            statusCell.innerHTML = (SucceededStatus as any).Name
            const requestOptions: RequestInit = {}
            const urlPath: string = `user/${UserResponse?.UserId}/notifications/${id}`
            const requestBody: INotificationRequest = { NotificationStatusId: (SucceededStatus as any).Id }
            const userNotification = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.PUT, HTTP_ENCODING_TYPE.FORM_ENCODED, urlPath, requestBody, requestOptions)
            if (userNotification) {
                const itemIndex = UserNotifications.findIndex(p => p.Id == id)
                UserNotifications[itemIndex] = userNotification
                //SetUserNotifications(UserNotifications)                          
                SetUserNotifications() 
            }
            else {
                let _message = copy.Errors.Common.GenericError
                HTTPUtils.ShowError(_message)
            }
        } catch (err: any) {
            HTTPUtils.ShowError(err)
            let toast = '';
            switch (err.message.statusCode || err.statusCode) {
                case ServiceErrorCodesEnum.Conflict:
                case ServiceErrorCodesEnum.ImATeapot:
                case ServiceErrorCodesEnum.UnprocessableEntity:
                case ServiceErrorCodesEnum.UnavailableForLegalReasons:
                    toast = copy.Components.RegisterComponent.Errors.ServerErrors.RegistrationFailed
                    break
                case ServiceErrorCodesEnum.InternalServerError:
                default:
                    toast = copy.Errors.Common.GenericError
            }
            HTTPUtils.ShowError(toast)
        }
    }

    const ColumnAction = ({ dataItem, ...props }: any) => {
        if (!dataItem || !dataItem.Id) {
            return null
        }
        return (
            <td {...props.tdProps}>
                {PendingStatus && dataItem.NotificationStatusId == (PendingStatus as any).Id &&
                    <a
                        className={styles.pkgridnotificationsaction}
                        href='#'
                        onClick={(event) => { OnMarkRead(event, dataItem, dataItem.Id) }}
                    >
                        <span><SvgIcon icon={svgIcons['checkIcon']} size='large' /></span>
                    </a>
                }
            </td>
        )
    }    

    const ColumnMenuFilter = (props: any) => {
        return (
            <div>
                <GridColumnMenuFilter 
                    {...props} 
                    className={styles.pkgridcolumnMenufilter}     
                    expanded={true} 
                />
            </div>
        )
    }
    
    const ColumnMenuCheckboxFilter = (props: any) => {                
        return (
            <div>
                <GridColumnMenuCheckboxFilter
                    {...props}               
                    className={styles.pkgridcolumnMenucheckboxfilter}     
                    data={UserNotifications}
                    expanded={true}                          
                />
            </div>
        )
    }
    
    const grid = (
        <Grid
            className={`${styles.pkgrid} ${styles.pkgridnotifications} `}
            ref={gridRef}
            data={Data}
            sortable={true}
            sort={Sort as any}
            onSortChange={OnSort}
            selectedField={'Id'}
            selectable={{
                enabled: true,
                drag: true,
                cell: true,
                mode: 'single',
            }}
            navigatable={true}
            filterable={true}
            filter={Filter as any} 
            onFilterChange={OnFilter}
            resizable={true}            
            skip={Page.skip}
            take={Page.take}            
            total={filterBy(UserNotifications, Filter as any).length}
            pageable={{
                buttonCount: 4,
                pageSizes: [5, 10, 15, copy.Common.All],
                pageSizeValue: PageSizeValue,
            }}
            onPageChange={OnPageChange}
        > 
            <GridToolbar>
                <button
                    title={copy.Common.ExportAsExcel}
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                    onClick={OnExportAsExcel}
                >
                    {copy.Common.ExportAsExcel}
                </button>
                <button
                    title={copy.Common.ExportAsPDF}
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                    onClick={OnExportAsPDF}
                >
                    {copy.Common.ExportAsPDF}
                </button>
            </GridToolbar>
            <GridColumn field="CreatedOn" title={copy.Pages.User.Notifications.CreatedOn} filter="date" filterable={true}  />
            <GridColumn field="Importance" title={copy.Pages.User.Notifications.Importance} columnMenu={ColumnMenuCheckboxFilter} />
            <GridColumn field="Message" title={copy.Pages.User.Notifications.Message} filter="text" filterable={true} />
            <GridColumn field="NotificationStatus" title={copy.Pages.User.Notifications.NotificationStatus} columnMenu={ColumnMenuCheckboxFilter} />
            <GridColumn title="" width={40} filterable={false} sortable={false} cells={{ data: ColumnAction }} />
        </Grid>
    )

    const [PendingStatus, SetPendingStatus] = useState()
    const [SucceededStatus, SetSucceededStatus] = useState()
    const GetLookups = async () => {
        if (!PendingStatus){
            const requestOptions: RequestInit = {}
            const urlPathForNotificationstatus = `lookup/categories/notificationstatus/lookups?locale=${locale}&device=web`
            const notificationstatusCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForNotificationstatus, null, requestOptions)
            const pendingStatus = notificationstatusCategory.Lookups.find((lookup: ILookup) => lookup.Value === 'pending')
            SetPendingStatus(pendingStatus)
            const succeededStatus = notificationstatusCategory.Lookups.find((lookup: ILookup) => lookup.Value === 'succeeded')
            SetSucceededStatus(succeededStatus)
        }        
    }

    useEffect(() => {        
         SetData(orderBy(filterBy(UserNotifications, Filter as any), Sort as any).slice(Page.skip, Page.take + Page.skip))
    }, [IsLoadingUserNotifications, UserResponse?.IsAuthenticated, UserNotifications, Filter, Page])

    useEffect(() => {
        GetLookups()                
    }, [IsLoadingUserNotifications, UserResponse?.IsAuthenticated])

    useEffect(() => {
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated) {
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)
        }
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])

    return (
        <>
            <section>
                <h1>{copy.Pages.User.Notifications.MainHeading}</h1>
            </section>
            <section>
                <LocalizationProvider language={locale}>
                    <ExcelExport ref={excelExportRef} >
                        <ExcelExportColumn field={copy.Pages.User.Notifications.CreatedOn} title={copy.Pages.User.LoginHistory.Date} />
                        <ExcelExportColumn field={copy.Pages.User.Notifications.Importance} title={copy.Pages.User.LoginHistory.IPAddress} />
                        <ExcelExportColumn field="Message" title={copy.Pages.User.Notifications.Message} />
                        <ExcelExportColumn field="NotificationStatus" title={copy.Pages.User.Notifications.NotificationStatus} />
                    </ExcelExport>
                    <Suspense fallback={Loading()}>
                        {grid}
                    </Suspense>
                    <GridPDFExport
                        ref={(theRef: any) => (PDFExportRef = theRef)}
                        margin="1cm"
                    >
                        {grid}
                    </GridPDFExport>
                </LocalizationProvider>
            </section>
        </>
    )
}