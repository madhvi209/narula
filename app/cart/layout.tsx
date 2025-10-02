"use client";

import Header from "@/components/(website)/header";
import Footer from "@/components/(website)/footer";
import FloatingContactMenu from "@/components/(website)/floatingContactMenu";
import FloatingHeader from "@/components/(website)/floatingHeader";

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <FloatingHeader/>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingContactMenu />
        </div>
    );
}
