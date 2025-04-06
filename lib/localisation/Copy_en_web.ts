import { Copy } from "./Copy"

export const copy: Copy = {
    Menus: [
        {
            Name: "home",
            Value: "Home",
            items: []
        },       
        {
            Name: "register",
            Value: "Register",
            items: []
        },
        {
            Name: "login",
            Value: "Login",
            items: []
        },
        {
            Name: "security",
            Value: "Security",
            items: [
                {
                    Name: "login",
                    Value: "Login",
                    items: []
                },
                {
                    Name: "register",
                    Value: "Register",
                    items: []
                },
                {
                    Name: "forgotpassword",
                    Value: "Forgot password",
                    items: []
                },
                {
                    Name: "resetpassword",
                    Value: "Reset password",
                    items: []
                },
                {
                    Name: "changepassword",
                    Value: "Change password",
                    items: []
                },                
                {
                    Name: "twofactorauthentication",
                    Value: "Two Factor Authentication",
                    items: []
                },          
                {
                    Name: "dataencryption",
                    Value: "Data Encryption",
                    items: []
                },          
                {
                    Name: "logout",
                    Value: "Logout",
                    items: []
                },
                {
                    Name: "externallogin",
                    Value: "External login",
                    items: [
                        {
                            Name: "google",
                            Value: "Login with Google",
                            items: []
                        },
                        {
                            Name: "facebook",
                            Value: "Login with Facebook",
                            items: []
                        },
                        {
                            Name: "twitter",
                            Value: "Login with Twitter",
                            items: []
                        },
                        {
                            Name: "linkedin",
                            Value: "Login with Linkedin",
                            items: []
                        },
                        {
                            Name: "apple",
                            Value: "Login with Apple",
                            items: []
                        },
                    ]
                }
            ]
        },
        {
            Name: "user",
            Value: "User",
            items: [
                {
                    Name: "name",
                    Value: "Name",
                    items: []
                },                
                {
                    Name: "displaysettings",
                    Value: "Display settings",
                    items: []
                },                
                {
                    Name: "logons",
                    Value: "Logons",
                    items: []
                },                
                {
                    Name: "emailaddresses",
                    Value: "Email addresses",
                    items: []
                },                
                {
                    Name: "communicationpreferences",
                    Value: "Communication preferences",
                    items: []
                },
                {
                    Name: "phones",
                    Value: "Phones",
                    items: []
                },                
                {
                    Name: "photos",
                    Value: "Photos",
                    items: []
                },                
                {
                    Name: "roles",
                    Value: "Roles",
                    items: []
                },          
                {
                    Name: "groups",
                    Value: "Groups",
                    items: []
                },                
                {
                    Name: "groupsandroles",
                    Value: "Groups and roles",
                    items: []
                },                
                {
                    Name: "weblinks",
                    Value: "Web links",
                    items: []
                },                
                {
                    Name: "details",
                    Value: "Your Details",
                    items: []
                },  
                {
                    Name: "delete",
                    Value: "Delete my details",
                    items: []
                },
                {
                    Name: "notifications",
                    Value: "Your notifications",
                    items: []
                },
                {
                    Name: "groupnotifications",
                    Value: "Your group notifications",                    
                    items: []
                },
                {
                    Name: "loginhistory",
                    Value: "Login history",
                    items: []
                }
            ]
        },
        {
            Name: "about",
            Value: "About",
            items: [
                {
                    Name: "privacypolicy",
                    Value: "Privacy policy",
                    items: []
                },
                {
                    Name: "termsandconditions",
                    Value: "Terms and conditions",
                    items: []
                },
            ]
        },
        {
            Name: "logout",
            Value: "Logout",
            items: []
        },
    ],
    Components: {
        LoginComponent: {
            Title: "Login",
            Username: "Email Address",
            UsernameInfo: "Please provide your email address",
            Password: "Password",
            PasswordInfo: "Please provide your password",
            Submit: "Login",
            Errors: {
                ValidationErrors:{},
                ServerErrors:{
                    LoginFailed: `Login failed because of an internal server error`,
                    IncorrectUsernameOrPassword: `Login failed because of a username/password mismatch`
                }
            },
        },
        RegisterComponent: {
            Title: "Register",
            Username: "Email Address",
            UsernameInfo: "Please provide your email address",
            Password: "Password",
            PasswordInfo: "Please provide your password",
            ConfirmPassword: "Confirm Password",
            ConfirmPasswordInfo: "Please confirm your password",
            IAcceptTermsAndConditions: "I accept the Terms and Conditions",
            IAcceptTermsAndConditionsInfo: "I have read and understood the Terms and Conditions. I accept these Terms and Conditions",
            IAcceptPrivacyPolicy: "I accept the Privacy Policy",
            IAcceptPrivacyPolicyInfo: "This policy explains how and where we use and store your data. I have read and understood the Privacy Policy. I accept this Privacy Policy",
            PasswordStrength: "Password Strength",
            PasswordStrengthInfo: "I have read and understood the Terms and Conditions and understood the implication of using a weak password. Use at your own discretion. Password Strength is configurable using an environment variable",
            PasswordStrengthHighStrength: "High-strength Password",
            PasswordStrengthMediumStrength: "Medium-strength Password",
            PasswordStrengthLowStrength: "Low-strength Password",
            PasswordStrengthNoStrength: "No-strength Password",
            Submit: "Register",
            Errors: {
                ValidationErrors: {
                    PasswordConfirmationMustMatch: "The password confirmation must match your password",
                    MustAcceptTermsAndConditions: "You must accept the Terms and Conditions",
                    MustAcceptPrivacyPolicy: "You must accept the Privacy Policy",   
                },
                ServerErrors:{
                    RegistrationFailed: `Registration failed because the username is already in use`
                }
            },
        },
    },
    Pages: {
        Index: {
            PageTitle: "Home",
            MainHeading: "Home",
            Create: "Create",
            CreateInfo1: "When launching a service or product, avoiding delays or unmet expectations can be the key to your success and cost-efficiency. Our preferred approach leverages a highly configurable, feature-rich Rapid Application Development (RAD) framework to seamlessly transform and unify your requirements into a tailored solution, ensuring you receive:",
            CreateInfo2: "A responsive HTML5 website that adheres to Web Accessibility standards, complete with intuitive administrative modules, ensuring easy management and broad reach",            
            CreateInfo3: "Native apps for Android and iOS, putting your services directly in the hands of your users",            
            CreateInfo4: "Seamless connectivity with most popular relational and NoSQL databases, whether managed by you, for you, or in collaboration with you. Additionally, support for REST or SOAP APIs, Elasticsearch, and Google Cloud Datastore ensures comprehensive data integration",            
            CreateInfo5: "Robust authentication options including Microsoft Windows, SAML2, OpenId, Username/Password, and OAuth, all with Single Sign-on and detailed role-based authorization, guaranteeing secure access",            
            CreateInfo6: "Advanced logging, continuous deployment, and continuous monitoring capabilities, with automatic scaling during peak times, ensuring reliability and performance",            
            CreateInfo7: "Localized and branded communications through email, SMS, text, WhatsApp, Skype, and more, along with comprehensive training materials to keep your team up-to-date",            
            CreateInfo8: "Strong protection against Denial Of Service (DOS) and other malicious attacks, safeguarding your services and data",            
            CreateInfo9: "Full compliance with National Data Privacy Laws, providing peace of mind regarding data security and legal adherence",            
            CreateInfo10: "A detailed online project plan using SCRUM/AGILE/Waterfall methodologies, clearly outlining requirements, deliverables, and milestones to keep your project on track",         
            Innovate: "Innovate",
            InnovateInfo: "Our localised and globailsed solutions utilise the very latest technologies to deliver quality at a reduced cost. This is supported by our constantly evolving innovation practices which enable us to identify the shortcomings and opportunities in quality, cost, performance, and a speedy launch to market.",
            Simplify: "Simplify",
            SimplifyInfo: "We believe in simplicity and intuitive User Interfaces whilst hiding the complexities from you. Using our intuitive Web, Desktop, Andriod, and IOS applications with email and SMS notifications, enables the automation of your operations no matter how complex.",
            Unify: "Unify",
            UnifyInfo1: "Our secure",
            UnifyInfo2: "accepts both JSON, XML, or HTML input; and generates either JSON, XML, HTML, PDFs, Microsoft Excel spreadsheets (with Calculations), or Google spreadsheets. Our solution is future-proof when further integrations to other systems are required due to growth or operational changes. Our API could be queried or written to, during Data Extraction, Transformation, and Loading (ETL) using Tools such as SQL Server Integration Services, Azure Data Factory, Oracle Data Integrator, Hadoop, AWS Glue, and Google Cloud Dataflow. The same applies to the generation of Reports.",
            Log1: "and try it out immediately or alternatively",
            Log2: "with either an emaill address and password if you already have an account or",
            Log3: "with Google or Facebook if you do have an account with either of them"
        },
        Authentication: {
            IndexPageTitle: "Security",
            IndexPageMainHeading: "Security Home",
            SecurityInfo1: "Authentication is seamless on existing on-premise Microsoft Active Directory (AD) or a cloud-based Microsoft Azure Active Directory (AAD). Single Sign-on is also seamless with your existing systems that support OpenID or SAML2.",
            SecurityInfo2: "Additionally, authentication is also possible via Apple, Meta(Facebook), Alphabet(Google), X(Twitter), LinkedIn, YouTube, and over 60 social media platforms that support OAuth.",
            SecurityInfo3: "Authorization is granular, giving you complete control over what a user or a group can administer, create, view, modify or delete. We determine your organizational structure using automated processes. The steps, inputs, participants and end-products of this process are detailed in the provided online project. An online organisational structure of groups and roles is also available.",
            Login: {
                PageTitle: "Log in",                 
                MainHeading: "Please complete to log in"
            },
            ExternalLogin: {
                PageTitle: "Log in another way",
                MainHeading: "Log in using your Social Media account"
            },
            Register: {
                PageTitle: "Register",
                MainHeading: "Please register with your email address and password"
            },
            ForgotPassword: {
                PageTitle: "Forgot password",
                MainHeading: "Please complete to reset your password",
                Username: "Email Address",
                UsernameInfo: "Please provide the email address that you use, in combination with your password, when logging in",
                ForgotPasswordPasswordEmailSent: "An email will be sent to the email address given if it is valid. To change your password, please follow the instructions in this email"
            },
            ResetPassword: {
                PageTitle: "Reset password",
                MainHeading:  "Please complete to reset your new password"
            },             
            TwoFactorAuthentication: {
                PageTitle: "Two Factor Authentication",
                MainHeading: "Two Factor Authentication settings"
            },
            DataEncryption: {
                PageTitle: "Data Encryption",
                MainHeading: "Data Encryption",
                Warning: "Encrypt your data with your password. As your password is also encrypted and only known to you, your data would be unrecoverably lost if and when you forget your password. This is a configurable feature on top of the standard encryption features offered by the underlying data store."
            }               
        },
        About:{
            IndexPageTitle: "About",
            IndexPageMainHeading: "About",
            TermsAndConditions:{
                PageTitle: "Terms",
                MainHeading: "Terms and Conditions",
                sections:{
                    Temp: "There are no terms and there are no conditions"
                }
            },
            PrivacyPolicy:{
                PageTitle: "Privacy",
                MainHeading: "Privacy Policy",
                sections:{
                    DefinitionsAndInterpretation: {
                        SectionTitle: "Definitions and Interpretation",                        
                    },
                    ScopeOfThisPrivacyPolicy: {
                        SectionTitle: "Scope of this Privacy Policy",                        
                    },
                    DataCollected: {
                        SectionTitle: "Data Collected",                        
                    },                    
                    HowWeCollectData: {
                        SectionTitle: "How We Collect Data",                        
                    },
                    DataThatisGivenToUsbyYou: {
                        SectionTitle: "Data That is Given to Us by You",                        
                    },
                    DataThatIsReceivedFromThirdParties: {
                        SectionTitle: "Data That is Received From Third Parties",                        
                    },
                    DataThatisReceivedFromPubliclyAvailableThirdPartiesSources: {
                        SectionTitle: "Data That is Received From Publicly Available Third Parties Sources",                        
                    },
                    DataThatIsCollectedAutomatically: {
                        SectionTitle: "Data That is Collected Automatically",                        
                    },
                    OurUseOfData: {
                        SectionTitle: "Our Use of Data",                        
                    },
                    KeepingDataSecure: {
                        SectionTitle: "Keeping Data Secure",                        
                    },
                    DataRetention: {
                        SectionTitle: "Data Retention",                        
                    },
                    YourRights: {
                        SectionTitle: "Your Rights",                        
                    },
                    LinksToOtherWebsitesAndMobileApps: {
                        SectionTitle: "Links to Other Websites And/Or Mobile Apps",                        
                    },
                    ChangesOfBusinessOwnershipAndControl: {
                        SectionTitle: "Changes of Business Ownership and Control",                        
                    },
                    Cookies: {
                        SectionTitle: "Cookies",                        
                    },
                    General: {
                        SectionTitle: "General",                        
                    },
                    ChangesToThisPrivacyPolicy: {
                        SectionTitle: "Changes to This Privacy Policy",                        
                    },                    
                }
            },            
        },
        User: {
            IndexPageTitle: "User",
            IndexPageMainHeading: "User Home",
            Name: {
                PageTitle: "Name",
                MainHeading: "Your name",
                Title: "Title", 
                TitleInfo: "Your title", 
                Displayname: "Display name",
                DisplaynameInfo: "Your screen display name, if any",
                Firstname : "First name", 
                FirstnameInfo : "Your given first name", 
                Middlename : "Middle name", 
                MiddlenameInfo : "Your given middle name, if any", 
                Lastname : "Last name", 
                LastnameInfo : "Your given last name", 
                Nickname : "Nickname", 
                NicknameInfo : "Your nickname, if any",
                UpdateYourDetails: "Update your name"
            },
            DisplaySettings: {                
                PageTitle: "Display settings",
                MainHeading: "Your display settings",                
                LowspeedConnection : "Low-speed connection",
                LowspeedConnectionInfo : "Indicate whether you prefer settings ideally suited for low-speed connections",
                DisableAnimations: "Disable animations",
                DisableAnimationsInfo: "Enable or disable animations",
                ShowBackgroundVideo: "Show background video",
                ShowBackgroundVideoInfo: "Enable or disable the display of background videos",
                Language: "Language",
                LanguageInfo: "Set the preferred language you would like in your display and correspondence such as emails, SMS and WhatsApp messages",
                Theme: "Theme",
                ThemeInfo: "Set the preferred color scheme"
            },            
            Phones: {
                PageTitle: "Phones",
                MainHeading: "Your phone numbers",                     
                PhoneNumber: "Phone number",   
                AddAPhoneNumber: "Add a phone number",                        
            },
            EmailAddresses: {
                PageTitle: "Email Addresses",
                MainHeading: "Your email addresses",   
                EmailAddress: "Email address", 
                AddAnEmailAddress: "Add an email address"
            },        
            CommunicationPreferences:{
                PageTitle: "Communication Preferences",
                MainHeading: "Your communication preferences",                
                InApp: "InApp",
                InAppInfo: "Notifications and other messages are sent to this App",
                WhatsApp: "WhatsApp",
                WhatsAppInfo: "Notifications and other messages are sent to your WhatsApps account. A mobile phone number is required",
                SMS: "SMS", 
                SMSInfo: "Notifications and other messages are sent to your mobile phone. A mobile phone number is required",
                Email: "Email",
                EmailInfo: "Notifications and other messages are sent to your email address. An email address is required",
                IMessage: "iMessage",
                IMessageInfo: "Notifications and other messages are sent to your iMessage account. An Apple device is required"
            },
            Logons: {                
                PageTitle: "Logons",
                MainHeading: "Your logons",                
                Provider: "Provider",
                ProviderUserName: "Provider username",
                ProviderUserId: "Provider id",
            },      
            Photos: {                
                PageTitle: "Photos",
                MainHeading: "Your photos",                
            },
            Roles: {
                PageTitle: "Roles",
                MainHeading: "Your roles",   
                Role: "Role"             
            },
            Groups: {
                PageTitle: "Groups",
                MainHeading: "Your groups",   
                Group: "Group"             
            },
            GroupsAndRoles: {
                PageTitle: "Groups and roles",
                MainHeading: "Your groups and roles",    
                GroupAndRole: "Group and role"            
            },
            WebLinks: {                
                PageTitle: "Web links",
                MainHeading: "Your web links",                
            },
            YourDetails: {
                PageTitle: "Details",
                MainHeading: "Your details",
            },
            DeleteMyDetails: {
                PageTitle: "Delete",
                MainHeading: "Delete my details",
            },
            Notifications: {
                PageTitle: "Notifications",
                MainHeading: "Your notifications",
                CreatedOn: "Created on",
                Importance: "Importance",
                Message: "Message",
                NotificationStatus: "Status",
            },
            GroupNotifications: {
                PageTitle: "Group Notifications",
                MainHeading: "Your group notifications",
                NoGroupNotifications: "You currently do not have any group notifications",
            },
            LoginHistory: {
                PageTitle: "Login history",
                MainHeading: "Your login history",
                Date: "Date",
                IPAddress: "IP Address", 
                Device: "Device",
                Location: "Location"
            },
            ChangePassword: {
                PageTitle: "Change password",      
                MainHeading: "Please complete to change your password",
                PasswordChanged: "Your password has been changed"
            },
        }
    },
    Errors:{
        Common: {    
            GenericError: "An invalid Application state was detected, the last operation was aborted safely",    
            ExpiredSession: "Your session has expired",
            AccessDenied: "Access to the Resource ({{0}}) is denied"
        },
        ValidationErrors:{
            GenericSummary: "One or more of the details you provided is invalid",  
            IsRequired: "{{0}} is required",  
            MustHaveMinLen: "it must have a minimum of {{0}} characters",  
            MustHaveMaxLen: "it must have a maximum of {{0}} characters",    
            MustHaveMin: "it must have a minimum of value of {{0}}",    
            MustHaveMax: "it must have a maximum value of {{0}}",    
            MustBeEmailAddress: "it must be a valid email address",    
            MustContainLowerCase: "it must contain a least one lower case character",     
            MustContainUpperCase: "it must contain a least one upper case character",    
            MustContainSpecialCharacter: "it must contain a least one special character which should be from these @#$%^&+*!= characters",      
        }
    },
    Common: {        
        And: "and", 
        Add: "Add",
        AreYouSure: "Are you sure?",       
        Api: "API",
        All: "All",
        Cancel: "Cancel",
        ChangePassword: "Change password",           
        Change: "Change",         
        Close: "Close",
        Name: "Details",
        Delete: "Delete",
        ExportAsExcel: "Export as Excel",        
        ExportAsPDF: "Export as PDF",    
        ForgotPassword: "Forgot password",            
        InfoTipHeader: "In more details...",        
        Login: "Log in",
        LoginAgain: "Please log in again",
        LoginAnotherWay: "Log in another way",
        Logout: "Log out",                        
        Loading: "Loading...",
        Magic: "Switch between Urdu and English to see a CSS Right-to-Left and Left-to-Right magic on this image and page. The copy (wording) on this site is available in either compressed or verbose versions, to suit all device types, ranging from extra-wide computer monitors, to pocket-sized LCD Raspberry Pi screens, with options for choosing either a formal, neutral, or humorous tone",
        Or: "or",
        PendingNotification: "You have a high-importance or medium-importance notification",
        PendingNotifications: "You have {{0}} high-importance and/or medium-importance notifications",        
        PleaseConfirmDeletion: "Please confirm deletion",
        Provide: "Please provide your",
        Register: "Register",
        Reset: "Reset",      
        Submit: "Submit",                          
        ThereIsNoOneHere: "There is no one here",
        Update: "update",
        View: "View",
        Yes: "Yes",
        YourDetails: "Your details"
    },
    Telerik: {
        grid: {
            groupPanelEmpty: "Drag a column header and drop it here to group by that column",
            pagerItemsPerPage: "items per page",
            pagerInfo: "{0} - {1} of {2} items",
            pagerFirstPage: "Go to the first page",
            pagerPreviousPage: "Go to the previous page",
            pagerNextPage: "Go to the next page",
            pagerLastPage: "Go to the last page",
            pagerPage: "Page",
            pagerOf: "of",
            pagerTotalPages: "{0}",
            filterClearButton: "Clear",
            filterEqOperator: "Is equal to",
            filterNotEqOperator: "Is not equal to",
            filterIsNullOperator: "Is null",
            filterIsNotNullOperator: "Is not null",
            filterIsEmptyOperator: "Is empty",
            filterIsNotEmptyOperator: "Is not empty",
            filterStartsWithOperator: "Starts with",
            filterContainsOperator: "Contains",
            filterNotContainsOperator: "Does not contain",
            filterEndsWithOperator: "Ends with",
            filterGteOperator: "Is greater than or equal to",
            filterGtOperator: "Is greater than",
            filterLteOperator: "Is less than or equal to",
            filterLtOperator: "Is less than",
            filterIsTrue: "Is true",
            filterIsFalse: "Is false",
            filterBooleanAll: "(All)",
            filterAfterOrEqualOperator: "Is after or equal to",
            filterAfterOperator: "Is after",
            filterBeforeOperator: "Is before",
            filterBeforeOrEqualOperator: "Is before or equal to",
            noRecords: "No records available.",
            filterAriaLabel: "Filter",
            filterCheckAll: "Check All",
            filterChooseOperator: "Choose Operator",
            filterSelectedItems: "selected items",
            filterSubmitButton: "Filter",
            filterTitle: "Filter",
            filterAndLogic: "And",
            filterOrLogic: "Or",
            groupColumn: "Group Column",
            searchPlaceholder: "Search",
            sortAriaLabel: "Sortable",
            sortAscending: "Sort Ascending",
            sortDescending: "Sort Descending",
            ungroupColumn: "Ungroup Column"
          },
    }
}
