# AI小説執筆プロジェクト - 『ミロクの100年前の宿題』

## プロジェクト概要
人間（編集者・構成作家）とAI（ストーリー執筆者）の協働による小説創作プロジェクト

## 役割分担

### 人間（編集者・構成作家）の役割
- **大枠ストーリー構成の提供**（テーマ・世界観・方向性の指定）
- 全体的な物語構成の企画・方針決定
- AI執筆内容の編集・校正・品質管理
- 設定修正・軌道修正の指示

### AI（ストーリー執筆者）の役割  
- **大枠から具体的なキャラクター設定を作成**
- **詳細プロットと章構成の構築**
- 人物関係や背景設定の詳細化
- 実際の文章執筆（描写・台詞・心理）
- 設定の一貫性維持と整合性チェック

## 執筆アプローチ

### 全体最適プロセス
- **整合性重視**: 全体設計をしてから各章を執筆
- **柔軟な修正**: 途中での方向性の抜本的修正も積極的に実施
- **設定ファイル管理**: 全ての設定を体系的に保存・管理
- **段階的進行**: 設計→執筆→修正・統合の3段階で進行

### 修正方針
- 書きながら新しいアイデアが出たら即座に反映
- 設定変更時は全ファイルを一括更新
- 矛盾発見時は遡って修正
- 複数バージョンの並行検討も可能

## ワークフロー

### Phase 1: 設計完了
1. 全体設定の完成と保存
2. 詳細プロット作成
3. 各章概要の確定
4. キャラクター詳細設定

### Phase 2: 執筆
1. 章単位での執筆
2. 前章との整合性チェック
3. 設定との照合
4. 必要に応じて設定更新

### Phase 3: 修正・統合
1. 全体読み返し
2. 整合性調整
3. テーマ統一
4. 最終調整

## ファイル構造
```
/novels/metas-awakening/
  /world-building/      # 世界観・設定ファイル
  /plot/               # プロット・構成
  /chapters/           # 章別本文
  /characters/         # キャラクター設定
  /drafts/            # 下書き・版管理
  /research/          # 設定資料
```

## AI執筆時の基本方針
- 指定されたキャラクター性格を厳密に守る
- 世界観の一貫性を保つ
- テーマとの整合性を常に確認
- 修正指示には柔軟に対応
- 整合性チェック機能を活用