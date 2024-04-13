This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

## node版本>20
## 1安装依赖

```sh
npm install
```

### 2运行开发环境

```sh
npm run dev
```
## 3运行json服务器
```sh
npm run server
```
### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 文件目录结构说明

本项目遵循模块化、组件化开发原则，以下是对项目文件夹及其内容的详细注释：

## `public` 目录

- **功能**：存放项目所需的静态资源，供浏览器直接访问。

- **文件**：
  - `favicon.ico`：网站图标，显示在浏览器标签页上。

## `src` 目录（源代码）

### `App.vue`

- **功能**：项目主组件，作为整个应用程序的根组件。

### `main.js`

- **功能**：项目入口文件，负责初始化 Vue 实例并挂载到指定 DOM 元素上。

### `assets` 目录

- **功能**：存放项目内使用的各类静态资源（图片、样式表等）。

#### `icons` 子目录

- **功能**：专门存放图标和其他小图像资源。

### `components` 目录

- **功能**：组织项目中的可复用 Vue 组件。

#### `404` 子目录

- **文件**：`404.vue`
- **功能**：自定义的“找不到页面”（404 Not Found）组件。

#### `layout` 子目录

- **功能**：包含项目通用布局组件。

##### `components` 子子目录

- **包含组件**：`mainView.vue`, `sideMenu.vue`, `top.vue`, `topleft.vue`
- **功能**：定义布局中各部分的子组件，如主视图、侧边菜单、顶部栏和左上角区域。

### `router` 目录

- **功能**：管理项目路由及页面跳转逻辑。

#### `index.js`

- **功能**：路由模块的入口文件。

#### `routes.js`

- **功能**：定义项目所有路由规则及对应的组件。

### `server` 目录

- **功能**：存放与后端服务器通信相关的代码及数据。

#### `axios.js`

- **功能**：封装的 Axios HTTP 请求库，用于简化 API 调用。

#### `data.json`

- **功能**：模拟数据文件，可能用于本地开发或测试。

### `stores` 目录

- **功能**：存放 Vuex 状态管理相关代码。

### `views` 目录

- **功能**：存放项目中各个具体页面的 Vue 组件。

#### 页面组件列表

- `creatorCenter.vue`：创作者中心页面
- `creatorHome.vue`：创作者首页
- `download.vue`：下载页面
- `home.vue`：项目首页
- `login.vue`：登录页面
- `mainItem.vue`：主要项目展示页面
- `registerDialog.vue`：注册对话框页面
