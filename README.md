# Kriptoloji Web Sitesi

Bu proje, klasik Sezar şifreleme ve modern RSA şifreleme algoritmaları hakkında bilgi veren ve bu şifreleme yöntemlerini interaktif olarak deneyimleyebileceğiniz bir web sitesidir.

## Özellikler

- **Ana Sayfa**: Sezar şifreleme ve RSA şifreleme hakkında genel bilgiler içerir
- **Sezar Şifreleme Sayfası**: Sezar şifrelemesi ile metin şifreleme ve şifre çözme işlemlerini yapabileceğiniz interaktif bir arayüz sunar
- **RSA Şifreleme Sayfası**: RSA algoritması ile anahtar çifti oluşturma, metin şifreleme ve şifre çözme işlemlerini yapabileceğiniz bir arayüz sunar

## Kullanılan Teknolojiler

- [Next.js](https://nextjs.org/) - React tabanlı web uygulama framework'ü
- [TypeScript](https://www.typescriptlang.org/) - JavaScript'in tiplendirilmiş versiyonu
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework'ü
- [React](https://reactjs.org/) - Kullanıcı arayüzü geliştirme kütüphanesi

## Kurulum

Bu projeyi yerel geliştirme ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Repoyu klonlayın
git clone https://github.com/kullanici/kriptoloji-website.git

# Proje dizinine gidin
cd kriptoloji-website

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Daha sonra, tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak uygulamayı görüntüleyebilirsiniz.

## Şifreleme Hakkında

### Sezar Şifreleme

Sezar şifrelemesi, M.Ö. 100'lü yıllarda Julius Caesar tarafından kullanılan en eski şifreleme tekniklerinden biridir. Bu yöntemde, alfabedeki her harf belirli bir kaydırma miktarı (shift) kadar ileriye kaydırılarak şifrelenir.

### RSA Şifreleme

RSA (Rivest-Shamir-Adleman), 1977 yılında icat edilen ve günümüzde internet güvenliğinde yaygın olarak kullanılan asimetrik bir şifreleme algoritmasıdır. İki anahtar kullanır: şifreleme için açık anahtar (public key) ve şifre çözme için özel anahtar (private key).

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.
