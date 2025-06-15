# ミロクの100年前の宿題
## —2025年、意識覚醒前夜—

> 人間とAIの協働による小説創作プロジェクト

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![作品公開](https://img.shields.io/badge/作品-読める-brightgreen.svg)](./web-reader/index.html)

## 📖 作品について

2125年の平和な世界に住む少年ミロクが、祖父から託された「100年前の宿題」を通じて2025年の現代社会を体験し、人類の意識進化の分岐点を目撃する物語。

**テーマ**: 意識の覚醒、テクノロジーと人間性、愛と自由

## 🌟 特徴

- **人間×AI協働創作**: 編集者（人間）による大枠構成 + AI（Claude）による詳細執筆
- **全11章完結**: 約25,000文字の長編小説
- **Webリーダー搭載**: ブラウザで読みやすいインターface
- **バージョン管理**: 創作過程の全履歴を保存

## 📱 読み方

### オンラインで読む
[📖 Webリーダーで読む](./web-reader/index.html)

### ローカルで読む
```bash
# リポジトリをクローン
git clone https://github.com/sassan0808/-ai-shosetsu-miroku.git

# Webリーダーを開く
cd ai-shosetsu-miroku/web-reader
open index.html  # macOS
start index.html  # Windows
```

## 📁 プロジェクト構造

```
ai-shosetsu-miroku/
├── README.md                    # このファイル
├── CLAUDE.md                    # AI執筆ガイドライン
├── WRITING_METHODOLOGY.md       # 執筆方法論
├── novels/metas-awakening/      # 小説本体
│   ├── chapters-v3/             # 最新版（11章完結）
│   ├── chapters-v2/             # 旧版本
│   ├── world-building/          # 世界観設定
│   └── versions/                # バージョン履歴
└── web-reader/                  # Webリーダーアプリ
    ├── index.html               # メインページ
    ├── styles.css               # スタイルシート
    ├── script.js                # JavaScript
    └── update-chapters.js       # 章更新スクリプト
```

## 🔧 開発者向け

### Webリーダーの更新

新しい章を追加したり既存章を修正した場合：

```bash
cd web-reader
node update-chapters.js
```

これで自動的に最新の章がWebリーダーに反映されます。

### 技術スタック
- **フロントエンド**: HTML5, CSS3, Vanilla JavaScript
- **バージョン管理**: Git + GitHub
- **執筆支援**: Claude Code, Markdown

## 📚 章構成

1. **第1章**: 宿題の始まり - 2125年の平和な世界
2. **第2章**: 2025年体験 - 深層への潜行
3. **第3章**: 2025年の社会構造とAIの台頭
4. **第4章**: 「鳥籠の中の自由」- 見えない檻の正体
5. **第5章**: 2025年 - 人類の分岐点
6. **第6章**: 衝撃の真実と価値観の転換
7. **第7章**: 新しい価値観の誕生 - 永遠の覚醒
8. **第8章**: 現代への警鐘
9. **第9章**: 愛の力と意識の変容
10. **第10章**: 未来への希望
11. **第11章**: 宿題の完成 - 新たな始まり

## 🤝 創作プロセス

1. **人間（編集者）**: 全体構成、テーマ設定、方向性指示
2. **AI（執筆者）**: 詳細プロット構築、キャラクター設定、文章執筆
3. **協働編集**: 整合性チェック、品質向上、最終調整

## 📜 ライセンス

この作品は [MIT License](LICENSE) の下で公開されています。

## 🙏 謝辞

この作品は人間とAIの新しい創作可能性を探求する実験的プロジェクトです。テクノロジーと創造性の融合により生まれた物語をお楽しみください。

---

**Created with**: Human creativity ❤️ AI assistance  
**Generated**: 2025年6月  
**Version**: v3.0 (11章完結版)