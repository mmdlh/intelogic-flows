import { User, Bell, Shield, Database, ChevronRight } from "lucide-react";

const settingSections = [
  {
    title: "账户设置",
    icon: User,
    items: [
      { name: "个人资料", desc: "修改姓名、邮箱等个人信息" },
      { name: "安全设置", desc: "密码修改、双因素认证" },
      { name: "登录记录", desc: "查看最近登录活动" },
    ],
  },
  {
    title: "通知管理",
    icon: Bell,
    items: [
      { name: "邮件通知", desc: "订单状态变更通知", toggle: true, on: true },
      { name: "短信通知", desc: "异常件即时通知", toggle: true, on: true },
      { name: "系统公告", desc: "平台更新和维护通知", toggle: true, on: false },
    ],
  },
  {
    title: "权限管理",
    icon: Shield,
    items: [
      { name: "角色管理", desc: "管理用户角色和权限分配" },
      { name: "操作日志", desc: "查看系统操作审计记录" },
      { name: "API密钥", desc: "管理第三方集成密钥" },
    ],
  },
  {
    title: "系统配置",
    icon: Database,
    items: [
      { name: "数据备份", desc: "自动备份策略配置" },
      { name: "接口管理", desc: "第三方系统对接配置" },
      { name: "区域设置", desc: "时区、语言和货币设置" },
    ],
  },
];

const systemInfo = [
  { label: "系统版本", value: "v3.2.1" },
  { label: "最后更新", value: "2024-03-18" },
  { label: "数据库状态", value: "正常", color: "text-success" },
  { label: "API状态", value: "正常", color: "text-success" },
  { label: "存储使用", value: "42.8 / 100 GB" },
  { label: "活跃用户", value: "1,284" },
];

const SettingsPage = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Left: settings sections */}
      <div className="lg:col-span-2 space-y-4">
        {settingSections.map((section) => (
          <div key={section.title} className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 p-4 border-b border-border/30">
              <section.icon className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
            </div>
            <div className="divide-y divide-border/20">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                  {item.toggle ? (
                    <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${item.on ? "bg-primary" : "bg-secondary"}`}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-foreground transition-transform ${item.on ? "left-5" : "left-0.5"}`} />
                    </div>
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right: system info */}
      <div className="space-y-4">
        <div className="glass-card-elevated rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">系统信息</h3>
          <div className="space-y-3">
            {systemInfo.map((info) => (
              <div key={info.label} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{info.label}</span>
                <span className={`text-xs font-medium ${info.color || "text-foreground"}`}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">存储空间</h3>
          <div className="mb-2">
            <div className="h-3 rounded-full bg-secondary/50 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-info" style={{ width: "42.8%" }} />
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>已用 42.8 GB</span>
            <span>总计 100 GB</span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">快捷操作</h3>
          <div className="space-y-2">
            {["清理缓存", "导出数据", "系统诊断", "联系支持"].map((action) => (
              <button key={action} className="w-full text-left text-sm p-2.5 rounded-lg bg-secondary/20 text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
