import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/(website)/layout";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "Narula Diagnostics Centre",
  description: "Comprehensive Diagnostic and Pathology Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppLayout>{children}</AppLayout>
        </CartProvider>
      </body>
    </html>
  );
}
