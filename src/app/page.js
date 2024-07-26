import GetBets from "@/components/bets/GetBets";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main class="h-screen flex justify-center mt-4">
        <GetBets />
      </main>
      <Footer />
    </>
  );
}
