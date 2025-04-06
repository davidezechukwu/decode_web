'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { usePathname, useRouter } from 'next/navigation'
import { Copy, LocalisationUtils, UseUserNotifications, UseUserResponse } from '@/lib'
import { IUserNotification } from '@david.ezechukwu/core'
import styles from '@/app/[locale]/layout.module.scss'


export default function UserGroupNotificationsPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const router = useRouter()
    const CurrentPath = usePathname()
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    let [IsLoadingUserNotifications, UserNotifications, _] = UseUserNotifications({ UserId: UserResponse?.UserId})

    useEffect(() => {      
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated){                 
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)                         
        }                
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])

  
    return (
        <>
            <section>
                <h1>{copy.Pages.User.GroupNotifications.MainHeading}</h1>
            </section>
            <section>
                {copy.Pages.User.GroupNotifications.NoGroupNotifications}
                {/* <Grid 
                    style={{height: "400px"}}
                    data={UserNotifications}
                >
                    <GridColumn field="Id" title="ID" width="40px" />
                    <GridColumn field="CreatedOn" title="Date" width="250px" />
                    <GridColumn field="Importance" title="Importance" width="100px"/>
                    <GridColumn field="Message" title="Message" />                    
                </Grid> */}
            </section>
        </>
    )
}