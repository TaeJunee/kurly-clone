import GlobalHeader from '../../components/common/globalHeader/GlobalHeader'
import GlobalFooter from '../../components/common/globalFooter/GlobalFooter'
import Swipers from '../../components/swiper/Swipers'
import ProductType from '../../components/product/ProductType'
import { salesProductsList } from '../../components/fakeRepo/salesProducts/salesProducts';

function MainPage() {
  return (
    <>
      <GlobalHeader />
      <div>
        <Swipers />
        <ProductType items={salesProductsList.recommend} title={"이 상품 어때요?"} />
        <ProductType items={salesProductsList.bargain} title={"놓치면 후회할 가격"} />
      </div>
      <GlobalFooter />
    </>
    
  )
}

export default MainPage