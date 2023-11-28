import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "./Buttons.css";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div
      className="flex items-center gap-4"
      style={{ whiteSpace: "nowrap", display: "inline-flex" }}
    >
      {/* Hey, {user.email}! */}
      <Link
        href="/my-page"
        className="my-page-button"
        style={{ whiteSpace: "nowrap", display: "inline-flex" }}
      >
        My page
      </Link>
      <form action={signOut}>
        <button
          className="log-out-button"
          style={{ whiteSpace: "nowrap", display: "inline-flex" }}
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
