import { HHLogoSmall } from "../HHLogo.js"
import button from '../../styles/Button.module.css'
import common from '../../styles/common.module.css'
import styles from '../../styles/NameCard.module.css'
import PreviousButton from "./PreviousButton";

const DescribeCard = ({ meal, setMeal, setCard }) => {
  return (
    <div className={common.card}>
      <div className={common.buttonContainer}>
        <PreviousButton onClick={() => setCard('image')}/>
        <div
          className={meal.description?.length > 30 ? button.green : button.disabled}
          style={{userSelect: 'none'}}
          onClick={meal.description?.length > 30 ? () => setCard('final') : () => {}}
        >
          Next
        </div>
      </div>
      <div style={{marginBottom: 30}}>
        <HHLogoSmall />
      </div>
      <div className={common.subtext}>Provide a brief description of your meal</div>
      <div className={common.heading} style={{marginTop: 10}}>Describe your meal</div>
      <textarea
        value={meal.description ? meal.description : ''}
        onChange={e => setMeal({...meal, description: e.target.value})}
        placeholder="1. Add pasta to boiling water as the onions and garlic are sweating in the pan..."
        className={styles.textInput}
        style={{width: 930, height: 230, marginTop: 50, paddingTop: 40}}
      />
    </div>
  )
}

export default DescribeCard
