import Link from 'next/link'
import {LogoDark} from './Logo.js'
import styles from '../styles/Header.module.css'
import Button from "./Button.js";

const Header = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.header}>
        <LogoDark />
        <div className={styles.linksBit}>
          <Link href="/integrations">
            <a>Integrations</a>
          </Link>
          <Link href="/audit">
            <a>Audit</a>
          </Link>
          <a
            href='https://github.com/piotr-ost/health-token'
          >
            GitHub
          </a>
          <Link href="/whitepaper">
            <a>Whitepaper</a>
          </Link>
        </div>
        <section 
          class="wow pulse" 
          data-wow-duration="2s" 
          data-wow-delay="2s"
        >
          <Link
            href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x2bD7E7aEd93D79d7D8a6D23DC7dEFC7D6b5D84ad"
            passHref
          >
            <Button
              className={styles.buyButton}
              text={'Buy now'}
            />
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Header
