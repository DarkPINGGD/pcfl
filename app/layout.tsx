import "./globals.css"
import Navbar from "@/components/Navbar"
import LeftPanel from "@/components/LeftPanel"

export const metadata = {
  title: "Extreme Demon List",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LeftPanel />
        <main className="content">
          {children}
        </main>
      </body>
    </html>
  )
}
