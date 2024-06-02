import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Root({ children } : { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-3/4 mx-auto flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
