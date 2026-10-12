import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "FrameForge Studio", description: "A modern browser-based video editing studio for creators." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
