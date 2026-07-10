"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ADMIN_PASSWORD, AUTH_COOKIE } from "@/lib/auth";

export async function login(formData: FormData) {
  const password = String(formData.get("password"));

  if (password !== ADMIN_PASSWORD) {
    return {
      error: "Senha inválida.",
    };
  }

  (await cookies()).set(AUTH_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    // sem maxAge -> session cookie
  });

  redirect("/admin");
}
