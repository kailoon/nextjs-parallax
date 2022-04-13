import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Features = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 4
  let progress = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenHeight = window.innerHeight
    const screenHalfHeight = screenHeight / 2
    const percentY =
      Math.min(
        clientHeight + screenHalfHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + screenHalfHeight
      ) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <section className="w-full bg-white">
      <div
        ref={refContainer}
        className="text-4xl lg:text-6xl px-5 font-semibold leading-none tracking-tight py-20 lg:py-40 mx-auto max-w-3xl "
      >
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 0) }}
        >
          A dramatically more powerful camera system.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 1) }}
        >
          A display so responsive, every interaction feels new again.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 2) }}
        >
          The world's fastest smartphone chip. Exceptional durabispanty.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 3) }}
        >
          And a huge leap in battery spanfe.
        </span>
      </div>
    </section>
  )
}

export default Features
