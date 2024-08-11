"use server"

import { signIn } from "@/auth";

interface Credentials {
    email: string;
    password: string;
}

export const GoogleSignInAction = async () => {
    await signIn("google");
}

export const CredentialsSignInAction = async (formData: Credentials) => {
    await signIn("credentials", formData);
}