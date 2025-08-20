import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meu Blog",
  description: "Exemplo com layout fixo",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
  
    <html lang="en">
      <body>
        {/* Header fixo */}
        <header style={{ padding: "10px", background: "#222", color: "white" }}>
          <h1>Meu Blog</h1>
          <nav>
            <Link href="/" style={{ marginRight: "10px", color: "white" }}>
              Home
            </Link>
            <a href="/about" style={{ color: "white" }}>
              Sobre
            </a>
          </nav>
        </header>

        {/* Aqui entra o conteúdo da página */}
        <main style={{ padding: "20px" }}>{children}</main>

        {/* Rodapé */}
        <footer
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#eee",
            color: "black",
          }}
        >
          <p>© 2025 - Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
