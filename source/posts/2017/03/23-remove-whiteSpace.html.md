---
title: ejsでホワイトスペースを削除する方法
date: 2017-03-23
eye: 23_title.png
tags:  javascript,vue.js
page: article
---


使い慣れた静的サイトジェネレータ「ejs」  
半年ほど使っていますが、今更ながらホワイトスペースを削除する方法を知ったのでご紹介します。

## ホワイトスペースの発生状況

ejs内でif文やfor文を使うときに  
```<% %>```  
を使って文自体を出力しないようにします。

しかしそのままだと該当部分がホワイトスペースとしてコンパイルされてしまいます。


```html
index.ejs
<!-- var hoge = 'hoge'; -->

<div>
  <% if(hoge === 'hoge'){ %>
    <p>hoge</p>
  <% } %>
</div>
```

```html
index.html
<div>

    <p>hoge</p>

</div>
```

## 解決方法

これを解決するには  
```
<%_ _%>
```
このように「_(アンダースコア)」を%の前後につけることで除去されます。

```html
index.ejs
<!-- var hoge = 'hoge'; -->

<div>
  <%_ if(hoge === 'hoge'){ _%>
    <p>hoge</p>
  <%_ } _%>
</div>
```


```html
index.html
<div>
    <p>hoge</p>
</div>
```

## まとめ
コンパイルする際にhtmlをminifyすればホワイトスペースを除去する必要はありません。  
しかし諸事情で出来ない場合、微々たるものですが、パフォーマンスを考慮しホワイトスペースを除去しましょう。
