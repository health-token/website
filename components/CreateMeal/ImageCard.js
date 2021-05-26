import { HHLogoSmall } from '../HHLogo.js'
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import common from '../../styles/common.module.css'
import button from '../../styles/Button.module.css'
import styles from '../../styles/ImageCard.module.css'
import PreviousButton from "./PreviousButton";
import AWS from 'aws-sdk'

AWS.config.region = 'us-east-1'
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:4e74055b-5f91-497d-ba26-339715fd8770',
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: 'meal-photos'}
})

const bufToBase64 = (arrayBuffer) => {
  return btoa(
    new Uint8Array(arrayBuffer)
      .reduce(
        (d, b) => d + String.fromCharCode(b), ''
      )
  )
}

const ImageCard = ({ meal, setMeal, setCard }) => {

  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(meal.imgSrc !== undefined)
  console.log(uploaded)
  console.log(meal)

  const onDrop = useCallback(files => {
    files.forEach(file => {
      setUploading(true)
      s3.upload({
          Bucket: 'meal-photos',
          Key: 'photos/' + file.name,
          Body: file
        }, (err, data) => {
          if (!err) {
            setUploading(false)
            console.log('data:', data)
            console.log(file)
            let imgSrc = 'data:image/png;base64,'
            file.arrayBuffer().then(buf => {
              imgSrc += bufToBase64(buf)
              setMeal({...meal, img: data.Location ?? data.Key, imgSrc: imgSrc})
              document.getElementById('preview').src = imgSrc
              setUploaded(true)
            })
          } else {
              console.log(err)
          }
        }
      )
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop })

  return (
    <div className={common.card} >
      <div className={styles.buttonContainer}>
      <input {...getInputProps()} />
        <PreviousButton onClick={() => setCard('products')}/>
        <div
          className={uploaded ? button.green : button.disabled}
          style={{userSelect: 'none'}}
          onClick={uploaded ? () => setCard('describe') : () => {}}
        >
          Next
        </div>
      </div>
      <img
        id="preview"
        width={200}
        height={200}
        alt="thumbnail"
        src={meal.imgSrc ? meal.imgSrc : null}
        style={!uploaded ? {visibility: 'hidden'} : {visibility: 'visible'}}
      />
      <div {...getRootProps()} className={styles.flex}>
        {
          !uploaded &&
          <HHLogoSmall />
        }
        {
          isDragActive
            ? <div className={common.heading}>Drop here</div>
            : <DropBoxPlaceholder uploading={uploading} />
        }
        <div style={{marginTop: 50}} >
          <Image src="/upload.svg" width={105} height={84} />
        </div>
      </div>
    </div>
  )
 }

 const DropBoxPlaceholder = ({ uploading }) => {
  return (
    <div>
      {
        uploading
          ? <div className={common.heading}>Uploading...</div>
          : <Upload />
      }
    </div>
  )
 }

 const Upload = () => {
  return (
    <div>
      <div className={common.subtext}>Drag a file or click to upload your meal's</div>
      <div className={common.heading}>Thumbnail image</div>
    </div>
  )
 }

export default ImageCard
