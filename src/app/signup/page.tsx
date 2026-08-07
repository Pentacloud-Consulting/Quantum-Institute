import JoinTheWaitlist from "../../Signup/JoinTheWaitlist";
import Navbar from "../../FrontEnd/Components/Navbar";
import Footer from "../../FrontEnd/Components/Footer";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <div className="flex-1">
        <JoinTheWaitlist />
      </div>
      <Footer />
    </main>
  );
}
