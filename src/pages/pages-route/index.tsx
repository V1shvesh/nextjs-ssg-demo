import "@/styles/globals.css";
import Header from "@/components/Header";
import PagesRoutePage from "@/components/PagesRoutePage";

export default function Home() {
  return (
    <main className="w-full h-dvh pt-10">
      <Header />
      <PagesRoutePage />
    </main>
  );
}
