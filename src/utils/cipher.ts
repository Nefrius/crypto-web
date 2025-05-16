// Sezar Şifreleme Fonksiyonları
export function caesarEncrypt(text: string, shift: number): string {
  if (shift < 0) {
    return caesarDecrypt(text, Math.abs(shift));
  }
  
  return text
    .split('')
    .map(char => {
      // Türkçe karakterler ve özel karakterler için kontrol
      const code = char.charCodeAt(0);
      
      // Büyük harf (A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      
      // Küçük harf (a-z)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      
      // Diğer karakterleri değiştirmeden bırak
      return char;
    })
    .join('');
}

export function caesarDecrypt(text: string, shift: number): string {
  return caesarEncrypt(text, 26 - (shift % 26));
}

// RSA ile ilgili basit fonksiyonlar 
// Not: Bu gerçek RSA implementasyonu değildir, eğitim amaçlı basitleştirilmiştir

// En büyük ortak bölen (GCD) hesaplama
function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Genişletilmiş Öklid Algoritması
function extendedGCD(a: number, b: number): { gcd: number, x: number, y: number } {
  if (a === 0) {
    return { gcd: b, x: 0, y: 1 };
  }
  
  const { gcd, x, y } = extendedGCD(b % a, a);
  return { gcd, x: y - Math.floor(b / a) * x, y: x };
}

// Modüler çarpık işlemi
function modInverse(a: number, m: number): number {
  const { gcd, x } = extendedGCD(a, m);
  
  if (gcd !== 1) {
    throw new Error('Modüler ters hesaplanamadı.');
  }
  
  return (x % m + m) % m;
}

// Modüler üs alma
function modPow(base: number, exponent: number, modulus: number): number {
  if (modulus === 1) return 0;
  
  let result = 1;
  base = base % modulus;
  
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }
    
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  
  return result;
}

// Asal sayı kontrolü
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

// RSA anahtar üretimi (basitleştirilmiş)
export function generateRSAKeys(p: number, q: number) {
  if (!isPrime(p) || !isPrime(q)) {
    throw new Error('p ve q asal sayı olmalıdır.');
  }
  
  const n = p * q;
  const phi = (p - 1) * (q - 1);
  
  // Genel olarak e = 65537 kullanılır, ama burada basitleştirme için farklı bir yaklaşım
  let e = 3;
  while (e < phi) {
    if (gcd(e, phi) === 1) break;
    e += 2;
  }
  
  const d = modInverse(e, phi);
  
  return {
    publicKey: { e, n },
    privateKey: { d, n }
  };
}

// RSA şifreleme
export function rsaEncrypt(message: number, publicKey: { e: number, n: number }): number {
  const { e, n } = publicKey;
  return modPow(message, e, n);
}

// RSA şifre çözme
export function rsaDecrypt(encryptedMessage: number, privateKey: { d: number, n: number }): number {
  const { d, n } = privateKey;
  return modPow(encryptedMessage, d, n);
}

// Metin için basit RSA
export function rsaEncryptText(text: string, publicKey: { e: number, n: number }): number[] {
  return text.split('').map(char => {
    const charCode = char.charCodeAt(0);
    return rsaEncrypt(charCode, publicKey);
  });
}

export function rsaDecryptText(encryptedValues: number[], privateKey: { d: number, n: number }): string {
  return encryptedValues.map(value => {
    const charCode = rsaDecrypt(value, privateKey);
    return String.fromCharCode(charCode);
  }).join('');
} 