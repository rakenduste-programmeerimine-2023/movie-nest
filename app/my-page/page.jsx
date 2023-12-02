import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HeaderButton from "@/components/HeaderButton";
import AuthButton from "@/components/AuthButton";
import Footer from "@/components/Footer";
import ManageMyPage from "@/components/movie-components/ManageMyPage";

export default async function Account() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !session) {
    redirect("/");
  }
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 w-full flex flex-col gap-10 items-center text-2xl">
        <h1>{user.email}'s page</h1>
        <ManageMyPage user={user} />
      </div>

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
