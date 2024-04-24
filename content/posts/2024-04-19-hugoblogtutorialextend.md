---
title: Hugo 博客教程指北
slug: hugo-blog-tutorial-extend
date: 2024-04-19T14:32:26+08:00
categories:
  - 折腾
tags:
  - blog
toc: false
draft: false
---

## shortcodes 篇
参考：[利用 Hugo 短代码实现一些特殊效果｜小骆同学](https://lovir.cn/p/shortcodes/#%E5%9D%97%E5%BC%95%E7%94%A8)

参考：[如何在代码块里内嵌 HUGO 的简码](https://tin6.com/post/how-to-escape-hugo-shortcodes-within-hugo-markdown/)

**示例代码**：
```
{{</* quote */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /quote */>}}

{{</* notice notice-warning */>}} warning 可以换成 info tip note {{</* notice */>}}

{{</* simple-notice simple-notice-warning */>}} warning 可以换成 info tip note {{</* /simple-notice */>}}

{{</* github name="hugo" link="https://github.com/gohugoio/hugo" description="The world’s fastest framework for building websites." color="#00add8" language="GO" */>}}
```

**效果演示**：
{{< quote >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /quote >}}

{{< notice notice-warning >}} warning 可以换成 info tip note {{< /notice >}}

{{< simple-notice simple-notice-warning >}} warning 可以换成 info tip note {{< /simple-notice >}}

{{< github name="hugo" link="https://github.com/gohugoio/hugo" description="The world’s fastest framework for building websites." color="#00add8" language="GO" >}}


## Papermod 悬浮目录
参考：[Hugo博客目录放在侧边 | PaperMod主题 | Sulv’s Blog](https://www.sulvblog.cn/posts/blog/hugo_toc_side/)

