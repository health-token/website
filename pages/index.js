import Head from '../components/Head.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import MainView from '../components/Home/MainView.js'
import StatsView from '../components/Home/StatsView.js'
import MissionView from '../components/Home/MissionView.js'
import CharityView from '../components/Home/CharityView.js'
import TokenomicsView from '../components/Home/TokenomicsView.js'
import Roadmap from '../components/Home/Roadmap.js'
import FacesView from '../components/Home/FacesView.js'
import FollowOnTelegram from "../components/FollowOnTelegram.js"
import common from '../styles/common.module.css'


const Home = () => {
  return (
    <div className={common.screen}>
      <Head />
      <Header />
      <MainView />
      <div className={common.borderContainer}>
        <StatsView />
        <MissionView />
        <CharityView />
        <Roadmap />
        <TokenomicsView />
        <FacesView />
        <FollowOnTelegram />
      </div>
      <Footer />
    </div>
  )
}

export default Home
