import { Inter } from "next/font/google";
import "./globals.css";
import { StateProvider } from "./context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          {children}
        </StateProvider>
        </body>
    </html>
  );
}
