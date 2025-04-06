'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { IUserGroupAndRoleResponse } from '@david.ezechukwu/core'
import { Copy, LocalisationUtils, UseUserResponse} from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'


export default function UserRolesPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)    
    
    const router = useRouter()
    const CurrentPath = usePathname()
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    
    useEffect(() => {      
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated){                 
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)                         
        }                
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])

    return (
        <>
            <section>      
                <h1>{copy.Pages.User.Roles.MainHeading}</h1>                                                      
            </section>
            <section>
                 <table className={`${styles.pktablewithfirstcolumnhighlighted}`} >
                    <thead>                                    
                    </thead>
                    <tbody>
                        {UserResponse?.UserGroupAndRoles.map((groupandroles: IUserGroupAndRoleResponse, index: number) => (
                            <tr key={`${groupandroles.Group.Id}-${groupandroles.Role.Id}`}>                                
                                <td>{copy.Pages.User.Roles.Role}</td><td>{groupandroles.Role.DisplayName}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>                                    
                    </tfoot>
                </table>
            </section>
        </>
    )
}