import { useState } from "react";
import { Search, Package, MapPin, CheckCircle, Truck, Clock, ArrowRight } from "lucide-react";

const trackingSteps = [
  { title: "已揽收", location: "上海浦东转运中心", time: "2024-03-18 08:30", done: true },
  { title: "运输中", location: "南京中转站", time: "2024-03-18 14:20", done: true },
  { title: "到达目的城市", location: "北京顺义分拨中心", time: "2024-03-19 06:15", done: true },
  { title: "派送中", location: "北京朝阳区派送站", time: "2024-03-19 09:00", done: true },
  { title: "已签收", location: "本人签收", time: "2024-03-19 11:30", done: false },
];

const mockPackages = [
  { id: "SF2024031801", from: "上海", to: "北京", status: "运输中", weight: "2.5kg", eta: "明天 14:00" },
  { id: "SF2024031802", from: "广州", to: "深圳", status: "已签收", weight: "1.2kg", eta: "已送达" },
  { id: "SF2024031803", from: "成都", to: "重庆", status: "待发货", weight: "5.0kg", eta: "后天 10:00" },
  { id: "SF2024031804", from: "杭州", to: "南京", status: "运输中", weight: "3.8kg", eta: "今天 18:00" },
];

const statusIcon: Record<string, typeof CheckCircle> = {
  "已签收": CheckCircle,
  "运输中": Truck,
  "待发货": Clock,
  "派送中": MapPin,
};

const statusColor: Record<string, string> = {
  "已签收": "text-success",
  "运输中": "text-info",
  "待发货": "text-warning",
  "派送中": "text-primary",
};

const Tracking = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(mockPackages[0]);

  return (
    <div className="space-y-6">
      {/* Search bar */}
      <div className="glass-card-elevated rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-3 text-foreground">货物追踪查询</h2>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="请输入运单号查询..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
          <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
            查询
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Package list */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground">我的包裹</h3>
          {mockPackages.map((pkg) => {
            const Icon = statusIcon[pkg.status] || Package;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelected(pkg)}
                className={`glass-card rounded-xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                  selected.id === pkg.id ? "glow-border border-primary/30" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-foreground">{pkg.id}</span>
                  <span className={`text-xs font-medium flex items-center gap-1 ${statusColor[pkg.status]}`}>
                    <Icon className="h-3 w-3" />
                    {pkg.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <span>{pkg.from}</span>
                  <ArrowRight className="h-3 w-3 text-primary" />
                  <span>{pkg.to}</span>
                  <span className="ml-auto text-xs">{pkg.weight}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">预计: {pkg.eta}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="lg:col-span-3 glass-card-elevated rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-foreground">物流轨迹 - {selected.id}</h3>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 ${statusColor[selected.status]}`}>
              {selected.status}
            </span>
          </div>
          
          {/* Simulated map area */}
          <div className="rounded-lg bg-secondary/30 border border-border/50 p-4 mb-6 h-40 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute border border-primary/30 rounded-full animate-pulse-glow" style={{
                  width: `${60 + i * 40}px`, height: `${60 + i * 40}px`,
                  top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                  animationDelay: `${i * 0.4}s`
                }} />
              ))}
            </div>
            <div className="text-center z-10">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2 animate-float" />
              <p className="text-xs text-muted-foreground">{selected.from} → {selected.to}</p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {trackingSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${step.done ? "bg-primary shadow-[0_0_8px_hsl(199,89%,48%/0.5)]" : "bg-muted-foreground/30"}`} />
                  {i < trackingSteps.length - 1 && (
                    <div className={`w-px flex-1 min-h-[40px] ${step.done ? "bg-primary/40" : "bg-border"}`} />
                  )}
                </div>
                <div className="pb-5">
                  <p className={`text-sm font-medium ${step.done ? "text-foreground" : "text-muted-foreground"}`}>{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.location}</p>
                  <p className="text-xs text-muted-foreground">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
