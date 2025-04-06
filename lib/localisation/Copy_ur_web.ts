import { Copy } from "./Copy"

export const copy: Copy = {
    Menus: [
        {
            Name: "home",
            Value: "گھر",
            items: []
        },
        {
            Name: "register",
            Value: "رجسٹر کریں۔",
            items: []
        },
        {
            Name: "login",
            Value: "لاگ ان کریں",
            items: []
        },
        {
            Name: "security",
            Value: "سیکورٹی",
            items: [
                {
                    Name: "login",
                    Value: "لاگ ان کریں",
                    items: []
                },
                {
                    Name: "register",
                    Value: "رجسٹر کریں۔",
                    items: []
                },
                {
                    Name: "forgotpassword",
                    Value: "پاسورڈ بھول گے",
                    items: []
                },
                {
                    Name: "resetpassword",
                    Value: "پاس ورڈ ری سیٹ",
                    items: []
                },
                {
                    Name: "changepassword",
                    Value: "پاس ورڈ تبدیل کریں",
                    items: []
                },
                {
                    Name: "twofactorauthentication",
                    Value: "دو عنصر کی تصدیق",
                    items: []
                },
                {
                    Name: "dataencryption",
                    Value: "ڈیٹا انکرپشن",
                    items: []
                },
                {
                    Name: "logout",
                    Value: "لاگ آوٹ",
                    items: []
                },
                {
                    Name: "externallogin",
                    Value: "بیرونی لاگ ان",
                    items: [
                        {
                            Name: "google",
                            Value: "گوگل کے ساتھ لاگ ان کریں۔",
                            items: []
                        },
                        {
                            Name: "facebook",
                            Value: "فیس بک لاگ ان کریں",
                            items: []
                        },
                        {
                            Name: "twitter",
                            Value: "ٹویٹر کے ساتھ لاگ ان کریں۔",
                            items: []
                        },
                        {
                            Name: "linkedin",
                            Value: "LinkedIn کے ساتھ لاگ ان کریں۔",
                            items: []
                        },
                        {
                            Name: "apple",
                            Value: "ایپل کے ساتھ لاگ ان کریں۔",
                            items: []
                        },
                    ]
                }
            ]
        },
        {
            Name: "user",
            Value: "پروفائل",
            items: [
                {
                    Name: "name",
                    Value: "نام",
                    items: []
                },
                {
                    Name: "displaysettings",
                    Value: "ڈسپلے کی ترتیبات",
                    items: []
                },
                {
                    Name: "logons",
                    Value: "لاگن",
                    items: []
                },
                {
                    Name: "emailaddresses",
                    Value: "ای میل پتے",
                    items: []
                },
                {
                    Name: "communicationpreferences",
                    Value: "مواصلات کی ترجیحات",
                    items: []
                },
                {
                    Name: "phones",
                    Value: "فونز",
                    items: []
                },
                {
                    Name: "photos",
                    Value: "تصاویر",
                    items: []
                },
                {
                    Name: "roles",
                    Value: "کردار",
                    items: []
                },
                {
                    Name: "groups",
                    Value: "گروپس",
                    items: []
                },
                {
                    Name: "groupsandroles",
                    Value: "گروپس اور کردار",
                    items: []
                },
                {
                    Name: "weblinks",
                    Value: "ویب لنکس",
                    items: []
                },
                {
                    Name: "details",
                    Value: "آپ کی تفصیلات",
                    items: []
                },
                {
                    Name: "delete",
                    Value: "میری تفصیلات حذف کریں۔",
                    items: []
                },
                {
                    Name: "notifications",
                    Value: "آپ کی اطلاعات",
                    items: []
                },
                {
                    Name: "groupnotifications",
                    Value: "آپ کے گروپ کی اطلاعات",
                    items: []
                },
                {
                    Name: "loginhistory",
                    Value: "لاگ ان کی تاریخ",
                    items: []
                }
            ]
        },
        {
            Name: "about",
            Value: "کے بارے میں",
            items: [
                {
                    Name: "privacypolicy",
                    Value: "رازداری کی پالیسی",
                    items: []
                },
                {
                    Name: "termsandconditions",
                    Value: "شرائط و ضوابط",
                    items: []
                },
            ]
        },
        {
            Name: "logout",
            Value: "لاگ آوٹ",
            items: []
        },
    ],
    Components: {
        LoginComponent: {
            Title: "لاگ ان کریں",
            Username: "ای میل اڈریس",
            UsernameInfo: "براہ کرم اپنا ای میل پتہ فراہم کریں۔",
            Password: "پاس ورڈ",
            PasswordInfo: "براہ کرم اپنا پاس ورڈ فراہم کریں۔",
            Submit: "لاگ ان کریں",
            Errors: {
                ValidationErrors: {},
                ServerErrors: {
                    LoginFailed: `داخلی سرور کی خرابی کی وجہ سے لاگ ان ناکام ہو گیا۔`,
                    IncorrectUsernameOrPassword: `صارف نام/ پاس ورڈ کی مماثلت کی وجہ سے لاگ ان ناکام ہو گیا۔`
                }
            },
        },
        RegisterComponent: {
            Title: "رجسٹر کریں۔",
            Username: "ای میل اڈریس",
            UsernameInfo: "براہ کرم اپنا ای میل پتہ فراہم کریں۔",
            Password: "پاس ورڈ",
            PasswordInfo: "براہ کرم اپنا پاس ورڈ فراہم کریں۔",
            ConfirmPassword: "پاس ورڈ کی تصدیق کریں۔",
            ConfirmPasswordInfo: "براہ کرم اپنے پاس ورڈ کی تصدیق کریں۔",
            IAcceptTermsAndConditions: "میں قوائد و ضوابط کو قبول کرتا ہوں",
            IAcceptTermsAndConditionsInfo: "میں نے شرائط و ضوابط کو پڑھ اور سمجھ لیا ہے۔ میں ان شرائط و ضوابط کو قبول کرتا ہوں۔",
            IAcceptPrivacyPolicy: "میں رازداری کی پالیسی کو قبول کرتا ہوں۔",
            IAcceptPrivacyPolicyInfo: "یہ پالیسی بتاتی ہے کہ ہم آپ کا ڈیٹا کیسے اور کہاں استعمال اور ذخیرہ کرتے ہیں۔ میں نے رازداری کی پالیسی کو پڑھ اور سمجھ لیا ہے۔ میں اس رازداری کی پالیسی کو قبول کرتا ہوں۔",
            PasswordStrength: "پاس ورڈ کی طاقت",
            PasswordStrengthInfo: "میں نے شرائط و ضوابط کو پڑھ اور سمجھ لیا ہے اور کمزور پاس ورڈ کے استعمال کے مضمرات کو سمجھ لیا ہے۔ اپنی صوابدید پر استعمال کریں۔ پاس ورڈ کی طاقت ماحولیاتی متغیر کا استعمال کرتے ہوئے قابل ترتیب ہے۔",
            PasswordStrengthHighStrength: "اعلی طاقت کا پاس ورڈ",
            PasswordStrengthMediumStrength: "درمیانی طاقت کا پاس ورڈ",
            PasswordStrengthLowStrength: "کم طاقت والا پاس ورڈ",
            PasswordStrengthNoStrength: "بغیر طاقت کا پاس ورڈ",
            Submit: "رجسٹر کریں۔",
            Errors: {
                ValidationErrors: {
                    PasswordConfirmationMustMatch: "پاس ورڈ کی تصدیق آپ کے پاس ورڈ سے مماثل ہونی چاہیے۔",
                    MustAcceptTermsAndConditions: "تمہیں قواعد و ضوابط ھر حال میں ماننے ھوں گے",
                    MustAcceptPrivacyPolicy: "آپ کو رازداری کی پالیسی کو قبول کرنا ہوگا۔",
                },
                ServerErrors: {
                    RegistrationFailed: "رجسٹریشن ناکام ہو گیا کیونکہ صارف نام پہلے ہی استعمال میں ہے۔"
                }
            },
        },
    },
    Pages: {
        Index: {
            PageTitle: "گھر",
            MainHeading: "گھر",
            Create: "تخلیق کریں",
            CreateInfo1: "جب کسی سروس یا پروڈکٹ کا آغاز کرتے ہیں، تو تاخیر یا غیر مکمل توقعات سے بچنا آپ کی کامیابی اور لاگت کی کارکردگی کے لئے کلیدی ہو سکتا ہے۔ ہمارا ترجیحی طریقہ یہ ہے کہ ایک انتہائی قابل ترتیب، خصوصیات سے بھرپور ریپڈ ایپلیکیشن ڈیولپمنٹ (RAD) فریم ورک کو استعمال کیا جائے تاکہ آپ کی ضروریات کو ہموار طریقے سے حل کر کے ایک موزوں حل میں تبدیل کیا جا سکے، اس طرح آپ کو یہ ملتا ہے:",
            CreateInfo2: "ایک ہموار HTML5 ویب سائٹ جو ویب ایکسیسبلٹی معیارات کے مطابق ہو، مکمل انتظامی ماڈیولز کے ساتھ، آسان انتظام اور وسیع رسائی کو یقینی بناتی ہے",
            CreateInfo3: "اینڈروئیڈ اور آئی او ایس کے لئے مقامی ایپلیکیشنز، آپ کی خدمات کو براہ راست آپ کے صارفین کے ہاتھوں میں دے رہی ہیں",
            CreateInfo4: "زیادہ تر مقبول ریلیشنل اور NoSQL ڈیٹا بیسز کے ساتھ ہموار رابطہ، چاہے وہ آپ کے زیر انتظام ہوں، آپ کے لئے ان کا انتظام کریں، یا آپ کے ساتھ تعاون میں ہوں۔ مزید یہ کہ، REST یا SOAP API، Elasticsearch اور Google Cloud Datastore کی حمایت جامع ڈیٹا انضمام کو یقینی بناتی ہے",
            CreateInfo5: "Microsoft Windows، SAML2، OpenId، یوزر نیم / پاس ورڈ اور OAuth سمیت مضبوط تصدیقی اختیارات، سب کے سب سنگل سائن آن اور صارفین اور گروپوں کے لئے مفصل رول بیسڈ اتھورائزیشن کے ساتھ، محفوظ رسائی کی ضمانت دیتے ہیں",
            CreateInfo6: "جدید لاگنگ، مسلسل تعیناتی، اور مسلسل نگرانی کی صلاحیتیں، زیادہ تر دوران حرکت کے دوران خود کار طریقے سے اسکیلنگ کے ساتھ، بھروسہ اور کارکردگی کو یقینی بناتی ہیں",
            CreateInfo7: "لوکلائز اور برانڈڈ کمیونیکیشنز ای میل، SMS، ٹیکسٹ، WhatsApp، Skype اور بہت کچھ کے ذریعے، جامع ٹریننگ مواد کے ساتھ، جو آپ کی ٹیم کو تازہ ترین رکھنے کے لئے ہیں",
            CreateInfo8: "سروسز اور ڈیٹا کی حفاظت کرنے کے لئے DOS (ڈینائل آف سروس) اور دیگر خراب حملوں سے مضبوط تحفظ",
            CreateInfo9: "قومی ڈیٹا پرائیویسی قوانین کی مکمل تعمیل، ڈیٹا سیکیورٹی اور قانونی احترام کے بارے میں ذہنی سکون فراہم کرتی ہے",
            CreateInfo10: "SCRUM/AGILE/Waterfall طریقہ کار کے استعمال سے ایک تفصیلی آن لائن پروجیکٹ پلان، ضروریات، ڈیلیورایبلز، اور مائل اسٹونز کو واضح طور پر بیان کرتا ہے تاکہ آپ کے پروجیکٹ کو ٹریک پر رکھا جا سکے",
            Innovate: "جدت پیدا کرنا",
            InnovateInfo: "ہمارے حل کے فریم ورک، طریقہ کار اور افرادی قوت کا انوکھا امتزاج ہمارے صارفین کے عالمی آئی ٹی سلوشنز اور ڈیلیوری کو لاگت میں کمی اور اعلیٰ معیار کی پیداوار کے عروج پر لے جاتا ہے۔ اس کی حمایت ہمارے مسلسل ارتقا پذیر جدت طرازی کے طریقوں سے ہوتی ہے جو ہمیں شناخت کرنے کے قابل بناتے ہیں۔ معیار، قیمت، کارکردگی، اور مارکیٹ میں تیزی سے لانچ کرنے میں کوتاہیاں اور مواقع۔",
            Simplify: "آسان بنائیں",
            SimplifyInfo: "ہم آپ سے پیچیدگیوں کو چھپاتے ہوئے سادگی اور بدیہی یوزر انٹرفیس پر یقین رکھتے ہیں۔ انٹرنیٹ نے کاروباروں کے اپنے صارفین کے ساتھ بات چیت کرنے کے انداز میں انقلاب برپا کر دیا ہے۔ آپ کے گاہک اب آپ کے مواد کو ٹیبلیٹ یا اسمارٹ فون کا استعمال کرتے ہوئے دیکھ رہے ہیں۔ پی سی کا استعمال کریں۔ ہماری بدیہی ویب، ڈیسک ٹاپ، اینڈریوڈ اور آئی او ایس ایپلی کیشنز کا استعمال آپ کے آپریشنز کو خودکار کرنے کے قابل بناتا ہے چاہے کتنا ہی پیچیدہ ہو۔",
            Unify: "اتحاد",
            UnifyInfo1: "ہمارا محفوظ",
            UnifyInfo2: "JSON، XML، یا HTML ان پٹ دونوں کو قبول کرتا ہے۔ اور یا تو JSON، XML، HTML، PDFs، Microsoft Excel اسپریڈشیٹ (حساب کے ساتھ) یا Google اسپریڈ شیٹس تیار کرتا ہے۔ ہمارا حل مستقبل کا ثبوت ہے جب ترقی یا آپریشنل تبدیلیوں کی وجہ سے دوسرے سسٹمز میں مزید انضمام کی ضرورت ہوتی ہے۔ ڈیٹا ایکسٹریکشن، ٹرانسفارمیشن، اور لوڈنگ (ETL) کے دوران، SQL Server Integration Services، Azure Data Factory، Oracle Data Integrator، Hadoop، AWS Glue، اور Google Cloud Dataflow جیسے ٹولز کا استعمال کرتے ہوئے ہمارے API سے استفسار کیا جا سکتا ہے یا لکھا جا سکتا ہے۔ رپورٹس کی تیاری پر بھی یہی لاگو ہوتا ہے۔",
            Log1: "اور اسے فوری طور پر یا متبادل طور پر آزمائیں",
            Log2: "اگر آپ کے پاس پہلے سے اکاؤنٹ ہے یا تو ای میل ایڈریس اور پاس ورڈ کے ساتھ",
            Log3: "گوگل یا فیس بک کے ساتھ اگر آپ کا ان میں سے کسی ایک کے ساتھ اکاؤنٹ ہے",
        },
        Authentication: {
            IndexPageTitle: "سیکورٹی",
            IndexPageMainHeading: "سیکیورٹی ہوم",
            SecurityInfo1: "توثیق موجودہ آن پریمیس مائیکروسافٹ ایکٹو ڈائریکٹری (AD) یا کلاؤڈ بیسڈ Microsoft Azure Active Directory (AAD) پر ہموار ہے۔ سنگل سائن آن آپ کے موجودہ سسٹمز کے ساتھ بھی ہموار ہے جو OpenID یا SAML2 کو سپورٹ کرتے ہیں۔",
            SecurityInfo2: "اس کے علاوہ، تصدیق Apple، Meta(Facebook)، Alphabet(Google)، X(Twitter)، LinkedIn، YouTube، اور OAuth کو سپورٹ کرنے والے 60 سے زیادہ سوشل میڈیا پلیٹ فارمز کے ذریعے بھی ممکن ہے۔",
            SecurityInfo3: "اجازت دانے دار ہے، جو آپ کو اس بات پر مکمل کنٹرول فراہم کرتی ہے کہ کوئی صارف یا گروپ کیا انتظام، تخلیق، دیکھ، ترمیم یا حذف کر سکتا ہے۔ ہم آپ کے تنظیمی ڈھانچے کا تعین خود کار طریقے سے کرتے ہیں۔ اس کے اقدامات، ان پٹ، شرکاء اور حتمی مصنوعات فراہم کردہ آن لائن پروجیکٹ میں عمل کی تفصیل ہے۔ گروپوں اور کرداروں کا ایک آن لائن تنظیمی ڈھانچہ بھی دستیاب ہے۔",
            Login: {
                PageTitle: "لاگ ان کریں",
                MainHeading: "براہ کرم لاگ ان کرنے کے لیے مکمل کریں۔"
            },
            ExternalLogin: {
                PageTitle: "دوسرے طریقے سے لاگ ان کریں۔",
                MainHeading: "اپنے سوشل میڈیا اکاؤنٹ کا استعمال کرتے ہوئے لاگ ان کریں۔"
            },
            Register: {
                PageTitle: "رجسٹر کریں۔",
                MainHeading: "براہ کرم اپنے ای میل ایڈریس اور پاس ورڈ کے ساتھ رجسٹر کریں۔"
            },
            ForgotPassword: {
                PageTitle: "پاسورڈ بھول گے",
                MainHeading: "براہ کرم اپنا پاس ورڈ دوبارہ ترتیب دینے کے لیے مکمل کریں۔",
                Username: "ای میل اڈریس",
                UsernameInfo: "براہ کرم لاگ ان کرتے وقت وہ ای میل پتہ فراہم کریں جو آپ اپنے پاس ورڈ کے ساتھ استعمال کرتے ہیں۔",
                ForgotPasswordPasswordEmailSent: "دیے گئے ای میل ایڈریس پر ایک ای میل بھیجی جائے گی اگر یہ درست ہے۔ اپنا پاس ورڈ تبدیل کرنے کے لیے، براہ کرم اس ای میل میں دی گئی ہدایات پر عمل کریں۔"
            },
            ResetPassword: {
                PageTitle: "پاس ورڈ ری سیٹ",
                MainHeading: "براہ کرم اپنا نیا پاس ورڈ دوبارہ ترتیب دینے کے لیے مکمل کریں۔"
            },
            TwoFactorAuthentication: {
                PageTitle: "دو عنصر کی تصدیق",
                MainHeading: "دو عنصر کی توثیق کی ترتیب"
            },
            DataEncryption: {
                PageTitle: "ڈیٹا انکرپشن",
                MainHeading: "ڈیٹا انکرپشن",
                Warning: "اپنے ڈیٹا کو اپنے پاس ورڈ سے انکرپٹ کریں۔ چونکہ آپ کا پاس ورڈ بھی انکرپٹڈ ہے اور صرف آپ کو معلوم ہے، اگر آپ اپنا پاس ورڈ بھول جاتے ہیں تو آپ کا ڈیٹا ناقابل بازیافت طور پر ضائع ہو جائے گا۔ یہ بنیادی ڈیٹا اسٹور کی طرف سے پیش کردہ معیاری خفیہ کاری کی خصوصیات کے اوپر ایک قابل ترتیب خصوصیت ہے۔"
            }
        },
        About: {
            IndexPageTitle: "کے بارے میں",
            IndexPageMainHeading: "کے بارے میں",
            TermsAndConditions: {
                PageTitle: "شرائط",
                MainHeading: "شرائط و ضوابط",
                sections: {
                    Temp: "کوئی شرائط نہیں ہیں اور کوئی شرائط نہیں ہیں۔"
                }
            },
            PrivacyPolicy: {
                PageTitle: "رازداری",
                MainHeading: "رازداری کی پالیسی",
                sections: {
                    DefinitionsAndInterpretation: {
                        SectionTitle: "تعریفیں اور تشریحات",
                    },
                    ScopeOfThisPrivacyPolicy: {
                        SectionTitle: "اس پرائیویسی پالیسی کا دائرہ کار",
                    },
                    DataCollected: {
                        SectionTitle: "ڈیٹا اکٹھا کیا گیا۔",
                    },
                    HowWeCollectData: {
                        SectionTitle: "ہم ڈیٹا کیسے اکٹھا کرتے ہیں۔",
                    },
                    DataThatisGivenToUsbyYou: {
                        SectionTitle: "ڈیٹا جو آپ نے ہمیں دیا ہے۔",
                    },
                    DataThatIsReceivedFromThirdParties: {
                        SectionTitle: "فریق ثالث سے موصول ہونے والا ڈیٹا",
                    },
                    DataThatisReceivedFromPubliclyAvailableThirdPartiesSources: {
                        SectionTitle: "وہ ڈیٹا جو عوامی طور پر دستیاب فریق ثالث کے ذرائع سے حاصل ہوتا ہے۔",
                    },
                    DataThatIsCollectedAutomatically: {
                        SectionTitle: "ڈیٹا جو خود بخود جمع ہوتا ہے۔",
                    },
                    OurUseOfData: {
                        SectionTitle: "ہمارا ڈیٹا کا استعمال",
                    },
                    KeepingDataSecure: {
                        SectionTitle: "ڈیٹا کو محفوظ رکھنا",
                    },
                    DataRetention: {
                        SectionTitle: "ڈیٹا برقرار رکھنا",
                    },
                    YourRights: {
                        SectionTitle: "آپ کے حقوق",
                    },
                    LinksToOtherWebsitesAndMobileApps: {
                        SectionTitle: "آپ کے حقوقآپ کے حقوق",
                    },
                    ChangesOfBusinessOwnershipAndControl: {
                        SectionTitle: "کاروبار کی ملکیت اور کنٹرول میں تبدیلیاں",
                    },
                    Cookies: {
                        SectionTitle: "کوکیز",
                    },
                    General: {
                        SectionTitle: "جنرل",
                    },
                    ChangesToThisPrivacyPolicy: {
                        SectionTitle: "اس رازداری کی پالیسی میں تبدیلیاں",
                    },
                }
            },
        },
        User: {
            IndexPageTitle: "صارف",
            IndexPageMainHeading: "یوزر ہوم",
            Name: {
                PageTitle: "نام",
                MainHeading: "تمھارا نام",
                Title: "عنوان",
                TitleInfo: "آپ کا عنوان",
                Displayname: "ڈسپلے کا نام",
                DisplaynameInfo: "آپ کا اسکرین ڈسپلے نام، اگر کوئی ہے۔",
                Firstname: "پہلا نام",
                FirstnameInfo: "آپ کا دیا ہوا پہلا نام",
                Middlename: "درمیانی نام",
                MiddlenameInfo: "آپ کا دیا ہوا درمیانی نام، اگر کوئی ہے۔",
                Lastname: "آخری نام",
                LastnameInfo: "آپ کا دیا ہوا آخری نام",
                Nickname: "عرفی نام",
                NicknameInfo: "آپ کا عرفی نام، اگر کوئی ہے۔",
                UpdateYourDetails: "اپنی تفصیلات کو اپ ڈیٹ کریں۔"
            },
            DisplaySettings: {
                PageTitle: "ڈسپلے کی ترتیبات",
                MainHeading: "آپ کی ڈسپلے کی ترتیبات",
                LowspeedConnection: "کم رفتار کنکشن",
                LowspeedConnectionInfo: "اس بات کی نشاندہی کریں کہ آیا آپ کم رفتار کنکشن کے لیے مثالی طور پر موزوں ترتیبات کو ترجیح دیتے ہیں۔",
                DisableAnimations: "متحرک تصاویر کو غیر فعال کریں۔",
                DisableAnimationsInfo: "متحرک تصاویر کو فعال یا غیر فعال کریں۔",
                ShowBackgroundVideo: "پس منظر کی ویڈیو دکھائیں۔",
                ShowBackgroundVideoInfo: "پس منظر کی ویڈیوز کے ڈسپلے کو فعال یا غیر فعال کریں۔",
                Language: "زبان",
                LanguageInfo: "اپنے ڈسپلے اور خط و کتابت جیسے کہ ای میلز، ایس ایم ایس اور واٹس ایپ پیغامات میں اپنی پسند کی زبان سیٹ کریں۔",
                Theme: "ਥੀਮ",
                ThemeInfo: "ترجیحی رنگ سکیم سیٹ کریں۔"
            },
            Phones: {
                PageTitle: "فونز",
                MainHeading: "آپ کے فون نمبرز",
                PhoneNumber: "فون نمبر",
                AddAPhoneNumber: "ایک فون نمبر شامل کریں۔"
            },
            EmailAddresses: {
                PageTitle: "ای میل ایڈریسز",
                MainHeading: "آپ کے ای میل پتے",
                EmailAddress: "ای میل اڈریس",
                AddAnEmailAddress: "ایک ای میل ایڈریس شامل کریں۔"
            },
            CommunicationPreferences: {
                PageTitle: "مواصلات کی ترجیحات",
                MainHeading: "آپ کی مواصلات کی ترجیحات",
                InApp: "InApp",
                InAppInfo: "اطلاعات اور دیگر پیغامات اس ایپ کو بھیجے جاتے ہیں",
                WhatsApp: "واٹس ایپ",
                WhatsAppInfo: "اطلاعات اور دیگر پیغامات آپ کے WhatsApp اکاؤنٹ پر بھیجے جاتے ہیں۔ ایک موبائل فون نمبر درکار ہے",
                SMS: "SMS",
                SMSInfo: "اطلاعات اور دیگر پیغامات آپ کے موبائل فون پر بھیجے جاتے ہیں۔ ایک موبائل فون نمبر درکار ہے",
                Email: "ای میل",
                EmailInfo: "اطلاعات اور دیگر پیغامات آپ کے ای میل پتے پر بھیجے جاتے ہیں۔ ایک ای میل پتہ درکار ہے",
                IMessage: "iMessage",
                IMessageInfo: "اطلاعات اور دیگر پیغامات آپ کے iMessage اکاؤنٹ پر بھیجے جاتے ہیں۔ ایپل ڈیوائس کی ضرورت ہے۔"
            },
            Logons: {
                PageTitle: "لاگن",
                MainHeading: "آپ کے لوگن",
                Provider: "فراہم کنندہ",
                ProviderUserName: "فراہم کنندہ کا صارف نام",
                ProviderUserId: "Provider id"
            },
            Photos: {
                PageTitle: "تصاویر",
                MainHeading: "آپ کی تصاویر",
            },
            Roles: {
                PageTitle: "کردار",
                MainHeading: "آپ کے کردار",
                Role: "کردار"
            },
            Groups: {
                PageTitle: "گروپس",
                MainHeading: "آپ کے گروپس",
                Group: "گروپ",
            },
            GroupsAndRoles: {
                PageTitle: "گروپس اور کردار",
                MainHeading: "آپ کے گروپ اور کردار",
                GroupAndRole: "گروپ اور کردار"
            },
            WebLinks: {
                PageTitle: "ویب لنکس",
                MainHeading: "آپ کے ویب لنکس",
            },
            YourDetails: {
                PageTitle: "تفصیلات",
                MainHeading: "آپ کی تفصیلات",
            },
            DeleteMyDetails: {
                PageTitle: "حذف کریں۔",
                MainHeading: "میری تفصیلات حذف کریں۔",
            },
            Notifications: {
                PageTitle: "اطلاعات",
                MainHeading: "آپ کی اطلاعات",
                CreatedOn: "پر بنایا",
                Importance: "اہمیت",
                Message: "پیغام",
                NotificationStatus: "حالت"
            },
            GroupNotifications: {
                PageTitle: "گروپ اطلاعات",
                MainHeading: "آپ کے گروپ کی اطلاعات",
                NoGroupNotifications: "آپ کے پاس فی الحال کوئی گروپ اطلاعات نہیں ہیں۔",
            },
            LoginHistory: {
                PageTitle: "لاگ ان کی تاریخ",
                MainHeading: "آپ کی لاگ ان کی تاریخ",
                Date: "تاریخ",
                IPAddress: "IP پتہ",
                Device: "ڈیوائس",
                Location: "مقام"
            },
            ChangePassword: {
                PageTitle: "پاس ورڈ تبدیل کریں",
                MainHeading: "اپنا پاس ورڈ تبدیل کرنے کے لیے براہ کرم مکمل کریں۔",
                PasswordChanged: "آپ کا پاس ورڈ تبدیل کر دیا گیا ہے۔"
            }
        }
    },
    Errors: {
        Common: {
            GenericError: "درخواست کی ایک غلط حالت کا پتہ چلا، آخری آپریشن کو محفوظ طریقے سے روک دیا گیا تھا۔",
            ExpiredSession: "آپ کا سیشن ختم ہو گیا ہے۔",
            AccessDenied: "وسائل تک رسائی ({{0}}) سے انکار کر دیا گیا ہے۔"
        },
        ValidationErrors: {
            GenericSummary: "آپ کی فراہم کردہ تفصیلات میں سے ایک یا زیادہ غلط ہے۔",
            IsRequired: "{{0}} درکار ہے۔",
            MustHaveMinLen: "اس میں کم از کم {{0}} حروف ہونے چاہئیں",
            MustHaveMaxLen: "اس میں زیادہ سے زیادہ {{0}} حروف ہونے چاہئیں",
            MustHaveMin: "اس کی کم از کم قیمت {{0}} ہونی چاہیے",
            MustHaveMax: "اس کی زیادہ سے زیادہ قیمت {{0}} ہونی چاہیے",
            MustBeEmailAddress: "یہ ایک درست ای میل پتہ ہونا چاہیے۔",
            MustContainLowerCase: "اس میں کم از کم ایک لوئر کیس کیریکٹر ہونا چاہیے۔",
            MustContainUpperCase: "اس میں کم از کم ایک اپر کیس کریکٹر ہونا چاہیے۔",
            MustContainSpecialCharacter: "اس میں کم از کم ایک خاص حرف ہونا چاہیے جو ان @#$%^&+*!= حروف سے ہونا چاہیے۔",
        }
    },
    Common: {
        And: "اور",
        Add: "شامل کریں۔",
        AreYouSure: "کیا تمہیں یقین ہے؟",
        Api: "API",
        All: "سب کچھ",
        Cancel: "منسوخ کریں۔",
        ChangePassword: "پاس ورڈ تبدیل کریں",
        Change: "تبدیلی",
        Close: "بند کریں",
        Name: "تفصیلات",
        Delete: "حذف کریں۔",
        ExportAsExcel: "ایکسل کے بطور ایکسپورٹ کریں۔",
        ExportAsPDF: "پی ڈی ایف کے بطور ایکسپورٹ کریں۔",
        ForgotPassword: "پاسورڈ بھول گے",
        InfoTipHeader: "مزید تفصیلات میں...",
        Login: "لاگ ان کریں",
        LoginAgain: "براہ کرم دوبارہ لاگ ان کریں۔",
        LoginAnotherWay: "دوسرے طریقے سے لاگ ان کریں۔",
        Logout: "لاگ آوٹ",
        Loading: "لوڈ ہو رہا ہے...",
        Magic: "اس تصویر اور صفحہ پر CSS دائیں سے بائیں اور بائیں سے دائیں جادو دیکھنے کے لیے اردو اور انگریزی کے درمیان سوئچ کریں۔ اس سائٹ پر کاپی (الفاظ) یا تو کمپریسڈ یا وربوز ورژنز میں دستیاب ہے، تمام ڈیوائس کی اقسام کے مطابق، ایکسٹرا وائیڈ کمپیوٹر مانیٹر سے لے کر جیب کے سائز کی LCD Raspberry Pi سکرین تک، رسمی، غیر جانبدار، یا تو منتخب کرنے کے اختیارات کے ساتھ۔ یا مزاحیہ لہجہ",
        Or: "یا",
        PendingNotification: "آپ کے پاس ایک اعلیٰ اہمیت یا درمیانی اہمیت کی اطلاع ہے۔",
        PendingNotifications: "آپ کے پاس {{0}} زیادہ اہمیت کی اور/یا درمیانی اہمیت کی اطلاعات ہیں۔",
        PleaseConfirmDeletion: "براہ کرم حذف کرنے کی تصدیق کریں۔",
        Provide: "براہ کرم اپنا فراہم کریں۔",
        Register: "رجسٹر کریں۔",
        Reset: "دوبارہ ترتیب دیں۔",
        Submit: "جمع کرائیں",
        ThereIsNoOneHere: "یہاں کوئی نہیں ہے۔",
        Update: "اپ ڈیٹ",
        View: "دیکھیں",
        Yes: "جی ہاں",
        YourDetails: "آپ کی تفصیلات"
    },
    Telerik: {
        grid: {
            groupPanelEmpty: "کالم ہیڈر کو گھسیٹیں اور اسے اس کالم کے مطابق گروپ میں یہاں چھوڑیں",
            pagerItemsPerPage: "آئٹمز فی صفحہ",
            pagerInfo: "{0} - {1} از {2} آئٹمز",
            pagerFirstPage: "پہلے صفحے پر جائیں",
            pagerPreviousPage: "پچھلے صفحے پر جائیں",
            pagerNextPage: "اگلے صفحے پر جائیں",
            pagerLastPage: "آخری صفحے پر جائیں",
            pagerPage: "صفحہ",
            pagerOf: "میں سے",
            pagerTotalPages: "{0}",
            filterClearButton: "صاف",
            filterEqOperator: "برابر ہے",
            filterNotEqOperator: "برابر نہیں ہے",
            filterIsNullOperator: "نال ہے",
            filterIsNotNullOperator: "نال نہیں ہے",
            filterIsEmptyOperator: "خالی ہے",
            filterIsNotEmptyOperator: "خالی نہیں ہے",
            filterStartsWithOperator: "شروع ہوتا ہے",
            filterContainsOperator: "مشتمل ہے",
            filterNotContainsOperator: "شامل نہیں ہے",
            filterEndsWithOperator: "اس کے ساتھ ختم ہوتا ہے",
            filterGteOperator: "اس سے بڑا یا اس کے برابر ہے",
            filterGtOperator: "اس سے بڑا ہے",
            filterLteOperator: "اس سے کم یا اس کے برابر ہے",
            filterLtOperator: "اس سے کم ہے",
            filterIsTrue: "سچ ہے",
            filterIsFalse: "غلط ہے",
            filterBooleanAll: "(تمام)",
            filterAfterOrEqualOperator: "اس کے بعد یا اس کے برابر ہے",
            filterAfterOperator: "اس کے بعد ہے",
            filterBeforeOperator: "پہلے ہے",
            filterBeforeOrEqualOperator: "اس سے پہلے یا برابر ہے",
            noRecords: "کوئی ریکارڈ دستیاب نہیں ہے۔",
            filterAriaLabel: "فلٹر",
            filterCheckAll: "سب کو چیک کریں",
            filterChooseOperator: "آپریٹر کا انتخاب کریں",
            filterSelectedItems: "منتخب اشیاء",
            filterSubmitButton: "فلٹر",
            filterTitle: "فلٹر",
            filterAndLogic: "اور",
            filterOrLogic: "یا",
            groupColumn: "گروپ کالم",
            searchPlaceholder: "تلاش",
            sortAriaLabel: "چھانٹنے والا",
            sortAscending: "صعودی ترتیب دیں",
            sortDescending: "سانٹ ڈسیڈنگ",
            ungroupColumn: "کالم کو غیر گروپ کریں"
        }
    }
}
