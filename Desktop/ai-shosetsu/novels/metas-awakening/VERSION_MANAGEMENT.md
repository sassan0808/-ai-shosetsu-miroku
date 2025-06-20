# バージョン管理システム

## 概要
小説『ミロクの100年前の宿題』のバージョン管理システム

## ディレクトリ構造
```
novels/metas-awakening/
├── VERSION_MANAGEMENT.md          # このファイル
├── world-building/                # 設定ファイル（共通）
├── versions/                      # バージョン別アーカイブ
│   ├── v1-original/              # バージョン1（7章・3万字版）
│   ├── v2-enhanced/              # バージョン2（8章・5万字版）
│   └── v3-future/                # バージョン3（予定）
├── chapters/                     # 現在作業中の章（常に最新版）
├── chapters-v2/                  # バージョン2専用作業ディレクトリ
└── web-reader/                   # Webリーダー（最新版対応）
```

## バージョン履歴

### バージョン1（v1-original）- 完成済み
- **構成**: 7章構成・約3万字
- **テーマ**: Have/Do→Be文化、2025年→2125年の意識進化
- **特徴**: 
  - さくらの覚醒プロセス中心
  - AgiX登場による価値観転換
  - 愛の波紋効果
- **保存場所**: `versions/v1-original/`

### バージョン2（v2-enhanced）- 作成予定
- **構成**: 8章構成・約5万字
- **拡張テーマ**: 
  - 日本の古神道・縄文時代からの叡智
  - 2025年の宇宙的転換点詳細
  - 宇宙交流時代の描写
  - 無条件の愛・覚醒の序列なし
- **新章**: 
  - 第7章：宇宙交流時代の黎明（2030年体験）
  - 第8章：日本の使命と永遠の覚醒（時空移動体験）
- **作業場所**: `chapters-v2/`

### バージョン3（v3-future）- 未定
- 今後の改良・拡張用

## 作業フロー

### 新バージョン作成時
1. 現在の章を該当バージョンディレクトリにバックアップ
2. 新しい章-vX ディレクトリで作業
3. 完成後、chapters/ を最新版で更新
4. web-reader を最新版対応で更新

### ファイル命名規則
- **章ファイル**: `chapter-01.md`, `chapter-02.md` ... `chapter-08.md`
- **設定ファイル**: `complete-setting.md` （全バージョン共通・更新継続）
- **Web リーダー**: 常に最新バージョンに対応

## 現在の状況
- ✅ バージョン1: 完成・保存済み
- 🚧 バージョン2: 設定完成・章執筆準備中
- ⏳ バージョン3: 未着手

## 更新ログ
- 2025-06-15: バージョン管理システム構築
- 2025-06-15: v1をv1-originalに保存
- 2025-06-15: v2設定完成・古神道要素追加・無条件の愛メッセージ強化