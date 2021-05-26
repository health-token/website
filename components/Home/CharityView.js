import Image from "next/image"
import styles from '../../styles/MissionView.module.css'

const CharityView = () => {
  return (
    <div className={styles.missionView}>
      <div className={`${styles.missionTextContainer} wow fadeInLeft`}>
        <h2>Charity</h2>
        <div>
          Eventually, we will be providing a dashboard for $HELTH holders
          to donate directly to causes they are passionate about. These donations
          will incur minimal fees and empower truly great causes.
        </div>
      </div>
      <div className={`${styles.charityImageContainer} wow fadeInRight`} >
        <Image
          src="/charity.svg"
          width={449}
          height={470}
        />
      </div>
    </div>
  )
}

export default CharityView
