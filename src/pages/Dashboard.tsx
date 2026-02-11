import { Package, Truck, Clock, CheckCircle, AlertTriangle, TrendingUp, MapPin, Users } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "周一", 发货: 420, 收货: 380 },
  { name: "周二", 发货: 380, 收货: 350 },
  { name: "周三", 发货: 510, 收货: 470 },
  { name: "周四", 发货: 460, 收货: 430 },
  { name: "周五", 发货: 530, 收货: 490 },
  { name: "周六", 发货: 320, 收货: 290 },
  { name: "周日", 发货: 250, 收货: 230 },
];

const areaData = [
  { time: "00:00", 包裹量: 120 },
  { time: "04:00", 包裹量: 80 },
  { time: "08:00", 包裹量: 350 },
  { time: "12:00", 包裹量: 480 },
  { time: "16:00", 包裹量: 520 },
  { time: "20:00", 包裹量: 380 },
  { time: "23:59", 包裹量: 200 },
];

const pieData = [
  { name: "已签收", value: 4200, color: "hsl(160, 84%, 39%)" },
  { name: "运输中", value: 1800, color: "hsl(199, 89%, 48%)" },
  { name: "待发货", value: 600, color: "hsl(38, 92%, 50%)" },
  { name: "异常", value: 150, color: "hsl(0, 72%, 51%)" },
];

const recentOrders = [
  { id: "SF2024031801", dest: "上海 → 北京", status: "运输中", time: "2小时前", statusColor: "text-info" },
  { id: "SF2024031802", dest: "广州 → 深圳", status: "已签收", time: "30分钟前", statusColor: "text-success" },
  { id: "SF2024031803", dest: "成都 → 重庆", status: "待发货", time: "1小时前", statusColor: "text-warning" },
  { id: "SF2024031804", dest: "杭州 → 南京", status: "运输中", time: "3小时前", statusColor: "text-info" },
  { id: "SF2024031805", dest: "武汉 → 长沙", status: "异常", time: "5小时前", statusColor: "text-destructive" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="今日订单" value="1,284" change="12.5% vs 昨日" icon={Package} />
        <StatsCard title="运输中" value="856" change="8.3%" icon={Truck} />
        <StatsCard title="准时率" value="96.8%" change="1.2%" icon={Clock} />
        <StatsCard title="异常件" value="23" change="5.1%" icon={AlertTriangle} positive={false} />
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Bar chart */}
        <div className="lg:col-span-2 glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">本周收发货趋势</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,20%)" />
              <XAxis dataKey="name" stroke="hsl(215,20%,55%)" fontSize={12} />
              <YAxis stroke="hsl(215,20%,55%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(220,28%,12%)", border: "1px solid hsl(220,30%,20%)", borderRadius: 8, color: "hsl(210,40%,96%)" }} />
              <Bar dataKey="发货" fill="hsl(199,89%,48%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="收货" fill="hsl(220,80%,60%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">包裹状态分布</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" strokeWidth={0}>
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(220,28%,12%)", border: "1px solid hsl(220,30%,20%)", borderRadius: 8, color: "hsl(210,40%,96%)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                <span className="text-muted-foreground">{d.name}</span>
                <span className="ml-auto font-medium text-foreground">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-5 gap-4">
        {/* Area chart */}
        <div className="lg:col-span-3 glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">今日实时包裹流量</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(199,89%,48%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(199,89%,48%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,20%)" />
              <XAxis dataKey="time" stroke="hsl(215,20%,55%)" fontSize={12} />
              <YAxis stroke="hsl(215,20%,55%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(220,28%,12%)", border: "1px solid hsl(220,30%,20%)", borderRadius: 8, color: "hsl(210,40%,96%)" }} />
              <Area type="monotone" dataKey="包裹量" stroke="hsl(199,89%,48%)" fill="url(#areaGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent orders */}
        <div className="lg:col-span-2 glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">最新运单</h3>
          <div className="space-y-3">
            {recentOrders.map((o) => (
              <div key={o.id} className="flex items-center justify-between p-2.5 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div>
                  <p className="text-xs font-mono text-foreground">{o.id}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{o.dest}</p>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-medium ${o.statusColor}`}>{o.status}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{o.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
