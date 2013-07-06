# GitLab Wiki TOC by UserScript

GitLab の Wiki ページに目次を追加するユーザースクリプトです。

## インストール（Firefox）

下記のリンクをクリックしてインストールします。

 - [gitlab-wiki-toc.user.js][]

Greasemonkey の「ユーザースクリプトの管理」から「GitLab Wiki TOC」の「設定」をクリックし、
ユーザー設定に目次を表示させたい GitLab の URL を次のように追加します。

```
http://gitlab.example.net/*
```

## インストール（Chrome）

下記のリンクを右クリックから **名前を付けてリンク先を保存** します。

 - [gitlab-wiki-toc.user.js][]

スクリプトをエディタで開き、上の方のコメントの中にある `@include` を目次を表示させたい GitLab の URL に書き換えます。

```
// ==UserScript==
// @name        GitLab Wiki TOC
// @namespace   http://ngyuki.net/
// @include     http://gitlab.example.net/*
// @version     0.0.1
// @grant       none
// ==/UserScript==
```

Chrome の拡張機能の画面にスクリプトをドラッグアンドドロップします。


## 使い方

GitLab の Wiki ページを開くと右上の方に目次が表示されます。

目次の右上端の `+` をクリックすると目次が小さくなって閉じられます。

もう一度クリックすると目次が表示されます。


[gitlab-wiki-toc.user.js]: https://github.com/ngyuki/gmscript-gitlab-wiki-toc/raw/master/gitlab-wiki-toc.user.js "gitlab-wiki-toc.user.js"
