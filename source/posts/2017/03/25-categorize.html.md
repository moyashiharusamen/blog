---
title: 【jqueryで作ってみた】カテゴライズ
date: 2017-03-25
eye: 11_title.png
tags:  jquery,html,css,javascript
page: article
---

## カテゴライズ

<style>.carp {background-color: #FF2B06;}.giants {background-color: #F97709;}.baystars {background-color: #0055A5;}.tigers {background-color: #FFE201;}.swallows {background-color: #00AB5C;}.dragons {background-color: #002569;}.fighters {background-color: #4C7B98;}.hawks {background-color: #F5C700;}.marines {background-color: #221815;}.rions {background-color: #1F366A;}.eagles {background-color: #860010;}.buffalos {background-color: #000019;}.category-list {max-width: 960px;margin: 30px auto 0;overflow: hidden;font-size:16px;}.category-list > li {width: 31%;float: left;text-align: center;border-radius: 999px;}.category-list > li + li {margin-left: 3%;}.category-list > li > a {display: block;width: 100%;height: 100%;padding: 10px 0;border: 1px solid #ececec;border-radius: 999px;}.category-list > li > a:hover {background-color: #005183;color: #fff;border-color: #005183;}.category-item {width: 100%;margin-top: 40px !important;}.category-item > li {width: 33%;height: 50px;margin-top:0 !important;line-height: 50px;float: left;text-align: center;color: #fff;}.category-item > li:before{display:none;}</style>

<div class="head">
  <ul class="category-list js-category-list cf">
    <li class="all"><a href="#" data-category="all">全球団</a></li>
    <li class="central"><a href="#" data-category="central">セントラルリーグ</a></li>
    <li class="pacific"><a href="#" data-category="pacific">パシフィックリーグ</a></li>
  </ul>
</div>
<ul class="category-item js-category-item cf">
  <li class="baystars" data-item="central">横浜DeNAベイスターズ</li>
  <li class="eagles" data-item="pacific">東北楽天ゴールデンイーグルス</li>
  <li class="buffalos" data-item="pacific">オリックスバファローズ</li>
  <li class="giants" data-item="central">読売ジャイアンツ</li>
  <li class="hawks" data-item="pacific">福岡ソフトバンクホークス</li>
  <li class="carp" data-item="central">広島東洋カープ</li>
  <li class="marines" data-item="pacific">千葉ロッテマリーンズ</li>
  <li class="swallows" data-item="central">東京ヤクルトスワローズ</li>
  <li class="dragons" data-item="central">中日ドラゴンズ</li>
  <li class="fighters" data-item="pacific">北海道日本ハムファイターズ</li>
  <li class="rions" data-item="pacific">埼玉西武ライオンズ</li>
  <li class="tigers" data-item="central">阪神タイガース</li>
</ul>

<script>$categoryList = $('.js-category-list').find('li');$categoryButton = $categoryList.find('a');$categoryContent = $('.js-category-item').find('li');$categoryButton.on('click',function(e){e.preventDefault();var categorySelect = $(this).data('category');$categoryContent.each(function(){var categoryItem = $(this).data('item');if(categorySelect === 'all') {$categoryContent.fadeIn();return false;}if(categorySelect === categoryItem) {$(this).attr('data',categorySelect).fadeIn();} else {$('.js-category-item li[data!=' + categorySelect + ']').hide();}});});</script>

## JavaScript

```javascript
$categoryList = $('.js-category-list').find('li');
  $categoryButton = $categoryList.find('a');
  $categoryContent = $('.js-category-item').find('li');

  $categoryButton.on('click',function(e){
    e.preventDefault();
    var categorySelect = $(this).data('category');

    $categoryContent.each(function(){
      var categoryItem = $(this).data('item');

      if(categorySelect === 'all') {
        $categoryContent.fadeIn();
        return false;
      }
      if(categorySelect === categoryItem) {
        $(this).attr('data',categorySelect).fadeIn();
      } else {
        $('.js-category-item li[data!=' + categorySelect + ']').hide();
      }
    });
  });
```

## HTML

```html
<div class="head">
  <h2 class="title">Category</h2>
  <ul class="category-list js-category-list cf">
    <li class="all"><a href="#" data-category="all">全球団</a></li>
    <li class="central"><a href="#" data-category="central">セントラルリーグ</a></li>
    <li class="pacific"><a href="#" data-category="pacific">パシフィックリーグ</a></li>
  </ul>
</div>
<ul class="category-item js-category-item cf">
  <li class="baystars" data-item="central">横浜DeNAベイスターズ</li>
  <li class="eagles" data-item="pacific">東北楽天ゴールデンイーグルス</li>
  <li class="buffalos" data-item="pacific">オリックスバファローズ</li>
  <li class="giants" data-item="central">読売ジャイアンツ</li>
  <li class="hawks" data-item="pacific">福岡ソフトバンクホークス</li>
  <li class="carp" data-item="central">広島東洋カープ</li>
  <li class="marines" data-item="pacific">千葉ロッテマリーンズ</li>
  <li class="swallows" data-item="central">東京ヤクルトスワローズ</li>
  <li class="dragons" data-item="central">中日ドラゴンズ</li>
  <li class="fighters" data-item="pacific">北海道日本ハムファイターズ</li>
  <li class="rions" data-item="pacific">埼玉西武ライオンズ</li>
  <li class="tigers" data-item="central">阪神タイガース</li>
</ul>
```

## CSS

```css
.title {
  text-align: center;
}
.category-list {
  max-width: 960px;
  margin: 30px auto 0;
  overflow: hidden;
}
.category-list > li {
  width: 31%;
  float: left;
  text-align: center;
  border-radius: 999px;
}
.category-list > li + li {
  margin-left: 3%;
}
.category-list > li > a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  border: 1px solid #ececec;
  border-radius: 999px;
}
.category-list > li > a:hover {
  background-color: #005183;
  color: #fff;
  border-color: #005183;
}

.category-item {
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
}
.category-item > li {
  width: 33%;
  height: 50px;
  line-height: 50px;
  float: left;
  text-align: center;
  color: #fff;
}

.carp {
  background-color: #FF2B06;
}
.giants {
  background-color: #F97709;
}
.baystars {
  background-color: #0055A5;
}
.tigers {
 background-color: #FFE201;
}
.swallows {
  background-color: #00AB5C;
}
.dragons {
  background-color: #002569;
}
.fighters {
  background-color: #4C7B98;
}
.hawks {
  background-color: #F5C700;
}
.marines {
  background-color: #221815;
}
.rions {
  background-color: #1F366A;
}
.eagles {
  background-color: #860010;
}
.buffalos {
  background-color: #000019;
}
```
