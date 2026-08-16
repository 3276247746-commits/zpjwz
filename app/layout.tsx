import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "黄丹琦 — AI 设计师 · 动画设计师";
const description = "黄丹琦的 AI 设计与动画设计作品集，聚焦 AIGC、动态影像与视觉叙事。";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og-hero-character.png`;

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: image, width: 1731, height: 909 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
