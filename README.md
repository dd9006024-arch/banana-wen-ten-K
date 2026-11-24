# 蕉山・蕉香｜旗山香蕉品牌官網

以 Next.js、TypeScript、Tailwind CSS、Prisma 與 PostgreSQL 建置的響應式品牌電商 MVP。

## 已完成

- 品牌首頁、故事、商城、商品明細、熟度保存指南、蕉園體驗、文化地圖、食譜。
- 瀏覽器購物車、收件結帳表單、訂單建立與資料庫庫存扣減。
- 體驗預約表單、名額檢查與預約資料保存。
- 管理員帳密登入、簽章 HttpOnly Session Cookie、訂單及預約狀態管理。
- PostgreSQL Prisma Schema、初始 Migration 與 Seed。
- SEO metadata、Open Graph、robots、sitemap、404。
- Render Blueprint 與部署教學。

## 本機啟動

需求：Node.js 20.9 以上、npm、PostgreSQL。

```bash
npm install
copy .env.example .env
# 編輯 .env 設定 DATABASE_URL、管理員資料與 SESSION_SECRET
npx prisma migrate deploy
npm run db:seed
npm run dev
```

`SESSION_SECRET` 請用至少 32 個隨機字元。`.env` 不可提交到 Git。

## Render 部署

1. 將專案推送至自己的 GitHub Repository。
2. 在 Render 選擇 **New → Blueprint**，連接該 Repository，Render 會讀取 `render.yaml` 建立 Web Service 與 PostgreSQL。
3. 在 Render Web Service 的 Environment 填入 `ADMIN_EMAIL`、`ADMIN_PASSWORD` 及 `NEXT_PUBLIC_SITE_URL`（例如服務的 `onrender.com` 網址）。`SESSION_SECRET` 由 Blueprint 產生，請保留其值。
4. 部署前命令會執行 Prisma Migration 與 Seed；部署完成後開啟網站及 `/admin`。
5. 需要商品圖片管理時，設定 Cloudinary 帳戶並加入上方 `.env.example` 中的 Cloudinary 變數；目前示範圖片採用 Unsplash URL。

## 功能狀態與營運前事項

- 付款為明確標示的測試流程，未串接信用卡、ATM 或 LINE Pay，也不會執行真實扣款。
- LINE 通知目前未傳送；取得 Messaging API 權限後再實作通知服務。
- 預約名額與新訂單透過 PostgreSQL 保存；預約成功仍需蕉園人員確認。
- 商品介紹、庫存、體驗時段目前含展示資料；正式營運前請更新價格、出貨條件、配送費及圖片授權。
- 管理端登入與訂單/預約狀態更新已串接資料庫。商品、文章、景點、季節開關的完整 CRUD 仍需後續擴充。
- Render Web Service 不儲存上傳檔案；圖片應使用 Cloudinary 等持久化服務。

## 常用指令

```bash
npm run dev
npm run build
npx tsc --noEmit
npx prisma migrate deploy
npm run db:seed
```

Render 會以 `npm start` 啟動，並使用 `DATABASE_URL` 連接 Render PostgreSQL。
