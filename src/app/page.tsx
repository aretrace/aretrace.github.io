'use client'
import { useRef, useState } from 'react'
import Hero from '../components/hero'
import Showcase from '../components/showcase'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col gap-6">
      <main className="flex flex-grow flex-col gap-1 md:gap-6 lg:flex-row lg:pl-16 lg:pt-12 2xl:pl-20 2xl:pt-0">
        <div className="contents [&>section]:flex [&>section]:flex-1 [&>section]:lg:flex-row [&>section]:lg:items-center ">
          <section className="justify-center pt-16 lg:justify-end lg:py-0">
            <Hero />
          </section>
          <div className="flex-initial origin-center rotate-90 -scale-x-100 scale-y-150 self-center py-[1.4rem] text-center font-serif text-[3.125rem] leading-3 text-gray-900 md:-mx-0 lg:rotate-0 lg:scale-100 lg:scale-y-125 lg:text-shadow">
            §
          </div>
          <section className="justify-center pl-3 md:pt-4 lg:justify-start">
            <Showcase />
          </section>
        </div>
      </main>
      <footer className="flex shrink-0 items-center justify-center pb-5 2xl:pb-9">
        <TV />
      </footer>
    </div>
  )
}

function TV() {
  const streamUrl = 'https://ice5.somafm.com/poptron-128-mp3'
  const audioRef = useRef(null) as any
  const [isPlaying, setIsPlaying] = useState(false)

  const playingIndicatorCN = isPlaying ? 'animate-pulse' : ''
  const playingIndicator = isPlaying ? { animation: 'pulse 0.72s infinite ease-out' } : undefined

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.src = ''
    } else {
      audioRef.current.src = streamUrl
      audioRef.current.load()
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="-ml-[5px] inline-flex max-w-fit scale-90 items-center gap-1 rounded bg-red-700 py-1 pl-[0.33rem] pr-[0.34rem] font-sans text-white">
          <style>
            {`
            @keyframes pulse {
              0%, 100% {
                transform: scale(0.99);
                opacity: 0.01;
              }
              50% {
                transform: scale(1);
                opacity: 1;
              }
            }

            .outer-panel {
              background-image: linear-gradient(#71481d, #886242);
            }

            .inner-panel {
              background-image: linear-gradient(#c8ae6f, #efdfbb);
            }
            `}
          </style>
          <div
            className="-mt-[0.0478rem] h-[0.6rem] w-[0.6rem] rounded-full bg-white"
            style={{ animation: 'pulse 1s infinite ease-in-out' }}
          />
          <span className="text-xs font-semibold tracking-wide">LIVE</span>
        </div>
      </div>
      <div>
        <div className="outer-panel scale-110 rounded-2xl p-[0.25rem] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.8)]">
          <div className="inner-panel flex flex-col items-center justify-center rounded-xl px-[0.20rem] pb-[0.10rem] pt-[0.22rem]">
            <img src="/static/imgs/tv.gif" className="aspect-[32/27] h-[58px] rounded-3xl " />
            <div className="mx-[1.75px] -mb-[0.4rem] -mt-[0.32rem] flex items-center justify-between">
              <>
                <div className="mb-[0.15rem] rounded-full bg-[#211a1a] px-[0.25rem] py-[0.25rem]">
                  <div className="h-[0.25rem] w-[0.25rem] rounded-full bg-[#aeaaaf]"></div>
                </div>
                <div className={`scale-[0.65] pt-[0.09rem]`} onClick={togglePlay}>
                  <audio ref={audioRef} preload="none">
                    <source src={`${streamUrl}`} type="audio/mpeg" />
                  </audio>
                  <span className={`text-xs`} style={playingIndicator}>
                    ︲❘┃❘︲
                  </span>
                </div>
                <div className="mb-[0.15rem] rounded-full bg-[#211a1a] px-[0.25rem] py-[0.25rem]">
                  <div className="h-[0.25rem] w-[0.25rem] rounded-full bg-[#aeaaaf]"></div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
