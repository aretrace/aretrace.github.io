// prettier-ignore
'use client'

import { autoUpdate, flip, useFloating } from '@floating-ui/react'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { BaseSyntheticEvent, useEffect } from 'react'

export default function Hero() {
  const { x, y, reference, floating, strategy, refs, isPositioned } = useFloating({
    placement: 'top',
    middleware: [flip()],
    whileElementsMounted: autoUpdate,
  })

  const heroText = refs.reference.current as HTMLParagraphElement
  const heroTooltip = refs.floating.current as HTMLDivElement

  useEffect(
    function initialHeroTooltipPopUp() {
      if (isPositioned) {
        heroTooltip.classList.remove('invisible')
        setTimeout(() => {
          heroTooltip.classList.add('invisible')
        }, 2543)
      }
    },
    [isPositioned]
  )

  function handleMouseEnter(e: BaseSyntheticEvent) {
    heroTooltip.classList.remove('invisible')
  }

  function handleMouseLeave(e: BaseSyntheticEvent) {
    heroTooltip.classList.add('invisible')
  }

  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div
          ref={floating}
          className="invisible rounded bg-gray-900 px-2 py-1 font-sans text-sm text-yellow-50"
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
        <p
          ref={reference}
          className="text-center font-serif text-[3.75rem] text-shadow sm:text-[4.2] md:text-[5rem] lg:text-[5.6rem] 2xl:text-[6.4rem] min-[1820px]:text-[7.2rem]"
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
        </p>
      </div>
    </>
  )
}
