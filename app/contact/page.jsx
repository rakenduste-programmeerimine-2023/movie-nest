import HeaderButton from "@/components/HeaderButton";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactIcons from "@/components/ContactIcons";
import AuthButton from "@/components/AuthButton";

export default function Home() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
          <AuthButton />
        </div>
      </nav>
      <div className="flex-1 w-full flex flex-col items-center">
        <ContactForm />
      </div>
      <ContactIcons />
      <footer className="w-full border-t border-t-foreground/10">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}
