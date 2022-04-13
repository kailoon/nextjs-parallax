import Image from 'next/image'
import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

const Hero = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }
  return (
    <div
      ref={refContainer}
      className="min-h-screen w-full sticky -z-10 top-0 left-0"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <Image
        width={2400}
        height={1600}
        layout="fill"
        src="/behrouz-sasani-jQc_W7frysg-unsplash.jpg"
        alt="hero image"
        className="object-cover absolute w-full h-full"
      />
    </div>
  )
}

export default Hero
