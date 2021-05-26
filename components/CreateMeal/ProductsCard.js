import { useState, useEffect } from 'react'
import { HHLogoSmall } from '../HHLogo.js'
import axios from 'axios'
import PreviousButton from './PreviousButton.js'
import Product from './Product.js'
import SelectedProduct from './SelectedProduct.js'
import Image from 'next/image'
import button from '../../styles/Button.module.css'
import styles from '../../styles/ProductsCard.module.css'
import lodash from 'lodash'

const ProductsCard = ({ meal, setMeal, setCard }) => {

  const [products, setProducts] = useState({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://handler.health/products')
      .then(r => {
        let i = 0
        let products_ = {}
        for (let product of r.data) {
          product.id = i
          products_[i] = product
          i++
        }
        setProducts(products_)
      })
      .then(() => console.log(products))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <PreviousButton onClick={() => setCard('dietary')}/>
        <div
          className={!lodash.isEmpty(meal.products)
            ? button.green
            : button.disabled
          }
          style={{userSelect: 'none'}}
          onClick={!lodash.isEmpty(meal.products)? () => setCard('image') : () => {}}
        >
          Next
        </div>
      </div>
      <HHLogoSmall />
      <div className={styles.row}>
        <p style={{fontSize: 30}}>{meal.name}</p>
        <p style={{fontSize: 30}}>${(meal.cost / 100).toFixed(2)}</p>
      </div>
      <div className={styles.selectedContainer}>
        {
         !lodash.isEmpty(meal.products)
            ? Object.entries(meal.products).map(([ id, product]) =>
                <SelectedProduct
                  meal={meal} setMeal={setMeal}
                  products={products} setProducts={setProducts}
                  key={id}  {...product}
                />
              )
            : <SelectPlaceholder
              onClick={() => document.getElementById('inp').focus()}
            />
        }
      </div>
      <h2>
        Search products
      </h2>
      <input
        value={search}
        className={styles.input}
        id="inp"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Product name..."
      />
      {
        search.length > 2 &&
        <div>
          {
            Object.entries(products).map(([_, product]) =>
              product.name.toLowerCase().includes(search.toLowerCase())
                ? <Product
                  meal={meal} setMeal={setMeal}
                  products={products} setProducts={setProducts}
                  key={product.id} {...product}
                />
                : null
            )
          }
        </div>
      }
    </div>
  )
}

const SelectPlaceholder = ({onClick}) => {
  return (
    <div>
      <div className={styles.subtext}>INGREDIENT 1</div>
      <div onClick={onClick} className={styles.placeholder}>
        <Image src="/plus.svg" width={54} height={54} />
      </div>
    </div>
  )
}


export default ProductsCard
