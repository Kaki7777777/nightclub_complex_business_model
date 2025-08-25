# 🚀 GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称建议使用：`HiQ` 或 `nightclub-analysis`
4. 设置为 Public（GitHub Pages 免费版需要公开仓库）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 2. 上传项目文件

#### 方法一：通过 GitHub 网页界面
1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到上传区域：
   ```
   ├── index.html
   ├── nightclub_analysis.html
   ├── analysis_scripts.js
   ├── README.md
   ├── PROJECT_README.md
   ├── LICENSE
   ├── .gitignore
   ├── nightclub_business_analysis.md
   ├── decision_framework.md
   ├── decision_scorecard.md
   └── .github/workflows/deploy.yml
   ```
3. 添加提交信息："Initial commit - Nightclub Analysis Tool"
4. 点击 "Commit changes"

#### 方法二：通过 Git 命令行
```bash
# 克隆你的空仓库
git clone https://github.com/yourusername/HiQ.git
cd HiQ

# 复制所有项目文件到这个目录

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit - Nightclub Analysis Tool"

# 推送到 GitHub
git push origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库的 Settings 页面
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分选择 "GitHub Actions"
4. 等待几分钟，GitHub Actions 会自动部署
5. 部署完成后，你会看到绿色的链接：`https://yourusername.github.io/HiQ/`

### 4. 验证部署

1. 访问 `https://yourusername.github.io/HiQ/`
2. 确认页面正常加载
3. 测试交互功能（滑块、图表等）
4. 检查在不同设备上的显示效果

## 🔧 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容为你的域名，例如：`analysis.yourdomain.com`
3. 在域名提供商处设置 CNAME 记录指向 `yourusername.github.io`

## 📊 监控和分析

### GitHub Actions 状态
- 在仓库的 "Actions" 标签页查看部署状态
- 绿色勾号表示部署成功
- 红色叉号表示部署失败，点击查看错误日志

### 访问统计
GitHub Pages 不提供内置分析，你可以添加：
- Google Analytics
- GitHub 仓库的 Insights > Traffic

## 🛠️ 故障排除

### 常见问题

1. **页面显示 404**
   - 检查仓库是否为 Public
   - 确认 GitHub Pages 已启用
   - 等待 5-10 分钟让更改生效

2. **CSS/JS 文件加载失败**
   - 检查文件路径是否正确
   - 确认所有文件都已上传

3. **图表不显示**
   - 检查 Chart.js CDN 链接是否可访问
   - 查看浏览器控制台的错误信息

4. **移动端显示异常**
   - 检查 viewport meta 标签
   - 测试响应式 CSS

### 调试步骤

1. 打开浏览器开发者工具 (F12)
2. 查看 Console 标签页的错误信息
3. 检查 Network 标签页的资源加载情况
4. 在 GitHub 仓库的 Issues 中报告问题

## 🔄 更新部署

每次推送到 main 分支时，GitHub Actions 会自动重新部署：

```bash
# 修改文件后
git add .
git commit -m "Update analysis tool"
git push origin main
```

## 📱 移动端优化

确保以下设置正确：
- viewport meta 标签已设置
- 响应式 CSS 媒体查询正常工作
- 触摸友好的交互元素

## 🔒 安全考虑

- 不要在代码中包含敏感信息
- 使用环境变量存储 API 密钥（如果需要）
- 定期更新依赖库

## 📞 获取帮助

如果遇到问题：
1. 查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
2. 在项目仓库创建 Issue
3. 参考 [GitHub Community](https://github.community/)

---

部署成功后，你的夜店分析工具就可以在全球范围内访问了！🎉
