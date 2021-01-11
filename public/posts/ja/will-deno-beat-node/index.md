---
title: 'Denoの登場でNode.jsの時代は終わるのか？'
date: '2020-06-03'
category: Technology
tags: ['deno', 'node', 'JavaScript']
emoji: '🦕'
status: 'published'
image: ''
locale: 'ja'
---

# Deno の登場で Node.js の時代は終わるのか？

## Denover 1.0

5 月 13 日、Denov1.0 の正式リリースが決定しました。
少し勉強してみましょう。

## Deno ってなに？

- Deno は Node.js の製作者である Ryan Dahl によって作られました、新しい JS/TS ランタイムです
- Deno は default で安全です（許可なしではファイル・ネットワーク・環境にアクセスできません）
- Deno は TypeScript がビルトインで入ってます
- 外部パッケージは url でインポートできます（Go みたいに）
- ディーノって読むらしい（デノではない）

## Deno が作られた背景

 一年前くらいにこの動画を見たことを思い出しました。
Node.js の作者である Ryan Dahl が、Node.js を開発した当時の仕様を後悔する旨の動画です。
https://www.youtube.com/watch?v=M3BM9TB-8yA&t=1319s

↓ は要約です。（日本語がおかしいところが多々あると思いますが、ご了承ください）

### 後悔その１: Promise の排除

- 2009 年、Node.js に Promise を足したけど、バカなことに 2010 年に消した
- Promise は async/await のために必要な抽象化である
- Node での Promise の統一された使用が、最終的には標準化した async/await につながった可能性がある
- 今日、Node の多くの非同期 API は、このせいでとっても古い書き方になっている

### 後悔その２: 安全性（Security）

- V8 それ自体は非常に優れたセキュリティサンドボックス
- もし自分が、特定のアプリケーションでそれをどのように維持するか考慮していたなら、Node は他の言語より素敵なセキュリティ保証を持てたかもしれない
- 例: linter がパソコンやネットワークに完全なアクセス権をもっている

### 後悔その３: ビルドシステム (GYP)

- ビルドシステムはとても難しい・重要
- V8 (Chrome) が GYP を使い始めたので、Node もそれを使うようにした
- 後で、Chrome は GYP を GN に切り替え、Node は一人 GYP ユーザーとして残ってしまった
- GYP も醜い内部インターフェースではない-V8 にバインドしようとしている人に公開されている
- しかし、ユーザーにとってはひどい UX である。JSON ではなく、Python の JSON Adaption
- 継続された GYP の使用が、Node core の最も大きい失敗である
- 多くの人々は早い段階で FFI（つまり Cantrill）への移行を提案したが、残念ながら私はそれらを無視してしまった

### 後悔その４: package.json

- NPM の Isaac が、package.json の大部分を作った
- しかし、私は Node の require（）が "main"の package.json ファイルを検査できるようにして、それを認可した
- 最終的に NPM を Node ディストリビューションに含め、それが事実上の標準になった
- モジュール用の集中管理されたリポジトリがあるのは残念なことだ
- package.json を許可することで、ファイルのディレクトリとしての「モジュール」の概念が生まれた
- これは厳密にいうと、必要な抽象化ではない
- package.json にあらゆる種類の不要な情報が含まれることになった。License？ Repository？ Description？それは定型的なノイズだった
- インポート時に相対ファイルと URL のみが使用された場合、パスがバージョンを定義するので、Dependencies をリストする必要はない

### 後悔その５: node_modules

- node_modules はモジュール解決アルゴリズムを非常に複雑にした
- vendored-by-default は良い意図を持っているが、実際には$NODE_PATH を使用するだけではそれを排除することはできなかった
- ブラウザのセマンティクスから大きく逸脱している
- 私のせいで、とても残念な気持ち
- しかし、不幸にもこれを undo することはできない

### 後悔その６: ".js"の拡張子なしでの require("module")

- 必ずしも明示的でない
- Browser の JavaScript が動く方式ではない。script タグの src アトリビュートで".js"を省略することはできない
- module loader は、ユーザーの意図を推測するために、複数の場所でファイルシステムを照会する必要がある

### 後悔その７: index.js

- index.html などがあったため、かわいいと思っていた
- module loading システムを不必要に複雑にしてしまった
- require が package.json をサポートするようになった後はより不必要になってしまった

## Deno の Feature

### トップレベル Await

もう await を使いたいがために async の関数で囲う必要はありません。

```index.js
// Node
const fetchData = async () => await fetch('someapi/data');
const data = fetchData();


// Deno
const data = await fetch('someapi/data');
```

> 2020/05/25 追記
> Node.js でも、 v14.3.0 で、トップレベル await が可能になりました。

### セキュリティ

上でも何回か述べてるように、Deno では許可なしでファイル・ネットワーク・環境にアクセスできません。

### TypeScript ビルトイン

TypeScript のセットアップは不要です。

### URL インポート

NPM パッケージをインストールしなくても、URL で `import` できます。

```index.js
import stuff from 'https://package/index.js';
```

### ES6 とそれ以上

モダンな JS の書き方が可能です。

### Web との適合性

Deno の API は Web との適合性があります。

### Web Assembly

Deno は WASM バイナリーのサポートがあるようです。

## Deno は Node を Replace できるのか？

**遠い未来**はその可能性は高いと個人的には思ってます。（製作者自身が Node.js の欠点を認めて作り直したランタイムなので）
しかし現在の Node プロジェクトを Deno に乗り換えることはまずないのではないかと思います。
乗り換えにそこまで大きいメリットがないのと、現状の NPM パッケージとの適合性がないためです。

 すぐデファクトスタンダードになることはないと思いますが、Web 開発者なら少し触れてみても面白そうです。

https://deno.land/
