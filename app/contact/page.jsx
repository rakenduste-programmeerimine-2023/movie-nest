import HeaderButton from "@/components/HeaderButton";
import Footer from "@/components/Footer";

export default async function ContactPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
        </div>
      </nav>

      <div className="animate-in flex-1 w-1/3 flex flex-col gap-10 items-start">
        <h1 className="text-xl">Contact us</h1>
        <div className="flex flex-col gap-10 items-start">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Message</h4>
        </div>
      </div>

      <footer className="w-full border-t border-t-foreground/10">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}
