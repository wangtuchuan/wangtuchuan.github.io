---
title: 搭建 Obsidian 书写博客流
slug: how-to-create-blog-on-obsidian
date: 2024-03-20T10:36:16+08:00
categories:
  - 计算机
tags:
  - obsidian
  - blog
  - 最佳实践
toc: true
draft: false
---
在HUGO 目录下创建子目录 templates 和 scripts。设置 Templater 的`Template folder location` 为 `templates`

![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/e9fbcfbc9fed4cd1b60ede62476d2b1e.png)

在`templates` 目录下创建模板New Post.md


```
---
title: "{{VALUE:articleTitle}}"
slug: "{{VALUE:articleSlug}}"
date: {{VALUE:articleTimestamp}}
categories: ["{{VALUE:articleCategory}}"]
tags:
toc: false
draft: true
---
```

在 `scripts` 下创建脚本 `create_new_post.js`：

```js
module.exports = async (params) => {
    QuickAdd = params;

    const title = await QuickAdd.quickAddApi.inputPrompt("Blog - Title");
    var slug = await QuickAdd.quickAddApi.inputPrompt("Blog - Slug");
    const category = await QuickAdd.quickAddApi.checkboxPrompt(["计算机", "青梅煮酒", "行见"], ["计算机"]);

    if (typeof slug === 'undefined') {
        slug = title;
    }

    QuickAdd.variables["articleTitle"] = title;
    QuickAdd.variables["articleSlug"] = slug;
    QuickAdd.variables["articleFilename"] = slug.toLowerCase().replace(/[^A-Za-z0-9\s]/g, '').replace(/\s+/g, '-');
    QuickAdd.variables["articleCategory"] = category;
    QuickAdd.variables["articleTimestamp"] = QuickAdd.quickAddApi.date.now('YYYY-MM-DDTHH:mm:ssZ');

    console.log(QuickAdd.variables);
};
```

## Quickadd 设置

![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/5310a2c1d3b5060b8df4448182c7543a.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/f62477314b1cc057ef8591db026c305a.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/508d890725557b553fdcf96bcf4a20e5.png)
![image.png](https://pic.wtuchuan.com/tuchuang/2024/03/54b3df98111ae3ec5d6884100bd00771.png)


## 其他配置：
1. [TOC侧边](https://www.sulvblog.cn/posts/blog/hugo_toc_side/)
2. https://www.lilmp.com/2022-06-22/hugo-papermod-blog/#%e5%b0%87%e6%96%87%e7%ab%a0%e5%a4%a7%e7%b6%b1toc-table-of-content%e6%94%b9%e5%88%b0%e5%81%b4%e9%82%8a
3. 