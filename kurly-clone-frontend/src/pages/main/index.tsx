import Swipers from '../../components/swiper/Swipers'
import RandomCollection from '../../components/mainPageSection/RandomCollection'
import MDChoices from '../../components/mainPageSection/MDChoices'


function MainPage() {
  return (
    <div>
      <Swipers />
      
      <RandomCollection title={'이 상품 어때요?'} onSale={false} more={false} />
      <RandomCollection title={'놓치면 후회할 가격'} onSale={true} more={true} />
      <MDChoices onSale={false} />
    </div> 
  )
}

export default MainPage