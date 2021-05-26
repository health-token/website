import { useState } from 'react'
import Head from '../components/Head.js'
import CreateHeader from '../components/CreateHeader.js'
import NameCard from '../components/CreateMeal/NameCard.js'
import DietaryCard from '../components/CreateMeal/DietaryCard.js'
import ProductsCard from '../components/CreateMeal/ProductsCard.js'
import ImageCard from '../components/CreateMeal/ImageCard.js'
import DescribeCard from '../components/CreateMeal/DescribeCard.js'
import FinalCard from '../components/CreateMeal/FinalCard.js'
import ThankYouCard from '../components/CreateMeal/ThankYouCard.js'
import common from '../styles/common.module.css'

const CreateMeal = () => {
  const [card, setCard] = useState('name')
  const [meal, setMeal] = useState({
    cost: 0,
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    lactoseFree: false
  })
  return (
    <div className={common.screen}>
      <Head />
      <CreateHeader meal={meal} setMeal={setMeal} />
      <div className={common.borderContainer}>
        {
          card === 'name' &&
          <NameCard meal={meal} setMeal={setMeal} setCard={setCard} />
        }
        {
          card === 'dietary' &&
          <DietaryCard meal={meal} setMeal={setMeal} setCard={setCard} />
        }
        {
          card === 'products' &&
          <ProductsCard meal={meal} setMeal={setMeal} setCard={setCard} />
        }
        {
          card === 'image' &&
          <ImageCard meal={meal} setMeal={setMeal} setCard={setCard} />
        }
        {
          card === 'describe' &&
          <DescribeCard meal={meal} setMeal={setMeal} setCard={setCard} />
        }
        {
          card === 'final' && <FinalCard meal={meal} setCard={setCard} />
        }
        {
          card === 'thank' && <ThankYouCard />
        }
      </div>
    </div>
  )
}

export default CreateMeal
