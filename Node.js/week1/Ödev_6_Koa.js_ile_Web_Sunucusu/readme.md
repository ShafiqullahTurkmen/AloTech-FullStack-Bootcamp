## Ödev 6
### Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

1. koa paketini indirelim.
2. index, hakkimda ve iletisim sayfaları oluşturalım.
3. Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
4. port numarası olarak 3000'i kullanalım.

```js
//imports koa, koa-router, and fs modules
const Koa = require("koa");
const KoaRouter = require("koa-router");
const fs = require("fs");

//Creates Koa and KoaRouter objects constants
const app = new Koa();
const router = new KoaRouter();

//Navigates to index.html page
router.get("/", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("index.html");
});

//Navigates to index.html page
router.get("/index.html", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("index.html");
});

//Navigates to about-us.html page
router.get("/about-us.html", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("about-us.html");
});

//Navigates to contact.html page
router.get("/contact.html", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("contact.html");
});

//Navigates to product.html page
router.get("/product.html", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("product.html");
});

//Allows to use router method to rout within the website
app.use(router.routes()).use(router.allowedMethods());

//Creates port number
const port = 3000;

//listens to port 3000
app.listen(port, () => console.log("Server Started..."));
```