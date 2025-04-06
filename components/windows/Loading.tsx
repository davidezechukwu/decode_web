import styles from '@/app/[locale]/layout.module.scss'

export function Loading() {    
    return (
        <div className={styles.pksususpensecomponent} >
            <div className={styles.pksususpensespinnercontainer}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
  }