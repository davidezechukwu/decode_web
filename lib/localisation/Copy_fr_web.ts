import { Copy } from "./Copy"

export const copy: Copy = {
    Menus: [
        {
            Name: "home",
            Value: "Maison",
            items: []
        },
        {
            Name: "register",
            Value: "Registre",
            items: []
        },
        {
            Name: "login",
            Value: "Se connecter",
            items: []
        },
        {
            Name: "security",
            Value: "Sécurité",
            items: [
                {
                    Name: "login",
                    Value: "Maison",
                    items: []
                },
                {
                    Name: "register",
                    Value: "Registre",
                    items: []
                },
                {
                    Name: "forgotpassword",
                    Value: "Mot de passe oublié",
                    items: []
                },
                {
                    Name: "resetpassword",
                    Value: "Réinitialiser le mot de passe",
                    items: []
                },
                {
                    Name: "changepassword",
                    Value: "Changer le mot de passe",
                    items: []
                },
                {
                    Name: "twofactorauthentication",
                    Value: "L'authentification à deux facteurs",
                    items: []
                },
                {
                    Name: "dataencryption",
                    Value: "Cryptage des données",
                    items: []
                },
                {
                    Name: "logout",
                    Value: "Se déconnecter",
                    items: []
                },
                {
                    Name: "externallogin",
                    Value: "Connexion externe",
                    items: [
                        {
                            Name: "google",
                            Value: "Connectez-vous avec Google",
                            items: []
                        },
                        {
                            Name: "facebook",
                            Value: "Se connecter avec Facebook",
                            items: []
                        },
                        {
                            Name: "twitter",
                            Value: "Se connecter avec Twitter",
                            items: []
                        },
                        {
                            Name: "linkedin",
                            Value: "Se connecter avec Linkedin",
                            items: []
                        },
                        {
                            Name: "apple",
                            Value: "Se connecter avec Apple",
                            items: []
                        },
                    ]
                }
            ]
        },
        {
            Name: "user",
            Value: "Profil",
            items: [
                {
                    Name: "name",
                    Value: "Nom",
                    items: []
                },
                {
                    Name: "displaysettings",
                    Value: "Paramètres d'affichage",
                    items: []
                },
                {
                    Name: "logons",
                    Value: "Connexions",
                    items: []
                },
                {
                    Name: "emailaddresses",
                    Value: "Adresses e-mail",
                    items: []
                },
                {
                    Name: "communicationpreferences",
                    Value: "Préférences de communication",
                    items: []
                },
                {
                    Name: "phones",
                    Value: "Téléphone (s",
                    items: []
                },
                {
                    Name: "photos",
                    Value: "Photos",
                    items: []
                },
                {
                    Name: "roles",
                    Value: "Les rôles",
                    items: []
                },
                {
                    Name: "groups",
                    Value: "Groupes",
                    items: []
                },
                {
                    Name: "groupsandroles",
                    Value: "Groupes et rôles",
                    items: []
                },
                {
                    Name: "weblinks",
                    Value: "Liens web",
                    items: []
                },
                {
                    Name: "details",
                    Value: "Vos détails",
                    items: []
                },
                {
                    Name: "delete",
                    Value: "Supprimer mes coordonnées",
                    items: []
                },
                {
                    Name: "notifications",
                    Value: "Vos notifications",
                    items: []
                },
                {
                    Name: "groupnotifications",
                    Value: "Vos notifications de groupe",
                    items: []
                },
                {
                    Name: "loginhistory",
                    Value: "Historique de connexion",
                    items: []
                },
            ]
        },
        {
            Name: "about",
            Value: "À propos",
            items: [
                {
                    Name: "privacypolicy",
                    Value: "Politique de confidentialité",
                    items: []
                },
                {
                    Name: "termsandconditions",
                    Value: "Termes et conditions",
                    items: []
                },
            ]
        },
        {
            Name: "logout",
            Value: "Se déconnecter",
            items: []
        },
    ],
    Components: {
        LoginComponent: {
            Title: "Se connecter",
            Username: "Adresse e-mail",
            UsernameInfo: "Veuillez fournir votre adresse e-mail.",
            Password: "Mot de passe",
            PasswordInfo: "Veuillez fournir votre mot de passe.",
            Submit: "Connexion",
            Errors: {
                ValidationErrors: {},
                ServerErrors: {
                    LoginFailed: `La connexion a échoué en raison d'une erreur de serveur interne`,
                    IncorrectUsernameOrPassword: `La connexion a échoué en raison d'une incompatibilité de nom d'utilisateur et de mot de passe`
                }
            },
        },
        RegisterComponent: {
            Title: "Registre",
            Username: "Adresse e-mail",
            UsernameInfo: "Veuillez fournir votre adresse e-mail.",
            Password: "Mot de passe",
            PasswordInfo: "Veuillez fournir votre mot de passe.",
            ConfirmPassword: "Confirmez le mot de passe",
            ConfirmPasswordInfo: "Veuillez confirmer votre mot de passe.",
            IAcceptTermsAndConditions: "J’accepte les Termes et conditions",
            IAcceptTermsAndConditionsInfo: "J'ai lu et compris le Termes et conditions. J'accepte ces Termes et conditions",
            IAcceptPrivacyPolicy: "J’accepte les Politique de confidentialité",
            IAcceptPrivacyPolicyInfo: "Cette politique explique comment et où nous utilisons et stockons vos données. J'ai lu et compris le Politique de confidentialité. J'accepte ces Politique de confidentialité",
            PasswordStrength: "Fiabilité du mot de passe",
            PasswordStrengthInfo: "J'ai lu et compris les termes et conditions et j'ai compris les implications de l'utilisation d'un mot de passe faible. Utilisez à votre propre discrétion. La force du mot de passe est configurable à l'aide d'une variable d'environnement",
            PasswordStrengthHighStrength: "Mot de passe haute résistance",
            PasswordStrengthMediumStrength: "Mot de passe de force moyenne",
            PasswordStrengthLowStrength: "Mot de passe de faible résistance",
            PasswordStrengthNoStrength: "Mot de passe sans force",
            Submit: "Enregistrer",
            Errors: {
                ValidationErrors: {
                    PasswordConfirmationMustMatch: "La confirmation du mot de passe doit correspondre à votre mot de passe",
                    MustAcceptTermsAndConditions: "Vous devez accepter les Termes et Conditions",
                    MustAcceptPrivacyPolicy: "Vous devez accepter la politique de confidentialité",
                },
                ServerErrors: {
                    RegistrationFailed: "L'enregistrement a échoué car le nom d'utilisateur est déjà utilisé"
                }
            },
        },
    },
    Pages: {
        Index: {
            PageTitle: "Domicile",
            MainHeading: "Domicile",
            Create: "Créer",
            CreateInfo1: "Lors du lancement d'un service ou d'un produit, éviter les retards ou les attentes non satisfaites peut être la clé de votre réussite et de votre rentabilité. Notre approche privilégiée s'appuie sur un cadre de développement rapide d'applications (RAD) hautement configurable et riche en fonctionnalités pour transformer et unifier de manière transparente vos exigences en une solution sur mesure, vous garantissant:",
            CreateInfo2: "Un site Web HTML5 réactif qui adhère aux normes d'accessibilité Web, avec des modules d'administration intuitifs, garantissant une gestion facile et une large portée",
            CreateInfo3: "Des applications natives pour Android et iOS, mettant vos services directement entre les mains de vos utilisateurs",
            CreateInfo4: "Une connectivité transparente avec les bases de données relationnelles et NoSQL les plus populaires, qu'elles soient gérées par vous, pour vous ou en collaboration avec vous. De plus, la prise en charge des API REST ou SOAP, d'Elasticsearch et de Google Cloud Datastore garantit une intégration complète des données",
            CreateInfo5: "Des options d'authentification robustes, notamment Microsoft Windows, SAML2, OpenId, nom d'utilisateur/mot de passe et OAuth, le tout avec authentification unique et autorisation détaillée basée sur les rôles, garantissant un accès sécurisé",
            CreateInfo6: "Capacités avancées de journalisation, de déploiement continu et de surveillance continue, avec mise à l'échelle automatique pendant les heures de pointe, garantissant fiabilité et performances",
            CreateInfo7: "Communications localisées et personnalisées par e-mail, SMS, texte, WhatsApp, Skype, etc., ainsi que des supports de formation complets pour tenir votre équipe à jour",
            CreateInfo8: "Protection renforcée contre le déni de service (DOS) et autres attaques malveillantes, protégeant vos services et vos données",
            CreateInfo9: "Conformité totale aux lois nationales sur la confidentialité des données, offrant une tranquillité d'esprit concernant la sécurité des données et le respect de la législation",
            CreateInfo10: "Un plan de projet en ligne détaillé utilisant les méthodologies SCRUM/AGILE/Waterfall, décrivant clairement les exigences, les livrables et les jalons pour maintenir votre projet sur la bonne voie",
            Innovate: "Innover",
            InnovateInfo: "Notre combinaison unique de cadres de solutions, de méthodologies et de main-d'œuvre amène les solutions informatiques mondiales et la livraison de nos clients au sommet de la réduction des coûts et de la production de haute qualité. Ceci est soutenu par nos pratiques d'innovation en constante évolution qui nous permettent d'identifier les des lacunes et des opportunités en termes de qualité, de coût, de performances et un lancement rapide sur le marché.",
            Simplify: "Simplifier",
            SimplifyInfo: "Nous croyons en la simplicité et aux interfaces utilisateur intuitives tout en vous cachant les complexités. Internet a révolutionné la façon dont les entreprises interagissent avec leurs clients. Vos clients sont également désormais plus susceptibles de consulter votre contenu à l'aide d'une tablette ou d'un smartphone lorsqu'ils faites en utilisant un PC. L'utilisation de nos applications intuitives Web, Desktop, Andriod et IOS permet d'automatiser vos opérations, quelle que soit leur complexité.",
            Unify: "Unifier",
            UnifyInfo1: "Notre sécurité",
            UnifyInfo2: "accepte les entrées JSON, XML ou HTML; et génère des feuilles de calcul JSON, XML, HTML, PDF, Microsoft Excel (avec calculs) ou Google. Notre solution est évolutive lorsque des intégrations supplémentaires à d’autres systèmes sont nécessaires en raison de la croissance ou de changements opérationnels. Notre API peut être interrogée ou écrite lors de l'extraction, de la transformation et du chargement de données (ETL) à l'aide d'outils tels que SQL Server Integration Services, Azure Data Factory, Oracle Data Integrator, Hadoop, AWS Glue et Google Cloud Dataflow. Il en va de même pour la génération de rapports.",
            Log1: "et essayez-le immédiatement ou alternativement",
            Log2: "avec soit une adresse email et un mot de passe si vous avez déjà un compte soit",
            Log3: "avec Google ou Facebook si vous avez un compte chez l'un ou l'autre",
        },
        Authentication: {
            IndexPageTitle: "Sécurité",
            IndexPageMainHeading: "Accueil de sécurité",
            SecurityInfo1: "L'authentification est transparente sur Microsoft Active Directory (AD) sur site existant ou sur un Microsoft Azure Active Directory (AAD) basé sur le cloud. L'authentification unique est également transparente avec vos systèmes existants prenant en charge OpenID ou SAML2.",
            SecurityInfo2: "De plus, l'authentification est également possible via Apple, Meta(Facebook), Alphabet(Google), X(Twitter), LinkedIn, YouTube et plus de 60 plateformes de médias sociaux prenant en charge OAuth.",
            SecurityInfo3: "L'autorisation est granulaire, vous donnant un contrôle total sur ce qu'un utilisateur ou un groupe peut administrer, créer, afficher, modifier ou supprimer. Nous déterminons votre structure organisationnelle à l'aide de processus automatisés. Les étapes, les entrées, les participants et les produits finaux de cette Le processus est détaillé dans le projet en ligne fourni. Une structure organisationnelle en ligne des groupes et des rôles est également disponible.",
            Login: {
                PageTitle: "Connexion",
                MainHeading: "Veuillez compléter pour vous connecter"
            },
            ExternalLogin: {
                PageTitle: "Connectez-vous d'une autre manière",
                MainHeading: "Connectez-vous en utilisant votre compte de réseau social"
            },
            Register: {
                PageTitle: "Enregistrer",
                MainHeading: "Veuillez vous inscrire avec votre adresse email et un mot de passe"
            },
            ForgotPassword: {
                PageTitle: "Mot de passe oublié",
                MainHeading: "Veuillez compléter pour réinitialiser votre mot de passe",
                Username: "Adresse e-mail",
                UsernameInfo: "Veuillez fournir l'adresse e-mail que vous utilisez, en combinaison avec votre mot de passe, lors de votre connexion",
                ForgotPasswordPasswordEmailSent: "Un email sera envoyé à l'adresse email indiquée si elle est valide. Pour changer votre mot de passe, veuillez suivre les instructions contenues dans cet e-mail"
            },
            ResetPassword: {
                PageTitle: "Réinitialiser le mot de passe",
                MainHeading: "Veuillez compléter pour réinitialiser votre nouveau mot de passe"
            },
            TwoFactorAuthentication: {
                PageTitle: "Authentification à deux facteurs",
                MainHeading: "Paramètre d'authentification à deux facteurs"
            },
            DataEncryption: {
                PageTitle: "Cryptage des données",
                MainHeading: "Cryptage des données",
                Warning: "Cryptez vos données avec votre mot de passe. Comme votre mot de passe est également crypté et connu de vous seul, vos données seront irrémédiablement perdues si et quand vous oubliez votre mot de passe. Il s'agit d'une fonctionnalité configurable qui s'ajoute aux fonctionnalités de chiffrement standard offertes par le magasin de données sous-jacent."
            }
        },
        About: {
            IndexPageTitle: "À propos",
            IndexPageMainHeading: "À propos",
            TermsAndConditions: {
                PageTitle: "Termes",
                MainHeading: "Termes et Conditions",
                sections: {
                    Temp: "Il n'y a pas de termes et il n'y a pas de conditions"
                }
            },
            PrivacyPolicy: {
                PageTitle: "Confidentialité",
                MainHeading: "Politique de Confidentialité",
                sections: {
                    DefinitionsAndInterpretation: {
                        SectionTitle: "Definitions et interpretation",
                    },
                    ScopeOfThisPrivacyPolicy: {
                        SectionTitle: "Portée de cette politique de confidentialité",
                    },
                    DataCollected: {
                        SectionTitle: "Données collectées",
                    },
                    HowWeCollectData: {
                        SectionTitle: "Comment nous collectons les données",
                    },
                    DataThatisGivenToUsbyYou: {
                        SectionTitle: "Données que vous nous fournissez",
                    },
                    DataThatIsReceivedFromThirdParties: {
                        SectionTitle: "Données reçues de tiers",
                    },
                    DataThatisReceivedFromPubliclyAvailableThirdPartiesSources: {
                        SectionTitle: "Données reçues de sources tierces accessibles au public",
                    },
                    DataThatIsCollectedAutomatically: {
                        SectionTitle: "Données collectées automatiquement",
                    },
                    OurUseOfData: {
                        SectionTitle: "Notre utilisation des données",
                    },
                    KeepingDataSecure: {
                        SectionTitle: "Garder les données en sécurité",
                    },
                    DataRetention: {
                        SectionTitle: "La conservation des données",
                    },
                    YourRights: {
                        SectionTitle: "Tes droits",
                    },
                    LinksToOtherWebsitesAndMobileApps: {
                        SectionTitle: "Liens vers d'autres sites Web et/ou applications mobiles",
                    },
                    ChangesOfBusinessOwnershipAndControl: {
                        SectionTitle: "Changements de propriété et de contrôle de l’entreprise",
                    },
                    Cookies: {
                        SectionTitle: "Biscuits",
                    },
                    General: {
                        SectionTitle: "Général",
                    },
                    ChangesToThisPrivacyPolicy: {
                        SectionTitle: "Modifications de cette politique de confidentialité",
                    },
                }
            },
        },
        User: {
            IndexPageTitle: "Utilisateur",
            IndexPageMainHeading: "Accueil de l'utilisateur",
            Name: {
                PageTitle: "Nom",
                MainHeading: "Votre nom",
                Title: "Titre",
                TitleInfo: "Votre titre",
                Displayname: "Afficher un nom",
                DisplaynameInfo: "Votre nom d’affichage à l’écran, le cas échéant",
                Firstname: "Prénom",
                FirstnameInfo: "Votre prénom donné",
                Middlename: "Deuxième prénom",
                MiddlenameInfo: "Votre deuxième prénom, le cas échéant",
                Lastname: "Nom de famille",
                LastnameInfo: "Votre prénom",
                Nickname: "Surnom",
                NicknameInfo: "Votre pseudo, le cas échéant",
                UpdateYourDetails: "Mettez à jour vos coordonnées"
            },
            DisplaySettings: {
                PageTitle: "Paramètres d'affichage",
                MainHeading: "Vos paramètres d'affichage",
                LowspeedConnection: "Connexion basse vitesse",
                LowspeedConnectionInfo: "Indiquez si vous préférez des paramètres parfaitement adaptés aux connexions bas débit",
                DisableAnimations: "Désactiver les animations",
                DisableAnimationsInfo: "Activer ou désactiver les animations",
                ShowBackgroundVideo: "Afficher la vidéo d'arrière-plan",
                ShowBackgroundVideoInfo: "Activer ou désactiver l'affichage des vidéos en arrière-plan",
                Language: "Langue",
                LanguageInfo: "Définissez la langue préférée que vous souhaitez dans votre affichage et votre correspondance, comme les e-mails, les SMS et les messages WhatsApp.",
                Theme: "Thème",
                ThemeInfo: "Définir la palette de couleurs préférée"
            },
            Phones: {
                PageTitle: "Téléphone (s",
                MainHeading: "Vos numéros de téléphone",
                PhoneNumber: "Numéro de téléphone",
                AddAPhoneNumber: "Ajouter un numéro de téléphone"
            },
            EmailAddresses: {
                PageTitle: "Adresses mail",
                MainHeading: "Vos adresses email",
                EmailAddress: "Adresse e-mail",
                AddAnEmailAddress: "ਇੱਕ ਈਮੇਲ ਪਤਾ ਸ਼ਾਮਲ ਕਰੋ"
            },
            CommunicationPreferences: {
                PageTitle: "Préférences de communication",
                MainHeading: "Vos préférences de communication",
                InApp: "InApp",
                InAppInfo: "Des notifications et autres messages sont envoyés à cette application",
                WhatsApp: "whatsapp",
                WhatsAppInfo: "Les notifications et autres messages sont envoyés sur votre compte WhatsApps. Un numéro de téléphone mobile est requis",
                SMS: "SMS",
                SMSInfo: "Les notifications et autres messages sont envoyés sur votre téléphone mobile. Un numéro de téléphone mobile est requis",
                Email: "E-mail",
                EmailInfo: "Les notifications et autres messages sont envoyés à votre adresse email. Une adresse email est requise",
                IMessage: "iMessage",
                IMessageInfo: "Les notifications et autres messages sont envoyés à votre compte iMessage. Un appareil Apple est requis"
            },
            Logons: {
                PageTitle: "Connexions",
                MainHeading: "Vos connexions",
                Provider: "Fournisseur",
                ProviderUserName: "Nom d'utilisateur du fournisseur",
                ProviderUserId: "Identifiant du fournisseur",
            },
            Photos: {
                PageTitle: "Photos",
                MainHeading: "Vos photos",
            },
            Roles: {
                PageTitle: "Les rôles",
                MainHeading: "Vos rôles",
                Role: "Rôle"
            },
            Groups: {
                PageTitle: "Groupes",
                MainHeading: "Vos groupes",
                Group: "Groupe"
            },
            GroupsAndRoles: {
                PageTitle: "Groupes et rôles",
                MainHeading: "Vos groupes et rôles",
                GroupAndRole: "Groupe et rôle"
            },
            WebLinks: {
                PageTitle: "Liens web",
                MainHeading: "Vos liens internet",
            },
            YourDetails: {
                PageTitle: "Détails",
                MainHeading: "Vos détails",
            },
            DeleteMyDetails: {
                PageTitle: "Supprimer",
                MainHeading: "Supprimer mes coordonnées",
            },
            Notifications: {
                PageTitle: "Notifications",
                MainHeading: "Vos notifications",
                CreatedOn: "Créé sur",
                Importance: "Importance",
                Message: "Message",
                NotificationStatus: "Statut"
            },
            GroupNotifications: {
                PageTitle: "Notifications de groupe",
                MainHeading: "Vos notifications de groupe",
                NoGroupNotifications: "Vous n'avez actuellement aucune notification de groupe",
            },
            LoginHistory: {
                PageTitle: "Historique de connexion",
                MainHeading: "Votre historique de connexion",
                Date: "Date",
                IPAddress: "Adresse IP",
                Device: "Appareil",
                Location: "Emplacement"
            },
            ChangePassword: {
                PageTitle: "Changer le mot de passe",
                MainHeading: "Veuillez compléter pour changer votre mot de passe",
                PasswordChanged: "votre mot de passe a été changé"
            }
        }
    },
    Errors: {
        Common: {
            GenericError: "Un état d'application non valide a été détecté, la dernière opération a été interrompue en toute sécurité",
            ExpiredSession: "Votre session a expiré",
            AccessDenied: "L'accès à la ressource ({{0}}) est refusé"
        },
        ValidationErrors: {
            GenericSummary: "Un ou plusieurs des détails que vous avez fournis ne sont pas valides",
            IsRequired: "{{0}} est requis",
            MustHaveMinLen: "il doit comporter un minimum de {{0}} caractères",
            MustHaveMaxLen: "il doit comporter un maximum de {{0}} caractères",
            MustHaveMin: "il doit avoir une valeur minimale de {{0}}",
            MustHaveMax: "il doit avoir une valeur maximale de {{0}}",
            MustBeEmailAddress: "il doit s'agir d'une adresse e-mail valide",
            MustContainLowerCase: "il doit contenir au moins un caractère minuscule",
            MustContainUpperCase: "il doit contenir au moins un caractère majuscule",
            MustContainSpecialCharacter: "il doit contenir au moins un caractère spécial qui doit provenir de ces @#$%^&++*!= caractères"
        }
    },
    Common: {
        And: "et",
        Add: "Ajouter",
        AreYouSure: "Es-tu sûr?",
        Api: "API",
        All: "Tout",
        Cancel: "Annuler",
        Change: "Changement",
        ChangePassword: "Changer le mot de passe",
        Close: "Fermer",
        Name: "Détails",
        Delete: "Supprimer",
        ExportAsExcel: "Exporter sous Excel",
        ExportAsPDF: "Exporter au format PDF",
        ForgotPassword: "Mot de passe oublié",
        InfoTipHeader: "Plus en détails...",
        Login: "Connexion",
        LoginAgain: "Veuillez vous reconnecter",
        LoginAnotherWay: "Connectez-vous d'une autre manière",
        Logout: "Se déconnecter",
        Loading: "Chargement...",
        Or: "Ou",
        PendingNotification: "Vous avez une notification d'importance élevée ou d'importance moyenne",
        PendingNotifications: "Vous avez {{0}} notifications de haute importance et/ou d'importance moyenne",
        PleaseConfirmDeletion: "Veuillez confirmer la suppression",
        Provide: "Veuillez fournir votre",
        Magic: "Basculez entre l'ourdou et l'anglais pour voir une magie CSS de droite à gauche et de gauche à droite sur cette image et cette page. La copie (le texte) de ce site est disponible en versions compressées ou détaillées, pour s'adapter à tous les types d'appareils, allant des écrans d'ordinateur extra-larges aux écrans LCD Raspberry Pi de poche, avec des options pour choisir soit un format formel, neutre, ou ton humoristique",
        Register: "Enregistrer",
        Reset: "Réinitialiser",
        Submit: "Soumettre",
        ThereIsNoOneHere: "Il n'y a personne ici",
        Update: "Mise à jour",
        View: "Voir",
        Yes: "Oui",
        YourDetails: "Vos détails"
    },
    Telerik: {
        grid: {
            groupPanelEmpty: "Faites glisser un en-tête de colonne et déposez-le ici pour regrouper par cette colonne",
            pagerItemsPerPage: "éléments par page",
            pagerInfo: "{0} - {1} sur {2} éléments",
            pagerFirstPage: "Aller à la première page",
            pagerPreviousPage: "Aller à la page précédente",
            pagerNextPage: "Aller à la page suivante",
            pagerLastPage: "Aller à la dernière page",
            pagerPage: "Page",
            pagerOf: "de",
            pagerTotalPages: "{0}",
            filterClearButton: "Effacer",
            filterEqOperator: "Est égal à",
            filterNotEqOperator: "N'est pas égal à",
            filterIsNullOperator: "Est nul",
            filterIsNotNullOperator: "N'est pas nul",
            filterIsEmptyOperator: "Est vide",
            filterIsNotEmptyOperator: "N'est pas vide",
            filterStartsWithOperator: "Commence par",
            filterContainsOperator: "Contient",
            filterNotContainsOperator: "Ne contient pas",
            filterEndsWithOperator: "Se termine par",
            filterGteOperator: "Est supérieur ou égal à",
            filterGtOperator: "Est supérieur à",
            filterLteOperator: "Est inférieur ou égal à",
            filterLtOperator: "Est inférieur à",
            filterIsTrue: "Est vrai",
            filterIsFalse: "Est faux",
            filterBooleanAll: "(Tous)",
            filterAfterOrEqualOperator: "Est après ou égal à",
            filterAfterOperator: "Est après",
            filterBeforeOperator: "Est avant",
            filterBeforeOrEqualOperator: "Est avant ou égal à",
            noRecords: "Aucun enregistrement disponible.",
            filterAriaLabel: "Filtre",
            filterCheckAll: "Vérifier tout",
            filterChooseOperator: "Choisir l'opérateur",
            filterSelectedItems: "éléments sélectionnés",
            filterSubmitButton: "Filtre",
            filterTitle: "Filtre",
            filterAndLogic: "Et",
            filterOrLogic: "Ou",
            groupColumn: "Colonne de groupe",
            searchPlaceholder: "Rechercher",
            sortAriaLabel: "Triable",
            sortAscending: "Tri ascendant",
            sortDescending: "Tri par ordre décroissant",
            ungroupColumn: "Dissocier la colonne"
        }
    }
}
