import styles from "../../styles/MainView.module.css"
import Image from "next/image"
import Link from 'next/link'
import Button from '../Button.js'
import button from '../../styles/Button.module.css'

const MainView = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.mainContainer}>
        <div className={styles.descriptionContainer}>
          <div className={styles.smallHeading}>Introducing</div>
          <div className={styles.largeHeading}>Health Handler</div>
          <p style={{textAlign: "justify"}}>
            Health Handler is a community run interactive app that
            provides you with a customized meal plan catered specifically
            to your needs and wants. It also allows to you to generate a
            shopping list detailing exactly how much healthy eating would
            cost you for that week.
          </p>
          <div style={{marginTop: '3vh', display: 'flex', flexDirection: 'row'}}>
            <Link href="/create" passHref>
              <Button text={'Create'} className={button.green}  />
            </Link>
            <div style={{marginLeft: 20}}>
              <Link href="/meals" passHref >
                <Button text={'Meals'} className={button.white}  />
              </Link>
            </div>
            <div style={{marginLeft: 20}}>
              <Link href="/meal-plans" passHref >
                <Button text={'Meal Plans'} className={button.white}  />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/hh.svg"
            alt="Tree"
            width={336}
            height={281}
          />
        </div>
      </div>
    </div>
  )
}

export default MainView
