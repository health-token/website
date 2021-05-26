import Image from "next/image";
import styles from '../../styles/TokenomicsView.module.css'

const TokenomicsView = () => {
  return (
    <div className={styles.tokenomicsView}>
      <h2 className={'wow fadeInUp'}>Tokenomics</h2>
      <div className={
        `${styles.tokenomicsDescription} wow fadeInUp`
      }>
        <div className={styles.text}>
          $HELTH is designed not only to provide sustainability
          but also to empower amazing health-based charities
          along the way.
          <br />
          4% of each transaction will be distributed as follows:
        </div>
      </div>
        <div className={styles.outerContainer}>
          <div className={`${styles.containerBig} wow fadeInLeft`}>
            <Image
              src="/beat.jpg"
              width={187}
              height={181}
            />
            <div className={styles.subheading}>0.5% Beat Eating disorders</div>
            <p>
              "Beat exists to end the pain and
              suffering caused by eating disorders."
            </p>
            <p>CN: 801343</p>
            <a
              href="https://www.beateatingdisorders.org.uk/"
              className={styles.text}
              style={{color: '#48AC0D'}}
            >
              Learn more
            </a>
          </div>
          <div className={`${styles.containerBig} wow fadeInRight`}>
            <Image
              src="/brain.svg"
              width={268}
              height={196}
            />
            <div className={styles.subheading}>0.5% Sport in Mind</div>
            <p>
              "Sport in Mind is a mental health
              charity that uses sport and exercise
              to promote mental well-being."
            </p>
            <p className="sub-text">CN: 1161323</p>
            <a
              href="https://www.sportinmind.org/"
              className={styles.text}
              style={{color: '#48AC0D'}}
            >
              Learn more
            </a>
          </div>
        </div>
      <div className={styles.outerContainer} style={{marginTop: 65}}>
        <div className={`${styles.containerSmall} wow fadeInLeft`}>
          <Image
            src="/cash.svg"
            width={77}
            height={62}
          />
          <div className={styles.subheading}>1% Liquidity</div>
          <p>
            Liquidity tax box - Every transaction automatically contributes
            to the locked liquidity pool.
          </p>
        </div>
        <div className={`${styles.containerSmall} wow fadeInRight`}>
          <Image
            src="/world.svg"
            width={77}
            height={77}
          />
          <div className={styles.subheading}>2% Redistribution</div>
          <p>
            A fraction of all transactions will be redistributed to
            all existing holders to reward them for supporting our community
            and our mission.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsView
