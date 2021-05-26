import Image from 'next/image'

const Roadmap = () => {
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: 190
      }}
      className={'wow fadeIn'}
    >
      <Image src="/roadmap.svg" width={1212} height={822}/>
    </div>
  )
}

export default Roadmap
