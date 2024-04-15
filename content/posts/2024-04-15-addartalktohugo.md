---
title: Hugo 集成 Artalk 评论系统
slug: add-artalk-to-hugo
date: 2024-04-15T14:14:31+08:00
categories:
  - 折腾
tags:
  - blog
toc: true
draft: false
---

## 服务器部署
[官方文档部署操作](https://artalk.js.org/guide/deploy.html)

Artalk 有多种部署方式，这里为了方便，我们采用 docekr-compose 的方式部署。
1. 创建 Artalk 文件夹
```
mkdir artalk
```
2. 创建 docker-compose.yml 文件
```yml
version: '3.5'
services:
  artalk:
    container_name: artalk
    image: artalk/artalk-go
    restart: always
    ports:
      - 8090:23366
    volumes:
      - ./data:/data
```

> 服务器上 8080 已经被占用，这里和官网教程不一样，用 8090

3. 先 `docker-compose up` 启动一下，如果没有遇到报错，则 ctrl-c 再`docekr-compose up -d`
![image.png](https://pic.wtuchuan.com/tuchuang/2024/04/3326b1cd216a11d4c4ef995adbf88197.png)

4. caddy 配置反向代理（省略）
5. 创建管理员账号
![image.png](https://pic.wtuchuan.com/tuchuang/2024/04/1b0a4df94828b50231a2a25b2fb9db5b.png)
