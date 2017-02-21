---
title: apm-imgのルール
date: 2017-02-18
eye: 18_title.png
tags: amp, html
page: article
---

AMPのタグの一つであるamp-imgタグのルールを備忘的に記述。

## 使用方法
pタグで囲み、widthとheightは固定値を指定する

```html
<p>
  <amp-img
    src="example.jpg"
    width="500"
    height="300">
  </amp-img>
<p>
```

さらに色々な属性を指定することができる

## layout属性
### respomsive
画像のアスペクト比を保ったまま拡大・縮小をしてくれます。

```html
<p>
  <amp-img
    src="example.jpg"
    width="500"
    height="300"
    layout="responsive">
  </amp-img>
<p>
```

### fixed
width heightで指定した通りのサイズに固定される

```html
<p>
  <amp-img
    src="example.jpg"
    width="500"
    height="300"
    layout="fixed">
  </amp-img>
<p>
```

### fixed-height
高さが固定される。アスペクト比は考慮されないので注意。
widthは指定しないかautoにする

```html
<p>
  <amp-img
    src="example.jpg"
    height="300"
    layout="fixed-height">
  </amp-img>
<p>
```

### fill
ドキュメントに収まるように高さ、幅が調整される。親要素ではないので注意。
width heightを指定してはいけない。

```html
<p>
  <amp-img
    src="example.jpg"
    layout="fill">
  </amp-img>
<p>
```

## serset属性
ser属性をserset属性に変えると指定の幅によって表示させる画像を切り替えることが出来る。
しかしAMPはスマホ用なので使うのかどうか...


```html
<p>
  <amp-img
    srcset="/s.jpg 699w
	    /m.jpg 948w,
	    /l.jpg 1200w"
    width="500"
    height="300">
  </amp-img>
<p>
```
