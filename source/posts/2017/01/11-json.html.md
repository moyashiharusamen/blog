---
title: JSONについて
date: 2017-01-11
eye: 11_title.png
tags: JSON
page: article
---

## JSONとは
- JSONの基本的な書き方とjQueryでの出力方法を書きます
- 配列、連想配列の知識があることを前提に説明しています
- **J**ava**S**cript **O**bject **N**otation (JSON)
- 名前にJavaScriptとあるが関係はなく、JavaScriptの記法を使っている
- データを表現する為の記法。類似するものにXmlがある。
- 記述できるのは**オブジェクト、配列、数値、文字列、真偽値、null**


## JSONの書き方
基礎的な部分に触れていきます。  
ここではある球団の情報を表すJSONを作成しました。  
チーム名baystars、ホームはyokohamaという情報です。

```javascript
var data = {
  name : "baystars",
  home : "yokohama"
}
```

## 出力方法
**JSONを格納している変数名 + 連想配列のkey**で取得できる

```javascript
console.log("チーム名：" + data.name + "ホーム：" + data.home);
```

## 複数のオブジェクト書き方
配列の中に連想配列を入れる形にする

```javascript
var data = [
  {
    name : "baystars", home : "yokohama"
  },
  {
    name : "carp", home : "hiroshima"
  },
  {
    name : "giants", home : "tokyo"
  },
  {
    name : "tigers", home : "nishinomiya"
  },
  {
    name : "swallows", home : "tokyo"
  },
  {
    name : "dragons", home : "nagoya"
  }
]
```

## 出力方法
**JSONを格納している変数名 + [数字] + 連想配列のkey**で取得できる

```html
<ul class="cantral"></ul>
```

### JSONデータ内全てを出力する場合

```javascript
for (var i in data) {
  $('.central').append("<li>球団名：" + data[i].name + "　ホーム：" + data[i].home + "</li>");
}
```

### JSONデータ内のある一定の数だけ指定する場合(この場合は3つ)

```javascript
for (var i = 0; i < 3; i++) {
  $('.central').append("<li>球団名：" + data[i].name + "　ホーム：" + data[i].home);
}
```

## 子要素を持つオブジェクト書き方
上記複数のオブジェクトにさらにvalueを連想配列にして情報をまとめる

```javascript
var data = [
  {
    "league" : "central",
    "team" : [
      {
        name : "baystars", home : "yokohama"
      },
      {
        name : "carp", home : "hiroshima"
      },
      {
        name : "giants", home : "tokyo"
      },
      {
        name : "tigers", home : "nishinomiya"
      },
      {
        name : "swallows", home : "tokyo"
      },
      {
        name : "dragons", home : "nagoya"
      }
    ]
  },
  {
    "league" : "pacific",
    "team" : [
      {
        name : "fightesr", home : "hokkaido"
      },
      {
        name : "hawks", home : "hukuoka"
      },
      {
        name : "marines", home : "chiba"
      },
      {
        name : "rions", home : "saitama"
      },
      {
        name : "eagles", home : "sendai"
      },
      {
        name : "buffalos", home : "osaka"
      }
    ]
  }
]
```

## 出力方法
"team"の中にはさらに連想配列があるのでfor文もネストして出力する<br>
ネストする部分は**JSONを格納している変数名 + [数字] + 連想配列のkey + [数字]**で取得できる

```html
<ul class="npb"></ul>
```

```javascript
for(var i in data) {
  $('.npb').append("<li>リーグ名" + data[i].league + "</li>");
  for(var j in data[i].team) {
    $('.npb').append("<li>球団名：" + data[i].name + "　ホーム：" + data[i].home + "</li>");
  }
}
```

## 外部のJSONファイルを読み込む
### 書き方
拡張子「.json」で作成

```javascript
[
  {
    "league" : "central",
    "team" : [
      {
        name : "baystars", home : "yokohama"
      },
      {
        name : "carp", home : "hiroshima"
      },
      {
        name : "giants", home : "tokyo"
      },
      {
        name : "tigers", home : "nishinomiya"
      },
      {
        name : "swallows", home : "tokyo"
      },
      {
        name : "dragons", home : "nagoya"
      }
    ]
  },
  {
    "league" : "pacific",
    "team" : [
      {
        name : "fightesr", home : "hokkaido"
      },
      {
        name : "hawks", home : "hukuoka"
      },
      {
        name : "marines", home : "chiba"
      },
      {
        name : "rions", home : "saitama"
      },
      {
        name : "eagles", home : "sendai"
      },
      {
        name : "buffalos", home : "osaka"
      }
    ]
  }
]
```

## 出力方法
`$.getJSON`を使用する

```javascript
$(function(){
  $.getJSON.("data.json",function(){
    for(var i in data) {
      $('.npb').append("<li>リーグ名" + data[i].league + "</li>");
      for(var j in data[i].team) {
        $('.npb').append("<li>球団名：" + data[i].name + "　ホーム：" + data[i].home + "</li>");
      }
    }
  });
});
```



## 参考
[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON)  
[http://www.webopixel.net/javascript/91.html](http://www.webopixel.net/javascript/91.html)
