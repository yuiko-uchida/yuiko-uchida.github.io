# Portfolio

研究用ポートフォリオサイト。純粋な静的サイト（HTML/CSS/JS）なので、ビルド不要でそのまま GitHub Pages で公開できます。

## ファイル構成

```
index.html      ページの骨組み（通常編集不要）
css/style.css   デザイン（色を変えたい場合は先頭の :root の変数を編集）
js/data.js      ★ プロフィール・業績などのデータ。更新はこのファイルだけでOK
js/main.js      描画・言語切り替えロジック（通常編集不要）
```

## 業績を追加するには

`js/data.js` を開き、該当する配列の**先頭**にエントリを1つ追加します。

```js
// 例: 国際学会の論文を追加する場合 → publications.international の先頭に追加
{
  authors: "Yuiko Uchida, ...",
  title: "New paper title",
  venue: { ja: "会議名, pages 1–4", en: "Conference name, pages 1–4" },
  year: 2026,
  links: [{ label: "arXiv", url: "https://arxiv.org/abs/..." }],  // なければ []
},
```

- 各テキストは `{ ja: "...", en: "..." }` で日英両方を書けます。文字列を直接書くと両言語で共通になります。
- ニュース（`news`）、受賞（`awards`）、学歴（`education`）なども同じ要領です。
- `experience` など空配列 `[]` のセクションは自動的に非表示になります。

## 顔写真を載せるには

1. `images/` フォルダを作って写真（例: `profile.jpg`）を置く
2. `js/data.js` の `profile.photo` を `"images/profile.jpg"` にする

## ローカルで確認するには

```bash
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

（`index.html` をダブルクリックして直接開いても動作します）

## GitHub Pages で公開するには（初回のみ）

1. GitHub で新しいリポジトリを作成
   - リポジトリ名を `<ユーザー名>.github.io` にすると `https://<ユーザー名>.github.io/` で公開されます
   - それ以外の名前（例: `portfolio`）なら `https://<ユーザー名>.github.io/portfolio/` になります
2. このフォルダをプッシュ:
   ```bash
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```
3. GitHub のリポジトリページ → **Settings → Pages** → Source を「Deploy from a branch」、Branch を `main` / `(root)` にして Save
4. 数分後に公開されます

## 更新を公開するには

```bash
git add -A
git commit -m "Add new publication"
git push
```
