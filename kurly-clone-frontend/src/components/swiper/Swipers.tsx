import { useRef } from 'react'
import styled from 'styled-components'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperDummy } from '../fakeRepo/swiper/swiperList'
import './swipers.css'

export default function Swipers() {

const _prevBtn = useRef(null);
const _nextBtn = useRef(null);

  return (
    <MainBanners>
      <BannersWrapper>
        <Swiper 
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: _nextBtn.current,
            prevEl: _prevBtn.current
          }}
          pagination={{ type: "fraction" }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {swiperDummy.map((item) => (
            <SwiperSlide>
              <a
                key={item.id}
                href={item.link}>
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className="main-banner-image"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <PrevBtn ref={_prevBtn}></PrevBtn>
        <NextBtn ref={_nextBtn}></NextBtn>
      </BannersWrapper>
    </MainBanners>
  )
}

const MainBanners = styled.div`
  height: 100%;
`

const BannersWrapper = styled.div`
  position: relative;
  height: fit-content;
  max-width: 1900px;
  margin: 0px auto 40px;
`

const PrevBtn = styled.button`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 50%;
  margin: auto 590px auto 0px;
  z-index: 10;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 1;
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K") 50% 50% no-repeat;
  transform: rotate(180deg);
`

const NextBtn = styled.button`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 50%;
  margin: auto 0px auto 590px;
  z-index: 10;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 1;
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K") 50% 50% no-repeat;
`