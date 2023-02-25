import './globals.css'
import Header from "@/Components/Header";
import * as process from "process";
import React from "react";
interface Props {
    children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
        <head>
            <title>Einbürgerungstest</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content="Einbürgerungstest online üben"/>
            <link rel="icon" href="/favicon.ico"/>
            <script
              async
              data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT}
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}
              crossOrigin="anonymous"
            ></script>
        </head>
        <body className={"bg-gray-50"}>
        <div className={"bg-slate-200 max-w-7xl mx-auto shadow-xl border-1 border-gray-600 min-h-screen"}>
            <Header/>
            {children}
        </div>
        <footer className={"max-w-7xl mx-auto bg-slate-800 p-10 text-center text-slate-200"}>
            Einbürgerungstest Fragen
        </footer>
        </body>
        </html>
    )
}
