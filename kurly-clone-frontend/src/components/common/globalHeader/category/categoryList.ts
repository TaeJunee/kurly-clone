export type CategoryType = {
  id: string;
  img: string;
  hoverImg: string;
  text: string;
  subMenu: {text: string;}[];
}

export const categoryList: CategoryType[] = [
  {
    id: "1",
    img: "https://collection-image.kurly.com/site-category-groups/1/4IYbd0CEWkokpqiN00CAL9cDC2Q7nT101TDEn0tF.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/1/D2tq9D88GPQCRZd2FC04ct0BI0xId0Z1wTFWb7Wu.png",
    text: "채소",
    subMenu: [{text: "친환경"}, {text: "고구마·감자·당근"}, {text: "시금치·쌈채소·나물"}, {text: "브로콜리·파프리카·양배추"}, {text: "양파·대파·마늘·배추"}, {text: "오이·호박·고추"}, {text: "냉동·이색·간편채소"}, {text: "콩나물·버섯"}]
  },
  {
    id: "2",
    img: "https://collection-image.kurly.com/site-category-groups/2/DNXCcUaXoXakDOdHiGhIMCNUeUjJioG9EyeQ7RRX.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/2/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png",
    text: "과일·견과·쌀",
    subMenu: [{text: "친환경"}, {text: "제절과일"}, {text: "국산과일"}, {text: "수입과일"}, {text: "간편과일"}, {text: "냉동·건과일"}, {text: "견과류"}, {text: "쌀·잡곡"}],
  },
  {
    id: "3",
    img: "https://collection-image.kurly.com/site-category-groups/3/fivaoZPBTeqaDswJUgr3k0xMV0von36Qb9qnn7ZZ.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/3/ZDTiP71KkstnCGkPmu67wHr0wcIo3QMLjyg2Kho3.png",
    text: "수산·해산·건어물",
    subMenu: [{text: "제철수산"}, {text: "생선류"}, {text: "굴비·반건류"}, {text: "오징어·낙지·문어"}, {text: "새우·게·랍스터"}, {text: "해산물·조개류"}, {text: "수산가공품"}, {text: "김·미역·해조류"}, {text: "건어물·다시팩"}]
  },
  {
    id: "4",
    img: "https://collection-image.kurly.com/site-category-groups/4/jj6zZg2sY94aytlc2k1udIAmWWvmUignR9VYaMcm.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/4/EOMHR0scDTojmp9yxY6ZK6U01fkqUEg19nPMyQFG.png",
    text: "정육·계란",
    subMenu: [{text: "국내산 소고기"}, {text: "수입산 소고기"}, {text: "돼지고기"}, {text: "계란류"}, {text: "닭·오리고기"}, {text: "양념육·돈까스"}, {text: "양고기"}]
  },
  {
    id: "5",
    img: "https://collection-image.kurly.com/site-category-groups/5/CkyoRnUe2q9ngIOLW3bJPRYBw9xq9BHZ3fNQIq1c.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/5/TmOAqHrU3DaZ9GtkfircoZQmd0xGaplSNoXw2q8V.png",
    text: "국·반찬·메인요리",
    subMenu: [{text: "국·탕·찌개"}, {text: "밀키트·메인요리"}, {text: "밑반찬"}, {text: "김치·젓갈·장류"}, {text: "두부·어묵·부침개"}, {text: "베이컨·햄·통조림"}]
  },
  {
    id: "6",
    img: "https://collection-image.kurly.com/site-category-groups/6/kwat5Szmq0ONTpMd4hlbcGmCOBd3FsMPyTzWxKBb.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/6/LZjcLmIFN6IqVsraCsArIE2zPh3u2i7foirsWHQZ.png",
    text: "샐러드·간편식",
    subMenu: [{text: "샐러드·닭가슴살"}, {text: "도시락·밥류"}, {text: "파스타·면류"}, {text: "떡볶이·튀김·순대"}, {text: "피자·핫도그·만두"}, {text: "폭립·떡갈비·안주"}, {text: "죽·스프·카레"}]
  },
  {
    id: "7",
    img: "https://collection-image.kurly.com/site-category-groups/7/CL0LpJynh8Nh2Vqmnm62RVTPePWVU84VkWwQPjdO.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/7/u9ClAhIMBYYrC3U9b3dvn9MEzqGPpL48E5fLldNv.png",
    text: "면·양념·오일",
    subMenu: [{text: "파스타·면류"}, {text: "식초·소스·드레싱"}, {text: "양념·액젓·장류"}, {text: "식용유·참기름·오일"}, {text: "소금·설탕·향신료"}, {text: "밀가루·가루·믹스"}]
  },
  {
    id: "8",
    img: "https://collection-image.kurly.com/site-category-groups/8/bKllScRqF9gQ5q58LcmBfOOhgBrCOdVypPiRvQkL.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/8/PsTvzGzTKzgmANHetZ1XDCBoIvHj874L9goGSKXx.png",
    text: "생수·음료·우유·커피",
    subMenu: [{text: "생수·탄산수"}, {text: "음료·주스"}, {text: "우유·두유·요거트"}, {text: "커피"}, {text: "차"}]
  },
  {
    id: "9",
    img: "https://collection-image.kurly.com/site-category-groups/9/5qKRHLtIeBWLxUPa1g3koUhqsAkc39YjtMnyIXCJ.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/9/NQcAF49piGDLu6VFgONSsIHWF1xU01o95Azs7usZ.png",
    text: "간식·과자·떡",
    subMenu: [{text: "과자·스낵·쿠키"}, {text: "초콜릿·젤리·캔디"}, {text: "떡·한과"}, {text: "아이스크림"}]
  },
  {
    id: "10",
    img: "https://collection-image.kurly.com/site-category-groups/10/bIjVH9L4oDFYv0GpjBijA6QQEjiDOW0KoflLVNC1.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/10/H4Ivs7jCWSuhqh7ru3NetkS6Hhof7pvq3tWbujBr.png",
    text: "베이커리·치즈·델리",
    subMenu: [{text: "식빵·빵류"}, {text: "잼·버터·스프레드"}, {text: "케이크·파이·디저트"}, {text: "치즈"}, {text: "델리"}, {text: "올리브·피클"}]
  },
  {
    id: "11",
    img: "https://collection-image.kurly.com/site-category-groups/11/vEGBXqN7a2bxTC3v6jntEzTqQiwG4ogLkiruPwRs.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/11/MFavdtAkcl2J3q5fiyKDYKBtKiu0D28z9fLd1JhN.png",
    text: "건강식품",
    subMenu: [{text: "영양제"}, {text: "유산균"}, {text: "홍삼·인삼·꿀"}, {text: "건강즙·건강음료"}, {text: "건강분말·건강환"}, {text: "다이어트·이너뷰티"}, {text: "유아동"}]
  },
  {
    id: "12",
    img: "https://collection-image.kurly.com/site-category-groups/12/UnO3V0GDnss8p37EKmTGvnF9SzeyzgyzC0O7Wh1R.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/12/xtK9aF5n9OfmNfWuLMmyHzxUaj7Y9pVx2MPetIex.png",
    text: "와인",
    subMenu: [{text: "레드와인"}, {text: "화이트와인"}, {text: "샴페인·스파클링"}]
  },
  {
    id: "13",
    img: "https://collection-image.kurly.com/site-category-groups/13/1vmSDtWcIbzUc8QNl8CV9EQ7h5dWGc4uMg4uY6cP.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/13/AOjtb13dmWVXuWVXD3ciXj86bREiwbuZe7UMuORT.png",
    text: "전통주",
    subMenu: [{text: "막걸리·탁주"}, {text: "증류주·약주·청주"}, {text: "과실주·리큐르"}, {text: "선물세트"}]
  },
  {
    id: "14",
    img: "https://collection-image.kurly.com/site-category-groups/14/1vTroAoaidyGvcDf1MRU8GhS73GMp9oZ7lm7IT0Z.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/14/Pswp08fDvUBYtFU4tOr0OPw96uvwEpfrHbLfQwhY.png",
    text: "생활용품·리빙·캠핑",
    subMenu: [{text: "휴지·티슈"}, {text: "여성·위생용품"}, {text: "세제·청소용품"}, {text: "화훼·인테리어소품"}, {text: "의약외품·마스크"}, {text: "생활잡화·문구"}]
  },
  {
    id: "15",
    img: "https://collection-image.kurly.com/site-category-groups/15/3OUDPGzCOTPixqHY1wdFEUfHacXxynCpnlzFzFBD.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/15/o2JUnyHF7RfALd4PF2hDWMeXsLwks8V0eOZxkKTz.png",
    text: "스킨케어·메이크업",
    subMenu: [{text: "스킨·미스트·패드"}, {text: "에센스·앰플·로션"}, {text: "크림·오일"}, {text: "클렌징"}, {text: "마스크팩"}, {text: "선케어"}, {text: "메이크업"}, {text: "맨즈케어"}, {text: "뷰티소품·기기"}]
  },
  {
    id: "16",
    img: "https://collection-image.kurly.com/site-category-groups/16/APNr2Xb1ZeF9WcBDky1V9GWHZaCy7kifCkwSjTjy.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/16/iX5PzA1SIZQ5HtuzlxIHxwoEghZJPo52RjKTbkLe.png",
    text: "헤어·바디·구강",
    subMenu: [{text: "구강·면도"}, {text: "샴푸·컨디셔너"}, {text: "트리트먼트·팩"}, {text: "헤어에센스·염모"}, {text: "바디워시·스크럽"}, {text: "바디로션·크림"}, {text: "핸드·립·데오"}, {text: "향수·디퓨저"}, {text: "헤어·바디소품"}]
  },
  {
    id: "17",
    img: "https://collection-image.kurly.com/site-category-groups/17/K81cs1Af4uRkEvbnfEV51E5UcwP5v6HhH1xyFqHK.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/17/mMvcBMHney2BoKcBu3rguBpJJ74I6B3vMd25WExM.png",
    text: "주방용품",
    subMenu: [{text: "주방소모품·잡화"}, {text: "주방·조리도구"}, {text: "냄비·팬·솥"}, {text: "보관용기·텀블러"}, {text: "식기·테이블웨어"}, {text: "컵·잔·커피도구"}]
  },
  {
    id: "18",
    img: "https://collection-image.kurly.com/site-category-groups/18/Keg4gCKfZBXhAB0xMtsFyWq7PEowD7IiZNZSCTEY.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/18/AnLa9VI6lup6UFVkzjgoTZPPbDWDWRLKhbf3LN22.png",
    text: "가전제품",
    subMenu: [{text: "주방가전"}, {text: "생활가전"}, {text: "계절가전"}, {text: "디지털·PC"}, {text: "대형·설치가전"}]
  },
  {
    id: "19",
    img: "https://collection-image.kurly.com/site-category-groups/19/DeT1R9JFqxgxubAIJuFcbZPPbBu8DHUkFJmGZBlJ.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/19/V2MuWvX3LZ2COZf1Mmf50sTvvPzvxdrgp3blMCjI.png",
    text: "반려동물",
    subMenu: [{text: "강아지 간식"}, {text: "강아지 주식"}, {text: "고양이 간식"}, {text: "고양이 주식"}, {text: "건강관리"}, {text: "배변·위생"}, {text: "장난감"}, {text: "미용·외출·하우스 등"}]
  },
  {
    id: "20",
    img: "https://collection-image.kurly.com/site-category-groups/20/0901lRbjcR35VHqUHPbKIZCAO9qPgi79RCqFymgp.png",
    hoverImg : "https://collection-image.kurly.com/site-category-groups/20/PPIhbxPYNSs9WkXDw4gEmet6A0biLQi2rYebJ7xw.png",
    text: "베이비·키즈·완구",
    subMenu: [{text: "분유·간편이유식"}, {text: "이유식 재료"}, {text: "간식·음식·음료"}, {text: "건강식품"}, {text: "이유·수유용품"}, {text: "기저귀·물티슈"}, {text: "세제·위생용품"}, {text: "스킨·구강케어"}, {text: "완구·잡화류"}]
  },
]

