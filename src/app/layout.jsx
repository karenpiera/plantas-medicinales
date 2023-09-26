import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-[calc(100vh-5rem)] container mx-auto">{children}</div>
      </body>
    </html>
  );
}
// "use client";

// import { Providers } from "../store/providers";
// import "./globals.css";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/footer";
// import { store } from "@/store";
// import { Inter } from "next/font/google";
// import { AuthContextProvider } from "./context/AuthContext";
// const inter = Inter({ subsets: ["latin"] });
// import { ThemeProvider } from "next-themes";

// export const metadata = {
//   title: "Auto Connect",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" class="dark">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class">
//           <AuthContextProvider>
//             <Providers store={store}>
//               <Navbar />
//               {children}
//               <Footer />
//             </Providers>
//           </AuthContextProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }