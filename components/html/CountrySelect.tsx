'use client'
import Select from 'react-select'
import { useId } from 'react'
import { ILookupLanguageResponse } from '@david.ezechukwu/core'

export type CountrySelelctProps = {
    onLanguageSelectChange: any,
    languages: ILookupLanguageResponse[],
    value: any,
}

export function CountrySelelct({ onLanguageSelectChange, languages, value }: CountrySelelctProps) {
    const languageSelelctOptions: any = []
    languages
        ? languages.forEach((language: ILookupLanguageResponse) =>
              languageSelelctOptions.push({
                  value: language.Value,
                  label: `${language.Name} [${language.Value}]`,
              })
          )
        : void null

    return (
        <>
            <Select
                options={languageSelelctOptions}
                aria-label="select"
                onChange={onLanguageSelectChange}
                instanceId={useId()}
                className="basic-single"
                classNamePrefix="select"
                defaultValue={value}
                value={value}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={value?.IsRTL}
                isSearchable={false}
                name="language"
            />
        </>
    )
}
