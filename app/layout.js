import { MovieProvider } from "./_context/MovieContext";
import "@/app/_styles/globals.css";
export const metadata = {
  title: "Popcorn | Find Your Movie"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MovieProvider>
          {children}
        </MovieProvider>
      </body>
    </html>
  )
}