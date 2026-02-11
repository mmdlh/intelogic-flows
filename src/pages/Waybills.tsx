import { Search, Filter, Download, Eye, MoreHorizontal } from "lucide-react";

const waybills = [
  { id: "WB20240318001", sender: "张三", receiver: "李四", from: "上海", to: "北京", status: "运输中", weight: "2.5kg", fee: "¥25.00", date: "2024-03-18" },
  { id: "WB20240318002", sender: "王五", receiver: "赵六", from: "广州", to: "深圳", status: "已签收", weight: "1.2kg", fee: "¥12.00", date: "2024-03-18" },
  { id: "WB20240318003", sender: "孙七", receiver: "周八", from: "成都", to: "重庆", status: "待发货", weight: "5.0kg", fee: "¥35.00", date: "2024-03-17" },
  { id: "WB20240318004", sender: "吴九", receiver: "郑十", from: "杭州", to: "南京", status: "运输中", weight: "3.8kg", fee: "¥28.00", date: "2024-03-17" },
  { id: "WB20240318005", sender: "钱一", receiver: "冯二", from: "武汉", to: "长沙", status: "异常", weight: "0.8kg", fee: "¥18.00", date: "2024-03-16" },
  { id: "WB20240318006", sender: "陈三", receiver: "卫四", from: "西安", to: "郑州", status: "已签收", weight: "4.2kg", fee: "¥32.00", date: "2024-03-16" },
  { id: "WB20240318007", sender: "蒋五", receiver: "沈六", from: "天津", to: "石家庄", status: "派送中", weight: "1.5kg", fee: "¥15.00", date: "2024-03-15" },
  { id: "WB20240318008", sender: "韩七", receiver: "杨八", from: "青岛", to: "济南", status: "运输中", weight: "6.0kg", fee: "¥42.00", date: "2024-03-15" },
];

const statusStyle: Record<string, string> = {
  "已签收": "bg-success/15 text-success",
  "运输中": "bg-info/15 text-info",
  "待发货": "bg-warning/15 text-warning",
  "异常": "bg-destructive/15 text-destructive",
  "派送中": "bg-primary/15 text-primary",
};

const summaryData = [
  { label: "总运单", value: "12,458", color: "stat-value" },
  { label: "运输中", value: "3,240", color: "text-info" },
  { label: "已完成", value: "8,962", color: "text-success" },
  { label: "异常单", value: "256", color: "text-destructive" },
];

const Waybills = () => {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-4 gap-4">
        {summaryData.map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-4 text-center">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className={`text-xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Table area */}
      <div className="glass-card-elevated rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input placeholder="搜索运单号..." className="pl-10 pr-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-64" />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Filter className="h-3.5 w-3.5" /> 筛选
            </button>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
            <Download className="h-3.5 w-3.5" /> 导出
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                {["运单号", "寄件人", "收件人", "始发地", "目的地", "状态", "重量", "费用", "日期", "操作"].map((h) => (
                  <th key={h} className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {waybills.map((w) => (
                <tr key={w.id} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                  <td className="py-3 px-4 font-mono text-xs text-foreground">{w.id}</td>
                  <td className="py-3 px-4 text-foreground">{w.sender}</td>
                  <td className="py-3 px-4 text-foreground">{w.receiver}</td>
                  <td className="py-3 px-4 text-muted-foreground">{w.from}</td>
                  <td className="py-3 px-4 text-muted-foreground">{w.to}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyle[w.status]}`}>{w.status}</span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{w.weight}</td>
                  <td className="py-3 px-4 text-foreground font-medium">{w.fee}</td>
                  <td className="py-3 px-4 text-muted-foreground">{w.date}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1 rounded hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      <button className="p-1 rounded hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">显示 1-8 条，共 12,458 条</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 1558].map((p, i) => (
              <button key={i} className={`px-2.5 py-1 rounded text-xs ${p === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"} transition-colors`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waybills;
