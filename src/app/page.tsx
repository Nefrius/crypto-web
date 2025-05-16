"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedText from "../components/AnimatedText";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText 
              as="h1" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            >
              Kriptoloji Dünyasına Hoş Geldiniz
            </AnimatedText>
            
            <AnimatedText 
              as="p" 
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              delay={0.1}
            >
              Klasik ve modern şifreleme tekniklerini keşfedin, uygulayın ve güvenli iletişimin 
              temellerini öğrenin. Verilerinizi nasıl koruyacağınızı öğrenmek için harika bir başlangıç.
            </AnimatedText>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/caesar"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 duration-200"
                >
                  Sezar Şifreleme Dene
                </Link>
                <Link
                  href="/rsa"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 duration-200"
                >
                  RSA Şifreleme Dene
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedText 
            as="h2" 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            delay={0.4}
          >
            Şifreleme Teknikleri
          </AnimatedText>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Sezar Şifreleme Kartı */}
            <AnimatedSection delay={0.5} className="h-full">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-2xl font-bold mb-4">Sezar Şifreleme</h3>
                <p className="mb-4">
                  M.Ö. 100&apos;lü yıllarda Julius Caesar tarafından kullanılan Sezar şifrelemesi, 
                  en basit ve en bilinen şifreleme tekniklerinden biridir.
                </p>
                <h4 className="text-lg font-semibold mb-2">Nasıl Çalışır?</h4>
                <p className="mb-4">
                  Alfabedeki her harf, belirli bir sayı kadar kaydırılarak şifrelenir. 
                  Örneğin, 3 kaydırma ile A harfi D&apos;ye, B harfi E&apos;ye dönüşür.
                </p>
                <h4 className="text-lg font-semibold mb-2">Tarihsel Önemi</h4>
                <p className="mb-4">
                  Julius Caesar, askeri mesajlarını iletirken bu yöntemi kullanarak düşmanlarının 
                  mesajlarını anlamasını engellemiştir. Basitliği ve uygulanabilirliği sayesinde 
                  tarihin en önemli şifreleme tekniklerinden biri olarak kabul edilir.
                </p>
                <h4 className="text-lg font-semibold mb-2">Güvenlik Analizi</h4>
                <p className="mb-4">
                  Modern standartlara göre oldukça zayıf bir şifreleme yöntemidir. Sadece 
                  25 farklı anahtar (kaydırma) olduğundan, kaba kuvvet saldırılarına karşı 
                  savunmasızdır. Frekans analizi ile de kolayca kırılabilir.
                </p>
                <div className="mt-6">
                  <Link
                    href="/caesar"
                    className="text-blue-600 hover:underline font-medium flex items-center"
                  >
                    <span>Sezar Şifreleme hakkında daha fazla bilgi</span>
                    <motion.span
                      className="ml-1"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* RSA Şifreleme Kartı */}
            <AnimatedSection delay={0.6} className="h-full">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-2xl font-bold mb-4">RSA Şifreleme</h3>
                <p className="mb-4">
                  RSA (Rivest-Shamir-Adleman), 1977 yılında geliştirilen ve günümüzde
                  yaygın olarak kullanılan asimetrik bir şifreleme algoritmasıdır.
                </p>
                <h4 className="text-lg font-semibold mb-2">Nasıl Çalışır?</h4>
                <p className="mb-4">
                  RSA, iki asal sayının çarpımına dayalı matematiksel işlemleri kullanır.
                  Açık anahtar ve özel anahtar olmak üzere iki anahtar üretilir.
                  Açık anahtar şifreleme için, özel anahtar ise şifre çözme için kullanılır.
                </p>
                <h4 className="text-lg font-semibold mb-2">Modern Kullanım Alanları</h4>
                <p className="mb-4">
                  Web sitelerinde güvenli bağlantı (HTTPS), e-posta şifreleme, dijital 
                  imzalar ve bankacılık sistemleri gibi birçok alanda RSA algoritması 
                  kullanılmaktadır. İnternet güvenliğinin temel taşlarından biridir.
                </p>
                <h4 className="text-lg font-semibold mb-2">Güvenlik Analizi</h4>
                <p className="mb-4">
                  RSA&apos;nın güvenliği, büyük sayıların asal çarpanlarına ayrılmasının 
                  zorluğuna dayanır. Yeterince büyük asal sayılar kullanıldığında, 
                  mevcut bilgisayar teknolojisiyle kırılması neredeyse imkansızdır.
                </p>
                <div className="mt-6">
                  <Link
                    href="/rsa"
                    className="text-green-600 hover:underline font-medium flex items-center"
                  >
                    <span>RSA Şifreleme hakkında daha fazla bilgi</span>
                    <motion.span
                      className="ml-1"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Kriptoloji Tarihi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedText 
            as="h2" 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            delay={0.7}
          >
            Kriptoloji Tarihi
          </AnimatedText>

          <AnimatedSection delay={0.8}>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Antik Çağlar</h3>
                  <p>
                    Şifreleme tarihi M.Ö. 1900&apos;lü yıllara kadar uzanır. Eski Mısır, Mezopotamya ve 
                    Hindistan&apos;da şifreleme teknikleri kullanıldığına dair kanıtlar bulunmaktadır. 
                    Sezar şifrelemesi gibi basit yer değiştirme yöntemleri antik çağlarda sıklıkla 
                    kullanılmıştır.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Orta Çağ ve Rönesans</h3>
                  <p>
                    8. yüzyılda Arap matematikçi Al-Kindi, frekans analizi tekniğini geliştirerek 
                    şifre çözümünde devrim yaratmıştır. Rönesans döneminde ise polyalfabetik 
                    şifreleme teknikleri geliştirilmiş, Leon Battista Alberti &quot;şifrelemenin babası&quot; 
                    unvanını kazanmıştır.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Modern Dönem</h3>
                  <p>
                    20. yüzyılda mekanik şifreleme makineleri (Enigma gibi) geliştirildi. II. Dünya 
                    Savaşı sırasında şifre kırma çalışmaları bilgisayar biliminin gelişmesine öncülük etti. 
                    1970&apos;lerde DES (Veri Şifreleme Standardı) geliştirildi. 1977&apos;de ise RSA algoritması 
                    ile asimetrik şifreleme dönemi başladı.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Dijital Çağ</h3>
                  <p>
                    Günümüzde AES, RSA, ECC gibi modern algoritmaların yanı sıra, kuantum bilgisayarlar 
                    için güvenli olacak yeni nesil şifreleme yöntemleri üzerinde çalışılmaktadır. 
                    Blockchain teknolojileri ve kripto paralar da modern kriptografinin önemli 
                    uygulama alanları arasındadır.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
