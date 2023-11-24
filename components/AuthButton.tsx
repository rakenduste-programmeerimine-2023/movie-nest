import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import './Buttons.css';

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="flex items-center gap-4">
      Hello, {user.email}!
      <form action={signOut}>
        <button className="log-out-button">
          Log out
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="log-in-button"
    >
      Log in
    </Link>
  )
}
