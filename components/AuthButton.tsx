import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "./Buttons.css";
import MyPageButton from "@/components/MyPageButton";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return session && user ? (
    <div
      className="flex items-center gap-4"
      style={{ whiteSpace: "nowrap", display: "inline-flex" }}
    >
      {/* Hey, {user.email}! */}
      <MyPageButton />
      <form action={signOut}>
        <button
          className="log-out-button"
          style={{ whiteSpace: "nowrap", display: "inline-flex" }}
          name="sign-out-button"
        >
          Log out
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="log-in-button"
      style={{ whiteSpace: "nowrap", display: "inline-flex" }}
    >
      Login
    </Link>
  );
}
