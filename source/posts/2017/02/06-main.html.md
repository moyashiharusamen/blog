---
title: IEでHTML5のmainを使う際の注意点
date: 2017-02-06
eye: 06_title.png
tags: IE, html5
page: article
---

HTML5の要素であるmainを使用した際に起きた注意点を紹介します。

## 注意点
mainタグを使用する際は

```css
.main {
  display: block;
}
```

をかけてあげる

## 理由
IEではmainタグのデフォルトに設定されているdisplayがinlineのため
