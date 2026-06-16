"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
import { WEB3FORMS_KEY, WEB3FORMS_URL, isMailerReady } from "@/lib/config";

type Status = "idle" | "loading" | "success";

export default function MessageModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t, locale } = useLang();
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const id = setTimeout(() => {
        setStatus("idle");
        setMessage("");
        setContact("");
      }, 200);
      return () => clearTimeout(id);
    }
  }, [open]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (message.trim().length < 2) return;
    setStatus("loading");
    try {
      // Envoi direct vers Web3Forms → arrive dans ta boîte mail. Pas de back-end.
      if (isMailerReady) {
        await fetch(WEB3FORMS_URL, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: "Caply — nouveau message",
            name: "Visiteur Caply",
            from_name: "Caply",
            type: "message",
            message,
            email: contact || "non fourni",
            langue: locale,
          }),
        });
      }
    } catch {
      // on confirme quand même côté visiteur : zéro friction
    }
    setStatus("success");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-[fadeIn_.2s_ease]"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md rounded-[32px] bg-white p-8 shadow-card animate-[pop_.28s_cubic-bezier(.22,1,.36,1)]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-black"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10.5L8 14.5L16 5.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold text-black">
              {t.messageModal.success}
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-black">
              {t.messageModal.title}
            </h3>
            <p className="mt-1 text-base text-zinc-500">{t.messageModal.sub}</p>
            <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
              <textarea
                required
                autoFocus
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.messageModal.placeholder}
                className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-base text-black outline-none transition-colors focus:border-black"
              />
              <input
                type="email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={t.messageModal.contactPlaceholder}
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-base text-black outline-none transition-colors focus:border-black"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-black py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "…" : t.messageModal.submit}
              </button>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pop {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
