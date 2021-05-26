import Link from "next/link"
import { Component } from 'react'
import Image from "next/image"
import Button from '../../components/Button.js'
import styles from "../../styles/MainView.module.css"
import button from '../../styles/Button.module.css'

class MainView extends Component {
  render() { 
    return (
      <div className={styles.outer}>
        <div className={`${styles.mainContainer}`}>
          <div className={`${styles.descriptionContainer}  wow fadeInLeft`}>
            <div className={styles.smallHeading}>The future of</div>
            <div className={styles.largeHeading}>Digital Health</div>
            <p>
              Community driven token bringing the health industry into
              the future with decentralised finance.
            </p>
            <section 
              class="wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="2s"
            >
              <div style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
                <Link href="/whitepaper" passHref>
                  <Button className={button.green} text={'Whitepaper'} />
                </Link>
                <div  style={{marginLeft: 20}}>
                  <Link
                    href="https://poocoin.app/tokens/0x2bd7e7aed93d79d7d8a6d23dc7defc7d6b5d84ad"
                    passHref
                  >
                    <Button className={button.white} text={'View Chart'} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.imageContainer}>
            <section 
              class={'wow fadeIn'}
              data-wow-duration="1s" 
              data-wow-delay="1s"
            >
              <Image
                src="/tree.svg"
                alt="Tree"
                width={531}
                height={514}
              />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default MainView
