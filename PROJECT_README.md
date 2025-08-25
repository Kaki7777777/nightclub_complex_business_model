# 🏢 夜店综合体商业模式分析工具

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen)](https://yourusername.github.io/HiQ/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 项目简介

这是一个专为夜店经营者设计的交互式商业分析工具，用于评估是否应该加入综合体在其他城市的拓展项目。通过可视化图表、实时评分系统和智能决策建议，帮助做出数据驱动的商业决策。

## 🎯 核心功能

- **📊 商业模式对比**：传统模式 vs 通票创新模式的详细分析
- **💰 财务结构分析**：从夜店视角展示收入成本结构对比
- **🎛️ 交互式评分**：四维度实时评估系统（财务、市场、合作、战略）
- **🤖 智能建议**：基于评分自动生成决策建议
- **📱 响应式设计**：支持桌面和移动设备

## 🚀 在线演示

访问 [GitHub Pages 演示](https://yourusername.github.io/HiQ/) 体验完整功能

## 💻 本地运行

### 方法一：直接打开
```bash
# 克隆项目
git clone https://github.com/yourusername/HiQ.git
cd HiQ

# 直接在浏览器中打开
open nightclub_analysis.html
# 或者
start nightclub_analysis.html  # Windows
```

### 方法二：本地服务器
```bash
# 使用 Python 启动本地服务器
python -m http.server 8000
# 或者
python3 -m http.server 8000

# 访问 http://localhost:8000
```

### 方法三：使用 Live Server
如果你使用 VS Code，安装 Live Server 扩展，右键点击 `nightclub_analysis.html` 选择 "Open with Live Server"

## 📊 使用指南

### 评分维度说明

| 维度 | 权重 | 评分标准 |
|------|------|----------|
| **财务可行性** | 35% | 租金合理性、分成比例、ROI预期 |
| **市场环境** | 25% | 市场规模、竞争程度、消费习惯 |
| **合作条件** | 25% | 谈判空间、合同条款、运营自主权 |
| **战略价值** | 15% | 品牌建设、学习价值、网络效应 |

### 决策标准

- **≥ 4.0分**：强烈推荐，积极推进
- **3.5-3.9分**：推荐，注意风险控制
- **3.0-3.4分**：谨慎考虑，需要优化条件
- **2.5-2.9分**：不推荐，寻找其他机会
- **< 2.5分**：强烈不推荐

## 🛠️ 技术栈

- **前端**：HTML5, CSS3, JavaScript (ES6+)
- **图表库**：Chart.js 3.x
- **样式**：自定义响应式CSS
- **部署**：GitHub Pages

## 📁 项目结构

```
HiQ/
├── index.html                          # 入口页面
├── nightclub_analysis.html             # 主分析工具
├── analysis_scripts.js                 # 交互功能脚本
├── README.md                           # 详细使用说明
├── PROJECT_README.md                   # GitHub项目说明
├── nightclub_business_analysis.md      # 商业分析文档
├── decision_framework.md               # 决策框架
├── decision_scorecard.md               # 评分卡模板
└── business_model_comparison.py        # 图表生成脚本(可选)
```

## 🔧 自定义配置

### 修改评分权重
在 `nightclub_analysis.html` 中找到 JavaScript 部分：

```javascript
const weights = {
    financial: 0.35,    // 财务可行性权重
    market: 0.25,       // 市场环境权重
    cooperation: 0.25,  // 合作条件权重
    strategy: 0.15      // 战略价值权重
};
```

### 调整财务数据
修改图表中的示例数据：

```javascript
// 传统模式收入数据
data: [100, 0, 80, 0],  // 门票收入
data: [120, 0, 100, 0], // 酒水收入
// ... 其他数据
```

## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 更新日志

### v1.0.0 (2024-01-XX)
- ✨ 初始版本发布
- 📊 商业模式对比分析
- 💰 财务结构可视化
- 🎛️ 交互式评分系统
- 🤖 智能决策建议

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙋‍♂️ 支持

如果你觉得这个项目有用，请给它一个 ⭐️！

有问题或建议？请创建 [Issue](https://github.com/yourusername/HiQ/issues) 或联系维护者。

## 🔗 相关链接

- [在线演示](https://yourusername.github.io/HiQ/)
- [问题反馈](https://github.com/yourusername/HiQ/issues)
- [功能请求](https://github.com/yourusername/HiQ/issues/new?template=feature_request.md)

---

**免责声明**：本工具仅供决策参考，不构成投资建议。最终决策请结合专业咨询和实际情况。
