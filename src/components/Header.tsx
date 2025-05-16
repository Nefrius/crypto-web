import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kriptoloji</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:underline">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/caesar" className="hover:underline">
                Sezar Şifreleme
              </Link>
            </li>
            <li>
              <Link href="/rsa" className="hover:underline">
                RSA Şifreleme
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 