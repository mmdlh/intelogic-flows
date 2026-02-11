import { Warehouse as WarehouseIcon, Package, ArrowUpDown, AlertTriangle, ThermometerSun, Droplets, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, RadialBarChart, RadialBar } from "recharts";

const warehouses = [
  { name: "上海浦东仓", capacity: 85, packages: 12400, area: "25,000㎡", temp: "22°C", humidity: "45%", status: "正常" },
  { name: "北京顺义仓", capacity: 72, packages: 9800, area: "20,000㎡", temp: "18°C", humidity: "40%", status: "正常" },
  { name: "广州白云仓", capacity: 93, packages: 15600, area: "30,000㎡", temp: "26°C", humidity: "55%", status: "预警" },
  { name: "成都双流仓", capacity: 58, packages: 7200, area: "18,000㎡", temp: "20°C", humidity: "42%", status: "正常" },
];

const inventoryData = [
  { category: "电子产品", count: 4500 },
  { category: "服装鞋帽", count: 8200 },
  { category: "食品饮料", count: 3100 },
  { category: "日用百货", count: 6800 },
  { category: "医药保健", count: 1500 },
  { category: "家居建材", count: 2900 },
];

const WarehousePage = () => {
  return (
    <div className="space-y-6">
      {/* Warehouse cards in 2x2 grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {warehouses.map((wh) => (
          <div key={wh.name} className="glass-card-elevated rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <WarehouseIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{wh.name}</h3>
                  <p className="text-xs text-muted-foreground">{wh.area}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${wh.status === "正常" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}>
                {wh.status}
              </span>
            </div>

            {/* Capacity bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">容量使用率</span>
                <span className={`font-medium ${wh.capacity > 90 ? "text-destructive" : wh.capacity > 75 ? "text-warning" : "text-success"}`}>{wh.capacity}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${wh.capacity > 90 ? "bg-destructive" : wh.capacity > 75 ? "bg-warning" : "bg-primary"}`}
                  style={{ width: `${wh.capacity}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-1.5 text-xs">
                <Package className="h-3.5 w-3.5 text-primary" />
                <span className="text-muted-foreground">{wh.packages.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <ThermometerSun className="h-3.5 w-3.5 text-warning" />
                <span className="text-muted-foreground">{wh.temp}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Droplets className="h-3.5 w-3.5 text-info" />
                <span className="text-muted-foreground">{wh.humidity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Inventory by category */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">库存品类分布</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={inventoryData} layout="vertical">
              <XAxis type="number" stroke="hsl(215,20%,55%)" fontSize={12} />
              <YAxis type="category" dataKey="category" stroke="hsl(215,20%,55%)" fontSize={12} width={70} />
              <Tooltip contentStyle={{ background: "hsl(220,28%,12%)", border: "1px solid hsl(220,30%,20%)", borderRadius: 8, color: "hsl(210,40%,96%)" }} />
              <Bar dataKey="count" fill="hsl(199,89%,48%)" radius={[0, 6, 6, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Inbound/outbound */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">出入库动态</h3>
          <div className="space-y-3">
            {[
              { action: "入库", id: "WH-IN-0831", items: "320件", time: "10分钟前", icon: ArrowUpDown, color: "text-success" },
              { action: "出库", id: "WH-OUT-0445", items: "180件", time: "25分钟前", icon: ArrowUpDown, color: "text-info" },
              { action: "入库", id: "WH-IN-0830", items: "560件", time: "1小时前", icon: ArrowUpDown, color: "text-success" },
              { action: "异常", id: "WH-ERR-0012", items: "5件损坏", time: "2小时前", icon: AlertTriangle, color: "text-destructive" },
              { action: "出库", id: "WH-OUT-0444", items: "420件", time: "3小时前", icon: ArrowUpDown, color: "text-info" },
              { action: "入库", id: "WH-IN-0829", items: "290件", time: "4小时前", icon: ArrowUpDown, color: "text-success" },
              { action: "盘点", id: "WH-CHK-0088", items: "全仓", time: "5小时前", icon: TrendingUp, color: "text-warning" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                <item.icon className={`h-4 w-4 ${item.color}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium ${item.color}`}>{item.action}</span>
                    <span className="text-xs font-mono text-muted-foreground">{item.id}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.items}</p>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehousePage;
