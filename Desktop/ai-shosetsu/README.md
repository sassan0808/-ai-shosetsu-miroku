# Web小説リーダー

モダンで美しいタブベースの小説リーダーです。

## ファイル構成

```
web-reader/
├── index.html          # メインHTML（タブ構造）
├── styles.css          # スタイル（グラデーション・レスポンシブ）
├── script.js           # JavaScript（自動生成）
├── script-complete.js  # 完全版JavaScript（手動統合版）
├── update-chapters.js  # 自動更新スクリプト
└── README.md          # このファイル
```

## 使用方法

### 1. 小説を読む
`index.html` をブラウザで開いて、タブで章を切り替えながら読めます。

### 2. 章を更新する
個別の章ファイル（`../novels/metas-awakening/chapters/chapter-XX.md`）を編集した後、以下を実行：

```bash
cd web-reader
node update-chapters.js
```

これにより `script.js` が自動更新され、変更がWeb リーダーに反映されます。

## 機能

- ✅ 7章すべてタブ表示
- ✅ 前/次章ナビゲーション  
- ✅ キーボード操作（左右矢印キー）
- ✅ レスポンシブデザイン
- ✅ 美しいグラデーション背景
- ✅ 自動章更新システム

## 更新ワークフロー

1. 章ファイル（`.md`）を編集
2. `node update-chapters.js` を実行
3. ブラウザで `index.html` を更新
4. 変更を確認

これで個別の章を簡単に更新できます！