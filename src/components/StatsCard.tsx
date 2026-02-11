import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  positive?: boolean;
}

export function StatsCard({ title, value, change, icon: Icon, positive = true }: StatsCardProps) {
  return (
    <div className="glass-card-elevated rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_hsl(0_0%_0%/0.5)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold stat-value mt-1">{value}</p>
          {change && (
            <p className={`text-xs mt-1 ${positive ? "text-success" : "text-destructive"}`}>
              {positive ? "↑" : "↓"} {change}
            </p>
          )}
        </div>
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
