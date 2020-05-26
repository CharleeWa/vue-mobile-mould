# h5's template of project

> a basic template for h5, use easy and efficiency！


## 说明
--- 
1. 项目采用rem 适配;
2. 路由跳转有进度条;
3. 在PC端设有移动版版心;
4. less预编译样式处理;
5. eslint代码检查;
6. 集成vant-UI组件;
7. 集成animate.css动画;
8. 集成mockjs2;

## 使用
---
- 新建你的项目;
- 把项目clone到本地;
- 把h5-template文件拷贝到你的项目
- 不包括node_modules
- over

## 图片预览方案
----

- Vant自带的imagePreview 在PC模式下兼容性不好，须得使用css样式处理；
    `       
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    cursor: pointer;
    `
