<table>
  <tbody>
    <tr>
      <td><img src="./public/demo/1.jpg" /></td>
      <td><img src="./public/demo/14.jpg" /></td>
    </tr>
    <tr>
      <td><img src="./public/demo/2.jpg" /></td>
      <td><img src="./public/demo/11.jpg" /></td>
    </tr>
    <tr>
      <td><img src="./public/demo/4.jpg" /></td>
      <td><img src="./public/demo/12.jpg" /></td>
    </tr>
    <tr>
      <td><img src="./public/demo/3.jpg" /></td>
      <td><img src="./public/demo/5.jpg" /></td>
    </tr>
    <tr>
      <td><img src="./public/demo/6.jpg" /></td>
      <td><img src="./public/demo/7.jpg" /></td>
    </tr>
    <tr>
      <td><img src="./public/demo/8.jpg" /></td>
      <td><img src="./public/demo/9.jpg" /></td>
    </tr>
    <tr>
      <td><img src="./public/demo/10.jpg" /></td>
      <td><img src="./public/demo/13.jpg" /></td>
    </tr>
    <tr>
      <td><img src="./public/demo/19.jpg" /></td>
      <td><img src="./public/demo/20.jpg" /></td>
    </tr>
  </tbody>
</table>


# electron-slash-admin

一个electron脚手架，基于:
1. [electron-vite-react](https://github.com/electron-vite/electron-vite-react) 
2. [slash-admin](https://github.com/d3george/slash-admin)

<br/>
<hr/>
<br/>

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/vite-react-electron?color=fa6470)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/vite-react-electron?color=d8b22d)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/vite-react-electron)
[![Required Node.JS >= 14.18.0 || >=16.0.0](https://img.shields.io/static/v1?label=node&message=14.18.0%20||%20%3E=16.0.0&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

[English](README.md) | 简体中文

## 概述

📦 开箱即用  
🎯 基于官方的 [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), 低侵入性  
🌱 结构清晰，可塑性强  
💪 支持在渲染进程中使用 Electron、Node.js API  
🔩 支持 C/C++ 模块  
🖥 很容易实现多窗口  

## ⌨️ 环境依赖

```
"react":              "^18.3.1",
"react-dom":          "^18.3.1",
"react-router-dom":   "^6.16.0",
"electron":           "^33.2.0",
"electron-builder":   "^24.13.3",
"electron-updater":   "^6.3.9",
"vite":               "^5.4.11",
"msw":                "^2.4.9",
"antd":               "^5.9.3",
"apexcharts":         ">=4.0.0",
```


## 快速开始

```sh
# clone the project
git clone https://github.com/12343954/electron-slash-admin.git

# enter the project directory
cd electron-slash-admin

# install dependency
npm install

# develop
npm run dev
```

## 调试

![electron-vite-react-debug.gif](/electron-vite-react-debug.gif)

## 目录

*🚨 默认情况下, `electron` 文件夹下的文件将会被构建到 `dist-electron`*

```tree
├── electron                                 Electron 源码文件夹
│   ├── main                                 Main-process 源码
│   └── preload                              Preload-scripts 源码
│
├── release                                  构建后生成程序目录
│   └── {version}
│       ├── {os}-{os_arch}                   未打包的程序(绿色运行版)
│       └── {app_name}_{version}.{ext}       应用安装文件
│
├── public                                   同 Vite 模板的 public
└── src                                      渲染进程源码、React代码
```

<!--
## 🚨 这需要留神

默认情况下，该模板在渲染进程中集成了 Node.js，如果你不需要它，你只需要删除下面的选项. [因为它会修改 Vite 默认的配置](https://github.com/electron-vite/vite-plugin-electron-renderer#config-presets-opinionated).

```diff
# vite.config.ts

export default {
  plugins: [
    ...
-   // Use Node.js API in the Renderer-process
-   renderer({
-     nodeIntegration: true,
-   }),
    ...
  ],
}
```
-->

## 🔧 额外的功能

1. Electron 自动更新 👉 [阅读文档](src/components/update/README.zh-CN.md)
2. Playwright 测试

## ❔ FAQ

- [C/C++ addons, Node.js modules - Pre-Bundling](https://github.com/electron-vite/vite-plugin-electron-renderer#dependency-pre-bundling)
- [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)

## 赞助 ☕️

<img width="570" src="./public/payaw.jpg">
