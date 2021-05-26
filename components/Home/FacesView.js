import SocialIcon from '../SocialIcon.js'
import Image from 'next/image'
import styles from '../../styles/FaceView.module.css'

const data = {
  jude: {
    imgSrc: '/jude.png',
    name: 'Jude Cornish',
    func: 'DESIGN & BRAND',
    description: 'Health & Fitness has been a passion of mine for some time.' +
      ' With Health Token, I have a platform to share that passion with as many' +
      'people as possible.',
    instagram: 'https://www.instagram.com/jude_cornish/',
    twitter: 'https://twitter.com/judecornish',
    youtube: 'https://youtube.com/c/JudeCornish',
  },
  yoni: {
    imgSrc: '/yoni.jpg',
    name: 'Yehonatan Aibi',
    func: 'CEO & CO-FOUNDER',
    description: 'Studying Finance BSc at Lancaster University. ' +
      'Founded related Fitness industry startups. ' +
      'Well networked within the fitness & wellbeing industry.',
    instagram: 'https://www.instagram.com/yoniaibi/',
    twitter: 'https://twitter.com/YoniAibi',
  },
  piotr: {
    imgSrc: '/piotr.jpeg',
    name: 'Piotr Ostrowski',
    func: 'CTO & CO-FOUNDER',
    description: 'In blockchain space since 2017.' +
      ' Full Stack Developer most comfortable in Python and modern JavaScript. ' +
      'AI&ML enthusiast, especially in the computer vision field.',
    instagram: 'https://instagram.com/piotr.ostroswki',
    github: 'https://github.com/piotr-ost',
    piotr: true
  }
}

const FacesView = () => {
  return (
    <div className={styles.container}>
      <h2 className={'wow fadeInUp'}>Our Team</h2>
      <div className={styles.facesView}>
        <Face guy={data.piotr} />
        <Face guy={data.yoni} />
        <Face guy={data.jude} />
      </div>
    </div>
  )
}

const Face = ({ guy }) => {
  return (
    <div className={`${styles.faceContainer} wow fadeIn`}>
      {
        guy.piotr
          ?
          <div className={styles.imageContainer}>
            <Image src={guy.imgSrc} width={300} height={300} />
          </div>
          :
          <div className={styles.imageContainerWithMargin}>
            <Image src={guy.imgSrc} width={265} height={265} />
          </div>
      }
      <div className={styles.name}>
        {guy.name}
      </div>
      <div className={styles.subtext}>
        {guy.func}
      </div>
      <div className={styles.description}>
        {guy.description}
      </div>
      <div className={styles.socialMedia}>
        {guy.github && <SocialIcon name={'github_dark'} href={guy.github} />}
        {guy.instagram && <SocialIcon name={'instagram_dark'} href={guy.instagram} />}
        {guy.twitter && <SocialIcon name={'twitter_dark'} href={guy.twitter} />}
        {guy.youtube && <SocialIcon name={'yt_dark'} href={guy.youtube} />}
      </div>
    </div>
  )
}

export default FacesView
