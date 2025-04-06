// eslint-disable-next-line @typescript-eslint/no-var-requires
import { ILookupNameValueResponse, ISuperConstants, StringUtility, } from '@david.ezechukwu/core'
import {  Copy } from 'lib'

export class LocalisationUtils {
    static DefaultLocale = 'en'

    // eslint-disable-next-line prettier/prettier
    static GetLocalisedCopy(
        locale = LocalisationUtils.DefaultLocale,
        device = 'web'
    ): Copy {
        locale = locale.toLowerCase()
        device = device.toLowerCase()
        // eslint-disable-line global-require
        // eslint-disable-next-line @typescript-eslint/no-var-requires 
        const copy: Copy = require(`../localisation/Copy_${locale}_${device}`).copy
        return copy
    }
    

    /**     
        A localised validation tip, dependant on the regex specified in regexFormat
        TODO: Check that ret += ` ${copy.Common.And} ` works with RTL languages
    */
    static GetValidationTip(
        copy: Copy,
        getvalidationtipoptions: {
            fieldValue: any,
            fieldName: string,
            regexFormat?: string | undefined,
            minLen?: number | undefined,
            maxLen?: number | undefined,
            min?: number | undefined,
            max?: number | undefined
        }
    ): string {
        let ret = StringUtility.StringFormat(copy.Errors.ValidationErrors.IsRequired, getvalidationtipoptions.fieldName)
        if (getvalidationtipoptions.minLen) {
            if (ret.length >= 0) {
                ret += ` ${copy.Common.And} `
            }
            ret += StringUtility.StringFormat(copy.Errors.ValidationErrors.MustHaveMinLen, getvalidationtipoptions.minLen.toString())
        }
        if (getvalidationtipoptions.maxLen) {
            if (ret.length >= 0) {
                ret += ` ${copy.Common.And} `
            }
            ret += StringUtility.StringFormat(copy.Errors.ValidationErrors.MustHaveMaxLen, getvalidationtipoptions.maxLen.toString())
        }
        if (getvalidationtipoptions.min) {
            if (ret.length >= 0) {
                ret += ` ${copy.Common.And} `
            }
            ret += StringUtility.StringFormat(copy.Errors.ValidationErrors.MustHaveMin, getvalidationtipoptions.min.toString())
        }
        if (getvalidationtipoptions.max) {
            if (ret.length >= 0) {
                ret += ` ${copy.Common.And} `
            }
            ret += StringUtility.StringFormat(copy.Errors.ValidationErrors.MustHaveMax, getvalidationtipoptions.max.toString())
        }
        if (getvalidationtipoptions.regexFormat) {
            if (getvalidationtipoptions.regexFormat == ISuperConstants.EMAIL_ADDRESS_REGEX) {
                const hasEmail = getvalidationtipoptions.fieldValue?.match(getvalidationtipoptions.regexFormat)
                if (ret.length >= 0) {
                    ret += ` ${copy.Common.And} `
                }
                ret += copy.Errors.ValidationErrors.MustBeEmailAddress
            } else {
                const hasLenght = getvalidationtipoptions.regexFormat.match(`\(\?\=\.\{(.*)\,\}\)`)
                if (!getvalidationtipoptions.minLen && hasLenght) {
                    if (ret.length >= 0) {
                        ret += ` ${copy.Common.And} `
                    }
                    ret += StringUtility.StringFormat(copy.Errors.ValidationErrors.MustHaveMinLen, hasLenght[1])
                }
            }
            const hasLowerCase = getvalidationtipoptions.regexFormat.indexOf(`(?=.*[a-z])`) >= 0
            if (hasLowerCase) {
                if (ret.length >= 0) {
                    ret += ` ${copy.Common.And} `
                }
                ret += copy.Errors.ValidationErrors.MustContainLowerCase
            }
            const hasUppererCase = getvalidationtipoptions.regexFormat.indexOf(`(?=.*[A-Z])`) >= 0
            if (hasUppererCase) {
                if (ret.length >= 0) {
                    ret += ` ${copy.Common.And} `
                }
                ret += copy.Errors.ValidationErrors.MustContainUpperCase
            }
            const hasSpecial = getvalidationtipoptions.regexFormat.indexOf(`(?=.*[@#$%^&+*!=])`) >= 0
            if (hasSpecial) {
                if (ret.length >= 0) {
                    ret += ` ${copy.Common.And} `
                }
                ret += copy.Errors.ValidationErrors.MustContainSpecialCharacter
            }
        }
        return ret
    }

    
    /**      
        A localised validation tip
        TODO: Check that ret += ` ${copy.Common.Or} ` works with RTL languages
        TODO: Use SWR for better performace
    */
        static GetValidationTipForLookups(
            copy: Copy,
            getvalidationtipforlookupsoptions: {                
                Lookups: ILookupNameValueResponse[],
                Item: string,
            }
        ): string {
            let ret = copy.Common.Provide                         
            getvalidationtipforlookupsoptions.Lookups.map( (loopkup, index) => {
                if ( index > 0){
                    ret += ` ${copy.Common.Or} ${loopkup.Name}` 
                }else{
                    ret += ` ${loopkup.Name}`     
                }                
            })
            ret += ` ${getvalidationtipforlookupsoptions.Item}` 
            return ret
        }
}
