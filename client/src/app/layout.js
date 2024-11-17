/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
*/

import "./globals.css";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import Header from "@/components/header/Header.js";
import Footer from "@/components/footer/Footer";


export const metadata = {
  title: 'Mubtasim App',
  description: 'Mubtasim Next.js Practice app',
}


export default function RootLayout({children}) {
  
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preload" as="image" href="/images/icon.png"/>
        <link rel="shortcut icon" href="/images/icon.png"/>

        <script type="module" defer src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule defer src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </head>
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>

    </html>
  );
}
