"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reveal from "@/components/Reveal";
import DemoVideo from "@/components/DemoVideo";
import WaitlistModal from "@/components/WaitlistModal";
import MessageModal from "@/components/MessageModal";
import { useLang } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLang();
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* ───────────────────────── HEADER ───────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMessageOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-black transition-colors hover:bg-zinc-200"
              aria-label={t.messageModal.title}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4.5C2 3.67 2.67 3 3.5 3H12.5C13.33 3 14 3.67 14 4.5V10.5C14 11.33 13.33 12 12.5 12H6L3 14.5V12H3.5C2.67 12 2 11.33 2 10.5V4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 sm:px-8">
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section className="flex flex-col items-center pt-20 text-center sm:pt-28">
          <Reveal>
            <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-[56px]">
              {t.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-md text-balance text-lg font-medium text-gray-400 sm:text-2xl">
              {t.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              <button
                onClick={() => setWaitlistOpen(true)}
                className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
              >
                {t.hero.waitlist}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 7H12M12 7L7 2M12 7L7 12"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => setMessageOpen(true)}
                className="rounded-full bg-zinc-100 px-6 py-3 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                {t.hero.feedback}
              </button>
            </div>
          </Reveal>
        </section>

        {/* ──────────────── CHROME EXTENSION FOR + LOGOS ──────────────── */}
        <section className="flex flex-col items-center pt-24 sm:pt-32">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              {t.extensionFor}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex items-center justify-center">
              <Image
                src="/platform-logos.svg"
                alt="Netflix, YouTube"
                width={209}
                height={171}
                className="h-auto w-52 sm:w-64"
                priority
              />
            </div>
          </Reveal>
        </section>

        {/* ───────────────────────── DÉMO (bloc noir, vidéo + son) ───────────────────────── */}
        <section className="w-full pt-24 sm:pt-32">
          <Reveal>
            <DemoVideo />
          </Reveal>
        </section>

        {/* ───────────────────────── 3 CARTES (specs SVG : rx 31.6, #F3F3F3, #7F7F81) ───────────────────────── */}
        <section className="w-full pt-24 sm:pt-32">
          <div className="mx-auto flex max-w-md flex-col gap-3.5">
            {([t.cards.hidden, t.cards.appears, t.cards.gone] as const).map(
              (c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <div
                    className="flex h-[135px] flex-col justify-between overflow-hidden px-7 py-6"
                    style={{ background: "#F3F3F3", borderRadius: "31.6px" }}
                  >
                    <span className="text-[28px] font-medium leading-none text-black sm:text-3xl">
                      {c.title}
                    </span>
                    <span
                      className="text-[28px] font-medium leading-none sm:text-3xl"
                      style={{ color: "#7F7F81" }}
                    >
                      {c.sub}
                    </span>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </section>

        {/* ───────────────────────── PUNCHLINE ───────────────────────── */}
        <section className="pt-32 text-center sm:pt-40">
          <Reveal>
            <p className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
              {t.punchline}
            </p>
          </Reveal>
        </section>

        {/* ───────────────────────── SIGNATURE ───────────────────────── */}
        <section className="flex flex-col items-center py-32 text-center sm:py-40">
          <Reveal>
            <p className="max-w-sm text-balance text-base font-semibold text-gray-400">
              {t.signature}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <Logo />
            </div>
          </Reveal>
        </section>
      </div>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
      <MessageModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </main>
  );
}
