const calc =  (price: number, rate: number) => (
  Math.round(price * (1 - rate / 100) / 10)  * 10)

export type ProductInformation = {
  img: string,
  text: string,
  price: number,
  rate: number,
  saledPrice: Function,
}
export type ProductTypes = {
  recommend: ProductInformation[],
  bargain: ProductInformation[],
}

export const salesProductsList: ProductTypes = {
  recommend: [{
    img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653036825212l0.jpeg",
    text: "[Kurly's] 동물복지 유정란 20구",
    price: 9550,
    rate: 0,
    saledPrice: function() {return calc(this.price, this.rate)},
  }, {
    img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1655279206678l0.jpg",
    text: "[스키니피그] 그릭요거트&딸기 아이스크림 474ml",
    price: 7900,
    rate: 20,
    saledPrice: function() {return calc(this.price, this.rate)},
  }, {
    img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1597131720997l0.jpg",
    text: "히말라야 핑크소금 구운피스타치오 300g",
    price: 9900,
    rate: 10,
    saledPrice: function() {return calc(this.price, this.rate)},
  }, {
    img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1652256333251l0.jpg",
    text: "[설치배송][LG전자] 유러피안 슬림 디자인 모던엣지 냉장고 M451MC93 (462L/맨해튼 미드나잇/상냉장 하냉동)",
    price: 1904440,
    rate: 38,
    saledPrice: function() {return calc(this.price, this.rate)},
  },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650546835592l0.jpg",
        text: "[제니튼] 닥터제니 1450 고불소 주니어치약 60g",
        price: 9000,
        rate: 0,
        saledPrice: function() {return calc(this.price, this.rate)},
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1521190427103l0.jpg",
        text: "[창화당] 김치궁중만두",
        price: 11900,
        rate: 9,
        saledPrice: function() {return calc(this.price, this.rate)},
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/165715544059l0.jpg",
        text: "[설치배송][LG전자] 일반냉장고 B102S14 (90L/퓨어)",
        price: 434500,
        rate: 38,
        saledPrice: function() {return calc(this.price, this.rate)},
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657156456904l0.jpg",
        text: "[설치배송][LG전자] 올레드 evo TV OLED42C2KNB (벽걸이형)",
        price: 2683000,
        rate: 38,
        saledPrice: function() {return calc(this.price, this.rate)},
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1647955439785l0.jpg",
        text: "[설치배송][LG전자] 코드제로 A9S 청소기 AT9270IA 물걸레 키트(본체:아이언그레이, 올인원타워:딥그레이)",
        price: 1262400,
        rate: 38,
        saledPrice: function() {return calc(this.price, this.rate)},
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1655703620192l0.jpg",
        text: "[YOZM] 플레인그릭요거트 100g",
        price: 3900,
        rate: 20,
        saledPrice: function() {return calc(this.price, this.rate)},
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/165761535363l0.jpg",
        text: "[비비고] 갓김치 400g",
        price: 8200,
        rate: 10,
        saledPrice: function() {return calc(this.price, this.rate)},
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653035546273l0.jpeg",
        text: "[장충동왕족발] 슈바인 학센 800g",
        price: 17800,
        rate: 0,
        saledPrice: function() {return calc(this.price, this.rate)},
      }
    ],
    bargain: [
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653040075199l0.jpeg",
        text: "[경복궁 BLACK] 한우 사골 고기 곰탕",
        price: 11000,
        rate: 15,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1643019527223l0.jpg",
        text: "[럭키찬스] 마르마르디 핸드크림 돌체 듀오 선물세트",
        price: 20000,
        rate: 55,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1652764720994l0.jpg",
        text: "[풀무원] 뽀글이 핫도그 2종",
        price: 7480,
        rate: 14,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      },
      {
        img: "https://3p-image.kurly.com/cdn-cgi/image/width=400,format=auto/product-image/6683b6c1-ff2d-4a44-8a6b-8cc34cf11383/2a8988b4-e83a-45ad-987c-d1c0de82b602.jpg",
        text: "[미켈란젤로 인 메타버스] 제주 전시회 6종(어린이,1인)",
        price: 10000,
        rate: 40,
        saledPrice: function() {return calc(this.price, this.rate)}
      }
    ]
  }


