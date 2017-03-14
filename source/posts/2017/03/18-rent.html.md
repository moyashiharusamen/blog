---
title: 【vue.jsで作ってみた】家賃計算
date: 2017-03-18
eye: 18_title.png
tags:  javascript,vue.js
page: article
---

## 家賃計算

<script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.17/vue.min.js"></script>

<style>.main_contents {width: 100%;max-width: 630px;margin: 40px auto;}.lead h2 {font-size: 32px;}.lead p {margin-top: 24px;font-size: 24px;line-height: 1.5;}.price_box {margin-top: 24px;padding: 32px;overflow: hidden;}.calc_box {background-color: #e0e0e0;}.price_box + .price_box {margin-top: 8px;}.price_box input,.price_box p {display: inline-block;font-size: 32px;}.price_box p {width: 160px;}.price_box input {width: 160px;margin-left: 134px;padding: 4px 16px;text-align: right;border: 1px solid #e0e0e0;}.price_box span {font-size: 40px;margin-left: 80px;}@media only screen and (max-width: 734px) {.main_contents {margin-top: 24px;margin-bottom: 0;padding: 0;}.lead {padding: 0 20px;}.lead h2 {font-size: 24px;}.lead p {margin-top: 16px;font-size: 16px;}.price_box {padding: 24px 20px;}.price_box + .price_box {margin-top: 0;}.price_box p {width: 100%;font-size: 24px;font-weight: bold;}.price_box input {width: 80%;margin-top: 16px;margin-left: 10%;}.price_box span {margin-left: 0;}}</style>

<div class="main_contents">
  <div class="lead">
    <h2>説明</h2>
    <p>家賃(管理費等込み)と敷金礼金を足した金額が2年(24ヶ月)住む際には実際いくらかかるかを計算します</p>
  </div>
  <div class="price_box">
    <p>家賃</p>
    <span>=</span><input type="text" v-model.number="houseRent">
  </div>
  <div class="price_box">
    <p>管理費等</p>
    <span>=</span><input type="text" v-model.number="controlCost">
  </div>
  <div class="price_box">
    <p>敷金・礼金</p>
    <span>=</span><input type="text" v-model.number="deposit">
  </div>
  <div class="price_box calc_box">
    <p>実質家賃</p>
    <span>=</span><input type="number" v-model.number="splitRent" disabled>
  </div>
</div>

<script>var vue = new Vue({el: "body",data: {houseRent: 70000,controlCost: 5000,deposit: 70000},computed: {splitRent: function(){return parseInt(((parseInt(this.houseRent) + parseInt(this.controlCost)) * 24 + parseInt(this.deposit)) / 24);}}});</script>

## html
```html
<div class="main_contents">
  <div class="lead">
    <h2>説明</h2>
    <p>家賃(管理費等込み)と敷金礼金を足した金額が2年(24ヶ月)住む際には実際いくらかかるかを計算します</p>
  </div>
  <div class="price_box">
    <p>家賃</p>
    <span>=</span><input type="text" v-model.number="houseRent">
  </div>
  <div class="price_box">
    <p>管理費等</p>
    <span>=</span><input type="text" v-model.number="controlCost">
  </div>
  <div class="price_box">
    <p>敷金・礼金</p>
    <span>=</span><input type="text" v-model.number="deposit">
  </div>
  <div class="price_box calc_box">
    <p>実質家賃</p>
    <span>=</span><input type="number" v-model.number="splitRent" disabled>
  </div>
</div>
```

## css
```css
.main_contents {
  width: 100%;
  max-width: 630px;
  margin: 40px auto;
}
.lead h2 {
  font-size: 32px;
}
.lead p {
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.5;
}
.price_box {
  margin-top: 24px;
  padding: 32px;
  overflow: hidden;
}
.calc_box {
  background-color: #e0e0e0;
}
.price_box + .price_box {
  margin-top: 8px;
}
.price_box input,
.price_box p {
  display: inline-block;
  font-size: 32px;
}
.price_box p {
  width: 160px;
}
.price_box input {
  width: 160px;
  margin-left: 134px;
  padding: 4px 16px;
  text-align: right;
  border: 1px solid #e0e0e0;
}
.price_box span {
  font-size: 40px;
  margin-left: 80px;
}

@media only screen and (max-width: 734px) {
  .main_contents {
    margin-top: 24px;
    margin-bottom: 0;
    padding: 0;
  }
  .lead {
    padding: 0 20px;
  }
  .lead h2 {
    font-size: 24px;
  }
  .lead p {
    margin-top: 16px;
    font-size: 16px;
  }
  .price_box {
    padding: 24px 20px;
  }
  .price_box + .price_box {
    margin-top: 0;
  }
  .price_box p {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
  }
  .price_box input {
    width: 80%;
    margin-top: 16px;
    margin-left: 10%;
  }
  .price_box span {
    margin-left: 0;
  }
}
```

## javascript
```javascript
var vue = new Vue({
  el: "body",
  data: {
    houseRent: 70000,
		controlCost: 5000,
		deposit: 70000
  },
  computed: {
		splitRent: function(){
			return parseInt(((parseInt(this.houseRent) + parseInt(this.controlCost)) * 24 + parseInt(this.deposit)) / 24);
		}
  }
});

```
