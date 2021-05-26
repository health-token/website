import Link from 'next/link'
import { LogoDark } from './Logo.js'
import ConnectButton from './ConnectButton.js'
import styles from '../styles/Header.module.css'

const CreateHeader = ({ meal, setMeal }) => {
  return (
    <div className={styles.header}>
      <LogoDark />
      <div className={styles.linksBit} style={{width: 300}}>
        <Link href="/create">
          <a>Create a meal</a>
        </Link>
        <Link href="/">
          <a>Create a plan</a>
        </Link>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ConnectButton meal={meal} setMeal={setMeal} />
        <div className={styles.buyButton} style={{marginLeft: 15}}>
          <Link href="/">
            Buy now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateHeader
