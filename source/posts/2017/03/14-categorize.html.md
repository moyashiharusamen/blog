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
