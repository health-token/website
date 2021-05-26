import { HHLogoSmall } from '../HHLogo.js'
import common from '../../styles/common.module.css'
import button from '../../styles/Button.module.css'
import Button from '../Button.js'

const ThankYouCard = () => {
  return (
    <div className={common.card}>
      <div style={{marginBottom: 30}}>
        <HHLogoSmall />
      </div>
      <div className={common.heading}>Thank you</div>
      <div className={common.subtext} style={{width: 600, marginTop: 30}}>
        Your meal has been submitted and will now be
        accessible to use in community meal plans.
      </div>
      <div style={{marginTop: 50}}>
        <Button
          href="/integrations"
          className={button.white}
          text={'Return to home'}
        />
      </div>
    </div>
  )
}

export default ThankYouCard