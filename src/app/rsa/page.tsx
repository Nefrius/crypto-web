"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  generateRSAKeys,
  rsaEncryptText,
  rsaDecryptText
} from "../../utils/cipher";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedText from "../../components/AnimatedText";

export default function RSAPage() {
  const [p, setP] = useState(11);
  const [q, setQ] = useState(13);
  const [keys, setKeys] = useState<{ 
    publicKey: { e: number, n: number }; 
    privateKey: { d: number, n: number } 
  } | null>(null);
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState<number[]>([]);
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [error, setError] = useState("");

  const handleGenerateKeys = () => {
    try {
      setError("");
      const newKeys = generateRSAKeys(p, q);
      setKeys(newKeys);
      setEncryptedMessage([]);
      setDecryptedMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu");
    }
  };

  const handleEncrypt = () => {
    try {
      setError("");
      if (!keys) {
        setError("Önce anahtar oluşturmalısınız");
        return;
      }
      const encrypted = rsaEncryptText(message, keys.publicKey);
      setEncryptedMessage(encrypted);
      setDecryptedMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Şifreleme sırasında bir hata oluştu");
    }
  };

  const handleDecrypt = () => {
    try {
      setError("");
      if (!keys) {
        setError("Önce anahtar oluşturmalısınız");
        return;
      }
      if (encryptedMessage.length === 0) {
        setError("Önce bir mesaj şifreleyin");
        return;
      }
      const decrypted = rsaDecryptText(encryptedMessage, keys.privateKey);
      setDecryptedMessage(decrypted);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Şifre çözme sırasında bir hata oluştu");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Header Section */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText 
              as="h1" 
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              RSA Şifreleme
            </AnimatedText>
            <AnimatedText 
              as="p" 
              className="text-lg md:text-xl mb-8"
              delay={0.1}
            >
              Modern şifrelemede devrim yaratan asimetrik RSA algoritmasını keşfedin ve uygulayın.
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Sol Taraf - Bilgi */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg mb-6 border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">RSA Şifrelemesi Nedir?</h3>
                  <p className="mb-4">
                    RSA (Rivest-Shamir-Adleman), 1977 yılında geliştirilen ve günümüzde 
                    internet güvenliğinde yaygın olarak kullanılan asimetrik bir şifreleme algoritmasıdır.
                  </p>
                  <p className="mb-4">
                    RSA, iki farklı anahtar kullanır: Şifreleme için açık anahtar (public key) ve 
                    şifre çözme için özel anahtar (private key).
                  </p>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Nasıl Çalışır?</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>İki büyük asal sayı (p ve q) seçilir.</li>
                    <li>Bu sayıların çarpımı hesaplanır: n = p × q</li>
                    <li>Euler&apos;s totient fonksiyonu hesaplanır: φ(n) = (p-1) × (q-1)</li>
                    <li>1 &lt; e &lt; φ(n) ve e ile φ(n) aralarında asal olan bir e değeri seçilir.</li>
                    <li>Modüler aritmetikte şu denklemi sağlayan d hesaplanır: (d × e) mod φ(n) = 1</li>
                    <li>Açık anahtar (e, n) ve özel anahtar (d, n) olarak belirlenir.</li>
                  </ol>
                  <div className="mt-4 bg-gray-50 p-4 rounded font-mono text-sm border">
                    <p>Şifreleme: C = M<sup>e</sup> mod n</p>
                    <p>Şifre çözme: M = C<sup>d</sup> mod n</p>
                    <p className="mt-2 text-xs">M: Orijinal mesaj, C: Şifreli mesaj</p>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Tarihsel Gelişimi</h3>
                  <p className="mb-4">
                    RSA algoritması, 1977 yılında Ron Rivest, Adi Shamir ve Leonard Adleman tarafından MIT&apos;de 
                    geliştirilmiştir. İlk kez açık anahtarlı bir şifreleme sistemi sunarak kriptoloji 
                    alanında devrim yaratmıştır.
                  </p>
                  <p className="mb-4">
                    Algoritmanın ismi, yaratıcılarının soyadlarının baş harflerinden gelmektedir. 
                    Aslında, Clifford Cocks adlı bir İngiliz matematikçi aynı algoritmayı 1973&apos;te 
                    İngiliz İstihbarat Servisi için geliştirmiş, ancak bu çalışma 1997&apos;ye kadar 
                    gizli tutulmuştur.
                  </p>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Uygulama Alanları</h3>
                  <p className="mb-4">
                    RSA algoritması günümüzde birçok kritik uygulamada kullanılmaktadır:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>SSL/TLS protokolleri (HTTPS)</li>
                    <li>E-posta şifreleme (PGP/GPG)</li>
                    <li>Dijital imzalar</li>
                    <li>Güvenli veri transferi</li>
                    <li>Akıllı kartlar ve güvenlik donanımları</li>
                    <li>Kripto para ve blockchain teknolojileri</li>
                  </ul>
                  <p>
                    RSA, günümüzde yaygın kullanılan bir algoritma olmasına rağmen, 
                    kuantum bilgisayarlarının gelişmesiyle gelecekte güvenliği risk 
                    altına girebilir. Bu nedenle kuantum sonrası şifreleme (post-quantum 
                    cryptography) üzerine aktif araştırmalar devam etmektedir.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Sağ Taraf - İnteraktif Şifreleme */}
            <div className="space-y-6">
              <AnimatedSection delay={0.6}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Anahtar Oluşturma</h3>
                  <p className="mb-4">
                    İki asal sayı seçin (eğitim amaçlı basitleştirilmiş örnek - gerçek uygulamalarda çok daha büyük asal sayılar kullanılır)
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="p" className="block font-medium mb-2">
                        p (asal sayı)
                      </label>
                      <input
                        type="number"
                        id="p"
                        min="2"
                        className="w-full p-2 border rounded-md"
                        value={p}
                        onChange={(e) => setP(parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <label htmlFor="q" className="block font-medium mb-2">
                        q (asal sayı)
                      </label>
                      <input
                        type="number"
                        id="q"
                        min="2"
                        className="w-full p-2 border rounded-md"
                        value={q}
                        onChange={(e) => setQ(parseInt(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <motion.button
                    onClick={handleGenerateKeys}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Anahtar Oluştur
                  </motion.button>

                  {keys && (
                    <motion.div 
                      className="mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-bold mb-2">Oluşturulan Anahtarlar:</h4>
                      <div className="bg-gray-50 p-3 rounded-md font-mono text-xs mb-2 border">
                        <p><strong>Açık Anahtar (e, n):</strong> ({keys.publicKey.e}, {keys.publicKey.n})</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md font-mono text-xs border">
                        <p><strong>Özel Anahtar (d, n):</strong> ({keys.privateKey.d}, {keys.privateKey.n})</p>
                      </div>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div 
                      className="mt-4 p-3 bg-red-100 text-red-700 rounded-md border border-red-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {error}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.7}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">RSA Şifrelemeyi Deneyin</h3>

                  <div className="mb-4">
                    <label htmlFor="message" className="block font-medium mb-2">
                      Şifrelenecek Mesaj
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Şifrelemek istediğiniz metni girin..."
                    />
                  </div>

                  <div className="flex gap-4 mb-4">
                    <motion.button
                      onClick={handleEncrypt}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                      disabled={!keys}
                      whileHover={keys ? { scale: 1.02 } : {}}
                      whileTap={keys ? { scale: 0.98 } : {}}
                    >
                      Şifrele
                    </motion.button>
                    <motion.button
                      onClick={handleDecrypt}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                      disabled={!keys || encryptedMessage.length === 0}
                      whileHover={keys && encryptedMessage.length > 0 ? { scale: 1.02 } : {}}
                      whileTap={keys && encryptedMessage.length > 0 ? { scale: 0.98 } : {}}
                    >
                      Şifre Çöz
                    </motion.button>
                  </div>

                  {encryptedMessage.length > 0 && (
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-bold mb-2">Şifrelenmiş Mesaj:</h4>
                      <div className="bg-gray-50 p-3 rounded-md font-mono text-xs overflow-x-auto border">
                        {JSON.stringify(encryptedMessage)}
                      </div>
                    </motion.div>
                  )}

                  {decryptedMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-bold mb-2">Çözülmüş Mesaj:</h4>
                      <div className="bg-gray-50 p-3 rounded-md font-mono break-all border">
                        {decryptedMessage}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">RSA Nasıl Çalışır?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">1. Anahtar Üretimi</h4>
                      <div className="bg-gray-50 p-3 rounded border">
                        <p className="mb-1">• İki asal sayı seçilir: p = {p}, q = {q}</p>
                        <p className="mb-1">• Çarpımları hesaplanır: n = p × q = {p * q}</p>
                        {keys && (
                          <>
                            <p className="mb-1">• Euler fonksiyonu: φ(n) = (p-1) × (q-1) = {(p-1) * (q-1)}</p>
                            <p className="mb-1">• Açık anahtar e: {keys.publicKey.e}</p>
                            <p>• Özel anahtar d: {keys.privateKey.d}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">2. Şifreleme İşlemi</h4>
                      <div className="bg-gray-50 p-3 rounded border">
                        <p>Şifreleme formülü: C = M<sup>e</sup> mod n</p>
                        <p className="text-sm mt-1">Her karakter, açık anahtar ile şifrelenir.</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">3. Şifre Çözme İşlemi</h4>
                      <div className="bg-gray-50 p-3 rounded border">
                        <p>Şifre çözme formülü: M = C<sup>d</sup> mod n</p>
                        <p className="text-sm mt-1">Şifreli metin sadece özel anahtar ile çözülebilir.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 