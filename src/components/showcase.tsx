'use client'

import { autoUpdate, flip, inline, offset, shift, useFloating, useHover, useInteractions } from '@floating-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import TechTag from './tech-tag'

export default function Showcase() {
  return (
    <menu className="flex flex-col gap-4">
      {/* prettier-ignore */}
      <ul
        className="contents
        [&_.tag-group]:flex [&_.tag-group]:flex-wrap [&_.tag-group]:gap-1 [&_.tag-group]:w-[34ch]
        [&_h2]:inline [&_h2]:font-body [&_h2]:text-[2.22rem] [&_h2]:font-medium [&_h2]:text-stone-800 [&_h2]:leading-3
        [&_h2]:text-shadow
        [&_p]:pb-1 [&_p]:pl-[0.26ch] [&_p]:font-body [&_p]:text-xl [&_p]:font-medium [&_p]:text-zinc-700
        [&_p]:text-shadow
        [&_.link-arrow]:text-2xl"
      >
        <ShowItem title="Cueiz" link="https://cueiz.vercel.app/quiz" description="Trivia Next.js app" photo="Cueiz">
          <ul className="tag-group">
            <TechTag logo={'typescript'} text="Typescript" />
            <TechTag logo={'react'} text="React.js" />
            <TechTag logo={'next'} text="Next.js" />
            <TechTag logo={'rest'} text="REST API" />
            <TechTag logo={'tailwind'} text="Tailwind CSS" />
          </ul>
        </ShowItem>
        <ShowItem title="Inventory" link="https://inventory-wq4jlkdw5a-uw.a.run.app/" description="JavaFX app for inventory management" photo="Inventory">
          <ul className="tag-group">
            <TechTag logo={'java'} text="Java" />
            <TechTag logo={'maven'} text="Maven" />
            <TechTag logo={'docker'} text="Docker" />
            <TechTag logo={'devops'} text="DevOps" />
            <TechTag logo={'web'} text="Via Browser" />
          </ul>
        </ShowItem>
        <ShowItem title="AppointEase" link="https://github.com/aretrace/AppointEase" description="JavaFX app for appointments" photo="AppointEase">
          <ul className="tag-group">
            <TechTag logo={'java'} text="Java" />
            <TechTag logo={'sql'} text="SQL" />
            <TechTag logo={'design'} text="Design" />
          </ul>
        </ShowItem>
        <ShowItem title="hncr-cli" link="https://github.com/aretrace/AppointEase" description="Hacker News CLI client written in Crystal" photo="hncr-cli">
          <ul className="tag-group">
            <TechTag logo={'crystal'} text="Crystal" />
            <TechTag logo={'command-line'} text="CLI" />
            <TechTag logo={'rest'} text="REST API" />
          </ul>
        </ShowItem>
      </ul>
    </menu>
  )
}

function ShowItem({
  link,
  children,
  title,
  description,
  photo,
}: {
  link: string
  children: React.ReactNode
  title: string
  description: string
  photo: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context, isPositioned } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    middleware: [offset({ crossAxis: -30 }), flip(), shift(), inline()],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, {
    mouseOnly: true,
    restMs: 150,
    delay: {
      open: 200,
      close: 0,
    },
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return (
    <li>
      {isOpen && (
        <Image
          className={`z-10 hidden rounded border-4 border-stone-700 lg:block`}
          src={`/static/imgs/${photo}.jpeg`}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          alt={`${title} image`}
          width={288}
          height={1}
        />
      )}
      <div
        className="-mb-1 text-2xl font-semibold hover:after:content-['_↗']"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <h2 className="">
          <Link href={`${link}`} target="_blank">
            {title}
          </Link>
        </h2>
      </div>
      <p>
        {description}
        <br />
      </p>
      {/* Tech Tags */}
      <div className="mb-2">{children}</div>
    </li>
  )
}
