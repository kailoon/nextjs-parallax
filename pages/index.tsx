import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Features'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Parallax Effect with React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />

      <section className="p-20 lg:p-40 text-center text-sm text-gray-400 border-t border-gray-100 w-full bg-white">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <Image
                width={2400}
                height={1600}
                layout="responsive"
                src={`/${i}.jpg`}
                alt="image"
                loading="lazy"
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
        <div className="mt-20 lg:mt-40">
          Photo by{' '}
          <a href="https://unsplash.com/@behrouzsasani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            behrouz sasani
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/portrait-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
