interface SectionHeaderProps {
  title: string
  text?: string
}

export default function SectionHeader({ title, text }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
