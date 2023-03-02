import Hero from '../components/hero'
import Showcase from '../components/showcase'

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-full max-w-screen-2xl flex-col justify-center lg:flex-row lg:pb-8">
      <section className="flex flex-1 basis-6/12 flex-col lg:my-0 lg:flex-row">
        <div className="flex-1 mb-9 mt-14 lg:my-0">
          <Hero />
        </div>
        <span className="flex-none origin-center rotate-90 -scale-x-100 scale-y-150 self-center py-[1.4rem] text-center font-serif text-6xl leading-3 text-gray-900 md:-mx-0 lg:rotate-0 lg:scale-100 lg:scale-y-125 lg:text-shadow">
          §
        </span>
      </section>
      <section className="flex-1 basis-7/12">
        <Showcase />
      </section>
    </main>
  )
}
