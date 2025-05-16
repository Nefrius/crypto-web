"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <AnimatedSection className="py-20 md:py-32 bg-gradient-to-r from-indigo-100 to-purple-100 text-center">
          <div className="container mx-auto px-4">
            <AnimatedText 
              as="h1" 
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Kriptoloji Dünyasına Hoş Geldiniz
            </AnimatedText>
            <AnimatedText 
              delay={0.1}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-700"
            >
              Gizli mesajların, şifrelerin ve güvenli iletişimin büyüleyici dünyasını 
              keşfedin. Modern güvenlik sistemlerinin arkasındaki bilimi öğrenin.
            </AnimatedText>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/caesar" 
                  className="px-8 py-3 bg-[--primary] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Sezar Şifrelemesini Deneyin
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/rsa" 
                  className="px-8 py-3 bg-white text-[--primary] font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  RSA Şifrelemesini Deneyin
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Şifreleme Teknikleri Bölümü */}
        <AnimatedSection className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-16">
              Şifreleme Teknikleri
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sezar Şifreleme Kartı */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Sezar Şifreleme</h3>
                  <p className="text-gray-700 mb-4">
                    Tarihin en eski ve basit şifreleme yöntemlerinden biri, Romalı Jül Sezar 
                    tarafından kullanılmıştır. Her harf, alfabede belirli bir sayı kadar 
                    kaydırılarak şifrelenir.
                  </p>
                  <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-medium mb-2">Nasıl Çalışır?</h4>
                    <p className="text-sm text-gray-600">
                      Alfabedeki her harf, belirlenen bir anahtar değeri kadar ileri kaydırılır. 
                      Örneğin, anahtar değeri 3 ise, &quot;A&quot; harfi &quot;D&quot; harfine, &quot;B&quot; harfi &quot;E&quot; harfine 
                      dönüşür. Bu basit kaydırma metodu, kolay uygulanabilir olsa da modern 
                      standartlarda güvenli değildir.
                    </p>
                  </div>
                  <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-medium mb-2">Tarihsel Önemi</h4>
                    <p className="text-sm text-gray-600">
                      Jül Sezar, askeri iletişimde bu şifreleme yöntemini kullanarak, mesajlarının 
                      düşman tarafından anlaşılmasını engellemiştir. Sezar şifresi, kriptoloji 
                      tarihinde önemli bir dönüm noktasıdır ve ilk sistematik şifreleme 
                      yöntemlerinden biri olarak kabul edilir.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h4 className="font-medium mb-2">Güvenlik Analizi</h4>
                    <p className="text-sm text-gray-600">
                      Sezar şifresi, sadece 25 farklı anahtar değerine sahip olduğundan, kaba kuvvet 
                      saldırılarına karşı oldukça zayıftır. Ayrıca, frekans analizi kullanılarak 
                      kolayca kırılabilir. Modern uygulamalarda tek başına kullanılmaz, ancak daha 
                      karmaşık şifreleme sistemlerinin bir parçası olabilir.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link 
                      href="/caesar" 
                      className="inline-block px-6 py-2 bg-[--primary] text-white rounded-lg hover:bg-[--primary-dark] transition-colors"
                    >
                      Sezar Şifrelemesini Deneyin
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* RSA Şifreleme Kartı */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">RSA Şifreleme</h3>
                  <p className="text-gray-700 mb-4">
                    Modern kriptografinin temel taşlarından biri olan RSA, asimetrik şifreleme 
                    kullanarak güvenli veri iletimi sağlar. Adını geliştiricileri Rivest, Shamir 
                    ve Adleman&apos;dan almıştır.
                  </p>
                  <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-medium mb-2">Nasıl Çalışır?</h4>
                    <p className="text-sm text-gray-600">
                      RSA, iki farklı anahtar kullanan asimetrik bir şifreleme algoritmasıdır: Genel 
                      (public) ve özel (private) anahtar. Genel anahtar veriyi şifrelemek için 
                      kullanılırken, şifrelenmiş veri yalnızca ilgili özel anahtar ile çözülebilir. 
                      İki büyük asal sayının çarpımına dayalı bir matematik problemi üzerine 
                      kurulmuştur.
                    </p>
                  </div>
                  <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-medium mb-2">Uygulamaları</h4>
                    <p className="text-sm text-gray-600">
                      RSA günümüzde web güvenliği (HTTPS), güvenli e-posta (PGP/GPG), sanal özel 
                      ağlar (VPN), dijital imzalar ve daha birçok alanda kullanılmaktadır. 
                      İnternet üzerinden güvenli finansal işlemlerin gerçekleştirilmesine olanak 
                      tanır ve modern e-ticaretin temel yapı taşlarından biridir.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                    <h4 className="font-medium mb-2">Güvenlik Analizi</h4>
                    <p className="text-sm text-gray-600">
                      RSA&apos;nın güvenliği, büyük sayıların çarpanlarına ayrılmasının zorluğuna 
                      dayanır. Yeterince büyük anahtar boyutları kullanıldığında (örn. 2048-bit 
                      veya 4096-bit), mevcut bilgisayar teknolojisiyle kırılması son derece 
                      zordur. Ancak kuantum bilgisayarlarının gelişmesiyle bu güvenliğin tehdit 
                      altına girebileceği düşünülmektedir.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link 
                      href="/rsa" 
                      className="inline-block px-6 py-2 bg-[--primary] text-white rounded-lg hover:bg-[--primary-dark] transition-colors"
                    >
                      RSA Şifrelemesini Deneyin
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Kriptoloji Tarihi Bölümü */}
        <AnimatedSection className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <AnimatedText 
                  as="h2" 
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Kriptolojinin Tarihsel Yolculuğu
                </AnimatedText>
                <AnimatedText 
                  delay={0.1}
                  className="text-gray-700 mb-8"
                >
                  Kriptoloji, binlerce yıllık bir geçmişe sahiptir. Antik Mısır hiyerogliflerinden 
                  günümüzün kuantum kriptografisine kadar, gizli iletişim yöntemleri sürekli 
                  gelişmiştir. Enigma makineleri, Alan Turing&apos;in çığır açan çalışmaları ve modern 
                  şifreleme standartları, bu büyüleyici bilimin gelişim sürecinin önemli parçalarıdır.
                </AnimatedText>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/history" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Kriptoloji Tarihini Keşfedin
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </motion.div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Kriptoloji Zaman Çizelgesi</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-3 h-3 rounded-full bg-[--primary] mt-2"></div>
                      <div className="w-0.5 h-full bg-gray-300 ml-1.5"></div>
                    </div>
                    <div>
                      <p className="font-medium">M.Ö. 1900&apos;ler</p>
                      <p className="text-sm text-gray-600">Antik Mısır&apos;da hiyeroglifler kullanılarak gizli mesajlar oluşturuldu.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-3 h-3 rounded-full bg-[--primary] mt-2"></div>
                      <div className="w-0.5 h-full bg-gray-300 ml-1.5"></div>
                    </div>
                    <div>
                      <p className="font-medium">M.Ö. 500&apos;ler</p>
                      <p className="text-sm text-gray-600">Spartalılar tarafından Scytale adı verilen mekanik şifreleme cihazı kullanıldı.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-3 h-3 rounded-full bg-[--primary] mt-2"></div>
                      <div className="w-0.5 h-full bg-gray-300 ml-1.5"></div>
                    </div>
                    <div>
                      <p className="font-medium">M.Ö. 50-60</p>
                      <p className="text-sm text-gray-600">Julius Sezar, askeri iletişimde Sezar şifresini kullanmaya başladı.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-3 h-3 rounded-full bg-[--primary] mt-2"></div>
                      <div className="w-0.5 h-full bg-gray-300 ml-1.5"></div>
                    </div>
                    <div>
                      <p className="font-medium">1940&apos;lar</p>
                      <p className="text-sm text-gray-600">Alan Turing ve ekibi, II. Dünya Savaşı&apos;nda Nazi Almanya&apos;sının Enigma makinesinin şifresini kırdı.</p>
                    </div>
          </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-3 h-3 rounded-full bg-[--primary] mt-2"></div>
                    </div>
                    <div>
                      <p className="font-medium">1977</p>
                      <p className="text-sm text-gray-600">RSA algoritması geliştirildi ve modern asimetrik kriptografinin temeli atıldı.</p>
                    </div>
          </li>
                </ul>
                <div className="mt-4 text-center">
                  <Link 
                    href="/history" 
                    className="text-[--primary] hover:underline flex justify-center items-center"
                  >
                    Tüm Tarihi Görüntüleyin
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
