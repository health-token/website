import Head from "../components/Head.js"
import Header from '../components/Header.js'
import MainView from '../components/Integrations/MainView.js'
import CreateView from '../components/Integrations/CreateView.js'
import Footer from '../components/Footer.js'
import common from '../styles/common.module.css'
import DownloadView from '../components/Integrations/DownloadView.js'
import Image from 'next/image'

const Integrations = () => {
  return (
    <div className={common.screen}>
      <Head />
      <Header />
      <MainView />
      <div 
        className={common.borderContainer} 
        
      >
        <div style={{marginTop: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image src="/hh_design.png" width={1730} height={696} />
        </div>
        <DownloadView />
      </div>
      <Footer />
    </div>
  )
}

export default Integrations
