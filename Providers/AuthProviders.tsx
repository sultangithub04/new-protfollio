"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function AuthProviders({ children }: { children: ReactNode }) {
    return (
        <div>
            <SessionProvider> {children}</SessionProvider>
        </div>
    );
};