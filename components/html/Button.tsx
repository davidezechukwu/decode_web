// import styles from '@/app/[locale]/layout.module.scss'

// export const Button = (props: any) => {
//     const { label, type, touched, ...others } = props;
//     const buttonProps = { ...others, type };    
//     return (<button className={`${styles['pkbuttontype' + type]} ${styles.pkbutton} `} type={type} {...buttonProps}>{label}</button>);
// };

import React from 'react';
import styles from '@/app/[locale]/layout.module.scss';

interface ButtonProps {
    label: string; // Button label
    type: 'submit' | 'reset' | 'button' | 'primary' | 'secondary' | undefined; // Allowed button types
    valid?: string | boolean | undefined // Non-standard attribute 
    visited?: string | boolean | undefined // Non-standard attribute 
    touched?: string | boolean | undefined // Non-standard attribute     
    locale?: string | undefined // Non-standard attribute
    validationMessage?: string | undefined // Non-standard attribute
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    [key: string]: any; // Allow additional custom props
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { label, valid, touched, visited, locale, validationMessage, onClick, ...filteredInputPops } = props;
    let { type,  ...filteredProps } = filteredInputPops;
    
    // Remove `type` as it's non-standard    
    switch(type){
        case 'primary':
        case 'secondary':
        case undefined: {
            type = 'button'
        }
        default:{
            type = type.toString().toLowerCase() as 'submit' | 'reset' | 'button' | 'primary' | 'secondary' | undefined;
        }
    }

    // Filter out non-standard attributes    
    // Remove `locale` as it's non-standard
    delete filteredProps.locale;     

    // Design by Contract: Ensure label and type are valid
    if (!label || typeof label !== 'string') {
        throw new Error('Precondition failed: "label" must be a non-empty string.');
    }
    if (!['submit', 'button', 'reset'].includes(type!)) {
        throw new Error('Precondition failed: "type" must be one of "submit", "button", or "reset".');
    }

    return (
        <button
            className={`${styles['pkbuttontype' + type]} ${styles.pkbutton}`}
            type={type as 'submit' | 'reset' | 'button' }
            onClick={onClick}
            {...filteredProps}
        >
            {label}
        </button>
    );
};
