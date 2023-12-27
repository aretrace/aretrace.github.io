'use client'
import { autoUpdate, flip, useFloating } from '@floating-ui/react'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const beInvisibleCN = isHovered ? '' : 'invisible'

  const { x, y, strategy, refs, isPositioned } = useFloating({
    placement: 'top',
    middleware: [flip()],
    whileElementsMounted: autoUpdate,
  })

  // show popup when positioned on component mount
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isPositioned) {
      setIsHovered(true)
      timer = setTimeout(() => {
        setIsHovered(false)
      }, 2543)
    }
    return () => clearTimeout(timer)
  }, [isPositioned])

  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div
          ref={refs.setFloating}
          className={`${beInvisibleCN} rounded bg-stone-900 px-2 py-1 font-sans text-md text-yellow-50`}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
          }}
        >
          <span className="text-center font-sans">Let's get in touch</span>
          <ArrowUpRightIcon className="-mr-1 inline-block h-6 w-5" />
        </div>
        <h1
          ref={refs.setReference}
          className="text-stone-950 text-center font-serif text-[3.75rem] text-shadow sm:text-[4.2] md:text-[5rem] lg:text-[5.6rem] 2xl:text-[6.4rem] min-[1820px]:text-[7.2rem]"
        >
          <Link
            href="https://cal.com/rtrace"
            className="decoration-dashed hover:underline"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            target="_blank"
          >
            Transforming
            <br /> Ideas Into
            <br /> Reality
          </Link>
        </h1>
      </div>
    </>
  )
}
