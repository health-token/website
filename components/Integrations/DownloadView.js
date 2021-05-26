import Image from 'next/image'
import styles from '../../styles/FollowOnTelegram.module.css'

const FollowOnTelegram = () => {
  return (
    <div>
      <div
        className={styles.followOnTelegram}
        style={{flexDirection: 'column'}}
      >
        <div style={{
          display: 'flex', marginBottom: 30, flexDirection: 'row',
          width: 150, justifyContent: 'space-between'
        }}>
          <div>
            <Image src="/play.svg" width={60} height={60} />
          </div>
          <div style={{marginTop: 3}}>
            <Image src="/store.svg" width={54} height={54} />
          </div>
        </div>
        <div>Download Health Handler</div>
      </div>
      <div className={styles.blank} />
    </div>
  )
}

export default FollowOnTelegram
