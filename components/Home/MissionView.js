import Image from "next/image";
import styles from '../../styles/MissionView.module.css'

const MissionView = () => {
  return (
    <div className={styles.missionView}>
      <div className={'wow fadeInLeft'}>
        <Image
          src="/phone1.svg"
          width={469}
          height={397}
        />
      </div>
      <div className={
        `${styles.missionTextContainer} wow fadeInRight`
      }>
        <h2>Our mission</h2>
        <div>
          Through developing a growing list of apps
          that directly integrate out $HELTH crypto-currency
          coin we enable the creators to share their knowledge
          among users.
        </div>
      </div>
    </div>
  )
}

export default MissionView
