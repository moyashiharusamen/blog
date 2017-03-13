---
title: 【jqueryで作ってみた】Accordion Menu
date: 2017-03-11
eye: 11_title.png
tags: jquery,html,css,javascript
page: article
---


jqueryで作ったものを紹介していきます

## Accordion Menu

<style>.list-wrap {
  width: 200px;
  margin: 40px auto 0;
}.list-wrap + .list-wrap {
  margin-top: 1px;
}.list-title {
  display: block;
  padding: 4px 8px;
  font-size: 16px;
  background-color: #005183;
  color: #fff;
  cursor: pointer;
  position: relative;
}.list-title:hover{
  opacity: 1;
}.list-title:after {
  content: "";
  display: block;
  margin: auto;
  width: 14px;
  height: 14px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCAxMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSIxNSwyNC41IDY0LDczLjMgMTEzLDI0LjUgMTI4LDM5LjUgNjQsMTAzLjUgMCwzOS41ICIvPjwvc3ZnPg0K);
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transition: .3s;
  transition: .3s;
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
}.list-title.open:after {
  transform: rotateX(-180deg);
}.accrodion-content {
  display: none;
}.accrodion-list {
  padding: 4px 8px;
  background-color: #ddd;
}.accrodion-list>li{
  font-size: 14px;
}
</style>

<div class="list-wrap">
  <a href="#" class="list-title js-accordion-trigger">クリック</a>
  <div class="accrodion-content js-accrodion-content">
    <ul class="accrodion-list">
      <li>hoge</li>
      <li>fuga</li>
    </ul>
  </div>
</div>
<div class="list-wrap">
  <a href="#" class="list-title js-accordion-trigger">クリック</a>
  <div class="accrodion-content js-accrodion-content">
    <ul class="accrodion-list">
      <li>hoge</li>
      <li>fuga</li>
    </ul>
  </div>
</div>
<div class="list-wrap">
  <a href="#" class="list-title js-accordion-trigger">クリック</a>
  <div class="accrodion-content js-accrodion-content">
    <ul class="accrodion-list">
      <li>hoge</li>
      <li>fuga</li>
    </ul>
  </div>
</div>

<script>var $trigger = $('.js-accordion-trigger'),$content = $('.js-accrodion-content'),SLIDE_SPEED = 300;$trigger.each(function(){var $openContent = $(this).next($content);$(this).on('click',function(event){event.preventDefault();if($content.is(':animated')){return;}$(this).toggleClass('open');$openContent.slideToggle(SLIDE_SPEED);});});</script>


## HTML

```html
<div class="list-wrap">
  <a href="#" class="list-title js-accordion-trigger">クリック</a>
  <div class="accrodion-content js-accrodion-content">
    <ul class="accrodion-list">
      <li>hoge</li>
      <li>fuga</li>
    </ul>
  </div>
</div>
<div class="list-wrap">
  <a href="#" class="list-title js-accordion-trigger">クリック</a>
  <div class="accrodion-content js-accrodion-content">
    <ul class="accrodion-list">
      <li>hoge</li>
      <li>fuga</li>
    </ul>
  </div>
</div>
<div class="list-wrap">
  <a href="#" class="list-title js-accordion-trigger">クリック</a>
  <div class="accrodion-content js-accrodion-content">
    <ul class="accrodion-list">
      <li>hoge</li>
      <li>fuga</li>
    </ul>
  </div>
</div>
```


## CSS

```css
.list-wrap {
  width: 200px;
  margin: 40px auto 0;
}
.list-wrap + .list-wrap {
  margin-top: 1px;
}
.list-title {
  display: block;
  padding: 4px 8px;
  font-size: 16px;
  background-color: #005183;
  color: #fff;
  cursor: pointer;
  position: relative;
}
.list-title:after {
  content: "";
  display: block;
  margin: auto;
  width: 14px;
  height: 14px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCAxMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSIxNSwyNC41IDY0LDczLjMgMTEzLDI0LjUgMTI4LDM5LjUgNjQsMTAzLjUgMCwzOS41ICIvPjwvc3ZnPg0K);
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transition: .3s;
  transition: .3s;
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
}
.list-title.open:after {
  transform: rotateX(-180deg);
}
.accrodion-content {
  display: none;
}
.accrodion-list {
  padding: 4px 8px;
  background-color: #ddd;
}
.accrodion-list>li{
  font-size: 14px;
}
```


## javascript

```javascript
var $trigger = $('.js-accordion-trigger'),
    $content = $('.js-accrodion-content'),
    SLIDE_SPEED = 300;

$trigger.each(function(){
  var $openContent = $(this).next($content);

  $(this).on('click',function(event){
    event.preventDefault();
    if($content.is(':animated')){
      return;
    }
    $(this).toggleClass('open');
    $openContent.slideToggle(SLIDE_SPEED);
  });
});
```
