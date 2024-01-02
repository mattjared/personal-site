export default function Box({headline, text, children}) {
  return (
    <div className="p-6">
      {headline && <h2 className="text-2xl font-semibold mb-2">{headline}</h2>}
      {text && <p>{text}</p>}
      {children}
    </div>
  )
}