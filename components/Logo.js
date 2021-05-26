import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Logo.module.css'

export const LogoDark = () => {
  return (
    <div style={{userSelect: 'none'}}>
      <Link href="/" passHref>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={79}
            height={79}
          />
          <div className={styles.textBit}>
            <div className={styles.logoMainDark}>HEALTH</div>
            <div className={styles.logoSubDark}>$HELTH</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export const LogoLight = () => {
  return (
    <div className={styles.logoContainer} style={{userSelect: 'none'}}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={79}
        height={79}
      />
      <div className={styles.textBit}>
        <div className={styles.logoMainLight}>HEALTH</div>
        <div className={styles.logoSubLight}>$HELTH</div>
      </div>
    </div>
  )
}
