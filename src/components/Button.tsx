interface TopBarProps {
  title: string,
  bg: string,
  textColor: string,
}

export default function Button({title, bg, textColor}: TopBarProps) {
  return (
    <button className={`py-2 text-sm px-3 ${bg} ${textColor} font-bold rounded uppercase`}>
      {title}
    </button>
  )
}