import styles from "../../styles/ProductsCard.module.css";
import Image from "next/image";

const parseP = (price, currency) => {
  if (currency === 'p')
    return price
  else
    return price * 100
}

const Product = ({ id,
                   name,
                   img_url,
                   price,
                   currency,
                   amount,
                   unit,
                   meal,
                   setMeal,
                   products,
                   setProducts,
}) => {
  const select = () => {
    let selected_ = {}
    selected_[id] = products[id]
    let newCost = meal.cost + parseP(price, currency)
    setMeal({
      ...meal,
      products: {...meal.products, ...selected_},
      cost: newCost
    })
    delete products[id]
    setProducts(products)
  }

  if (unit === 'kg')
    unit = '/kg'
  return (
    <div className={styles.productContainer} onClick={select}>
      <Image src={img_url} width={200} height={200} style={{borderRadius: 10}}/>
      <div className={styles.col}>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.qty}>{amount}{unit !== 'unit' ? unit : ''}</div>
        </div>
        <div className={styles.price}>{price}{currency}</div>
      </div>
    </div>
  )
}

export default Product
