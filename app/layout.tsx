import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkClientProvider } from "@/components/providers/clerk-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Assignment",
  description: "A decentralized exchange dApp created with solidity and Nextjs",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
      media: "(prefers-color-scheme:light)",
    },
    {
      url: "/logo.png",
      href: "/logo.png",
      media: "(prefers-color-scheme:dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-dark"
          >
            <Toaster position="bottom-center" />
            <ModalProvider></ModalProvider>
            {children}
          </ThemeProvider>
        </ClerkClientProvider>
      </body>
    </html>
  );
}
