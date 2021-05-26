import styles from "../styles/Footer.module.css"
import Image from "next/image"

const SocialIcon = ({ name, href }) => {
  return (
    <a className={styles.socialIcon} href={href}>
      <Image src={'/' + name + '.svg'} width={20} height={20}/>
    </a>
  )
}

export default SocialIcon