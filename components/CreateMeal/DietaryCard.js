import { HHLogoSmall } from "../HHLogo"
import PreviousButton from './PreviousButton'
import button from '../../styles/Button.module.css'
import common from '../../styles/common.module.css'
import styles from '../../styles/DietaryCard.module.css'

const DietaryCard = ({ meal, setMeal, setCard }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    setCard('products')
  }

  return (
    <div className={common.card}>
      <HHLogoSmall />
      <h2>Dietary Requirements</h2>
      <form className={common.form}>
        <div className={styles.checkboxContainer}>
          <div>
            <label>
              <input
                type="checkbox"
                value={meal.vegan}
                onChange={() => setMeal({...meal, vegan: !meal.vegan})}
              />
              Vegan
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value={meal.vegetarian}
                onChange={() => setMeal({...meal, vegetarian: !meal.vegetarian})}
              />
              Vegetarian
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value={meal.glutenFree}
                onChange={() => setMeal({...meal, glutenFree: !meal.glutenFree})}
              />
              Gluten-free
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value={meal.lactoseFree}
                onChange={() => setMeal({...meal, lactoseFree: !meal.lactoseFree})}
              />
              Lactose-free
            </label>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <PreviousButton onClick={() => setCard('name')} />
          <div
            className={button.green}
            style={{userSelect: 'none'}}
            onClick={handleSubmit}
          >
            Next
          </div>
        </div>
      </form>
    </div>
  )
}

export default DietaryCard
