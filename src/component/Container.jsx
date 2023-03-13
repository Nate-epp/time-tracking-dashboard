import React from 'react'
import Activities from './Activities'
import styles from './Container.module.css'
import timeTrack from '/Users/nate_epp/Documents/FrontEndPractice/time-tracking-dashboard-main/time-tracking-dashboard/src/data.json'
import {useState} from 'react'

function Container() {
  const [daily, setDaily] = useState(false)
  const [weekly, setWeekly] = useState(true)

  function dailyHandler() {
      setDaily(true);
      setWeekly(false);
  }

  function weeklyHandler() {
      setDaily(false);
      setWeekly(true);
}

  function monthlyHandler() {
      setDaily(false);
      setWeekly(false);
}

  return (
    <div className={styles.container}>
        <div className={styles.profile}> 
            <div className={styles.profile__upper}>
                <img src='/src/images/image-jeremy.png' alt='profile-pic'/>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <div className={styles.profile__lower} >      
                <button type='button' onClick={dailyHandler}>Daily</button>
                <button type='button' onClick={weeklyHandler}>Weekly</button>
                <button type='button' onClick={monthlyHandler}>Monthly</button>
            </div>
        </div>
        
       {/* {timeTrack.map(timeTrack => <Activities title={timeTrack.title} current={timeTrack.timeframes.weekly.current} last={timeTrack.timeframes.weekly.previous} color={timeTrack.color} image={timeTrack.image}/>)} */}
       {daily ? 
       timeTrack.map(timeTrack => <Activities title={timeTrack.title} current={timeTrack.timeframes.daily.current} last={timeTrack.timeframes.daily.previous} color={timeTrack.color} image={timeTrack.image}/>):
       (weekly? 
       timeTrack.map(timeTrack => <Activities title={timeTrack.title} current={timeTrack.timeframes.weekly.current} last={timeTrack.timeframes.weekly.previous} color={timeTrack.color} image={timeTrack.image}/>):
       timeTrack.map(timeTrack => <Activities title={timeTrack.title} current={timeTrack.timeframes.monthly.current} last={timeTrack.timeframes.monthly.previous} color={timeTrack.color} image={timeTrack.image}/>))}
    </div>
  )
}

export default Container