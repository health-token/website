import Image from 'next/image'
import styles from '../../styles/MissionView.module.css'

const CreateView = () => {
  return (
    <div className={styles.missionView} style={{marginTop: 250, marginBottom: 250}}>
      <div className={styles.charityImageContainer}>
        <Image
          src="/phone2.svg"
          width={459}
          height={442}
        />
      </div>
      <div className={styles.missionTextContainer}>
        <h2>Create a Meal Plan</h2>
        <div>
          Create a meal plan using our intuitive system and
          get rewarded for your efforts with the $HELTH token.
        </div>
      </div>
    </div>
  )
}

export default CreateView
