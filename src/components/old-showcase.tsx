// prettier-ignore
'use client'

import img from 'next/image'
import Link from 'next/link'
import { BaseSyntheticEvent } from 'react'

import Card from './card/card'

export default function Showcase() {
  // const [isPageFullyLoaded, setIsPageFullyLoaded] = useState(false)

  // target = element that triggered event; currentTarget = element that has event listener attached
  function handleClick(e: BaseSyntheticEvent) {
    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
  }

  // useLayoutEffect(() => {
  //   window.addEventListener('load', () => {
  //     setIsPageFullyLoaded(true)
  //   })
  // }, [isPageFullyLoaded])

  return (
    <>
      <div className='mt-8 flex h-full flex-col justify-around gap-8 lg:mt-0 lg:justify-center'>
        <div className='flex flex-initial items-center justify-evenly'>
          <h2 className='font-serif text-[1.85rem] text-shadow'>
            Examples<span className='text-[1.6rem]'> 👇</span>
          </h2>
          <span className='font-serif text-[1.84rem] text-shadow '>
            <Link
              href='https://github.com/aretrace'
              className='hover:border-b-2 hover:border-blue-500'
              target='_blank'
            >
              View More
              <img
                className='-mr-1 ml-1 mb-1 inline-block'
                src='/static/icons/svg/github.svg'
                alt='Github logo'
                width={28}
                height={32}
              />
            </Link>
          </span>
        </div>
        <div className='mb-8 lg:mb-0'>
          <ul className='flex h-full w-full snap-x snap-mandatory items-center gap-6 overflow-x-auto px-[50%] scrollbar-hide lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0'>
            <div className='contents [&>li]:h-[400px] [&>li]:w-[75vw] [&>li]:flex-none [&>li]:lg:h-[215px] [&>li]:lg:w-[min(45%,320px)] '>
              <li className='snap-center snap-always' onClick={handleClick}>
                <Card img='/static/imgs/Cueiz.jpeg' alt=''>
                  <h3 className='font-body text-3xl font-semibold text-shadow'>
                    <Link
                      className='hover:border-b-2 hover:border-blue-500'
                      href='https://cueiz.vercel.app/quiz'
                      target='_blank'
                    >
                      Cueiz
                    </Link>
                  </h3>
                  <p className='my-1 font-serif text-xl text-shadow'>
                    Trivia Next.js app
                  </p>
                  <div className='flex gap-4 overflow-x-scroll pt-1 scrollbar-hide'>
                    <img
                      className='inline-block'
                      src='/static/icons/svg/typescript-w.svg'
                      title='Typescript'
                      alt='Typescript icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/react-w.svg'
                      title='React.js'
                      alt='React.js icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block scale-95'
                      src='/static/icons/svg/next-w.svg'
                      title='Next.js'
                      alt='Next.js icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block scale-150'
                      src='/static/icons/svg/rest-w.svg'
                      title='REST API'
                      alt='REST API icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/tailwind-w.svg'
                      title='Tailwind CSS'
                      alt='Tailwind CSS icon'
                      width='28'
                      height='28'
                    />
                  </div>
                </Card>
              </li>
              <li className='snap-center snap-always' onClick={handleClick}>
                <Card
                  img='/static/imgs/Inventory.jpeg'
                  alt='Inventory JavaFX Application'
                >
                  <h3 className='font-body text-3xl font-semibold text-shadow'>
                    <Link
                      className='hover:border-b-2 hover:border-blue-500'
                      href='https://inventory-wq4jlkdw5a-uw.a.run.app'
                      target='_blank'
                    >
                      Inventory
                    </Link>
                  </h3>
                  <p className='my-1 font-serif text-xl text-shadow'>
                    JavaFX app for inventory management
                  </p>
                  <div className='flex gap-4 overflow-x-scroll pt-1 scrollbar-hide'>
                    <img
                      className='inline-block'
                      src='/static/icons/svg/java-w.svg'
                      title='Java'
                      alt='Java icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/maven-w.svg'
                      title='Maven'
                      alt='Maven icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/docker-w.svg'
                      title='Docker'
                      alt='Docker icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/devops-w.svg'
                      title='DevOps'
                      alt='DevOps icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/web-w.svg'
                      title='Web Tech'
                      alt='Web Tech icon'
                      width='28'
                      height='28'
                    />
                  </div>
                </Card>
              </li>
              <li className='snap-center snap-always' onClick={handleClick}>
                <Card img='/static/imgs/AppointEase.jpeg' alt=''>
                  <h3 className='font-body text-3xl font-semibold text-shadow'>
                    <Link
                      className='hover:border-b-2 hover:border-blue-500'
                      href='https://github.com/aretrace/appointease'
                      target='_blank'
                    >
                      AppointEase
                    </Link>
                  </h3>
                  <p className='my-1 font-serif text-xl text-shadow'>
                    JavaFX app for appointments
                  </p>
                  <div className='flex gap-4 overflow-x-scroll pt-1 scrollbar-hide'>
                    <img
                      className='inline-block'
                      src='/static/icons/svg/java-w.svg'
                      title='Java'
                      alt='Java icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/sql-w.svg'
                      title='MySQL'
                      alt='SQL icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block'
                      src='/static/icons/svg/design-w.svg'
                      title='UX'
                      alt='Design icon'
                      width='28'
                      height='28'
                    />
                  </div>
                </Card>
              </li>
              <li className='snap-center snap-always' onClick={handleClick}>
                <Card img='/static/imgs/hncr-cli.jpeg' alt=''>
                  <h3 className='font-body text-3xl font-semibold text-shadow'>
                    <Link
                      className='hover:border-b-2 hover:border-blue-500'
                      href='https://github.com/aretrace/hncr-cli'
                      target='_blank'
                    >
                      hncr-cli
                    </Link>
                  </h3>
                  <p className='my-1 font-serif text-xl text-shadow'>
                    Hacker News CLI client written in Crystal
                  </p>
                  <div className='flex gap-4 overflow-x-scroll pt-1 scrollbar-hide'>
                    <img
                      className='inline-block scale-125'
                      src='/static/icons/svg/crystal-w.svg'
                      title='Crystal'
                      alt='Crystal icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='-ml-1 inline-block'
                      src='/static/icons/svg/command-line-w.svg'
                      title='Command line'
                      alt='Command line icon'
                      width='28'
                      height='28'
                    />
                    <img
                      className='inline-block scale-150'
                      src='/static/icons/svg/rest-w.svg'
                      title='REST API'
                      alt='REST API icon'
                      width='28'
                      height='28'
                    />
                  </div>
                </Card>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
