import Image from 'next/image'

export default function Card({
  img,
  alt,
  color = '#000',
  children,
}: {
  className?: string
  img: string
  alt: string
  color?: string
  children: React.ReactNode
}) {
  // TODO: implement lg: theming [color="#CC00CC", color="#00A300", color="#00B0AD", color="#aa5f34"]
  const toGradientColor: Record<string, string> = { '--tw-gradient-to': color }

  return (
    // designed for parent to determine dimensions
    <figure className="relative h-full w-full overflow-clip rounded-3xl text-yellow-50 shadow-md transition-transform lg:hover:scale-105">
      <img className="h-full w-full object-cover object-center " src={img} alt={alt} />
      <figcaption
        className="absolute top-0 h-full w-full bg-gradient-to-b from-transparent transition-opacity"
        style={toGradientColor}
      >
        <div className="absolute bottom-0 left-0 p-3">{children}</div>
      </figcaption>
    </figure>
  )
}
