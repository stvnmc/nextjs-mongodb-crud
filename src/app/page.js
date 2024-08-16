import GetBets from "@/components/bets/GetBets";
import GetLeagues from "@/components/leagues/GetLeagues";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <main class="h-screen flex justify-center mt-4">

        {/* <GetBets /> */}
        <GetLeagues />

      </main>
      <Footer />
    </>
  );
}
