import Image from 'next/image'
import button from '../../styles/Button.module.css'

const PreviousButton = ({onClick}) => {
  return (
    <div className={button.previous} onClick={onClick} style={{userSelect: 'none'}}>
      <div style={{marginRight: 20, marginTop: 5}}>
        <Image src="/arrow.svg" width={17} height={17} />
      </div>
      Previous
    </div>
  )
}

export default PreviousButton