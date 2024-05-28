import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Section from "@/components/section/Section";
import Intro from "@/components/sections/intro/Intro";

export default function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen w-full flex-col p-4 lg:p-16 md:p-9"
    >
      <Header />
      <Intro />
      <Section title="portfolio">
        <p>hello</p>
      </Section>
      <Footer />
    </main>
  );
}
