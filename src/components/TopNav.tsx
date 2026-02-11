import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, MapPin, FileText, Warehouse, 
  BarChart3, Route, Settings 
} from "lucide-react";

const leftItems = [
  { title: "控制台", url: "/", icon: LayoutDashboard },
  { title: "货物追踪", url: "/tracking", icon: MapPin },
  { title: "运单管理", url: "/waybills", icon: FileText },
];

const rightItems = [
  { title: "仓储管理", url: "/warehouse", icon: Warehouse },
  { title: "数据分析", url: "/analytics", icon: BarChart3 },
  { title: "路线规划", url: "/routes", icon: Route },
  { title: "系统设置", url: "/settings", icon: Settings },
];

export function TopNav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
      isActive
        ? "bg-primary/15 text-primary glow-border"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-between h-16 px-4 max-w-[1600px] mx-auto">
        {/* Left nav */}
        <nav className="flex items-center gap-1">
          {leftItems.map((item) => (
            <NavLink key={item.url} to={item.url} end={item.url === "/"} className={linkClass}>
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        {/* Center title */}
        <h1 className="font-display text-xl font-bold tracking-wider glow-text text-primary shrink-0 mx-4">
          智能物流云平台
        </h1>

        {/* Right nav */}
        <nav className="flex items-center gap-1">
          {rightItems.map((item) => (
            <NavLink key={item.url} to={item.url} className={linkClass}>
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
