"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caesarEncrypt, caesarDecrypt } from "../../utils/cipher";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedText from "../../components/AnimatedText";

export default function CaesarPage() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "encrypt") {
      setResult(caesarEncrypt(text, shift));
    } else {
      setResult(caesarDecrypt(text, shift));
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
              Sezar Şifreleme
            </AnimatedText>
            <AnimatedText 
              as="p" 
              className="text-lg md:text-xl mb-8"
              delay={0.1}
            >
              Tarihin en eski şifreleme tekniklerinden biri olan Sezar şifrelemesini keşfedin ve deneyin.
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
                  <h3 className="text-xl font-bold mb-4">Sezar Şifrelemesi Nedir?</h3>
                  <p className="mb-4">
                    Sezar şifrelemesi, Julius Caesar tarafından gizli mesajlaşmada kullanılan 
                    ve tarihteki en eski ve basit şifreleme yöntemlerinden biridir.
                  </p>
                  <p className="mb-4">
                    Bu şifreleme metodunda alfabedeki her harf, belirli bir sayıda ötelenmiş 
                    haliyle değiştirilir. Örneğin 3 birim öteleme için:
                  </p>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm border">
                    A → D, B → E, C → F, ... , Z → C
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Nasıl Çalışır?</h3>
                  <p className="mb-4">
                    Sezar şifrelemesinde her karakter alfabede belirli sayıda ileri kaydırılır. 
                    Bu kaydırma miktarına &quot;anahtar&quot; ya da &quot;kaydırma&quot; (shift) denir.
                  </p>
                  <p className="mb-4">
                    Matematiksel olarak, alfabedeki n. harf için k kaydırma ile şifreleme:
                  </p>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm mb-4 border">
                    E(x) = (x + k) mod 26
                  </div>
                  <p>
                    Şifre çözme işlemi için ise:
                  </p>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm border">
                    D(x) = (x - k) mod 26
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Tarihsel Kullanımı</h3>
                  <p className="mb-4">
                    Julius Caesar, askeri yazışmalarında bu şifreleme yöntemini kullanmıştır. 
                    Genel olarak 3 kaydırmalı bir alfabe tercih ettiği bilinmektedir.
                  </p>
                  <p className="mb-4">
                    Suetonius&apos;un &quot;Oniki Sezar&apos;ın Yaşamı&quot; adlı eserinde, Caesar&apos;ın 
                    yeğeni Augustus&apos;a yazdığı mektuplarda harfleri bir pozisyon kaydırarak 
                    şifreleme yaptığı belirtilmiştir.
                  </p>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Güvenlik Zafiyetleri</h3>
                  <p className="mb-4">
                    Sezar şifrelemesi, sadece 25 farklı anahtar kullanabildiğinden 
                    kaba kuvvet saldırılarına karşı oldukça savunmasızdır.
                  </p>
                  <p className="mb-4">
                    Ayrıca, frekans analizi yöntemi ile (metin içindeki harflerin 
                    kullanım sıklığına bakarak) Sezar şifrelemesi kolayca kırılabilir.
                    Örneğin, İngilizce&apos;de en sık kullanılan harf &apos;E&apos; olduğundan, 
                    şifreli metinde en çok tekrarlayan harfin &apos;E&apos;den kaydırılmış 
                    hali olduğu tahmin edilebilir.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Sağ Taraf - İnteraktif Şifreleme */}
            <div>
              <AnimatedSection delay={0.6}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border sticky top-6"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4">Sezar Şifrelemeyi Deneyin</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="mode" className="block font-medium mb-2">
                        İşlem Türü
                      </label>
                      <div className="flex gap-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            name="mode"
                            value="encrypt"
                            checked={mode === "encrypt"}
                            onChange={() => setMode("encrypt")}
                          />
                          <span className="ml-2">Şifrele</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            name="mode"
                            value="decrypt"
                            checked={mode === "decrypt"}
                            onChange={() => setMode("decrypt")}
                          />
                          <span className="ml-2">Şifre Çöz</span>
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="text" className="block font-medium mb-2">
                        Metin
                      </label>
                      <textarea
                        id="text"
                        className="w-full p-2 border rounded-md"
                        rows={4}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder={mode === "encrypt" ? "Şifrelenecek metni girin..." : "Çözülecek şifreli metni girin..."}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="shift" className="block font-medium mb-2">
                        Kaydırma Miktarı (1-25)
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          id="shift"
                          min="1"
                          max="25"
                          value={shift}
                          onChange={(e) => setShift(parseInt(e.target.value))}
                          className="w-full"
                        />
                        <span className="font-mono bg-gray-50 px-2 py-1 rounded min-w-[2rem] text-center border">
                          {shift}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {mode === "encrypt" ? "Şifrele" : "Şifre Çöz"}
                    </motion.button>
                  </form>

                  {result && (
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-bold text-lg mb-2">Sonuç:</h4>
                      <div className="bg-gray-50 p-4 rounded-md font-mono break-all border">
                        {result}
                      </div>
                    </motion.div>
                  )}

                  {/* Örnek Alfabe Görselleştirmesi */}
                  <div className="mt-8">
                    <h4 className="font-bold text-lg mb-2">Alfabede Kaydırma:</h4>
                    <div className="bg-gray-50 p-4 rounded-md border overflow-auto">
                      <div className="flex space-x-4 font-mono whitespace-nowrap">
                        <div className="flex flex-col items-center">
                          <span className="font-bold mb-1">Orijinal:</span>
                          <div className="flex">
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char, i) => (
                              <div key={i} className="w-7 h-7 flex items-center justify-center border">
                                {char}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex space-x-4 font-mono whitespace-nowrap">
                        <div className="flex flex-col items-center">
                          <span className="font-bold mb-1">Kaydırılmış ({shift}):</span>
                          <div className="flex">
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char, i) => {
                              const code = char.charCodeAt(0);
                              const shiftedCode = ((code - 65 + shift) % 26) + 65;
                              const shiftedChar = String.fromCharCode(shiftedCode);
                              
                              return (
                                <div key={i} className="w-7 h-7 flex items-center justify-center border bg-blue-50">
                                  {shiftedChar}
                                </div>
                              );
                            })}
                          </div>
                        </div>
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