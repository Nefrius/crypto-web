"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

export default function HistoryPage() {
  const [selectedEra, setSelectedEra] = useState<string>("ancient");
  
  const eras = [
    { id: "ancient", name: "Antik Çağ", years: "M.Ö. 4000 - M.S. 500" },
    { id: "medieval", name: "Orta Çağ", years: "500 - 1450" },
    { id: "renaissance", name: "Rönesans", years: "1450 - 1700" },
    { id: "modern", name: "Modern Dönem", years: "1700 - 1945" },
    { id: "digital", name: "Dijital Çağ", years: "1945 - Günümüz" },
  ];
  
  const eraContent = {
    ancient: {
      title: "Antik Çağ Şifreleme",
      image: "/ancient_cryptography.jpg",
      description: "Kriptografinin kökleri antik uygarlıklara dayanır. Eski Mısırlılar, standart olmayan hiyeroglif kullanımını şifreleme yöntemi olarak kullanmıştır. Ancak bilinen ilk sistematik şifreleme metodu, M.Ö. 500'lü yıllarda Spartalılar tarafından kullanılan 'Scytale' adı verilen silindirik çubuk etrafına sarılan deri veya parşömen üzerine yazı yazma yöntemidir. Mezopotamya'da çivi yazısı tabletlerinde bulunan şifreli metinler, bilinen en eski şifreleme örneklerindendir.",
      keyPoints: [
        "Eski Mısır'da hiyeroglif değişimleri",
        "Spartalıların Scytale sistemi",
        "Mezopotamya'da şifreli çivi yazıları", 
        "Juluis Sezar'ın geliştirdiği Sezar şifresi",
        "Hint ve Çin medeniyetlerinde kullanılan şifreleme yöntemleri"
      ]
    },
    medieval: {
      title: "Orta Çağ Şifreleme",
      image: "/medieval_cryptography.jpg",
      description: "Orta Çağ'da kriptografi özellikle dini metinlerin korunması ve diplomatik yazışmalarda önem kazandı. Arap matematikçiler frekans analizi yöntemini keşfederek, şifre kırma biliminin (kriptanaliz) temellerini attılar. 9. yüzyılda Arap filolog El-Kindi, şifre çözme üzerine ilk kitabı 'Şifreli Metinleri Çözme Üzerine Risale'yi yazdı. Avrupalılar 15. yüzyıla kadar mono-alfabetik şifreleme yöntemlerini kullanmaya devam ettiler.",
      keyPoints: [
        "El-Kindi'nin frekans analizi teknikleri",
        "Diplomatik yazışmalarda şifreleme",
        "Kilise metinlerinde steganografi",
        "Haçlı Seferleri sırasında kullanılan şifreleme",
        "Mono-alfabetik şifrelerde gelişmeler"
      ]
    },
    renaissance: {
      title: "Rönesans Dönemi Şifreleme",
      image: "/renaissance_cryptography.jpg",
      description: "Rönesans dönemi, modern kriptografinin doğuşuna tanıklık etti. 1467'de Leon Battista Alberti 'şifreleme diski' adı verilen cihazı icat ederek poli-alfabetik şifrelemeyi tanıttı. Bu, bir metindeki tek bir harfin farklı şifrelerle kodlanmasına olanak tanıyordu. Bu dönemde Blaise de Vigenère tarafından geliştirilen Vigenère şifresi, 300 yıl boyunca kırılamayan şifre olarak tarihe geçti. Thomas Jefferson'ın geliştirdiği 'çark şifre' modern rotor makinesinin öncüsü oldu.",
      keyPoints: [
        "Alberti diski ve poli-alfabetik şifreleme",
        "Vigenère şifresi ve uzun süre kırılamamasının nedenleri",
        "Diplomat şifreleri ve uluslararası casusluk",
        "Şifre kitapları ve kodlamaların gelişimi",
        "Thomas Jefferson'ın çark şifresi"
      ]
    },
    modern: {
      title: "Modern Dönem Şifreleme",
      image: "/modern_cryptography.jpg",
      description: "1. ve 2. Dünya Savaşları kriptografide büyük gelişmelere yol açtı. Alman ordusunun kullandığı Enigma makinesi ve Müttefiklerin bu makinenin şifresini kırma çabaları, modern bilgisayarın ve bilgi teorisinin gelişiminde önemli rol oynadı. Alan Turing gibi matematikçiler, Enigma'nın kodlarını kırmak için ilk elektro-mekanik bilgisayarları geliştirdiler. Claude Shannon, 1949'da 'İletişimin Matematiksel Teorisi' adlı çalışmasıyla modern kriptografinin matematiksel temellerini attı.",
      keyPoints: [
        "Enigma makinesi ve çalışma prensibi",
        "Alan Turing ve Bletchley Park kriptanaliz ekibi",
        "Mors kodu ve telegrafta şifreleme",
        "Claude Shannon ve bilgi teorisi",
        "SIGABA/M-134-C gibi gelişmiş şifreleme makineleri"
      ]
    },
    digital: {
      title: "Dijital Çağ Şifreleme",
      image: "/digital_cryptography.jpg",
      description: "Bilgisayar çağı ile birlikte, kriptografi tamamen yeni bir boyut kazandı. 1970'lerde geliştirilen Veri Şifreleme Standardı (DES) ve 1976'da Whitfield Diffie ile Martin Hellman'ın açık anahtar kriptografisini tanıtması, büyük dönüm noktaları oldu. 1977'de RSA algoritması geliştirildi ve günümüzde hâlâ kullanılmaktadır. 1990'larda internetin yaygınlaşmasıyla SSL/TLS protokolleri geliştirildi. 2000'lerde kuantum kriptografi ve post-kuantum kriptografi gibi alanlar önem kazanmaya başladı. 2009'da Bitcoin ile birlikte blok zinciri teknolojisi ortaya çıktı ve kriptografinin yeni bir uygulama alanı oluştu.",
      keyPoints: [
        "Açık anahtar kriptografisi ve RSA algoritmasının gelişimi",
        "SSL/TLS ve internet güvenliği",
        "AES (Advanced Encryption Standard)",
        "Kuantum kriptografi ve post-kuantum algoritmalar",
        "Blok zinciri ve kriptopara teknolojileri"
      ]
    }
  };
  
  // Simüle edilmiş resim yolu hatası için önlem
  useEffect(() => {
    console.log("Tarih sayfası yüklendi");
    // Gerçek bir projede, resimlerin yüklenmesini kontrol etmek için
    // kullanılabilecek bir kod buraya gelebilir
  }, []);
  
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Bölümü */}
        <AnimatedSection className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16">
          <div className="container mx-auto px-4">
            <AnimatedText as="h1" className="text-4xl md:text-5xl font-bold text-center mb-4">
              Kriptolojinin Tarihçesi
            </AnimatedText>
            <AnimatedText delay={0.1} className="text-xl text-center max-w-3xl mx-auto">
              Gizli mesajlaşma sanatının binlerce yıllık yolculuğu: Antik taş tabletlerden
              modern kuantum kriptografisine
            </AnimatedText>
          </div>
        </AnimatedSection>
        
        {/* Zaman Çizelgesi Navigasyonu */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-2 md:space-x-4 min-w-max md:min-w-0 md:justify-center">
              {eras.map((era) => (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(era.id)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    selectedEra === era.id 
                      ? "bg-[--primary] text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="text-sm md:text-base font-medium">{era.name}</div>
                  <div className="text-xs opacity-70">{era.years}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Era İçeriği */}
        <AnimatedSection className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Sol Taraf - Resim ve Başlık */}
              <div className="order-2 md:order-1">
                <AnimatedText 
                  as="h2" 
                  className="text-3xl font-bold mb-6"
                  delay={0.1}
                >
                  {eraContent[selectedEra as keyof typeof eraContent].title}
                </AnimatedText>
                
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg mb-6">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-600">Görsel yüklenemiyor</p>
                  </div>
                  {/* Görsel kullanımı yorum satırına alındı, gelecekte eklenmek üzere
                  <Image 
                    src={eraContent[selectedEra as keyof typeof eraContent].image}
                    alt={eraContent[selectedEra as keyof typeof eraContent].title}
                    layout="fill"
                    objectFit="cover"
                  />
                  */}
                </div>
              </div>
              
              {/* Sağ Taraf - İçerik */}
              <div className="order-1 md:order-2">
                <AnimatedText 
                  delay={0.2}
                  className="text-gray-700 text-lg mb-8 leading-relaxed"
                >
                  {eraContent[selectedEra as keyof typeof eraContent].description}
                </AnimatedText>
                
                <AnimatedText as="h3" delay={0.3} className="text-xl font-semibold mb-4">
                  Bu Dönemin Önemli Özellikleri:
                </AnimatedText>
                
                <ul className="space-y-3">
                  {eraContent[selectedEra as keyof typeof eraContent].keyPoints.map((point, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      className="flex items-start"
                    >
                      <span className="text-[--primary] mr-2">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Genel Kriptoloji Bilgileri */}
        <AnimatedSection className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedText as="h2" className="text-3xl font-bold text-center mb-12">
              Kriptoloji Nedir?
            </AnimatedText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Kriptografi</h3>
                <p className="text-gray-700">
                  Kriptografi, bilgiyi güvenli ve gizli bir şekilde iletmek için matematiksel 
                  yöntemlerin kullanılması bilimidir. Bu bilim, veriyi sadece yetkili 
                  alıcıların anlayabileceği bir formata dönüştürmeyi amaçlar. Temel 
                  hedefi gizlilik, veri bütünlüğü, kimlik doğrulama ve inkar edilemezliği 
                  sağlamaktır.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Kriptanaliz</h3>
                <p className="text-gray-700">
                  Kriptanaliz, şifreli metinleri çözmeye ve kriptografik güvenlik 
                  sistemlerindeki zayıflıkları bulmaya odaklanan bilim dalıdır. 
                  Şifreleme algoritmalarının güvenliğini test etmek ve 
                  geliştirmek için kritik öneme sahiptir. Tarihte birçok savaşın 
                  sonucunu şifre kırma çabaları belirlemiştir.
                </p>
              </AnimatedSection>
            </div>
            
            <AnimatedSection delay={0.3} className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modern Kriptolojinin Ana Dalları</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-l-4 border-[--primary] pl-4">
                  <h4 className="font-medium mb-2">Simetrik Şifreleme</h4>
                  <p className="text-sm text-gray-600">
                    Verinin şifrelenmesi ve şifrenin çözülmesi için aynı anahtarın 
                    kullanıldığı sistemler. AES, DES, 3DES bu kategoriye örnektir.
                  </p>
                </div>
                
                <div className="border-l-4 border-[--primary] pl-4">
                  <h4 className="font-medium mb-2">Asimetrik Şifreleme</h4>
                  <p className="text-sm text-gray-600">
                    Şifreleme ve şifre çözme için farklı anahtarların kullanıldığı 
                    sistemler. RSA, ECC, Diffie-Hellman bu gruba dahildir.
                  </p>
                </div>
                
                <div className="border-l-4 border-[--primary] pl-4">
                  <h4 className="font-medium mb-2">Hash Fonksiyonları</h4>
                  <p className="text-sm text-gray-600">
                    Verinin bütünlüğünü doğrulamak için kullanılan tek yönlü 
                    fonksiyonlar. SHA-256, MD5, BLAKE2 örnek verilebilir.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </>
  );
} 