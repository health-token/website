import styles from "../../styles/StatsView.module.css";
import { useState, useEffect } from 'react'
import axios from 'axios'

const StatsView = () => {
  const [stats, setStats] = useState({
    'RAISED FOR CHARITY': '20,440,153,313 HELTH',
    'HOLDERS': '1028',
  })
  useEffect(() => {
    const proxy = 'https://api.allorigins.win/raw?url='
    const bscscan = 'https://bscscan.com/token/0x2bd7e7aed93d79d7d8a6d23dc7defc7d6b5d84ad'
    let holders
    axios.get(proxy + bscscan)
      .then(r => {
        let split = r.data.toLowerCase().split(' ')
        console.log(split)
        holders = split[split.indexOf('holders') + 1]
      })
  }, [])
  return (
    <div className={`${styles.statsView} wow fadeInUp`}>
        <script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js" />
        <Stat key={1} quantity={'22,656,684,506 HELTH'} label={'RAISED FOR CHARITY'} />
        <coingecko-coin-ticker-widget 
        coin-id="health-token" 
        currency="usd" 
        locale="en" 
        width="320" 
        style={{marginTop: 70}}
      />
        <Stat key={2} quantity={'1,377'} label={'HOLDERS'} />
    </div>
  )
}

const Stat = ({ quantity, label }) => {
  return (
    <div className={styles.stat}>
      <div className={styles.heading}>{quantity}</div>
      <div className={styles.subtext}>{label}</div>
  </div>
  )
}

export default StatsView
