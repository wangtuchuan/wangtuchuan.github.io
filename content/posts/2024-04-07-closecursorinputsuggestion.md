---
title: 关闭 Sonoma 光标输入法提示（不推荐）
slug: close-cursor-input-suggestion
date: 2024-04-07T14:23:14+08:00
categories:
  - 折腾
tags:
  - macos
toc: false
draft: false
---

![](https://pic.wtuchuan.com/tuchuang/2024/04/77b6c28db9fa3c54ebe79505d52cd492.png)
## 背景
从 Sonoma 版本开始，切换中英文输入会有光标提示，但是这个提示动画的延迟大，且有几率带有卡顿。
## 解决方案
很简单，两句命令，抄来的：
```
sudo mkdir -p /Library/Preferences/FeatureFlags/Domain
sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist
```
之后重启就问题解决