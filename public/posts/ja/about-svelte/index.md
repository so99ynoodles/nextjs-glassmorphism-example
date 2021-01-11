---
title: 'ReactとVueを改善したSvelteというライブラリーについて'
date: '2019-07-05T00:02:00'
category: Technology
tags: ['svelte', 'react', 'vue', 'JavaScript']
emoji: '👨‍💻'
status: 'published'
hero: ''
locale: 'ja'
---

# React と Vue を改善した Svelte というライブラリーについて

## 海外のフロントエンド界隈で話題になっている Svelte

最近海外のフロントエンド界隈で Svelte が少し話題になっています。

この記事では、なんで Svelte が話題になってるのか、そして React や Vue の代わりに、Svelte を使うメリットについて私が感じたことを共有していけたらと思います。

<blockquote className="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    My talk from{' '}
    <a href="https://twitter.com/YGLF_IL?ref_src=twsrc%5Etfw">@YGLF_IL</a>,
    &#39;Rethinking Reactivity&#39;, went online yesterday —{' '}
    <a href="https://t.co/eoGiBBAkKI">https://t.co/eoGiBBAkKI</a>. You probably
    don&#39;t have time to watch a 35 minute video though, so I&#39;m going to
    pull out a few key slides into a quick tweet thread:
  </p>
  &mdash; Rich Harris (@Rich_Harris) <a href="https://twitter.com/Rich_Harris/status/1120736046357131271?ref_src=twsrc%5Etfw">April 23, 2019</a>
</blockquote>
<script
  async
  src="https://platform.twitter.com/widgets.js"
  charSet="utf-8"
></script>

上記の動画を見ていただければ、正直私が説明することはほぼゼロです。
私的にはすごくよかった内容なので、<strong>ぜひ見ることをお勧めします!</strong>

## Svelte って結局なにがいいの？

<strong>Svelteは速く、軽いです。</strong>
ベンチマークで<strong>Reactの35倍、Vueの50倍</strong>速いです。 Svelteは<strong>
  コンパイラー
</strong>であるため、実質ライブラリーとしての<strong>容量は0kb</strong>です。 (もちろんコンパイル時に少しはコードが加わりますが）

※TypeSciprt サポートはまだないみたいです

### [2019.07.05]追記 Vue も Svelte の良いところを取り入れる

<blockquote className="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    Maintaining a front-end framework like Vue, React, Angular or Ember requires
    a lot of thought and consideration.{' '}
    <a href="https://twitter.com/youyuxi?ref_src=twsrc%5Etfw">@youyuxi</a>{' '}
    joined us in Singapore to share how he seeks balance in the design of Vue.{' '}
    <a href="https://t.co/xSxXeDCX5o">https://t.co/xSxXeDCX5o</a>{' '}
    <a href="https://t.co/aUyet7QH41">pic.twitter.com/aUyet7QH41</a>
  </p>
  &mdash; JSConf.Asia (@jsconfasia) <a href="https://twitter.com/jsconfasia/status/1146412076941762561?ref_src=twsrc%5Etfw">July 3, 2019</a>
</blockquote>
<script
  async
  src="https://platform.twitter.com/widgets.js"
  charSet="utf-8"
></script>

JSConf.Asia - LASALLE College of the Arts, Singapore - 15 June 2019
一昨日公開された動画ですが、Vue の製作者 Evan You も Vue に改善点を重ねてきました。
Svelte の良いところを取り入れた 3.0-proto-2019-06 のパフォーマンス改善を見てください。

Evan You 氏はこういうところがすごいですよね。
発展していく Vue.js、とても魅力的です。

### Svelte は状態管理を最適化する

既存のフレームワークは状態変更によって VirtualDOM が何度も Re-render されるため（相対的に）非効率的です。React では解決法として useMemo、componentShouldUpdate、PureComponent などが使えますが、Svelte ではそれを Observable で対応します。

### Svelte はコンパイラー

上でも述べたように、React や Vue のようにブラウザー上でコンポーネント化をするフレームワークではありません。\*.svelte ファイルを html, js, css に変換してくれるだけです。

###書き方が簡単でコード量が少ない
書き方自体は Vue とすごく似てます。
若干癖がありますが、コード的にもわかりやすくなってます。
書く量も少ないため、開発スピードが上がりそうです。

```html
<script>
  let a = 1;
  let b = 2;
</script>

<input type="number" bind:value="{a}" />
<input type="number" bind:value="{b}" />

<p>{a} + {b} = {a + b}</p>
```

以下は同じコードを React と Vue で書いた場合です。

```jsx
import React, { useState } from 'react';

export default () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  function handleChangeA(event) {
    setA(+event.target.value);
  }

  function handleChangeB(event) {
    setB(+event.target.value);
  }

  return (
    <div>
      <input type="number" value={a} onChange={handleChangeA} />
      <input type="number" value={b} onChange={handleChangeB} />

      <p>
        {a} + {b} = {a + b}
      </p>
    </div>
  );
};
```

```html
<template>
  <div>
    <input type="number" v-model.number="a" />
    <input type="number" v-model.number="b" />

    <p>{{ a }} + {{ b }} = {{ a + b }}</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        a: 1,
        b: 2,
      };
    },
  };
</script>
```

### フレームワークとの比較 (2019.05 現在)

|         |  Svelte  |  React   |     Vue      | Angular |
| :-----: | :------: | :------: | :----------: | :-----: |
|  軽さ   | 凄く軽い |   軽い   |     普通     |  重い   |
| feature | コアのみ | コアのみ |     普通     |  多い   |
|  人気   |   低い   |   高い   |     高い     |  普通   |
|  管理   |   個人   | Facebook | コミュニティ | Google  |
|  情報   |  少ない  |   多い   |     多い     |  多い   |

### その他

- Redux, Vuex 　 ⇒ 　 stores (Built-in)
- Next/Gatsby 　 ⇒ 　 Sapper
- React Native / nativescript-vue 　 ⇒ 　 Svelte Native (Community 主導)
- WebGL, Three.js ⇒ Svelte GL

### 感想

Svelte 自体は前から存在してたらしいですが、Version 3 からいろいろ変わったっぽいですね。

最初見た時は「なんだーこのライブラリー」と思いましたが、実際に開発の思想を聞いてみて、すごくワクワクしてきました。

もちろん、Vue も React も凄いフレームワークで、どっちが優れてるとかはありませんが、私は Svelte がより広く使われることを期待しているので、共有させていただきました。

次は Svelte でアプリを作るデモなどを書いてみたいですね。

チュートリアルはこちら。
https://svelte.dev/tutorial/basics