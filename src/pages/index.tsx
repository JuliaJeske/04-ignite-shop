import camiseta from '../assets/camiseta.png'
import { HomeContainer } from "../styles/pages/home"
import {Product} from "../styles/pages/home"
import Image from 'next/image';
import { useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';


export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className='keen-slider__slide'>
        <Image src={camiseta} width={520} height={480} alt={""}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 70,00</span>
        </footer>

      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta} width={520} height={480} alt={""}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 70,00</span>
        </footer>

      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta} width={520} height={480} alt={""}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 70,00</span>
        </footer>

      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta} width={520} height={480} alt={""}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 70,00</span>
        </footer>

      </Product>
    </HomeContainer>
  )
}
