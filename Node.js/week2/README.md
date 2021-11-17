## Clean-Blog Project
[Final Project link](https://clean-blog-project-tech.herokuapp.com/)

-------------------------------------------------------
## Ödev 7 ve 8

### Clean Blog Projesi Başlangıç

Clean Blog projesini farklı ödevlere ayırarak yapmaya çalışacağız. Bu ödevimizde yapılması gerekenler:

1. CleanBlog proje klasörünü oluşturalım.
2. Package.json dosyasını oluşturalım.
3. Prettier ayarlarını yapalım.(İsteğe bağlı)
4. Express ve Nodemon modüllerini indirelim.
5. git init ile lokal repomuzu oluşturalım.
6. get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
7. .gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.
8. Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
9. İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
10. EJS modülünü indirelim.
11. Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
12. Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
13. Partials klasör yapısını oluşturalım.
14. İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.

[Ödev 7 ve 8 Çözüm linki](https://github.com/AloTech-Full-Stack-Bootcamp/Shafiqullah-Turkmen/tree/main/Node.js/week2/%C3%96dev8_Clean_Blog_Projesi_2.B%C3%B6l%C3%BCm)

-----------------------------------------------
## Ödev 9

### Clean Blog Projesi 3. Bölüm

Clean Blog projemizin bu 3. bölümünde aşağıdaki işlemleri yapalım.

1. cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
2. "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
3. title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip Post modelini oluşturalım.
4. Veri tabanımızda 3 adet pos dökümanı oluşturalım.
5. Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.

[Ödev 9 Çözüm linki](https://github.com/AloTech-Full-Stack-Bootcamp/Shafiqullah-Turkmen/tree/main/Node.js/week2/%C3%96dev9_Clean_Blog_Proje%20_3.B%C3%B6l%C3%BCm)

-----------------------------------------------
## Ödev 10

### Clean Blog Projesi 4. Bölüm

Clean Blog projemizin bu 4. bölümünde aşağıdaki işlemleri yapalım.

1. index.ejs içerisinde /posts/<%= posts[i]._id %> ile _id bilgisini gönderelim.
2. app.js içerisinde GET metoduyla "/posts/:id" ile gönderilen "_id" yi yakalayalım. .
3. tekil post bilgilerini post.ejs dosyasına gönderelim.
4. post.ejs içerisine post.title, post.detail ve post.dateCreated bilgilerini gönderelim. (her bir post için ayrı image kullanmayacağız)

[Ödev 10 Çözüm linki](https://github.com/AloTech-Full-Stack-Bootcamp/Shafiqullah-Turkmen/tree/main/Node.js/week2/%C3%96dev10_Clean_Blog_Projesi_4.B%C3%B6l%C3%BCm)

-------------------------------------------------------
## Ödev 11

### Clean Blog Projesi 5. Bölüm

Clean Blog projemizin bu 5. bölümünde aşağıdaki işlemleri yapalım.

1. post.ejs template içerisinde UPDATE ve DELETE butonu oluşturalım.
2. Herhangi bir post verisini güncellemek için gerekli çalışmaları yapalım.
3. Herhangi bir post verisini silmek için gerekli çalışmaları yapalım.
4. Kodumuzu MVC yapısına göre tekrar düzenleyelim.

[Ödev 11 Çözüm linki](https://github.com/AloTech-Full-Stack-Bootcamp/Shafiqullah-Turkmen/tree/main/Node.js/week2/%C3%96dev11_Clean%20_Blog_Proje_5.B%C3%B6l%C3%BCm)

--------------------------------------------------------
## Ödev 12

### Clean Blog Projesi 6. Bölüm

Clean Blog projemizin bu 6. bölümünde aşağıdaki işlemleri yapalım.

+ Uygulamamızı HEROKU ve MongoDB Atlas ücresiz servislerini kullanarak yükleyelim.
+ Not: Uygulamamızda sayfalama ve görsel yükleme işlemlerini yapmadık. Sonraki projemizde de bu özellikleri kullanacağız.

[Ödev 12 Çözüm linki](https://github.com/AloTech-Full-Stack-Bootcamp/Shafiqullah-Turkmen/tree/main/Node.js/week2/%C3%96dev12_Clean_Blog_Proje_6.B%C3%B6l%C3%BCm)
