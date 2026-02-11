import { MapPin, Clock, Truck, Navigation, Fuel, AlertCircle } from "lucide-react";

const routes = [
  { id: "R001", name: "华东干线", from: "上海", to: "北京", distance: "1,200km", duration: "14h", stops: 3, vehicles: 12, status: "运行中", load: 88 },
  { id: "R002", name: "华南快线", from: "广州", to: "深圳", distance: "140km", duration: "2h", stops: 1, vehicles: 8, status: "运行中", load: 72 },
  { id: "R003", name: "西南通道", from: "成都", to: "重庆", distance: "340km", duration: "4h", stops: 2, vehicles: 6, status: "运行中", load: 65 },
  { id: "R004", name: "长三角环线", from: "杭州", to: "南京", distance: "280km", duration: "3.5h", stops: 2, vehicles: 10, status: "维护中", load: 0 },
  { id: "R005", name: "中部横贯", from: "武汉", to: "长沙", distance: "350km", duration: "4h", stops: 2, vehicles: 5, status: "运行中", load: 91 },
];

const vehicles = [
  { plate: "沪A·88888", driver: "王师傅", route: "华东干线", position: "南京段", speed: "85km/h", fuel: 72, status: "行驶中" },
  { plate: "粤B·66666", driver: "李师傅", route: "华南快线", position: "东莞段", speed: "90km/h", fuel: 58, status: "行驶中" },
  { plate: "川A·12345", driver: "张师傅", route: "西南通道", position: "内江段", speed: "75km/h", fuel: 45, status: "行驶中" },
  { plate: "鄂A·99999", driver: "刘师傅", route: "中部横贯", position: "岳阳段", speed: "80km/h", fuel: 83, status: "行驶中" },
  { plate: "浙A·55555", driver: "赵师傅", route: "长三角环线", position: "停车场", speed: "0km/h", fuel: 95, status: "待命" },
];

const RoutesPage = () => {
  return (
    <div className="space-y-6">
      {/* Route map placeholder */}
      <div className="glass-card-elevated rounded-xl p-5 relative overflow-hidden">
        <h3 className="text-sm font-semibold text-foreground mb-3">全国路线网络</h3>
        <div className="h-48 rounded-lg bg-secondary/20 border border-border/30 relative overflow-hidden">
          {/* Animated network nodes */}
          <svg className="w-full h-full" viewBox="0 0 800 200">
            {/* Connection lines */}
            <line x1="150" y1="60" x2="650" y2="50" stroke="hsl(199,89%,48%)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
            <line x1="150" y1="60" x2="400" y2="140" stroke="hsl(199,89%,48%)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
            <line x1="650" y1="50" x2="550" y2="130" stroke="hsl(199,89%,48%)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
            <line x1="400" y1="140" x2="250" y2="150" stroke="hsl(199,89%,48%)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
            <line x1="550" y1="130" x2="400" y2="140" stroke="hsl(199,89%,48%)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
            {/* City nodes */}
            {[
              { x: 650, y: 50, name: "上海" },
              { x: 550, y: 130, name: "杭州" },
              { x: 150, y: 60, name: "北京" },
              { x: 400, y: 140, name: "武汉" },
              { x: 250, y: 150, name: "成都" },
              { x: 500, y: 170, name: "广州" },
            ].map((city, i) => (
              <g key={i}>
                <circle cx={city.x} cy={city.y} r="6" fill="hsl(199,89%,48%)" opacity="0.8">
                  <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                </circle>
                <circle cx={city.x} cy={city.y} r="12" fill="none" stroke="hsl(199,89%,48%)" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                </circle>
                <text x={city.x} y={city.y - 14} textAnchor="middle" fill="hsl(215,20%,55%)" fontSize="11">{city.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Route list */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground">路线列表</h3>
          {routes.map((r) => (
            <div key={r.id} className="glass-card rounded-xl p-4 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{r.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{r.id}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.status === "运行中" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}>
                  {r.status}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-4 text-xs">
                <div><span className="text-muted-foreground block">路线</span><span className="text-foreground">{r.from} → {r.to}</span></div>
                <div><span className="text-muted-foreground block">距离</span><span className="text-foreground">{r.distance}</span></div>
                <div><span className="text-muted-foreground block">时长</span><span className="text-foreground">{r.duration}</span></div>
                <div><span className="text-muted-foreground block">车辆</span><span className="text-foreground">{r.vehicles}辆</span></div>
                <div>
                  <span className="text-muted-foreground block">负载</span>
                  <div className="flex items-center gap-1">
                    <div className="flex-1 h-1.5 rounded-full bg-secondary/50"><div className="h-full rounded-full bg-primary" style={{ width: `${r.load}%` }} /></div>
                    <span className="text-foreground">{r.load}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vehicle tracking */}
        <div className="glass-card-elevated rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">实时车辆监控</h3>
          <div className="space-y-3">
            {vehicles.map((v) => (
              <div key={v.plate} className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-foreground">{v.plate}</span>
                  <span className={`text-xs ${v.status === "行驶中" ? "text-success" : "text-muted-foreground"}`}>{v.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                  <span>🚛 {v.driver}</span>
                  <span>📍 {v.position}</span>
                  <span>🏎️ {v.speed}</span>
                  <span className="flex items-center gap-1">
                    <Fuel className="h-3 w-3" /> {v.fuel}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;
