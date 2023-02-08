import './globals.css'
import Header from "@/Components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <title>Einbürgerungstest</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="Einbürgerungstest online üben" />
          <link rel="icon" href="/favicon.ico" />
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
