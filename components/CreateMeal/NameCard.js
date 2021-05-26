import { HHLogoSmall } from "../HHLogo.js"
import button from '../../styles/Button.module.css'
import common from '../../styles/common.module.css'
import styles from '../../styles/NameCard.module.css'

const NameCard = ({ meal, setMeal, setCard }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    setCard('dietary')
  }

  return (
    <div className={common.card}>
      <HHLogoSmall />
      <h2>Create a new meal</h2>
      <form className={common.form} onSubmit={handleSubmit}>
        <input
          name="name"
          value={meal.name ? meal.name : ''}
          className={styles.textInput}
          onChange={e => setMeal({...meal, name: e.target.value})}
          placeholder="Meal name..."
        />
        <div
          className={meal.name
            ? button.green
            : button.disabled
          }
          style={{userSelect: 'none'}}
          onClick={meal.name ? handleSubmit : () => {}}
        >
          Next
        </div>
      </form>
    </div>
  )
}

export default NameCard
