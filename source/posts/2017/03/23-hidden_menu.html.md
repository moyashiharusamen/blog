---
title: 【jqueryで作ってみた】隠しメニュー
date: 2017-03-23
eye: 11_title.png
tags:  jquery,html,css,javascript
page: article
---

## SP用隠しメニュー
<style>.wrap {width: 100%;/* 中身が無いので仮置き */height: 500px;margin: 40px auto 0;transition: all 0.3s;}.wrap.active {background-color: rgba(0,0,0,0.5);}/* button */.trigger {width: 50px;height: 50px;background-color: rgba(0,0,0,.8);position: relative;}.trigger > div {width: 30px;height: 3px;margin: 0 auto;background-color: #fff;position: absolute;right: 0;left: 0;transition: all 0.3s;}.trigger > div:first-child {top: 12px;}.trigger > div:nth-child(2) {top: 22px;}.trigger > div:last-child {top: 32px;}.trigger.active > div:first-child {transform: rotate(45deg) translateX(7px) translateY(7px);}.trigger.active > div:nth-child(2) {opacity: 0;transform: translateX(-200%);}.trigger.active > div:last-child {transform: rotate(-45deg) translateX(7px) translateY(-7px);}/* menu */.hidden-menu {width: 100%;transition: all 0.3s;transform: translateX(-100%);}.hidden-menu.active {transform: translateX(0);}.menu-list {padding: 20px 0;text-align: center;}.menu-list > li {font-size: 24px;}.menu-list > li + li {margin-top: 16px;}.menu-list > li > a {display: block;color: #fff;}.menu-list > li > a:hover {opacity: 0.7;}</style>

<div class="wrap js-wrap">
  <div class="trigger js-trigger">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <nav class="hidden-menu js-hidden-menu">
    <ul class="menu-list">
      <li><a href="#">hoge1</a></li>
      <li><a href="#">hoge2</a></li>
      <li><a href="#">hoge3</a></li>
      <li><a href="#">hoge4</a></li>
      <li><a href="#">hoge5</a></li>
    </ul>
  </nav>
</div>

<script>var $trigger = $('.js-trigger');var $content = $('.js-hidden-menu');var $wrap = $('.js-wrap');$trigger.on('click',function(){$(this).toggleClass('active');$content.toggleClass('active');$wrap.toggleClass('active');});</script>


## HTML

```html
<div class="wrap js-wrap">
  <div class="trigger js-trigger">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <nav class="hidden-menu js-hidden-menu">
    <ul class="menu-list">
      <li><a href="#">hoge1</a></li>
      <li><a href="#">hoge2</a></li>
      <li><a href="#">hoge3</a></li>
      <li><a href="#">hoge4</a></li>
      <li><a href="#">hoge5</a></li>
    </ul>
  </nav>
</div>
```

```css
.wrap {
  width: 100%;
/*   中身が無いので仮置き */
  height: 500px;
  margin: 0 auto;
  transition: all 0.3s;
}
.wrap.active {
  background-color: rgba(0,0,0,0.5);
}

/* button */
.trigger {
  width: 50px;
  height: 50px;
  background-color: rgba(0,0,0,.8);
  position: relative;
}
.trigger > div {
  width: 30px;
  height: 3px;
  margin: 0 auto;
  background-color: #fff;
  position: absolute;
  right: 0;
  left: 0;
  transition: all 0.3s;
}
.trigger > div:first-child {
  top: 12px;
}
.trigger > div:nth-child(2) {
  top: 22px;
}
.trigger > div:last-child {
  top: 32px;
}
.trigger.active > div:first-child {
  transform: rotate(45deg) translateX(7px) translateY(7px);
}
.trigger.active > div:nth-child(2) {
  opacity: 0;
  transform: translateX(-200%);
}
.trigger.active > div:last-child {
  transform: rotate(-45deg) translateX(7px) translateY(-7px);
}

/* menu */
.hidden-menu {
  width: 100%;
  transition: all 0.3s;
  transform: translateX(-100%);
}
.hidden-menu.active {
  transform: translateX(0);
}
.menu-list {
  padding: 20px 0;
  text-align: center;
}
.menu-list > li {
  font-size: 24px;
}
.menu-list > li + li {
  margin-top: 16px;
}
.menu-list > li > a {
  display: block;
  color: #fff;
}
.menu-list > li > a:hover {
  opacity: 0.7;
}
```

## javascript

```javascript
var $trigger = $('.js-trigger');
var $content = $('.js-hidden-menu');
var $wrap = $('.js-wrap');

$trigger.on('click',function(){
  $(this).toggleClass('active');
  $content.toggleClass('active');
  $wrap.toggleClass('active');
});
```
