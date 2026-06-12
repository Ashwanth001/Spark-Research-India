import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import Programmes from "@/components/Programmes";
import Journey from "@/components/Journey";
import Mentors from "@/components/Mentors";
import WhySRI from "@/components/WhySRI";
import Scholarship from "@/components/Scholarship";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TheProblem />
        <Journey />
        <Mentors />
        <Programmes />
        <Scholarship />
        <WhySRI />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
