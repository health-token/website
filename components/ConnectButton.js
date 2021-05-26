import { useState } from 'react'
import Web3 from 'web3'
import Image from 'next/image'
import button from '../styles/Button.module.css'

const getAddress = () => {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!')
    const web3 = new Web3(ethereum)
    ethereum
      .enable()
      .catch(err => console.log(err))
    const address = web3.eth.accounts[0]
    return web3.eth.getAccounts()
  }
}

const ConnectButton = ({ meal, setMeal }) => {
  const [creator, setCreator] = useState('')
  return (
    <div>
      {
        !meal.creator_address ?
          <div
            className={button.connect}
            onClick={() => getAddress().then(r => {
              let addr = r[0]
              setMeal({...meal, creator_address: addr})
              let beg = addr.slice(0, 4)
              let len = addr.length
              let end = addr.slice(len - 4, len)
              setCreator(beg + '...' + end)
            })}
          >
            Connect
            <div style={{marginLeft: 16, marginTop: 5}}>
              <Image
                src="/wallet.svg"
                width={25}
                height={22}
              />
            </div>
          </div>
          :
          <div 
            className={button.connect} 
            style={{color: '#5AD710', borderColor: '#5AD710'}}
          >
            {creator}
          </div>
      }
    </div>
  )
}

export default ConnectButton
