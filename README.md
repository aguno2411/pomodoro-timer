# ポモドーロタイマー

美しいデザインのポモドーロタイマーです。25分の作業時間と5分の休憩時間を自動で切り替わります。

## 機能

- ⏰ **25分作業時間 + 5分休憩時間**の自動切り替え
- 🎨 **ダークテーマ** - 黒基調の洗練されたデザイン
- 🔄 **プログレスリング** - 残り時間を視覚的に表示
- ⏯️ **開始/停止/リセット**機能
- 📊 **セッションカウンター** - 完了したセッション数を表示
- 🔔 **通知機能** - 時間切れ時にブラウザ通知と音声通知
- 📱 **レスポンシブデザイン** - スマートフォンでも使いやすい

## 使い方

1. `index.html`をブラウザで開く
2. 「開始」ボタンをクリックしてタイマーをスタート
3. 25分の作業時間が終わると自動で5分の休憩時間に切り替わります
4. 休憩時間が終わると自動で次の作業時間が始まります
5. 「停止」ボタンで一時停止、「リセット」ボタンで最初からやり直し

## オンラインで使う方法

### GitHub Pagesでデプロイ（推奨）

1. **GitHubアカウントを作成**（まだの場合）
2. **新しいリポジトリを作成**
   - GitHubで「New repository」をクリック
   - リポジトリ名を入力（例：`pomodoro-timer`）
   - Publicに設定
3. **ファイルをアップロード**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/あなたのユーザー名/pomodoro-timer.git
   git push -u origin main
   ```
4. **GitHub Pagesを有効化**
   - リポジトリの「Settings」タブ
   - 「Pages」をクリック
   - Sourceを「Deploy from a branch」に設定
   - Branchを「main」に設定
   - 「Save」をクリック
5. **アクセス**
   - 数分後に `https://あなたのユーザー名.github.io/pomodoro-timer` でアクセス可能

### その他の無料ホスティングサービス

- **Netlify**: ドラッグ&ドロップで簡単デプロイ
- **Vercel**: 高速で簡単なデプロイ
- **Firebase Hosting**: Googleの無料ホスティング

## ファイル構成

- `index.html` - メインのHTMLファイル
- `style.css` - スタイルシート（ダークテーマ）
- `script.js` - JavaScript機能（タイマー制御）
- `README.md` - このファイル

## 技術仕様

- **HTML5** - セマンティックなマークアップ
- **CSS3** - モダンなスタイリング（Flexbox、ダークテーマ）
- **JavaScript ES6+** - クラスベースの実装
- **Web APIs** - 通知API、音声合成API

## ブラウザ対応

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## ライセンス

MIT License 