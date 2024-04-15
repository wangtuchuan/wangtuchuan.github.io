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

## 1. 服务器部署
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
## 2. Artalk 后台配置
登录 Artalk 网站 ： https://artalk.example.org
在站点管理中添加站点名
![image.png](https://pic.wtuchuan.com/tuchuang/2024/04/759b5e44f16c35b0fae2e42c002bdbc5.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/04/e06fd93afc6f431ede158d6e36666306.png)

## 3. Hugo 配置
> 不同于官网配置，不直接修改主题内的文件， 而是直接再根目录复制一份对应的文件来进行修改

创建模板文件 `/layouts/partials/comment/artalk.html`：
> 静态文件直接从 artalk 网站上获取

```html
<link href="https://artalk.example.org/dist/Artalk.css" rel="stylesheet" />
<script src="https://artalk.example.org/dist/Artalk.js"></script>

<!-- Artalk -->
<div id="Comments"></div>

<script>
  Artalk.init({
    el: '#Comments',
    pageKey: '{{ .Permalink }}',
    pageTitle: '{{ .Title }}',
    server: '{{ $.Site.Params.artalk.server }}',
    site: '{{ $.Site.Params.artalk.site }}',
    // ...你的其他配置
  })
</script>
```

文章页模板 `/layouts/_default/single.html` 合适的位置添加：

```html
<div class="article-comments">{{- partial "comment/artalk" . -}}</div>
```

修改 Hugo 配置文件`hugo.yml`：

```yaml
params:
  artalk:
    server: 'https://artalk.example.org'
    site: '你的站点名'
```

## 4. CloudFlare 配置
直接部署上线，会遇到 `Artalk Error : failed fetch xxx`
此时打开`F12` ，提示是 CORS 错误，可以通过配置 CloudFlare 解决
![image.png](https://pic.wtuchuan.com/tuchuang/2024/04/194e84735d828e729a6e5a8b095cdb66.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/04/55dd22a6cba1d338dec32d2518663260.png)

此时再刷新博客，就可以愉快的评论了
