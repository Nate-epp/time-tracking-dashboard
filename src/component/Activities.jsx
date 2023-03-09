import React from 'react'
import styles from './Activities.module.css'

function Activities({title, current, last, color, image}) {
  return (
    <div className={styles.activity} style={{backgroundColor: color}}>
        <div className={styles.activity__upper}>
               <img src={image}/>
        </div>  
        <div className={styles.activity__lower}>
                <div className={styles.header}>
                    <p>{title}</p>
                    <img src='./src/images/icon-ellipsis.svg' />
                </div>
                <h1 className={styles.current}> {current}hrs</h1>
                <p>Last week - {last}hrs</p>
        </div>
        
    </div>
  )
}

export default Activities