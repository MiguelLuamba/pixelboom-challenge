interface StatsCardProps {
  title: string
  value: string | number
}
export function StatsCard({
  title,
  value,
}:StatsCardProps) {
  return (
    <div className="grow p-6 h-[100px] bg-primary-foreground rounded-[8px] flex flex-col items-start gap-2">
      <p className="text-xs text-muted-foreground font-normal">{title}</p>
      <span className="text-3xl font-noto-serif">{value}</span>
    </div>
  )
}