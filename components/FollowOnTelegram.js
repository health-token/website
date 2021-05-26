import Image from 'next/image'
import styles from '../styles/FollowOnTelegram.module.css'

const FollowOnTelegram = () => {
  return (
    <div className={'wow zoomIn'}>
      <a href='https://t.me/officialhealthtoken'>
        <div className={styles.followOnTelegram}>
          <div>Join us on Telegram</div>
          <div style={{marginLeft: 50}}>
            <Image src="/telegram_large.svg" width={75} height={75} />
          </div>
        </div>
        <div className={styles.blank} />
      </a>
    </div>
  )
}

export default FollowOnTelegram
