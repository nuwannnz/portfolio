import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-4 lg:p-16 md:p-9">
      <Header />
      <Footer />
    </main>
  );
}
