---
title: PicGO 搭配 CF 图床
slug: picgo-with-cf-picture-bed
date: 2024-03-23T16:51:46+08:00
categories:
  - 折腾
tags:
  - 最佳实践
toc: false
draft: false
---
## 0. 前置准备工作
需要一个`CloudFlare`账号、一个域名。
## 1. CloudFlare 配置
![1711184328692.png](https://pic.wtuchuan.com/tuchuang/2024/03/99d080b1d3fd1c0cb673ee40e4994e42.png)

进入 CloudFlare 之后，点击左侧 R2 ，创建存储桶

![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/1c1a04dc4a40905efa3e56dda974a842.png)

然后配置存储桶，点击设置，并在连接域填上自定义域名，这里推荐将域名解析配置在CloudFlare上。

![1711184525555.png](https://pic.wtuchuan.com/tuchuang/2024/03/8b504ff90eefc9bd781f515e60851d60.png)

接下来创建 API 令牌，供第三方应用消费，如 Picgo

![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/9888fab8866ee6a54716d5e14461795d.png)

![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/ab929bfb24ce2df5c7eb6cf98b12beb5.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/d1058fc52cf0931565bbb82b4af9bd86.png)

**上面的访问密钥 ID、应用密钥以及自定义节点需要记录下来，后面配置 Picgo 的时候会用到**
## 2. PicGo 配置

[下载 PicGo](*https://github.com/Molunerfinn/PicGo/releases)

下载 S3 插件

![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/565306b5f49b5e39c2f1b4f3a3bd8dae.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/28f7245c5f95eaff8b0064a996cac82e.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/882bf0e6e68fb30f8e1fde3666b02a1d.png)

至此，PicGo 配置完成
## 3. （额外）Obsidian 配置，实现粘贴图片即上传

![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/1d1b55c36ee4da784f30f6025645bbe4.png)

下载 image auto upload 插件，开启即可。
