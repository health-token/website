import styles from "../../styles/ProductsCard.module.css";
import Image from "next/image";

const parseP = (price, currency) => {
  if (currency === 'p')
    return price
  else
    return price * 100
}

const SelectedProduct = ({
                           id,
                           name,
                           img_url,
                           price,
                           currency,
                           meal,
                           setMeal,
                           products,
                           setProducts
                         }) => {

  const unselect = () => {
    let products_ = {}
    products_[id] = meal.products[id]
    setMeal({
      ...meal,
      cost: meal.cost - parseP(price, currency),
      products: meal.products
    })
    setProducts({...products, ...products_})
    delete meal.products[id]
  }

  return (
    <div>
      <div className={styles.selectedProduct} onClick={unselect}>
        <Image src={img_url} width={200} height={200} />
      </div>
    </div>
  )
}

export default SelectedProduct
