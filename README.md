# 使用说明

## 开发工具
1. 统一使用[vscode](https://code.visualstudio.com/download)
2. 并安装插件保证代码格式化
  - eslint
  - stylelint
3. 统一使用[pnpm](https://www.pnpm.cn/) 包管理工具

## 项目使用

### 安装依赖

```shell
pnpm install
```

### 项目启动

```shell
pnpm run dev
```
### 安装子应用依赖

```shell
pnpm add xxx filter ddd-demo
```

## 目录结构说明

- apps
  - ddd
- libs (第三方依赖)
  - auae
  - kanban
  - ...
- packages
  - apis
  - components
    - ui
    - business
  - constants
  - theme-chalk
  - shared

### TODO (apps)
1. 全局样式scss
2. 图片压缩
3. icon、字体库、svg 使用
4. 拆包
5. 全局组件修改
