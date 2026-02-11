import { TrendingUp, TrendingDown, DollarSign, Users, Star, Zap } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ComposedChart, Bar } from "recharts";

const monthlyData = [
  { month: "1月", 订单量: 42000, 收入: 580, 客户满意度: 94 },
  { month: "2月", 订单量: 38000, 收入: 520, 客户满意度: 92 },
  { month: "3月", 订单量: 51000, 收入: 720, 客户满意度: 95 },
  { month: "4月", 订单量: 48000, 收入: 670, 客户满意度: 93 },
  { month: "5月", 订单量: 55000, 收入: 780, 客户满意度: 96 },
  { month: "6月", 订单量: 62000, 收入: 890, 客户满意度: 97 },
];

const radarData = [
  { metric: "时效", value: 92, fullMark: 100 },
  { metric: "安全", value: 88, fullMark: 100 },
  { metric: "成本", value: 76, fullMark: 100 },
  { metric: "服务", value: 95, fullMark: 100 },
  { metric: "覆盖", value: 82, fullMark: 100 },
  { metric: "技术", value: 90, fullMark: 100 },
];

const regionData = [
  { region: "华东", 单量: 18500, 占比: 32 },
  { region: "华南", 单量: 14200, 占比: 24 },
  { region: "华北", 单量: 10800, 占比: 18 },
  { region: "西南", 单量: 7600, 占比: 13 },
  { region: "华中", 单量: 5200, 占比: 9 },
  { region: "其他", 单量: 2400, 占比: 4 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="月收入" value="¥890万" change="14.8%" icon={DollarSign} />
        <StatsCard title="月订单量" value="62,000" change="12.7%" icon={TrendingUp} />
        <StatsCard title="活跃客户" value="8,450" change="9.2%" icon={Users} />
        <StatsCard title="客户满意度" value="97%" change="1.1%" icon={Star} />
      </div>

      {/* Top charts */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Composed chart */}
        <div className="lg:col-span-2 glass-card-elevated rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">订单量与收入趋势（万）</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,20%)" />
              <XAxis dataKey="month" stroke="hsl(215,20%,55%)" fontSize={12} />
              <YAxis yAxisId="left" stroke="hsl(215,20%,55%)" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(215,20%,55%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(220,28%,12%)", border: "1px solid hsl(220,30%,20%)", borderRadius: 8, color: "hsl(210,40%,96%)" }} />
              <Legend wrapperStyle={{ fontSize: 12, color: "hsl(215,20%,55%)" }} />
              <Bar yAxisId="left" dataKey="订单量" fill="hsl(199,89%,48%)" radius={[4, 4, 0, 0]} opacity={0.7} />
              <Line yAxisId="right" type="monotone" dataKey="收入" stroke="hsl(160,84%,39%)" strokeWidth={2} dot={{ fill: "hsl(160,84%,39%)", r: 4 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Radar */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">综合能力评估</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(220,30%,20%)" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(215,20%,55%)" fontSize={11} />
              <PolarRadiusAxis stroke="hsl(220,30%,20%)" fontSize={10} />
              <Radar name="评分" dataKey="value" stroke="hsl(199,89%,48%)" fill="hsl(199,89%,48%)" fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Region */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">区域业务分布</h3>
          <div className="space-y-3">
            {regionData.map((r) => (
              <div key={r.region} className="flex items-center gap-3">
                <span className="text-sm text-foreground w-10">{r.region}</span>
                <div className="flex-1 h-6 rounded-full bg-secondary/30 overflow-hidden relative">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all" style={{ width: `${r.占比}%` }} />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{r.单量.toLocaleString()}</span>
                </div>
                <span className="text-xs font-medium text-primary w-8">{r.占比}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Satisfaction trend */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">客户满意度趋势</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="satGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160,84%,39%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160,84%,39%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,20%)" />
              <XAxis dataKey="month" stroke="hsl(215,20%,55%)" fontSize={12} />
              <YAxis domain={[85, 100]} stroke="hsl(215,20%,55%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(220,28%,12%)", border: "1px solid hsl(220,30%,20%)", borderRadius: 8, color: "hsl(210,40%,96%)" }} />
              <Area type="monotone" dataKey="客户满意度" stroke="hsl(160,84%,39%)" fill="url(#satGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
