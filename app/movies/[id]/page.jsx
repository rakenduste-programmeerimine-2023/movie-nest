import HeaderButton from "@/components/HeaderButton";
import Footer from "@/components/Footer";

async function MovieDetailsPage() {
  return (
    <div className="flex-1 w-full flex flex-col min-h-screen gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
        </div>
      </nav>
      <div className="animate-in w-full flex flex-row justify-center items-center text-2xl">
        <h1>Placeholder</h1>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-20">
        <div className="w-2/4"></div>
        <div className="animate-in w-2/4 flex flex-col justify-center items-left gap-20">
          <div>
            <h4>Genres:</h4>
            <h4>Description:</h4>
          </div>
          <div>
            <h4>Directors:</h4>
            <h4>Writers:</h4>
            <h4>Cast:</h4>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-t-foreground/10 mt-auto">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MovieDetailsPage;
