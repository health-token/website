import Link from 'next/link'
import { LogoLight } from './Logo.js'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import SocialIcon from '../components/SocialIcon.js'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <LogoAndDescription />
      <Navigate />
      <Privacy />
      <Copyright />
    </div>
  )
}

const LogoAndDescription = () => {
  return (
    <div>
      <LogoLight />
      <div className={styles.bodyText}>
        A cryptocurrency with a mission to be a platform for
        healthy meal plans. Enabling creators in the health
        and fitness space to earn through their content and
        token holders to make donate to great initiatives with
        minimal fees.
      </div>
      <SocialIcons />
    </div>
  )
}

const Navigate = () => {
      return (
        <div className={styles.subs}>
          <div className={styles.heading}>Navigate</div>
          <Link href="/integrations">Integrations</Link>
          <br />
          <Link href="/">How to buy</Link>
          <br />
          <Link href="/whitepaper">White paper</Link>
          <br />
          <Link href="/create">Health Handler</Link>
        </div>
      )
}

const Privacy = () => {
  return (
    <div className={styles.subs}>
      <div className={styles.heading}>Privacy & TOS</div>
      <Link href="/">Privacy Policy</Link>
      <br />
      <Link href="/">Terms of service</Link>
    </div>
  )
}

const Copyright = () => {
  return (
    <div className={styles.subs}>
      <div className={styles.heading}>Copyright</div>
      <div>©2021 Health</div>
    </div>
  )
}

const SocialIcons = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
     <SocialIcon name={'instagram'} href={'https://www.instagram.com/realhealthtoken/'} />
     <SocialIcon name={'twitter'} href={'https://twitter.com/realhealthtoken'} />
     <SocialIcon name={'telegram'} href={'https://t.me/officialhealthtoken'} />
     <SocialIcon name={'mail'} href={'mailto: Healthtoken11@gmail.com'} />
     <SocialIcon name={'reddit'} href={'https://www.reddit.com/r/HealthToken/'}/>
    </div>
  )
}


export default Footer
