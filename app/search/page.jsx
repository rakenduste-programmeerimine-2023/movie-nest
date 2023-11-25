import React from 'react'
import HeaderButton from "@/components/HeaderButton";
import Footer from "@/components/Footer";

function SearchPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
        
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
        </div>
      </nav>
      SearchPage

      <footer className="w-full border-t border-t-foreground/10">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SearchPage