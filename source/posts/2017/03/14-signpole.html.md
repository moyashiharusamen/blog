---
title: 【css3で作ってみた】床屋のあれ
date: 2017-03-14
eye: 14_title.png
tags: html,css3
page: article
---

## 床屋のあれ(サインポール)

<style>.signpole {width: 80px;height: 200px;margin: 40px auto;overflow: hidden;border: 1px solid #333;}.inner {animation: move 2s infinite linear;}.red,.blue {width: 200%;height: 30px;margin-bottom: 40px;transform: rotate(-40deg);position: relative;left: -50%;}.red {background-color: #F74646;}.blue {background-color: #464FF7;}@keyframes move {from {transform: translateY(0);}to {transform: translateY(-140px);  }}
</style>

<div class="signpole">
  <div class="inner">
    <div class="red"></div>
    <div class="blue"></div>
    <div class="red"></div>
    <div class="blue"></div>
    <div class="red"></div>
    <div class="blue"></div>
  </div>
</div>

## html
```html
<div class="signpole">
  <div class="inner">
    <div class="red"></div>
    <div class="blue"></div>
    <div class="red"></div>
    <div class="blue"></div>
    <div class="red"></div>
    <div class="blue"></div>
  </div>
</div>
```

## css
```css
.signpole {
  width: 80px;
  height: 200px;
  margin: auto;
  overflow: hidden;
  border: 1px solid #333;
}
.inner {
  animation: move 2s infinite linear;
}
.red,
.blue {
  width: 200%;
  height: 30px;
  margin-bottom: 40px;
  transform: rotate(-40deg);
  position: relative;
  left: -50%;
}
.red {
  background-color: #F74646;
}
.blue {
  background-color: #464FF7;
}

@keyframes move {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-140px);  
  }
}
```

### 解説

CSSアニメーションを使用してサインポールの赤と青の部分を動かしています。  
***@keyframes***はその名の通り通過点(キーフレーム)を定義し、***animation***プロパティは動き方を指定していきます。  

#### keyframes

```css
@keyframes move {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-140px);  
  }
}
```

まずは***@keyframes***の横のmoveですね。
これは任意の名前をつけることができます。  

ここでは開始の位置と終了の位置を指定しています。
開始と終了なのでfromは0%、toは100%と書き換えることもでき、数値でもっと細かい指定をすることも可能です。

余談ですが、これを書いていてふと***@keyframes***って名前のつけ方に制限あるのかなと気になったので調べてみました。

- 大文字小文字は関係ない
- 予約語可能
- 日本語可能
- 文字の最初に記号は使えない

軽くですが、こんな感じでした。やはり日本語は違和感が...(笑)

#### CSSアニメーション

```css
.inner {
  animation: move 2s infinite linear;
}

```

そして実際に動かすセレクタに先ほど***@keyframes***で指定した名前を使用して、動き方を指定していきます。  
ここでは

- moveという@keyframesを使い
- infiniteで無限に繰り返し
- linearで一定の動きをさせる

という指定をしています。
とっても簡単ですね。


ショートハンドで書いていますが、各プロパティを分けて書くこともできます。
細かい使用は公式に譲りますね(笑)

## まとめ
ここではとても単純な動きを指定していますが、CSSアニメーションはもっと複雑な動きが可能です。

海外のサイトはとても参考になるので貼っておきますね！  
[***Hover.css***](http://ianlunn.github.io/Hover/)  
[***Animate.css***](https://daneden.github.io/animate.css/)

### 参照
[CSSアニメーション](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)  
[@keyframes](https://developer.mozilla.org/ja/docs/Web/CSS/@keyframes)  
[animation](https://developer.mozilla.org/ja/docs/Web/CSS/animation)
