'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Grid, GridColumn } from "@progress/kendo-react-grid"
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Copy, LocalisationUtils, UseUserLogins, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'


export default function UserLoginsPage() {
  const params = useParams()
  const locale = (String)(params.locale)
  const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
  loadMessages(copy.Telerik, locale)
  const router = useRouter()
  const CurrentPath = usePathname()
  const [IsAuthenticating, UserResponse, _] = UseUserResponse()
  const [IsLoadingUserLogins, UserLogins] = UseUserLogins({ UserId: UserResponse?.UserId })

  const InitialDataState = { skip: 0, take: 5 }
  const [Page, SetPage] = useState(InitialDataState)
  const [PageSizeValue, SetPageSizeValue] = useState()
  const OnPageChange = (event: any) => {
    const targetEvent = event.targetEvent
    const take = targetEvent.value === copy.Common.All ? UserLogins.length : event.page.take
    if (targetEvent.value) {
      SetPageSizeValue(targetEvent.value)
    }
    SetPage({ ...event.page, take })
  }

  const DeviceCell = ({ dataItem, ...props }: any) => {
    if (!dataItem || !dataItem.Id) {
      return null
    }
    return (
      <td {...props.tdProps}>
        <span>{`${dataItem.ClientName}(${dataItem.OSName})`}</span>
      </td>
    )
  }

  const LocationCell = ({ dataItem, ...props } : any) => {
    if (!dataItem || !dataItem.Id) {
      return null
    }
    return (
      <td {...props.tdProps}>
        <span>{`${dataItem.City}, ${dataItem.Postcode}, ${dataItem.Region}, ${dataItem.Location}`}</span>
      </td>
    )
  }


  useEffect(() => {
    if (!IsAuthenticating && !UserResponse?.IsAuthenticated) {
      router.push(`/${locale}/security/login?redirect=${CurrentPath}`)
    }
  }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])

  return (
    <>
      <section>
        <h1>{copy.Pages.User.LoginHistory.MainHeading}</h1>
      </section>
      <section>
        {!IsLoadingUserLogins &&
          <LocalizationProvider language={locale}>            
            <Grid              
              className={`${styles.pkgrid} ${styles.pkgridlogins} `}
              resizable={true}
              sortable={true}
              data={UserLogins.slice(Page.skip, Page.take + Page.skip)}
              skip={Page.skip}
              take={Page.take}
              total={UserLogins.length}
              pageable={{
                buttonCount: 4,
                pageSizes: [5, 10, 15, copy.Common.All],
                pageSizeValue: PageSizeValue,
              }}
              onPageChange={OnPageChange}
            >              
              <GridColumn field="CreatedOn" title={copy.Pages.User.LoginHistory.Date} format="{0:D} {0:T}" />
              <GridColumn field="IPAddress" title={copy.Pages.User.LoginHistory.IPAddress} />
              <GridColumn title={copy.Pages.User.LoginHistory.Device} cells={{ data: DeviceCell }} />
              <GridColumn title={copy.Pages.User.LoginHistory.Location} cells={{ data: LocationCell }} />
            </Grid>
          </LocalizationProvider>
        }
      </section>
    </>
  )
}