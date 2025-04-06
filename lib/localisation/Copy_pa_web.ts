import { Copy } from "./Copy"

export const copy: Copy = {
    Menus: [
        {
            Name: "home",
            Value: "ਘਰ",
            items: []
        },
        {
            Name: "register",
            Value: "ਰਜਿਸਟਰ",
            items: []
        },
        {
            Name: "login",
            Value: "ਲਾਗਿਨ",
            items: []
        },
        {
            Name: "security",
            Value: "ਸੁਰੱਖਿਆ",
            items: [
                {
                    Name: "login",
                    Value: "ਲਾਗਿਨ",
                    items: []
                },
                {
                    Name: "register",
                    Value: "ਰਜਿਸਟਰ",
                    items: []
                },
                {
                    Name: "forgotpassword",
                    Value: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ",
                    items: []
                },
                {
                    Name: "resetpassword",
                    Value: "ਪਾਸਵਰਡ ਰੀਸੈਟ ਕਰੋ",
                    items: []
                },
                {
                    Name: "changepassword",
                    Value: "ਪਾਸਵਰਡ ਬਦਲੋ",
                    items: []
                },
                {
                    Name: "twofactorauthentication",
                    Value: "ਦੋ ਕਾਰਕ ਪ੍ਰਮਾਣਿਕਤਾ",
                    items: []
                },
                {
                    Name: "dataencryption",
                    Value: "ਡਾਟਾ ਐਨਕ੍ਰਿਪਸ਼ਨ",
                    items: []
                },
                {
                    Name: "logout",
                    Value: "وتل",
                    items: []
                },
                {
                    Name: "externallogin",
                    Value: "ਬਾਹਰੀ ਲੌਗਇਨ",
                    items: [
                        {
                            Name: "google",
                            Value: "ਗੂਗਲ ਨਾਲ ਲੌਗਇਨ ਕਰੋ",
                            items: []
                        },
                        {
                            Name: "facebook",
                            Value: "Facebook ਨਾਲ ਲੌਗਇਨ ਕਰੋ",
                            items: []
                        },
                        {
                            Name: "twitter",
                            Value: "Twitter ਨਾਲ ਲੌਗਇਨ ਕਰੋ",
                            items: []
                        },
                        {
                            Name: "linkedin",
                            Value: "LinkedIn ਨਾਲ ਲੌਗਇਨ ਕਰੋ",
                            items: []
                        },
                        {
                            Name: "apple",
                            Value: "Apple ਨਾਲ ਲੌਗਇਨ ਕਰੋ",
                            items: []
                        },
                    ]
                }
            ]
        },
        {
            Name: "user",
            Value: "ਪ੍ਰੋਫਾਈਲ",
            items: [
                {
                    Name: "name",
                    Value: "ਨਾਮ",
                    items: []
                },
                {
                    Name: "displaysettings",
                    Value: "ਡਿਸਪਲੇ ਸੈਟਿੰਗਜ਼",
                    items: []
                },
                {
                    Name: "logons",
                    Value: "ਲੋਗਨ",
                    items: []
                },
                {
                    Name: "emailaddresses",
                    Value: "ਈਮੇਲ ਪਤੇ",
                    items: []
                },
                {
                    Name: "communicationpreferences",
                    Value: "ਸੰਚਾਰ ਤਰਜੀਹਾਂ",
                    items: []
                },
                {
                    Name: "phones",
                    Value: "ਫ਼ੋਨ",
                    items: []
                },
                {
                    Name: "photos",
                    Value: "ਫੋਟੋਆਂ",
                    items: []
                },
                {
                    Name: "roles",
                    Value: "ਭੂਮਿਕਾਵਾਂ",
                    items: []
                },
                {
                    Name: "groups",
                    Value: "ਸਮੂਹ",
                    items: []
                },
                {
                    Name: "groupsandroles",
                    Value: "ਸਮੂਹ ਅਤੇ ਭੂਮਿਕਾਵਾਂ",
                    items: []
                },
                {
                    Name: "weblinks",
                    Value: "ਵੈੱਬ ਲਿੰਕ",
                    items: []
                },
                {
                    Name: "details",
                    Value: "ਤੁਹਾਡੇ ਵੇਰਵੇ",
                    items: []
                },
                {
                    Name: "delete",
                    Value: "ਮੇਰੇ ਵੇਰਵੇ ਮਿਟਾਓ",
                    items: []
                },
                {
                    Name: "notifications",
                    Value: "ਤੁਹਾਡੀਆਂ ਸੂਚਨਾਵਾਂ",
                    items: []
                },
                {
                    Name: "groupnotifications",
                    Value: "ਤੁਹਾਡੀਆਂ ਸਮੂਹ ਸੂਚਨਾਵਾਂ",
                    items: []
                },
                {
                    Name: "loginhistory",
                    Value: "ਲੌਗਇਨ ਇਤਿਹਾਸ",
                    items: []
                }
            ]
        },
        {
            Name: "about",
            Value: "ਬਾਰੇ",
            items: [
                {
                    Name: "privacypolicy",
                    Value: "ਪਰਾਈਵੇਟ ਨੀਤੀ",
                    items: []
                },
                {
                    Name: "termsandconditions",
                    Value: "ਨਿਬੰਧਨ ਅਤੇ ਸ਼ਰਤਾਂ",
                    items: []
                },
            ]
        },
        {
            Name: "logout",
            Value: "وتل",
            items: []
        },
    ],
    Components: {
        LoginComponent: {
            Title: "ਲਾਗਿਨ",
            Username: "ਈਮੇਲ ਪਤਾ",
            UsernameInfo: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਪ੍ਰਦਾਨ ਕਰੋ।",
            Password: "ਪਾਸਵਰਡ",
            PasswordInfo: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਸਵਰਡ ਪ੍ਰਦਾਨ ਕਰੋ।",
            Submit: "ਲਾਗਿਨ",
            Errors: {
                ValidationErrors: {},
                ServerErrors: {
                    LoginFailed: `ਇੱਕ ਅੰਦਰੂਨੀ ਸਰਵਰ ਗਲਤੀ ਦੇ ਕਾਰਨ ਲੌਗਇਨ ਅਸਫਲ ਰਿਹਾ`,
                    IncorrectUsernameOrPassword: `ਯੂਜ਼ਰਨਾਮ/ਪਾਸਵਰਡ ਬੇਮੇਲ ਹੋਣ ਕਾਰਨ ਲੌਗਇਨ ਅਸਫਲ ਰਿਹਾ`
                }
            },
        },
        RegisterComponent: {
            Title: "ਰਜਿਸਟਰ",
            Username: "ਈਮੇਲ ਪਤਾ",
            UsernameInfo: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਪ੍ਰਦਾਨ ਕਰੋ।",
            Password: "ਪਾਸਵਰਡ",
            PasswordInfo: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਸਵਰਡ ਪ੍ਰਦਾਨ ਕਰੋ।",
            ConfirmPassword: "ਪਾਸਵਰਡ ਪੱਕਾ ਕਰੋ",
            ConfirmPasswordInfo: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।",
            IAcceptTermsAndConditions: "ਮੈਂ ਪਰਾਈਵੇਟ ਨੀਤੀ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹਾਂ",
            IAcceptTermsAndConditionsInfo: "ਮੈਂ ਪਰਾਈਵੇਟ ਨੀਤੀ ਨੂੰ ਪੜ੍ਹਿਆ ਅਤੇ ਸਮਝ ਲਿਆ ਹੈ। ਮੈਂ ਇਹਨਾਂ ਪਰਾਈਵੇਟ ਨੀਤੀ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹਾਂ",
            IAcceptPrivacyPolicy: "ਮੈਂ ਨਿਬੰਧਨ ਅਤੇ ਸ਼ਰਤਾਂ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹਾਂ",
            IAcceptPrivacyPolicyInfo: "ਇਹ ਨੀਤੀ ਦੱਸਦੀ ਹੈ ਕਿ ਅਸੀਂ ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਕਿਵੇਂ ਅਤੇ ਕਿੱਥੇ ਵਰਤਦੇ ਹਾਂ ਅਤੇ ਸਟੋਰ ਕਰਦੇ ਹਾਂ। ਮੈਂ ਨਿਬੰਧਨ ਅਤੇ ਸ਼ਰਤਾਂ ਨੂੰ ਪੜ੍ਹਿਆ ਅਤੇ ਸਮਝ ਲਿਆ ਹੈ। ਮੈਂ ਇਹਨਾਂ ਨਿਬੰਧਨ ਅਤੇ ਸ਼ਰਤਾਂ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹਾਂ",
            PasswordStrength: "ਪਾਸਵਰਡ ਦੀ ਤਾਕਤ",
            PasswordStrengthInfo: "ਮੈਂ ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਨੂੰ ਪੜ੍ਹਿਆ ਅਤੇ ਸਮਝ ਲਿਆ ਹੈ ਅਤੇ ਇੱਕ ਕਮਜ਼ੋਰ ਪਾਸਵਰਡ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੇ ਪ੍ਰਭਾਵ ਨੂੰ ਸਮਝ ਲਿਆ ਹੈ। ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਵਰਤੋ। ਪਾਸਵਰਡ ਦੀ ਤਾਕਤ ਇੱਕ ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਸੰਰਚਨਾਯੋਗ ਹੈ",
            PasswordStrengthHighStrength: "ਉੱਚ-ਸ਼ਕਤੀ ਵਾਲਾ ਪਾਸਵਰਡ",
            PasswordStrengthMediumStrength: "ਮੱਧਮ-ਸ਼ਕਤੀ ਵਾਲਾ ਪਾਸਵਰਡ",
            PasswordStrengthLowStrength: "ਘੱਟ ਤਾਕਤ ਵਾਲਾ ਪਾਸਵਰਡ",
            PasswordStrengthNoStrength: "ਬਿਨਾਂ ਤਾਕਤ ਵਾਲਾ ਪਾਸਵਰਡ",
            Submit: "ਰਜਿਸਟਰ",
            Errors: {
                ValidationErrors: {
                    PasswordConfirmationMustMatch: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਤੁਹਾਡੇ ਪਾਸਵਰਡ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ",
                    MustAcceptTermsAndConditions: "ਤੁਹਾਨੂੰ ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ",
                    MustAcceptPrivacyPolicy: "ਤੁਹਾਨੂੰ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ",
                },
                ServerErrors: {
                    RegistrationFailed: `ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਸਫਲ ਹੋਈ ਕਿਉਂਕਿ ਉਪਭੋਗਤਾ ਨਾਮ ਪਹਿਲਾਂ ਹੀ ਵਰਤੋਂ ਵਿੱਚ ਹੈ`
                }
            },
        },
    },
    Pages: {
        Index: {
            PageTitle: "ਘਰ",
            MainHeading: "ਘਰ",
            Create: "ਬਣਾਓ",
            CreateInfo1: "ਜਦੋਂ ਕੋਈ ਸੇਵਾ ਜਾਂ ਉਤਪਾਦ ਸ਼ੁਰੂ ਕਰਦੇ ਹੋ, ਤਾ ਦੇਰੀਆਂ ਜਾਂ ਨਾ ਪੂਰੀ ਹੋਈਆਂ ਉਮੀਦਾਂ ਤੋਂ ਬਚਣਾ ਤੁਹਾਡੀ ਸਫਲਤਾ ਅਤੇ ਲਾਗਤ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਲਈ ਮਹੱਤਵਪੂਰਨ ਹੋ ਸਕਦਾ ਹੈ। ਸਾਡਾ ਪਸੰਦੀਦਾ ਪਹੁੰਚ ਇਹ ਹੈ ਕਿ ਇੱਕ ਬਹੁਤ ਹੀ ਕਨਫਿਗਰੇਸ਼ਨਲ, ਫੀਚਰ-ਰਿਚ ਰੈਪੀਡ ਐਪਲੀਕੇਸ਼ਨ ਡੈਵਲਪਮੈਂਟ (RAD) ਫਰੇਮਵਰਕ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ ਤੁਹਾਡੀਆਂ ਲੋੜਾਂ ਨੂੰ ਇਕ ਸਲੂਸ਼ਨ ਵਿੱਚ ਬਦਲਨਾ ਅਤੇ ਇੱਕੀਕਰਨ ਕਰਨਾ ਹੈ, ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹੋ:",
            CreateInfo2: "ਇੱਕ ਪ੍ਰਤਿਕ੍ਰਿਆਸ਼ੀਲ HTML5 ਵੈਬਸਾਈਟ ਜੋ ਵੈਬ ਐਕਸੇਸਬਿਲਟੀ ਮਿਆਰੀਆਂ ਦੇ ਅਨੁਸਾਰ ਹੈ, ਪੂਰੇ ਇੰਤਜ਼ਾਮੀ ਮਾਡਿਊਲਾਂ ਦੇ ਨਾਲ, ਆਸਾਨ ਪ੍ਰਬੰਧਨ ਅਤੇ ਵਿਆਪਕ ਪਹੁੰਚ ਦੀ ਗਾਰੰਟੀ ਦਿੰਦੀ ਹੈ",
            CreateInfo3: "ਐਂਡਰੌਇਡ ਅਤੇ ਆਈਓਐਸ ਲਈ ਮੂਲ ਐਪਲੀਕੇਸ਼ਨਾਂ, ਤੁਹਾਡੀਆਂ ਸੇਵਾਵਾਂ ਨੂੰ ਸਿੱਧੇ ਤੁਹਾਡੇ ਉਪਭੋਗਤਾਵਾਂ ਦੇ ਹੱਥਾਂ ਵਿੱਚ ਰੱਖ ਰਹੇ ਹਨ",
            CreateInfo4: "ਜਿਆਦਾਤਰ ਮਸ਼ਹੂਰ ਰਿਲੇਸ਼ਨਲ ਅਤੇ NoSQL ਡਾਟਾਬੇਸਾਂ ਨਾਲ ਸੁਗਮ ਸੰਪਰਕ, ਚਾਹੇ ਉਹ ਤੁਹਾਡੇ ਦੁਆਰਾ ਪ੍ਰਬੰਧਿਤ ਹੁੰਦੀਆਂ, ਤੁਹਾਡੇ ਲਈ ਪ੍ਰਬੰਧਿਤ ਹੁੰਦੀਆਂ, ਜਾਂ ਤੁਹਾਡੇ ਨਾਲ ਸਹਿਯੋਗ ਵਿੱਚ ਹੁੰਦੀਆਂ। ਇਸ ਤੋਂ ਇਲਾਵਾ, REST ਜਾਂ SOAP API, Elasticsearch ਅਤੇ Google Cloud Datastore ਦੀ ਸਹਾਇਤਾ ਸੰਪੂਰਨ ਡਾਟਾ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ",
            CreateInfo5: "Microsoft Windows, SAML2, OpenId, ਯੂਜ਼ਰਨਾਮ / ਪਾਸਵਰਡ, ਅਤੇ OAuth ਸਮੇਤ ਮਜ਼ਬੂਤ ਤਸਦੀਕੀ ਵਿਕਲਪ, ਸਾਰੇ ਇਕਲ ਸਾਈਨ ਆਨ ਅਤੇ ਉਪਭੋਗਤਾਵਾਂ ਅਤੇ ਸਮੂਹਾਂ ਲਈ ਵਿਸਤ੍ਰਿਤ ਰੋਲ ਅਧਾਰਿਤ ਅਧਿਕਾਰ ਦੇ ਨਾਲ, ਸੁਰੱਖਿਅਤ ਪਹੁੰਚ ਦੀ ਗਾਰੰਟੀ ਦਿੰਦੇ ਹਨ",
            CreateInfo6: "ਆਧੁਨਿਕ ਲੌਗਿੰਗ, ਨਿਰੰਤਰ ਤੈਅਨਾਤੀ, ਅਤੇ ਨਿਰੰਤਰ ਨਿਗਰਾਨੀ ਦੀ ਸਮਰੱਥਾ, ਸਭ ਤੋਂ ਵੱਧ ਲੋੜ ਮੌਕੇ ਤੁਰੰਤ ਤੋਲ ਨਾਲ, ਭਰੋਸੇਯੋਗਤਾ ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ",
            CreateInfo7: "ਲੋਕਲਾਈਜ਼ਡ ਅਤੇ ਬ੍ਰਾਂਡ ਕੀਤੀਆਂ ਕਮੇਨਿਕੇਸ਼ਨਾਂ ਈਮੇਲ, SMS, ਟੈਕਸਟ, WhatsApp, Skype ਅਤੇ ਹੋਰ ਦੁਆਰਾ, ਵਿਸਤ੍ਰਿਤ ਟ੍ਰੇਨਿੰਗ ਸਮੱਗਰੀ ਦੇ ਨਾਲ, ਜੋ ਤੁਹਾਡੀ ਟੀਮ ਨੂੰ ਤਾਜ਼ਾ ਰੱਖਣ ਲਈ ਹਨ",
            CreateInfo8: "ਸੇਵਾਵਾਂ ਅਤੇ ਡਾਟਾ ਦੀ ਸੁਰੱਖਿਆ ਕਰਨ ਲਈ DOS (ਡੇਨਾਇਲ ਆਫ਼ ਸੇਵਾ) ਅਤੇ ਹੋਰ ਬੁਰੇ ਹਮਲਿਆਂ ਤੋਂ ਮਜ਼ਬੂਤ ਸੁਰੱਖਿਆ",
            CreateInfo9: "ਕੌਮੀ ਡਾਟਾ ਪਰਾਈਵੇਸੀ ਕਾਨੂੰਨਾਂ ਦੀ ਪੂਰੀ ਪਾਲਣਾ, ਡਾਟਾ ਸੁਰੱਖਿਆ ਅਤੇ ਕਾਨੂੰਨੀ ਆਦਰਸ਼ਾਂ ਦੇ ਬਾਰੇ ਵਿਚ ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ",
            CreateInfo10: "SCRUM/AGILE/Waterfall ਤਰੀਕੇ ਦੇ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ ਇੱਕ ਵਿਸਤ੍ਰਿਤ ਔਨਲਾਈਨ ਪ੍ਰੋਜੈਕਟ ਯੋਜਨਾ, ਲੋੜਾਂ, ਡਿਲੀਵਰੇਬਲਜ਼, ਅਤੇ ਮਾਈਲਸਟੋਨਜ਼ ਨੂੰ ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ ਬਿਆਨ ਕਰਦੀ ਹੈ ਤਾਂ ਕਿ ਤੁਹਾਡਾ ਪ੍ਰੋਜੈਕਟ ਟਰੈਕ ਤੇ ਰਹੇ",
            Innovate: "ਇਨੋਵੇਟ",
            InnovateInfo: "ਸਾਡੇ ਹੱਲ ਫਰੇਮਵਰਕ, ਵਿਧੀਆਂ, ਅਤੇ ਕਾਰਜਬਲ ਦਾ ਵਿਲੱਖਣ ਸੁਮੇਲ ਸਾਡੇ ਗਾਹਕਾਂ ਦੇ ਗਲੋਬਲ ਆਈ.ਟੀ. ਸਮਾਧਾਨ ਅਤੇ ਸਪੁਰਦਗੀ ਨੂੰ ਲਾਗਤ ਘਟਾਉਣ ਅਤੇ ਉੱਚ-ਗੁਣਵੱਤਾ ਆਉਟਪੁੱਟ ਦੇ ਸਿਖਰ 'ਤੇ ਲੈ ਜਾਂਦਾ ਹੈ। ਇਹ ਸਾਡੇ ਨਿਰੰਤਰ ਵਿਕਾਸਸ਼ੀਲ ਨਵੀਨਤਾ ਅਭਿਆਸਾਂ ਦੁਆਰਾ ਸਮਰਥਤ ਹੈ ਜੋ ਸਾਨੂੰ ਪਛਾਣ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦੇ ਹਨ। ਗੁਣਵੱਤਾ, ਲਾਗਤ, ਪ੍ਰਦਰਸ਼ਨ, ਅਤੇ ਮਾਰਕੀਟ ਲਈ ਇੱਕ ਤੇਜ਼ ਸ਼ੁਰੂਆਤ ਵਿੱਚ ਕਮੀਆਂ ਅਤੇ ਮੌਕੇ।",
            Simplify: "ਸਰਲ ਬਣਾਓ",
            SimplifyInfo: "ਪ੍ਰਮਾਣਿਕਤਾ ਮੌਜੂਦਾ ਆਨ-ਪ੍ਰੀਮਾਈਸ ਮਾਈਕਰੋਸਾਫਟ ਐਕਟਿਵ ਡਾਇਰੈਕਟਰੀ (AD) ਜਾਂ ਕਲਾਉਡ-ਅਧਾਰਿਤ Microsoft Azure ਐਕਟਿਵ ਡਾਇਰੈਕਟਰੀ (AAD) 'ਤੇ ਸਹਿਜ ਹੈ। ਸਿੰਗਲ ਸਾਈਨ-ਆਨ ਤੁਹਾਡੇ ਮੌਜੂਦਾ ਸਿਸਟਮਾਂ ਨਾਲ ਵੀ ਸਹਿਜ ਹੈ ਜੋ OpenID ਜਾਂ SAML2 ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।",
            Unify: "ਏਕੀਕਰਨ",
            UnifyInfo1: "ਸਾਡਾ ਸੁਰੱਖਿਅਤ",
            UnifyInfo2: "JSON, XML, ਜਾਂ HTML ਇਨਪੁਟ ਦੋਵਾਂ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ; ਅਤੇ ਜਾਂ ਤਾਂ JSON, XML, HTML, PDFs, Microsoft Excel ਸਪਰੈੱਡਸ਼ੀਟਾਂ (ਗਣਨਾਵਾਂ ਦੇ ਨਾਲ), ਜਾਂ Google ਸਪ੍ਰੈਡਸ਼ੀਟਾਂ ਤਿਆਰ ਕਰਦਾ ਹੈ। ਸਾਡਾ ਹੱਲ ਭਵਿੱਖ-ਸਬੂਤ ਹੈ ਜਦੋਂ ਵਿਕਾਸ ਜਾਂ ਕਾਰਜਸ਼ੀਲ ਤਬਦੀਲੀਆਂ ਕਾਰਨ ਹੋਰ ਪ੍ਰਣਾਲੀਆਂ ਲਈ ਹੋਰ ਏਕੀਕਰਣ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। SQL ਸਰਵਰ ਏਕੀਕਰਣ ਸੇਵਾਵਾਂ, ਅਜ਼ੁਰ ਡੇਟਾ ਫੈਕਟਰੀ, ਓਰੇਕਲ ਡੇਟਾ ਇੰਟੀਗਰੇਟਰ, ਹੈਡੂਪ, AWS ਗਲੂ, ਅਤੇ ਗੂਗਲ ਕਲਾਉਡ ਡੇਟਾਫਲੋ ਵਰਗੇ ਟੂਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ, ਡੇਟਾ ਐਕਸਟਰੈਕਸ਼ਨ, ਟ੍ਰਾਂਸਫਾਰਮੇਸ਼ਨ, ਅਤੇ ਲੋਡਿੰਗ (ETL) ਦੇ ਦੌਰਾਨ ਸਾਡੇ API ਤੋਂ ਪੁੱਛਗਿੱਛ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ ਜਾਂ ਲਿਖਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਇਹੀ ਰਿਪੋਰਟਾਂ ਬਣਾਉਣ 'ਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ।",
            Log1: "ਅਤੇ ਇਸਨੂੰ ਤੁਰੰਤ ਜਾਂ ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ ਅਜ਼ਮਾਓ",
            Log2: "ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ ਜਾਂ ਤਾਂ ਈਮੇਲ ਪਤੇ ਅਤੇ ਪਾਸਵਰਡ ਨਾਲ",
            Log3: "ਗੂਗਲ ਜਾਂ ਫੇਸਬੁੱਕ ਨਾਲ ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ ਦਾ ਖਾਤਾ ਹੈ",
        },
        Authentication: {
            IndexPageTitle: "ਸੁਰੱਖਿਆ",
            IndexPageMainHeading: "ਸੁਰੱਖਿਆ ਘਰ",
            SecurityInfo1: "ਮੌਜੂਦਾ ਆਨ-ਪ੍ਰੀਮਾਈਸ ਮਾਈਕ੍ਰੋਸਾਫਟ ਐਕਟਿਵ ਡਾਇਰੈਕਟਰੀ (AD) ਜਾਂ ਇੱਕ ਕਲਾਉਡ-ਅਧਾਰਿਤ Microsoft Azure ਐਕਟਿਵ ਡਾਇਰੈਕਟਰੀ (AAD) 'ਤੇ ਪ੍ਰਮਾਣਿਕਤਾ ਸਹਿਜ ਹੈ। ਸਿੰਗਲ ਸਾਈਨ-ਆਨ ਤੁਹਾਡੇ ਮੌਜੂਦਾ ਸਿਸਟਮਾਂ ਨਾਲ ਵੀ ਸਹਿਜ ਹੈ ਜੋ OpenID ਜਾਂ SAML2 ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।",
            SecurityInfo2: "ਇਸ ਤੋਂ ਇਲਾਵਾ, Apple, Meta(Facebook), Alphabet(Google), X(Twitter), LinkedIn, YouTube, ਅਤੇ OAuth ਦਾ ਸਮਰਥਨ ਕਰਨ ਵਾਲੇ 60 ਤੋਂ ਵੱਧ ਸੋਸ਼ਲ ਮੀਡੀਆ ਪਲੇਟਫਾਰਮਾਂ ਰਾਹੀਂ ਪ੍ਰਮਾਣਿਕਤਾ ਵੀ ਸੰਭਵ ਹੈ।",
            SecurityInfo3: "ਪ੍ਰਮਾਣਿਕਤਾ ਦਾਣੇਦਾਰ ਹੈ, ਤੁਹਾਨੂੰ ਇਸ ਗੱਲ 'ਤੇ ਪੂਰਾ ਨਿਯੰਤਰਣ ਦਿੰਦਾ ਹੈ ਕਿ ਕੋਈ ਉਪਭੋਗਤਾ ਜਾਂ ਸਮੂਹ ਕੀ ਪ੍ਰਬੰਧ ਕਰ ਸਕਦਾ ਹੈ, ਬਣਾ ਸਕਦਾ ਹੈ, ਦੇਖ ਸਕਦਾ ਹੈ, ਸੰਸ਼ੋਧਿਤ ਕਰ ਸਕਦਾ ਹੈ ਜਾਂ ਮਿਟਾ ਸਕਦਾ ਹੈ। ਅਸੀਂ ਸਵੈਚਲਿਤ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ ਤੁਹਾਡੇ ਸੰਗਠਨਾਤਮਕ ਢਾਂਚੇ ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਦੇ ਹਾਂ। ਇਸ ਦੇ ਕਦਮ, ਇਨਪੁਟਸ, ਭਾਗੀਦਾਰ ਅਤੇ ਅੰਤਮ-ਉਤਪਾਦ ਪ੍ਰਦਾਨ ਕੀਤੇ ਗਏ ਔਨਲਾਈਨ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ ਪ੍ਰਕਿਰਿਆ ਦਾ ਵੇਰਵਾ ਦਿੱਤਾ ਗਿਆ ਹੈ। ਸਮੂਹਾਂ ਅਤੇ ਭੂਮਿਕਾਵਾਂ ਦਾ ਇੱਕ ਔਨਲਾਈਨ ਸੰਗਠਨਾਤਮਕ ਢਾਂਚਾ ਵੀ ਉਪਲਬਧ ਹੈ।",
            Login: {
                PageTitle: "ਲਾਗਿਨ",
                MainHeading: "ਕਿਰਪਾ ਕਰਕੇ ਲੌਗ ਇਨ ਕਰਨ ਲਈ ਪੂਰਾ ਕਰੋ"
            },
            ExternalLogin: {
                PageTitle: "ਕਿਸੇ ਹੋਰ ਤਰੀਕੇ ਨਾਲ ਲੌਗਇਨ ਕਰੋ",
                MainHeading: "ਆਪਣੇ ਸੋਸ਼ਲ ਮੀਡੀਆ ਖਾਤੇ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਲੌਗ ਇਨ ਕਰੋ"
            },
            Register: {
                PageTitle: "ਰਜਿਸਟਰ",
                MainHeading: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਈਮੇਲ ਪਤੇ ਅਤੇ ਪਾਸਵਰਡ ਨਾਲ ਰਜਿਸਟਰ ਕਰੋ"
            },
            ForgotPassword: {
                PageTitle: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ",
                MainHeading: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਸਵਰਡ ਰੀਸੈਟ ਕਰਨ ਲਈ ਪੂਰਾ ਕਰੋ",
                Username: "ਈਮੇਲ ਪਤਾ",
                UsernameInfo: "ਕਿਰਪਾ ਕਰਕੇ ਉਹ ਈਮੇਲ ਪਤਾ ਪ੍ਰਦਾਨ ਕਰੋ ਜੋ ਤੁਸੀਂ ਲੌਗਇਨ ਕਰਨ ਵੇਲੇ ਆਪਣੇ ਪਾਸਵਰਡ ਦੇ ਨਾਲ ਵਰਤਦੇ ਹੋ",
                ForgotPasswordPasswordEmailSent: "ਦਿੱਤੇ ਗਏ ਈਮੇਲ ਪਤੇ 'ਤੇ ਇੱਕ ਈਮੇਲ ਭੇਜੀ ਜਾਵੇਗੀ ਜੇਕਰ ਇਹ ਵੈਧ ਹੈ। ਆਪਣਾ ਪਾਸਵਰਡ ਬਦਲਣ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਈਮੇਲ ਵਿੱਚ ਦਿੱਤੀਆਂ ਹਿਦਾਇਤਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ"
            },
            ResetPassword: {
                PageTitle: "ਪਾਸਵਰਡ ਰੀਸੈਟ ਕਰੋ",
                MainHeading: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਵਾਂ ਪਾਸਵਰਡ ਰੀਸੈਟ ਕਰਨ ਲਈ ਪੂਰਾ ਕਰੋ"
            },
            TwoFactorAuthentication: {
                PageTitle: "ਦੋ ਕਾਰਕ ਪ੍ਰਮਾਣਿਕਤਾ",
                MainHeading: "ਦੋ ਫੈਕਟਰ ਪ੍ਰਮਾਣਿਕਤਾ ਸੈਟਿੰਗ"
            },
            DataEncryption: {
                PageTitle: "ਡਾਟਾ ਐਨਕ੍ਰਿਪਸ਼ਨ",
                MainHeading: "ਡਾਟਾ ਐਨਕ੍ਰਿਪਸ਼ਨ",
                Warning: "ਆਪਣੇ ਪਾਸਵਰਡ ਨਾਲ ਆਪਣੇ ਡੇਟਾ ਨੂੰ ਐਨਕ੍ਰਿਪਟ ਕਰੋ। ਕਿਉਂਕਿ ਤੁਹਾਡਾ ਪਾਸਵਰਡ ਵੀ ਏਨਕ੍ਰਿਪਟ ਕੀਤਾ ਗਿਆ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਤੁਹਾਨੂੰ ਹੀ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ, ਜੇਕਰ ਤੁਸੀਂ ਆਪਣਾ ਪਾਸਵਰਡ ਭੁੱਲ ਜਾਂਦੇ ਹੋ ਤਾਂ ਤੁਹਾਡਾ ਡੇਟਾ ਮੁੜ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ। ਇਹ ਅੰਡਰਲਾਈੰਗ ਡੇਟਾ ਸਟੋਰ ਦੁਆਰਾ ਪੇਸ਼ ਕੀਤੀਆਂ ਮਿਆਰੀ ਐਨਕ੍ਰਿਪਸ਼ਨ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦੇ ਸਿਖਰ 'ਤੇ ਇੱਕ ਸੰਰਚਨਾਯੋਗ ਵਿਸ਼ੇਸ਼ਤਾ ਹੈ।"
            }
        },
        About: {
            IndexPageTitle: "ਬਾਰੇ",
            IndexPageMainHeading: "ਬਾਰੇ",
            TermsAndConditions: {
                PageTitle: "ਸ਼ਰਤਾਂ",
                MainHeading: "ਨਿਬੰਧਨ ਅਤੇ ਸ਼ਰਤਾਂ",
                sections: {
                    Temp: "ਇੱਥੇ ਕੋਈ ਸ਼ਰਤਾਂ ਨਹੀਂ ਹਨ ਅਤੇ ਕੋਈ ਸ਼ਰਤਾਂ ਨਹੀਂ ਹਨ"
                }
            },
            PrivacyPolicy: {
                PageTitle: "ਗੋਪਨੀਯਤਾ",
                MainHeading: "ਪਰਾਈਵੇਟ ਨੀਤੀ",
                sections: {
                    DefinitionsAndInterpretation: {
                        SectionTitle: "ਪਰਿਭਾਸ਼ਾਵਾਂ ਅਤੇ ਵਿਆਖਿਆ",
                    },
                    ScopeOfThisPrivacyPolicy: {
                        SectionTitle: "ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦਾ ਘੇਰਾ",
                    },
                    DataCollected: {
                        SectionTitle: "ਡਾਟਾ ਇਕੱਠਾ ਕੀਤਾ",
                    },
                    HowWeCollectData: {
                        SectionTitle: "ਅਸੀਂ ਡੇਟਾ ਕਿਵੇਂ ਇਕੱਤਰ ਕਰਦੇ ਹਾਂ",
                    },
                    DataThatisGivenToUsbyYou: {
                        SectionTitle: "ਡੇਟਾ ਜੋ ਤੁਹਾਡੇ ਦੁਆਰਾ ਸਾਨੂੰ ਦਿੱਤਾ ਗਿਆ ਹੈ",
                    },
                    DataThatIsReceivedFromThirdParties: {
                        SectionTitle: "ਡੇਟਾ ਜੋ ਤੀਜੀਆਂ ਧਿਰਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ",
                    },
                    DataThatisReceivedFromPubliclyAvailableThirdPartiesSources: {
                        SectionTitle: "ਡੇਟਾ ਜੋ ਜਨਤਕ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਤੀਜੀ ਧਿਰਾਂ ਦੇ ਸਰੋਤਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ",
                    },
                    DataThatIsCollectedAutomatically: {
                        SectionTitle: "ਡੇਟਾ ਜੋ ਆਟੋਮੈਟਿਕਲੀ ਇਕੱਠਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
                    },
                    OurUseOfData: {
                        SectionTitle: "ਸਾਡੇ ਡੇਟਾ ਦੀ ਵਰਤੋਂ",
                    },
                    KeepingDataSecure: {
                        SectionTitle: "ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਰੱਖਣਾ",
                    },
                    DataRetention: {
                        SectionTitle: "ਡਾਟਾ ਧਾਰਨ",
                    },
                    YourRights: {
                        SectionTitle: "ਤੁਹਾਡੇ ਅਧਿਕਾਰ",
                    },
                    LinksToOtherWebsitesAndMobileApps: {
                        SectionTitle: "ਹੋਰ ਵੈੱਬਸਾਈਟਾਂ ਅਤੇ/ਜਾਂ ਮੋਬਾਈਲ ਐਪਾਂ ਦੇ ਲਿੰਕ",
                    },
                    ChangesOfBusinessOwnershipAndControl: {
                        SectionTitle: "ਕਾਰੋਬਾਰੀ ਮਾਲਕੀ ਅਤੇ ਨਿਯੰਤਰਣ ਵਿੱਚ ਤਬਦੀਲੀਆਂ",
                    },
                    Cookies: {
                        SectionTitle: "ਕੂਕੀਜ਼",
                    },
                    General: {
                        SectionTitle: "ਜਨਰਲ",
                    },
                    ChangesToThisPrivacyPolicy: {
                        SectionTitle: "ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵਿੱਚ ਬਦਲਾਅ",
                    },
                }
            },
        },
        User: {
            IndexPageTitle: "ਉਪਭੋਗਤਾ",
            IndexPageMainHeading: "ਯੂਜ਼ਰ ਹੋਮ",
            Name: {
                PageTitle: "ਨਾਮ",
                MainHeading: "ਤੁਹਾਡਾ ਨਾਮ",
                Title: "ਸਿਰਲੇਖ",
                TitleInfo: "ਤੁਹਾਡਾ ਸਿਰਲੇਖ",
                Displayname: "ਦਿਖਾਇਆ ਹੋਇਆ ਨਾਮ",
                DisplaynameInfo: "ਤੁਹਾਡਾ ਸਕ੍ਰੀਨ ਡਿਸਪਲੇ ਨਾਮ, ਜੇਕਰ ਕੋਈ ਹੈ",
                Firstname: "ਪਹਿਲਾ ਨਾਂ",
                FirstnameInfo: "ਤੁਹਾਡਾ ਦਿੱਤਾ ਪਹਿਲਾ ਨਾਮ",
                Middlename: "ਵਿਚਕਾਰਲਾ ਨਾਂ",
                MiddlenameInfo: "ਤੁਹਾਡਾ ਦਿੱਤਾ ਗਿਆ ਮੱਧ ਨਾਮ, ਜੇਕਰ ਕੋਈ ਹੈ",
                Lastname: "ਆਖਰੀ ਨਾਂਮ",
                LastnameInfo: "ਤੁਹਾਡਾ ਦਿੱਤਾ ਆਖਰੀ ਨਾਮ",
                Nickname: "ਉਪਨਾਮ",
                NicknameInfo: "ਤੁਹਾਡਾ ਉਪਨਾਮ, ਜੇਕਰ ਕੋਈ ਹੈ",
                UpdateYourDetails: "ਆਪਣੇ ਵੇਰਵਿਆਂ ਨੂੰ ਅੱਪਡੇਟ ਕਰੋ"

            },
            DisplaySettings: {
                PageTitle: "ਡਿਸਪਲੇ ਸੈਟਿੰਗਜ਼",
                MainHeading: "ਤੁਹਾਡੀਆਂ ਡਿਸਪਲੇ ਸੈਟਿੰਗਾਂ",
                LowspeedConnection: "ਘੱਟ ਗਤੀ ਕੁਨੈਕਸ਼ਨ",
                LowspeedConnectionInfo: "ਸੰਕੇਤ ਕਰੋ ਕਿ ਕੀ ਤੁਸੀਂ ਘੱਟ-ਸਪੀਡ ਕਨੈਕਸ਼ਨਾਂ ਲਈ ਅਨੁਕੂਲ ਸੈਟਿੰਗਾਂ ਨੂੰ ਤਰਜੀਹ ਦਿੰਦੇ ਹੋ",
                DisableAnimations: "ਪਿਛੋਕੜ ਵੀਡੀਓ ਦਿਖਾਓ",
                DisableAnimationsInfo: "ਐਨੀਮੇਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਜਾਂ ਅਸਮਰੱਥ ਬਣਾਓ",
                ShowBackgroundVideo: "ਪਿਛੋਕੜ ਵੀਡੀਓ ਦਿਖਾਓ",
                ShowBackgroundVideoInfo: "ਬੈਕਗ੍ਰਾਊਂਡ ਵੀਡੀਓਜ਼ ਦੇ ਡਿਸਪਲੇ ਨੂੰ ਸਮਰੱਥ ਜਾਂ ਅਸਮਰੱਥ ਕਰੋ",
                Language: "ਭਾਸ਼ਾ",
                LanguageInfo: "ਆਪਣੀ ਡਿਸਪਲੇ ਅਤੇ ਪੱਤਰ-ਵਿਹਾਰ ਜਿਵੇਂ ਕਿ ਈਮੇਲ, SMS, ਅਤੇ WhatsApp ਸੁਨੇਹੇ ਵਿੱਚ ਤਰਜੀਹੀ ਭਾਸ਼ਾ ਸੈੱਟ ਕਰੋ",
                Theme: "ਥੀਮ",
                ThemeInfo: "ਤਰਜੀਹੀ ਰੰਗ ਸਕੀਮ ਸੈੱਟ ਕਰੋ"

            },
            Phones: {
                PageTitle: "ਫ਼ੋਨ",
                MainHeading: "ਤੁਹਾਡੇ ਫ਼ੋਨ ਨੰਬਰ",
                PhoneNumber: "ਫੋਨ ਨੰਬਰ",
                AddAPhoneNumber: "ਇੱਕ ਫ਼ੋਨ ਨੰਬਰ ਸ਼ਾਮਲ ਕਰੋ"
            },
            EmailAddresses: {
                PageTitle: "ਈਮੇਲ ਪਤੇ",
                MainHeading: "ਤੁਹਾਡੇ ਈਮੇਲ ਪਤੇ",
                EmailAddress: "ਈਮੇਲ ਪਤਾ",
                AddAnEmailAddress: "ਇੱਕ ਈਮੇਲ ਪਤਾ ਸ਼ਾਮਲ ਕਰੋ"
            },
            CommunicationPreferences: {
                PageTitle: "ਸੰਚਾਰ ਤਰਜੀਹਾਂ",
                MainHeading: "ਤੁਹਾਡੀ ਸੰਚਾਰ ਤਰਜੀਹਾਂ",
                InApp: "InApp",
                InAppInfo: "ਇਸ ਐਪ ਨੂੰ ਸੂਚਨਾਵਾਂ ਅਤੇ ਹੋਰ ਸੁਨੇਹੇ ਭੇਜੇ ਜਾਂਦੇ ਹਨ",
                WhatsApp: "WhatsApp",
                WhatsAppInfo: "ਤੁਹਾਡੇ WhatsApp ਖਾਤੇ ਵਿੱਚ ਸੂਚਨਾਵਾਂ ਅਤੇ ਹੋਰ ਸੁਨੇਹੇ ਭੇਜੇ ਜਾਂਦੇ ਹਨ। ਇੱਕ ਮੋਬਾਈਲ ਫ਼ੋਨ ਨੰਬਰ ਦੀ ਲੋੜ ਹੈ",
                SMS: "SMS",
                SMSInfo: "ਤੁਹਾਡੇ ਮੋਬਾਈਲ ਫ਼ੋਨ 'ਤੇ ਸੂਚਨਾਵਾਂ ਅਤੇ ਹੋਰ ਸੁਨੇਹੇ ਭੇਜੇ ਜਾਂਦੇ ਹਨ। ਇੱਕ ਮੋਬਾਈਲ ਫ਼ੋਨ ਨੰਬਰ ਦੀ ਲੋੜ ਹੈ",
                Email: "ਈਮੇਲ",
                EmailInfo: "ਸੂਚਨਾਵਾਂ ਅਤੇ ਹੋਰ ਸੁਨੇਹੇ ਤੁਹਾਡੇ ਈਮੇਲ ਪਤੇ 'ਤੇ ਭੇਜੇ ਜਾਂਦੇ ਹਨ। ਇੱਕ ਈਮੇਲ ਪਤਾ ਲੋੜੀਂਦਾ ਹੈ",
                IMessage: "iMessage",
                IMessageInfo: "ਸੂਚਨਾਵਾਂ ਅਤੇ ਹੋਰ ਸੁਨੇਹੇ ਤੁਹਾਡੇ iMessage ਖਾਤੇ ਵਿੱਚ ਭੇਜੇ ਜਾਂਦੇ ਹਨ। ਇੱਕ Apple ਡਿਵਾਈਸ ਦੀ ਲੋੜ ਹੈ"
            },
            Logons: {
                PageTitle: "ਲੋਗਨ",
                MainHeading: "ਤੁਹਾਡੇ ਲੋਗਨ",
                Provider: "ਪ੍ਰਦਾਤਾ",
                ProviderUserName: "ਪ੍ਰਦਾਤਾ ਉਪਭੋਗਤਾ ਨਾਮ",
                ProviderUserId: "ਪ੍ਰਦਾਤਾ id",
            },
            Photos: {
                PageTitle: "ਫੋਟੋਆਂ",
                MainHeading: "ਤੁਹਾਡੀਆਂ ਫੋਟੋਆਂ",
            },
            Roles: {
                PageTitle: "ਭੂਮਿਕਾਵਾਂ",
                MainHeading: "ਤੁਹਾਡੀਆਂ ਭੂਮਿਕਾਵਾਂ",
                Role: "ਭੂਮਿਕਾ"
            },
            Groups: {
                PageTitle: "ਸਮੂਹ",
                MainHeading: "ਤੁਹਾਡੇ ਸਮੂਹ",
                Group: "ਸਮੂਹ"
            },
            GroupsAndRoles: {
                PageTitle: "ਸਮੂਹ ਅਤੇ ਭੂਮਿਕਾਵਾਂ",
                MainHeading: "ਤੁਹਾਡੇ ਸਮੂਹ ਅਤੇ ਭੂਮਿਕਾਵਾਂ",
                GroupAndRole: "ਸਮੂਹ ਅਤੇ ਭੂਮਿਕਾ"
            },
            WebLinks: {
                PageTitle: "ਵੈੱਬ ਲਿੰਕ",
                MainHeading: "ਤੁਹਾਡੇ ਵੈੱਬ ਲਿੰਕ",
            },
            YourDetails: {
                PageTitle: "ਵੇਰਵੇ",
                MainHeading: "ਤੁਹਾਡੇ ਵੇਰਵੇ",
            },
            DeleteMyDetails: {
                PageTitle: "ਮਿਟਾਓ",
                MainHeading: "ਮੇਰੇ ਵੇਰਵੇ ਮਿਟਾਓ",
            },
            Notifications: {
                PageTitle: "ਸੂਚਨਾਵਾਂ",
                MainHeading: "ਤੁਹਾਡੀਆਂ ਸੂਚਨਾਵਾਂ",
                CreatedOn: "'ਤੇ ਬਣਾਇਆ ਗਿਆ",
                Importance: "ਮਹੱਤਵ",
                Message: "ਸੁਨੇਹਾ",
                NotificationStatus: "ਸਥਿਤੀ",
            },
            GroupNotifications: {
                PageTitle: "ਸਮੂਹ ਸੂਚਨਾਵਾਂ",
                MainHeading: "ਤੁਹਾਡੀਆਂ ਸਮੂਹ ਸੂਚਨਾਵਾਂ",
                NoGroupNotifications: "ਤੁਹਾਡੇ ਕੋਲ ਇਸ ਵੇਲੇ ਕੋਈ ਸਮੂਹ ਸੂਚਨਾਵਾਂ ਨਹੀਂ ਹਨ",
            },
            LoginHistory: {
                PageTitle: "ਲੌਗਇਨ ਇਤਿਹਾਸ",
                MainHeading: "ਤੁਹਾਡਾ ਲੌਗਇਨ ਇਤਿਹਾਸ",
                Date: "ਤਾਰੀਖ਼",
                IPAddress: "IP ਪਤਾ",
                Device: "ਡਿਵਾਈਸ",
                Location: "ਟਿਕਾਣਾ"
            },
            ChangePassword: {
                PageTitle: "ਪਾਸਵਰਡ ਬਦਲੋ",
                MainHeading: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਸਵਰਡ ਬਦਲਣ ਲਈ ਪੂਰਾ ਕਰੋ",
                PasswordChanged: "ਤੁਹਾਡਾ ਪਾਸਵਰਡ ਬਦਲ ਦਿੱਤਾ ਗਿਆ ਹੈ"
            }
        }
    },
    Errors: {
        Common: {
            GenericError: "ਇੱਕ ਅਵੈਧ ਐਪਲੀਕੇਸ਼ਨ ਸਥਿਤੀ ਦਾ ਪਤਾ ਲਗਾਇਆ ਗਿਆ ਸੀ, ਆਖਰੀ ਕਾਰਵਾਈ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਅਧੂਰਾ ਛੱਡ ਦਿੱਤਾ ਗਿਆ ਸੀ",
            ExpiredSession: "ਤੁਹਾਡੇ ਸੈਸ਼ਨ ਦੀ ਮਿਆਦ ਪੁੱਗ ਗਈ ਹੈ",
            AccessDenied: "ਸਰੋਤ ({{0}}) ਤੱਕ ਪਹੁੰਚ ਤੋਂ ਇਨਕਾਰ ਕੀਤਾ ਗਿਆ ਹੈ"
        },
        ValidationErrors: {
            GenericSummary: "ਤੁਹਾਡੇ ਦੁਆਰਾ ਪ੍ਰਦਾਨ ਕੀਤੇ ਗਏ ਵੇਰਵੇ ਵਿੱਚੋਂ ਇੱਕ ਜਾਂ ਵੱਧ ਅਵੈਧ ਹਨ",
            IsRequired: "{{0}} ਦੀ ਲੋੜ ਹੈ",
            MustHaveMinLen: "ਇਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ {{0}} ਅੱਖਰ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ",
            MustHaveMaxLen: "ਇਸ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ {{0}} ਅੱਖਰ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ",
            MustHaveMin: "ਇਸਦਾ ਘੱਟੋ-ਘੱਟ ਮੁੱਲ {{0}} ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
            MustHaveMax: "ਇਸਦਾ ਅਧਿਕਤਮ ਮੁੱਲ {{0}} ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
            MustBeEmailAddress: "ਇਹ ਇੱਕ ਵੈਧ ਈਮੇਲ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
            MustContainLowerCase: "ਇਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਛੋਟਾ ਅੱਖਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
            MustContainUpperCase: "ਇਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਵੱਡੇ ਅੱਖਰ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
            MustContainSpecialCharacter: "ਇਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਵਿਸ਼ੇਸ਼ ਅੱਖਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਜੋ ਇਹਨਾਂ @#$%^&+*!= ਅੱਖਰਾਂ ਵਿੱਚੋਂ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
        }
    },
    Common: {
        And: "ਅਤੇ",
        Add: "ਸ਼ਾਮਲ ਕਰੋ",
        AreYouSure: "ਤੁਹਾਨੂੰ ਪੂਰਾ ਵਿਸ਼ਵਾਸ ਹੈ?",
        Api: "API",
        All: "ਸਭ ਕੁਝ",
        Cancel: "ਰੱਦ ਕਰੋ",
        ChangePassword: "ਪਾਸਵਰਡ ਬਦਲੋ",
        Change: "ਬਦਲੋ",
        Close: "ਬੰਦ ਕਰੋ",
        Name: "ਵੇਰਵੇ",
        Delete: "ਮਿਟਾਓ",
        ExportAsExcel: "ਐਕਸਲ ਦੇ ਤੌਰ ਤੇ ਨਿਰਯਾਤ ਕਰੋ",
        ExportAsPDF: "PDF ਦੇ ਰੂਪ ਵਿੱਚ ਨਿਰਯਾਤ ਕਰੋ",
        ForgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ",
        InfoTipHeader: "ਹੋਰ ਵੇਰਵਿਆਂ ਵਿੱਚ...",
        Login: "ਲਾਗਿਨ",
        LoginAgain: "ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਲਾਗਇਨ ਕਰੋ",
        LoginAnotherWay: "ਕਿਸੇ ਹੋਰ ਤਰੀਕੇ ਨਾਲ ਲੌਗ ਇਨ ਕਰੋ",
        Logout: "ਲਾੱਗ ਆਊਟ, ਬਾਹਰ ਆਉਣਾ",
        Loading: "ਲੋਡ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        Magic: "ਇਸ ਚਿੱਤਰ ਅਤੇ ਪੰਨੇ 'ਤੇ ਇੱਕ CSS ਸੱਜੇ-ਤੋਂ-ਖੱਬੇ ਅਤੇ ਖੱਬੇ-ਤੋਂ-ਸੱਜੇ ਜਾਦੂ ਨੂੰ ਦੇਖਣ ਲਈ ਉਰਦੂ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਬਦਲੋ। ਇਸ ਸਾਈਟ 'ਤੇ ਕਾਪੀ (ਸ਼ਬਦ) ਜਾਂ ਤਾਂ ਸੰਕੁਚਿਤ ਜਾਂ ਵਰਬੋਜ਼ ਸੰਸਕਰਣਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹੈ, ਸਾਰੇ ਡਿਵਾਈਸ ਕਿਸਮਾਂ ਦੇ ਅਨੁਕੂਲ ਹੋਣ ਲਈ, ਵਾਧੂ-ਚੌੜੇ ਕੰਪਿਊਟਰ ਮਾਨੀਟਰਾਂ ਤੋਂ ਲੈ ਕੇ, ਜੇਬ-ਆਕਾਰ ਦੇ LCD ਰਾਸਬੇਰੀ ਪਾਈ ਸਕ੍ਰੀਨਾਂ ਤੱਕ, ਇੱਕ ਰਸਮੀ, ਨਿਰਪੱਖ, ਜਾਂ ਤਾਂ ਚੁਣਨ ਦੇ ਵਿਕਲਪਾਂ ਦੇ ਨਾਲ। ਜਾਂ ਹਾਸੇ ਵਾਲੀ ਟੋਨ",
        Or: "ਜਾਂ",
        PendingNotification: "ਤੁਹਾਡੇ ਕੋਲ ਉੱਚ-ਮਹੱਤਵ ਵਾਲੀ ਜਾਂ ਮੱਧਮ-ਮਹੱਤਵ ਵਾਲੀ ਸੂਚਨਾ ਹੈ",
        PendingNotifications: "ਤੁਹਾਡੇ ਕੋਲ {{0}} ਉੱਚ-ਮਹੱਤਤਾ ਅਤੇ/ਜਾਂ ਮੱਧਮ-ਮਹੱਤਵ ਵਾਲੀਆਂ ਸੂਚਨਾਵਾਂ ਹਨ",
        PleaseConfirmDeletion: "ਕਿਰਪਾ ਕਰਕੇ ਮਿਟਾਉਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
        Provide: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪ੍ਰਦਾਨ ਕਰੋ",
        Register: "ਰਜਿਸਟਰ",
        Reset: "ਰੀਸੈਟ ਕਰੋ",
        Submit: "ਜਮ੍ਹਾਂ ਕਰੋ",
        ThereIsNoOneHere: "ਇੱਥੇ ਕੋਈ ਨਹੀਂ ਹੈ",
        Update: "ਅੱਪਡੇਟ ਕਰੋ",
        View: "ਦੇਖੋ",
        Yes: "ਹਾਂ",
        YourDetails: "ਤੁਹਾਡੇ ਵੇਰਵੇ"
    },
    Telerik: {
        grid: {
            groupPanelEmpty: "ਇੱਕ ਕਾਲਮ ਸਿਰਲੇਖ ਨੂੰ ਖਿੱਚੋ ਅਤੇ ਉਸ ਕਾਲਮ ਦੁਆਰਾ ਸਮੂਹ ਵਿੱਚ ਇੱਥੇ ਸੁੱਟੋ",
            pagerItemsPerPage: "ਪ੍ਰਤੀ ਪੰਨੇ ਆਈਟਮਾਂ",
            pagerInfo: "{2} ਆਈਟਮਾਂ ਵਿੱਚੋਂ {0} - {1}",
            pagerFirstPage: "ਪਹਿਲੇ ਪੰਨੇ 'ਤੇ ਜਾਓ",
            pagerPreviousPage: "ਪਿਛਲੇ ਪੰਨੇ 'ਤੇ ਜਾਓ",
            pagerNextPage: "ਅਗਲੇ ਪੰਨੇ 'ਤੇ ਜਾਓ",
            pagerLastPage: "ਆਖਰੀ ਪੰਨੇ 'ਤੇ ਜਾਓ",
            pagerPage: "ਪੰਨਾ",
            pagerOf: "ਦਾ",
            pagerTotalPages: "{0}",
            filterClearButton: "ਕਲੀਅਰ",
            filterEqOperator: "ਇਸ ਦੇ ਬਰਾਬਰ ਹੈ",
            filterNotEqOperator: "ਇਸ ਦੇ ਬਰਾਬਰ ਨਹੀਂ ਹੈ",
            filterIsNullOperator: "ਨਲ ਹੈ",
            filterIsNotNullOperator: "ਨਲ ਨਹੀਂ ਹੈ",
            filterIsEmptyOperator: "ਖਾਲੀ ਹੈ",
            filterIsNotEmptyOperator: "ਖਾਲੀ ਨਹੀਂ ਹੈ",
            filterStartsWithOperator: "ਇਸ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ",
            filterContainsOperator: "ਸ਼ਾਮਲ ਹੈ",
            filterNotContainsOperator: "ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ",
            filterEndsWithOperator: "ਇਸ ਨਾਲ ਖਤਮ ਹੁੰਦਾ ਹੈ",
            filterGteOperator: "ਇਸ ਤੋਂ ਵੱਡਾ ਜਾਂ ਬਰਾਬਰ ਹੈ",
            filterGtOperator: "ਇਸ ਤੋਂ ਵੱਡਾ ਹੈ",
            filterLteOperator: "ਇਸ ਤੋਂ ਘੱਟ ਜਾਂ ਬਰਾਬਰ ਹੈ",
            filterLtOperator: "ਇਸ ਤੋਂ ਘੱਟ ਹੈ",
            filterIsTrue: "ਸੱਚ ਹੈ",
            filterIsFalse: "ਗਲਤ ਹੈ",
            filterBooleanAll: "(ਸਾਰੇ)",
            filterAfterOrEqualOperator: "ਇਸ ਤੋਂ ਬਾਅਦ ਜਾਂ ਬਰਾਬਰ ਹੈ",
            filterAfterOperator: "ਇਸ ਤੋਂ ਬਾਅਦ ਹੈ",
            filterBeforeOperator: "ਪਹਿਲਾਂ ਹੈ",
            filterBeforeOrEqualOperator: "ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂ ਬਰਾਬਰ ਹੈ",
            noRecords: "ਕੋਈ ਰਿਕਾਰਡ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
            filterAriaLabel: "ਫਿਲਟਰ",
            filterCheckAll: "ਸਭ ਦੀ ਜਾਂਚ ਕਰੋ",
            filterChooseOperator: "ਆਪਰੇਟਰ ਚੁਣੋ",
            filterSelectedItems: "ਚੁਣੀਆਂ ਆਈਟਮਾਂ",
            filterSubmitButton: "ਫਿਲਟਰ",
            filterTitle: "ਫਿਲਟਰ",
            filterAndLogic: "ਅਤੇ",
            filterOrLogic: "ਜਾਂ",
            groupColumn: "ਗਰੁੱਪ ਕਾਲਮ",
            searchPlaceholder: "ਖੋਜ",
            sortAriaLabel: "ਛਾਂਟਣਯੋਗ",
            sortAscending: "ਵਧਦੇ ਕ੍ਰਮਬੱਧ ਕਰੋ",
            sortDescending: "ਉਤਰਦੇ ਕ੍ਰਮਬੱਧ ਕਰੋ",
            ungroupColumn: "ਅਨਗਰੁੱਪ ਕਾਲਮ"
        }
    }
}
