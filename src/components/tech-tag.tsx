export default function TechTag({ logo, text }: any) {
  return (
    <li className="inline-flex max-w-fit transform-gpu cursor-none gap-[3px] rounded bg-stone-800 py-1 pl-1 pr-[0.33rem] font-sans text-yellow-50 shadow transition ease-in-out hover:z-10 hover:scale-[120%] hover:drop-shadow-xl">
      <img
        className="inline-block h-5 w-5 flex-initial"
        src={`/static/icons/svg/${logo}-w.svg`}
        alt={`${text} logo`}
        title={text}
      />
      <span className="inline-block text-sm leading-5">{text}</span>
    </li>
  )
}
