import styles from '@/app/[locale]/layout.module.scss'
import { useState } from 'react';

export const PlayComponent = (props: any) => {
    const {label,type,...others} = props;        

    const IsPickable = (digit: number) : boolean =>{
        return true
    }
    
    const IsPickSelected = (digit: number): boolean =>{
        return false
    }
    
    const IsDisabled = (digit: number): boolean =>{
        return false
    }

    const IsReadOnly = (digit: number): boolean =>{
        return false
    }
    
    const OnSelectRequiredMatches = (digit: number) =>{
        return
    }
    
    const OnUp = (digit: number) =>{
        return
    }

    const OnDown = (digit: number) =>{
        return
    }

    const [Number10, SetNumber10] = useState(0)
    //return (<button className={`${styles['pkbuttontype' + type]} ${styles.pkbutton} `} type={type} {...others}>{label}</button>);
    return (
        <article className={`pk-component PlayComponent`}>
            <div>
                <h2 className={`pk-game-name`}>Game.DisplayName. <span>EachPlayCosts, Game.Price</span></h2>
                <form>
                    <table className={`pk-pickers pk-container`}>                        
                        <thead></thead>
                        <tbody>
                            <tr>
                                {IsPickable(9) && 
                                    <>
                                        <td className={`pk-number pk-number10`}>
                                            <input onChange={(e) =>{debugger; alert('dfdf'); SetNumber10(+e)}} value={Number10} type="number" name="pickReversed10" className={`pk-form  pk-form10`} disabled={IsDisabled(9)} readOnly={!IsReadOnly(9)} size={1} min="0" max="9" title='10' />
                                        </td>
                                        <td className={`pk-number pk-number10`}>
                                            <table>
                                                <thead></thead>
                                                <body>
                                                    <tr>
                                                        <td className={`pk-level2`}>
                                                            <i className={`pk-spinner pk-up fa fa-caret-up`} aria-hidden="true" onClick={() => OnUp(9)}></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`pk-level2`}>
                                                            <i aria-hidden="true" onClick={() => {OnSelectRequiredMatches(10)}}></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`pk-level2`}>
                                                            <i className={`pk-spinner pk-down fa fa-caret-down`} aria-hidden="true" onClick={() => OnDown(9)}></i>
                                                        </td>
                                                    </tr>
                                                </body>
                                                <tfoot></tfoot>
                                            </table>
                                        </td>
                                    </>
                                }
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </form>    
            </div>
        </article>
    )
};
  