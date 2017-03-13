---
title: AMPルール
date: 2017-03-10
eye: 10_title.png
tags: amp, html
page: article
---


AMPでブログを作成しようと考え中ですが、ルールが複雑なので備忘録として記述。
あまりにもルールが多いため、最低限必要だと思ったものを抜粋。
※調査段階なので実際にAMPはまだ使っていません。


## 文章宣言はhtml5と同じ下記を記述

```html
<!doctype html>
```

## html属性

```html
<html amp>
```
もしくは

```html
<html ⚡>
```

## meta要素

head内最初の要素

```html
<meta charset="utf-8">
```

またビューポートも記述(下記は例)

```html
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
```

## 同じコンテンツが2つあることにならぬよう、canonicalで元ページを指定

```html
<link rel="canonical" href="http://example.com">
```

## 上記に付随しAMPと非AMPページがある場合は区別出来るよう、AMPページには上記を。非AMPページには下記を記述

```html
<link rel="amphtml" href="http://example.com">
```

## AMPを読み込むためにheadの最後に記述

```html
<script async src="https://cdn.ampproject.org/v0.js"></script>
```

## AMP高速化実現に必要なboilerplateをhead内に記述

```html
<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
```

## -amp-で始まるクラス名は指定出来ない

## schema.orgを用いた構造化データが過去には必須(ないとconsoleエラーだった)であったが今は必要ない。ただし、カルーセルには下記のうちどれかが必要
- Article
- NewsArticle
- NewsArticle
- VideoObject


## 代替が必要なタグ

|代替前|代替後|
|:---:|:---:|
|img|amp-img|
|video|amp-video|
|audio| amp-audio|
|iframe|amp-iframe|

## 禁止タグ
  - applet
  - base
  - embed
  - form(将来的に対応予定)
  - frame
  - frameset
  - object
  - option
  - param
  - select
  - textarea

## amp-imgはpタグで囲み、widthとheightを固定値で指定
詳しくはこちらを参照  
[amp-imgのルール](03-amp-img.html)

## CSS公式
[https://www.ampproject.org/docs/guides/responsive/style_pages](https://www.ampproject.org/docs/guides/responsive/style_pages)

## 容量
50kbまで

## !importamtは使えない

## インラインで書き込む
head内に下記のように書き込む

```html
<style amp-custom>

</style>
```

外部読み込みは基本的に出来ない

```html
<link rel="stylesheet" href="">
```


## 例外的に外部読み込みが可能
PHPでincludeする
現在のところconsoleエラーは出ない

## 広告(Google Adsense)公式
[https://analytics-ja.googleblog.com/2016/02/google-amp-accelerated-mobile-pages.html](https://analytics-ja.googleblog.com/2016/02/google-amp-accelerated-mobile-pages.html)

## 使用方法
下記コードを貼り付け
*部分に自分のアドセンスコードを貼り付け

```html
<amp-ad width=300 height=300 type="adsense" data-ad-client="ca-pub-*" data-ad-slot="*"> </amp-ad>
```

head内に下記コードを貼り付け(必須ではないが推奨)

```html
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
```

## Google Analytics使用方法
head内に下記コードを記述

```html
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
```

body内に下記コードを記述
*部分に自分のアナリティクスコードを貼り付け

```html
<amp-analytics type="googleanalytics" id="analytics1"> <script type="application/json"> { "vars": { "account": "UA-*-*" }, "triggers": { "trackPageview": { "on": "visible", "request": "pageview" } } } </script> </amp-analytics>
```

## 動作確認方法
確認中のURL最後尾に下記を記述

```
#development=1
```

それから検証画面でconsoleエラーが出ていないか確認する
