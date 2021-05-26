import {HHLogoSmall} from '../HHLogo'
import PreviousButton from "./PreviousButton"
import common from '../../styles/common.module.css'
import styles from '../../styles/FinalCard.module.css'
import button from '../../styles/Button.module.css'
import axios from 'axios'

const FinalCard = ({ meal, setCard }) => {
  const cost = (meal.cost / 100).toFixed(2)
  const saveMeal = () => {
    meal.products = Object.keys(meal.products).join()
    meal.cost = meal.cost.toString()
    delete meal.imgSrc
    if (!meal.creator_address)
      meal.creator_address = '0xeBd2e9f38B6216923D0c59520dBDc52E6edB8B78' 
    let mealJson = JSON.stringify(meal)
    const url = 'https://handler.health/meals'
    console.log(meal)
    const conf = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios
      .post(url, mealJson, conf)
      .then(r => console.log(r))
      .then(setCard('thank'))
      .catch(err => console.log(err))
  }
  return (
    <div className={common.card} >
      <div className={styles.buttonContainer}>
        <PreviousButton onClick={() => setCard('image')}/>
        <div
          className={button.green}
          style={{userSelect: 'none'}}
          onClick={saveMeal}
        >
         Finish
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.infoContainer}>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: 25}}>
            <HHLogoSmall  />
            <div style={{marginLeft: 30, marginTop: 5}} className={common.heading}>{meal.name}</div>
          </div>
          <div className={styles.subheading}>Ingredients:</div>
          <div>
            {
              Object.values(meal.products).map(
                (product) => <div className={styles.body}>{product.name}</div>
              )
            }
          </div>
          <div className={styles.subheading} style={{marginTop: 15}}>Cost: ${cost}</div>
          {
            meal.description &&
            <div className={styles.descText} style={{marginTop: 15}}>{meal.description}</div>
          }
        </div>
        <img
          id="preview"
          width={500}
          height={500}
          alt="thumbnail"
          src={meal.imgSrc}
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default FinalCard
