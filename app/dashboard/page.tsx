import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { Dashboard } from "@/components/Dashboard/dashboard"
import { SignOutButton } from "./signoutButton"

export default async function Page() {
  const session = await getServerSession()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="pt-60">
      <SignOutButton />
      <Dashboard />
    </div>
  )
}