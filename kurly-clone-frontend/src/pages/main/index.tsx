import Swipers from '../../components/swiper/Swipers'
import RandomCollection from '../../components/mainPageSection/RandomCollection'
import { getRandomProducts, getRandomProductsOnsale } from '../../api/product'


function MainPage() {
  return (
    <div>
      <Swipers />
      <RandomCollection title={'이 상품 어때요?'} fn={getRandomProducts} more={false} />
      <RandomCollection title={'놓치면 후회할 가격'} fn={getRandomProductsOnsale} more={true} />
    </div> 
  )
}

export default MainPage