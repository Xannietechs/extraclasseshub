import { Metadata } from "next"
import Link from "next/link"

import { AuthForm } from "@/components/auth/auth-form"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Register - Extra Classes",
  description: "Create your Extra Classes account",
}

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details to get started
          </p>
        </div>
        <AuthForm type="register" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login">
            <Button variant="link" className="px-0">Log in</Button>
          </Link>
        </p>
      </div>
    </div>
  )
}