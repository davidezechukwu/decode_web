export type Copy = {
    Menus: [
        {
            Name: "home"
            Value: string
            items: []
        },  
        {
            Name: "register"
            Value: string
            items: []
        },
        {
            Name: "login"
            Value: string
            items: []
        },
        {
            Name: "security"
            Value: string
            items: [
                {
                    Name: "login"
                    Value: string
                    items: []
                },
                {
                    Name: "register"
                    Value: string
                    items: []
                },
                {
                    Name: "forgotpassword"
                    Value: string
                    items: []
                },
                {
                    Name: "resetpassword"
                    Value: string
                    items: []
                },
                {
                    Name: "changepassword"
                    Value: string
                    items: []
                },
                {
                    Name: "twofactorauthentication"
                    Value: string
                    items: []
                },
                {
                    Name: "dataencryption",
                    Value: string,
                    items: []
                },
                {
                    Name: "logout"
                    Value: string
                    items: []
                },
                {
                    Name: "externallogin"
                    Value: string
                    items: [
                        {
                            Name: "google"
                            Value: string
                            items: []
                        },
                        {
                            Name: "facebook"
                            Value: string
                            items: []
                        },
                        {
                            Name: "twitter"
                            Value: string
                            items: []
                        },
                        {
                            Name: "linkedin"
                            Value: string
                            items: []
                        },
                        {
                            Name: "apple"
                            Value: string
                            items: []
                        }
                    ]
                }
            ]
        },
        {
            Name: "user"
            Value: string
            items: [
                {
                    Name: "name"
                    Value: string
                    items: []
                },                
                {
                    Name: "displaysettings"
                    Value: string
                    items: []
                },                
                {
                    Name: "logons"
                    Value: string
                    items: []
                },                
                {
                    Name: "emailaddresses"
                    Value: string
                    items: []
                },                
                {
                    Name: "communicationpreferences"
                    Value: string
                    items: []
                },
                {
                    Name: "phones"
                    Value: string
                    items: []
                },               
                {
                    Name: "photos"
                    Value: string
                    items: []
                },                
                {
                    Name: "roles"
                    Value: string
                    items: []
                },          
                {
                    Name: "groups"
                    Value: string
                    items: []
                },                
                {
                    Name: "groupsandroles"
                    Value: string
                    items: []
                },                
                {
                    Name: "weblinks"
                    Value: string
                    items: []
                },            
                {
                    Name: "details"
                    Value: string
                    items: []
                },                
                {
                    Name: "delete"
                    Value: string
                    items: []
                },
                {
                    Name: "notifications",
                    Value: string,
                    items: []
                },
                {
                    Name: "groupnotifications",
                    Value: string,
                    items: []
                },
                {
                    Name: "loginhistory"
                    Value: string
                    items: []
                }                                                                     
            ]
        },
        {
            Name: "about"
            Value: string
            items: [
                {
                    Name: "privacypolicy"
                    Value: string
                    items: []
                },
                {
                    Name: "termsandconditions"
                    Value: string
                    items: []
                }
            ]
        },
        {
            Name: "logout"
            Value: string
            items: []
        }
    ]
    Components: {
        LoginComponent: {
            Title: string
            Username: string
            UsernameInfo: string
            Password: string
            PasswordInfo: string
            Submit: string
            Errors: {
                ValidationErrors:NonNullable<unknown>
                ServerErrors:{
                    LoginFailed: string
                    IncorrectUsernameOrPassword: string
                }
            }
        }
        RegisterComponent: {
            Title: string
            Username: string
            UsernameInfo: string
            Password: string
            PasswordInfo: string
            ConfirmPassword: string
            ConfirmPasswordInfo: string
            IAcceptPrivacyPolicy: string
            IAcceptPrivacyPolicyInfo: string 
            IAcceptTermsAndConditions: string
            IAcceptTermsAndConditionsInfo: string           
            PasswordStrength: string
            PasswordStrengthInfo: string
            PasswordStrengthHighStrength: string
            PasswordStrengthMediumStrength: string
            PasswordStrengthLowStrength: string
            PasswordStrengthNoStrength: string
            Submit: string
            Errors: {
                ValidationErrors:{
                    PasswordConfirmationMustMatch: string
                    MustAcceptTermsAndConditions: string
                    MustAcceptPrivacyPolicy: string   
                }
                ServerErrors:{
                    RegistrationFailed: string
                }
            }
        }
    }
    Pages: {
        Index: {
            PageTitle: string
            MainHeading: string
            Create: string
            CreateInfo1: string
            CreateInfo2: string
            CreateInfo3: string
            CreateInfo4: string
            CreateInfo5: string
            CreateInfo6: string
            CreateInfo7: string
            CreateInfo8: string
            CreateInfo9: string
            CreateInfo10: string            
            Innovate: string
            InnovateInfo: string
            Simplify: string
            SimplifyInfo: string
            Unify: string
            UnifyInfo1: string
            UnifyInfo2: string
            Log1: string
            Log2: string
            Log3: string
        }
        Authentication: {
            IndexPageTitle: string
            IndexPageMainHeading: string
            SecurityInfo1: string
            SecurityInfo2: string
            SecurityInfo3: string
            Login: {
                PageTitle: string
                MainHeading: string
            }
            ExternalLogin: {
                PageTitle: string
                MainHeading: string
            }
            Register: {
                PageTitle: string
                MainHeading: string
            }
            ForgotPassword: {
                PageTitle: string
                MainHeading: string
                ForgotPasswordPasswordEmailSent: string
                Username: string
                UsernameInfo: string
            }
            ResetPassword: {
                PageTitle: string
                MainHeading: string
            }                                 
            TwoFactorAuthentication: {
                PageTitle: string
                MainHeading: string
            },
            DataEncryption: {
                PageTitle: string
                MainHeading: string
                Warning: string
            }   
        }
        About:{
            IndexPageTitle: string
            IndexPageMainHeading: string
            TermsAndConditions:{
                PageTitle: string
                MainHeading: string
                sections:{
                    Temp: string
                }            
            }
            PrivacyPolicy:{
                PageTitle: string
                MainHeading: string
                sections:{
                    DefinitionsAndInterpretation: {
                        SectionTitle: string                        
                    }
                    ScopeOfThisPrivacyPolicy: {
                        SectionTitle: string                        
                    }
                    DataCollected: {
                        SectionTitle: string                        
                    }                    
                    HowWeCollectData: {
                        SectionTitle: string                        
                    }
                    DataThatisGivenToUsbyYou: {
                        SectionTitle: string                        
                    }
                    DataThatIsReceivedFromThirdParties: {
                        SectionTitle: string                        
                    }
                    DataThatisReceivedFromPubliclyAvailableThirdPartiesSources: {
                        SectionTitle: string                        
                    }
                    DataThatIsCollectedAutomatically: {
                        SectionTitle: string                        
                    }
                    OurUseOfData: {
                        SectionTitle: string                        
                    }
                    KeepingDataSecure: {
                        SectionTitle: string                        
                    }
                    DataRetention: {
                        SectionTitle: string                        
                    }
                    YourRights: {
                        SectionTitle: string                        
                    }
                    LinksToOtherWebsitesAndMobileApps: {
                        SectionTitle: string                        
                    }
                    ChangesOfBusinessOwnershipAndControl: {
                        SectionTitle: string                        
                    }
                    Cookies: {
                        SectionTitle: string                        
                    }
                    General: {
                        SectionTitle: string                        
                    }
                    ChangesToThisPrivacyPolicy: {
                        SectionTitle: string                        
                    }                         
                }
            }            
        }
        User: {
            IndexPageTitle: string
            IndexPageMainHeading: string
            Name: {
                PageTitle: string
                MainHeading: string       
                Title: string 
                TitleInfo: string 
                Displayname: string
                DisplaynameInfo: string
                Firstname : string 
                FirstnameInfo : string 
                Middlename : string 
                MiddlenameInfo : string 
                Lastname : string 
                LastnameInfo : string 
                Nickname : string 
                NicknameInfo : string 
                UpdateYourDetails: string
            }
            DisplaySettings: {                
                PageTitle: string
                MainHeading: string                
                LowspeedConnection : string
                LowspeedConnectionInfo : string
                DisableAnimations: string
                DisableAnimationsInfo: string
                ShowBackgroundVideo: string
                ShowBackgroundVideoInfo: string
                Language: string
                LanguageInfo: string
                Theme: string
                ThemeInfo: string
            }          
            Phones: {
                PageTitle: string
                MainHeading: string     
                PhoneNumber: string 
                AddAPhoneNumber:string

            }
            EmailAddresses: {
                PageTitle: string
                MainHeading: string    
                EmailAddress: string 
                AddAnEmailAddress:string            
            }
            CommunicationPreferences:{
                PageTitle: string
                MainHeading: string                
                InApp: string
                InAppInfo: string
                WhatsApp: string
                WhatsAppInfo: string
                SMS: string 
                SMSInfo: string
                Email: string
                EmailInfo: string
                IMessage: string
                IMessageInfo: string
            }
            Logons: {                
                PageTitle: string
                MainHeading: string                
                Provider: string
                ProviderUserName: string
                ProviderUserId: string
            }           
            Photos: {                
                PageTitle: string
                MainHeading: string                
            }
            Roles: {
                PageTitle: string
                MainHeading: string                
                Role: string
            }
            Groups: {
                PageTitle: string
                MainHeading: string                
                Group: string
            }
            GroupsAndRoles: {
                PageTitle: string
                MainHeading: string,
                GroupAndRole: string,
            }
            WebLinks: {                
                PageTitle: string
                MainHeading: string                
            }
            YourDetails: {
                PageTitle: string
                MainHeading: string                
            }            
            DeleteMyDetails: {
                PageTitle: string
                MainHeading: string                
            }            
            Notifications: {
                PageTitle: string
                MainHeading: string               
                CreatedOn: string
                Importance: string
                Message: string    
                NotificationStatus: string
            },
            GroupNotifications: {
                PageTitle: string
                MainHeading: string
                NoGroupNotifications: string
            }
            LoginHistory: {
                PageTitle: string
                MainHeading: string
                Date: string
                IPAddress: string, 
                Device: string,
                Location: string
            }
            ChangePassword: {
                PageTitle: string
                MainHeading: string
                PasswordChanged: string
            }
        }
    }
    Errors:{
        Common: {    
            GenericError: string                
            ExpiredSession: string
            AccessDenied: string
        }
        ValidationErrors:{
            GenericSummary: string  
            IsRequired: string  
            MustHaveMinLen: string    
            MustHaveMaxLen: string    
            MustHaveMin: string    
            MustHaveMax: string    
            MustBeEmailAddress: string    
            MustContainLowerCase: string    
            MustContainUpperCase: string    
            MustContainSpecialCharacter: string    
        }
    }
    Common: {
        Add: string
        And: string
        AreYouSure: string
        Api: string
        All: string
        Cancel: string
        ChangePassword: string        
        Change: string
        Close: string
        Name: string        
        Delete: string        
        ExportAsExcel: string        
        ExportAsPDF: string        
        ForgotPassword: string        
        InfoTipHeader: string       
        Login: string
        LoginAgain: string
        LoginAnotherWay: string
        Logout: string
        Loading: string         
        Magic: string
        Or: string
        PendingNotification: string
        PendingNotifications: string
        PleaseConfirmDeletion: string
        Provide: string
        Register: string
        Reset: string                              
        Submit: string        
        ThereIsNoOneHere: string
        Update: string
        View: string      
        Yes: string
        YourDetails: string
    }
    Telerik:{
        grid: {
            groupPanelEmpty: string
            pagerItemsPerPage: string
            pagerInfo: string
            pagerFirstPage: string
            pagerPreviousPage: string
            pagerNextPage: string
            pagerLastPage: string
            pagerPage: string
            pagerOf: string
            pagerTotalPages: string
            filterClearButton: string
            filterEqOperator: string
            filterNotEqOperator: string
            filterIsNullOperator: string
            filterIsNotNullOperator: string
            filterIsEmptyOperator: string
            filterIsNotEmptyOperator: string
            filterStartsWithOperator: string
            filterContainsOperator: string
            filterNotContainsOperator: string
            filterEndsWithOperator: string
            filterGteOperator: string
            filterGtOperator: string
            filterLteOperator: string
            filterLtOperator: string
            filterIsTrue: string
            filterIsFalse: string
            filterBooleanAll: string
            filterAfterOrEqualOperator: string
            filterAfterOperator: string
            filterBeforeOperator: string
            filterBeforeOrEqualOperator: string
            noRecords: string
            filterAriaLabel: string
            filterCheckAll: string
            filterChooseOperator: string
            filterSelectedItems: string
            filterSubmitButton: string
            filterTitle: string
            filterAndLogic: string
            filterOrLogic: string
            groupColumn: string
            searchPlaceholder: string
            sortAriaLabel: string
            sortAscending: string
            sortDescending: string
            ungroupColumn: string
          },
    }
}
