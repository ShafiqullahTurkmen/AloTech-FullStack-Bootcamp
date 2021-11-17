#### Soru: Bir dosyayı okumak için readFile fonksiyonunu çalıştırdım fakat bir durumda okuma işlemine gerek kalmadı bu yüzden işlemi iptal etmek istiyorum. Programın devamında dosya okuma işlemini nasıl iptal edebilirim?

İşlemi iptal etmek için AbortController() kullanılabilir.

#### Soru: readFile fonksiyonu dosyayı bütün halinde okuyup memory’ye alır. Programın daha az memory kullanmasını sağlamak için alternatif olarak neler kullanılabilir?

Programın daha az memory kullanmasını sağlamak için fs.createReadStream() tercih edebiliriz.