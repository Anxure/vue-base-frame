# vue3-base-frame
基于Vue、ant-design-vue的管理系统架构，让开发人员专注于业务，其他琐事，交给框架！

感谢开源社区，感谢ant-design-vue团队提供的优秀开源项目!

# 特性
- 菜单配置：扁平化数据组织，方便编写、存库，页面菜单、标题、面包屑状态自动同步；
- 系统路由：简化路由配置，一个变量搞定；
- Ajax请求：restful规范，自动错误提示，提示可配置；自动打断未完成的请求；
- Mock模拟数据：无需等待后端，自己提供数据，简化mock写法；
- Module防冲突，用户可自定义主题颜色；
- 导航布局：多种导航方式，一键切换；
- Model(Vuex)：提供模块化管理；
- 权限控制：菜单级别、功能级别权限控制；
- 内置组件：Echart图表；
- ......

系统提供了一些基础页面：
- 登录
- Echart应用页面
- 大数据展示屏
- 指令按钮鉴权
- ......

# 目录结构

```
vue3.0-base-frame
├─ .browserslistrc
├─ .env,production
├─ .env.development
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ LICENSE
├─ mock
│  ├─ index.ts
│  ├─ module
│  │  ├─ menu.ts
│  │  └─ user.ts
│  └─ util.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ model
│  │  │  └─ userModel.ts
│  │  └─ user.ts
│  ├─ App.vue
│  ├─ assets
│  │  ├─ iconfont
│  │  │  └─ iconfont.js
│  │  ├─ image
│  │  │  ├─ avatar.png
│  │  │  ├─ login
│  │  │  │  └─ login.svg
│  │  │  └─ workplace.jpg
│  │  ├─ logo.png
│  │  └─ style
│  │     ├─ common.less
│  │     ├─ flex.less
│  │     ├─ iconfont.css
│  │     ├─ layout.less
│  │     ├─ size.less
│  │     └─ variables.less
│  ├─ components
│  │  └─ TestProps.vue
│  ├─ config
│  │  └─ globalSetting.ts
│  ├─ enums
│  │  └─ http.ts
│  ├─ layout
│  │  ├─ breadcrumb
│  │  │  └─ Index.vue
│  │  ├─ Index.vue
│  │  ├─ logo
│  │  │  └─ Index.vue
│  │  ├─ nav
│  │  │  └─ Index.vue
│  │  ├─ PageView.vue
│  │  └─ sidebar
│  │     ├─ Index.vue
│  │     └─ SiderItem.vue
│  ├─ main.ts
│  ├─ permission.ts
│  ├─ plugin
│  │  └─ antd.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ router.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  ├─ index.ts
│  │  └─ modules
│  │     ├─ app.ts
│  │     └─ user.ts
│  ├─ types
│  │  ├─ axios.d.ts
│  │  ├─ global.d.ts
│  │  └─ module
│  │     └─ common.d.ts
│  ├─ utils
│  │  ├─ index.ts
│  │  ├─ request.ts
│  │  └─ storage.ts
│  └─ views
│     ├─ exception
│     │  ├─ 403.vue
│     │  └─ 404.vue
│     ├─ form
│     │  ├─ AdvancedFrom.vue
│     │  └─ BaseForm.vue
│     ├─ login
│     │  └─ Index.vue
│     └─ workPlace
│        ├─ components
│        │  ├─ Adynamic.vue
│        │  ├─ Agroup.vue
│        │  ├─ Aheader.vue
│        │  ├─ Aimg.vue
│        │  ├─ Aproject.vue
│        │  ├─ AquickNav.vue
│        │  └─ data.ts
│        └─ Index.vue
├─ tsconfig.json
├─ vue.config.js
└─ yarn.lock

```
# 快速开始
##### install dependencies

yarn / npm install

#####  serve with hot reload at localhost:8089

yarn serve / npm run serve

#####  build for production with minification

yarn build / npm run build
