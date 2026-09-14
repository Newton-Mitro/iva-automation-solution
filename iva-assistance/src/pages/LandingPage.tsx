import { useState } from "react";
import { Check, Clock3, Globe2, LockKeyhole } from "lucide-react";
import AuthScreen from "./AuthScreen";
import { TopNavigation } from "../components/landing/TopNavigation";
import {
  type AuthMode,
  type LandingView,
} from "../components/landing/landing-data";

export default function LandingPage() {
  const [view, setView] = useState<LandingView>("home");
  const [authMode, setAuthMode] = useState<AuthMode>("signin");
  const [menuOpen, setMenuOpen] = useState(false);

  function openAuth(mode: AuthMode) {
    setAuthMode(mode);
    setView(mode);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigate(nextView: LandingView) {
    setView(nextView);
    if (nextView === "signin" || nextView === "signup") {
      setAuthMode(nextView);
    }
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[var(--app-bg)] text-[var(--app-text)]">
      {view === "signin" || view === "signup" ? (
        <AuthScreen
          initialMode={authMode}
          onBack={() => navigate("home")}
          onModeChange={(mode) => {
            setAuthMode(mode);
            setView(mode);
          }}
        />
      ) : (
        <>
          <TopNavigation
            menuOpen={menuOpen}
            onToggleMenu={() => setMenuOpen((value) => !value)}
            onNavigate={navigate}
            onOpenAuth={openAuth}
          />

          {view === "home" && (
            <>
              <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 pt-8 md:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:pt-12 xl:px-0">
                <div>
                  <p className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--app-primary)]">
                    <span className="block h-px w-6 bg-[var(--app-warning)]" />
                    ভারতীয় ভিসা আবেদন এখন সহজ
                  </p>
                  <h1 className="max-w-[580px] text-[clamp(48px,5.5vw,80px)] font-normal leading-[0.96] tracking-[-0.065em] text-[var(--app-text)]">
                    কম সময়{" "}
                    <i className="not-italic text-[var(--app-primary)]">
                      অপেক্ষায়।
                    </i>{" "}
                    বেশি সময় ভ্রমণে।
                  </h1>
                  <p className="mt-7 max-w-[415px] text-base leading-7 text-[var(--app-text-secondary)]">
                    iva assistance আপনার ভিসা আবেদনকে গুছিয়ে রাখে, নিয়মিত
                    নজরদারি করে এবং পরবর্তী ধাপ পরিষ্কারভাবে দেখায়।
                  </p>

                  <div className="mt-12 flex items-center gap-3 text-[11px] text-[var(--app-text-secondary)]">
                    <div className="flex pl-1.5">
                      {"R M A +".split(" ").map((letter, index) => (
                        <span
                          key={letter + index}
                          className={`grid h-[25px] w-[25px] place-items-center rounded-full border-2 border-[var(--app-bg)] text-[9px] font-bold text-white ${
                            index === 0
                              ? "ml-[-6px] bg-[#d1aa85]"
                              : index === 1
                                ? "ml-[-6px] bg-[#789584]"
                                : index === 2
                                  ? "ml-[-6px] bg-[#d17c52]"
                                  : "ml-[-6px] bg-[var(--app-primary)]"
                          }`}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                    <span>শান্ত ও পরিষ্কার আবেদন প্রক্রিয়ার জন্য</span>
                  </div>
                </div>

                <div
                  className="relative min-h-[480px]"
                  aria-label="Application workflow preview"
                >
                  <div className="absolute -right-2 top-[-20px] h-[400px] w-[400px] rounded-full bg-[#f4dfbf]" />
                  <div className="absolute bottom-6 right-[-18px] h-[125px] w-[205px] rounded-t-[100%] bg-[#dfe8de]" />
                  <div className="absolute left-8 top-16 z-10 w-[min(100%,535px)] rotate-[-3deg] rounded-2xl border border-[rgba(56,96,82,0.16)] bg-[color:rgba(255,255,255,0.7)] p-5 shadow-[15px_20px_45px_rgba(56,96,82,0.13)] backdrop-blur-sm dark:bg-[color:rgba(15,23,42,0.7)]">
                    <div className="flex items-center justify-between text-[10px] text-[var(--app-text-secondary)]">
                      <span className="font-bold tracking-[-0.08em] text-[var(--app-primary)]">
                        iva{" "}
                        <b className="font-normal text-[var(--app-text-secondary)]">
                          assistance
                        </b>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />{" "}
                        workspace চালু আছে
                      </span>
                    </div>

                    <div className="mt-10 flex items-end justify-between">
                      <div>
                        <small className="block text-[8px] uppercase tracking-[0.1em] text-slate-400">
                          শুভ সকাল, মায়া
                        </small>
                        <h2 className="mt-1 text-[25px] font-normal tracking-[-0.04em] text-[var(--app-text)]">
                          আপনার যাত্রা, গুছানো।
                        </h2>
                      </div>
                      <span className="text-right text-[10px] font-medium text-[var(--app-text-secondary)]">
                        12 JUN
                        <br />
                        <b className="text-[12px] font-bold text-[var(--app-text)]">
                          2025
                        </b>
                      </span>
                    </div>

                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
                      <span className="block h-full w-[78%] rounded-full bg-[var(--app-primary)]" />
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                      <div>
                        <small className="block text-[8px] uppercase tracking-[0.1em] text-slate-400">
                          আবেদন
                        </small>
                        <strong className="block text-[26px] font-bold text-[var(--app-text)]">
                          03
                        </strong>
                      </div>
                      <div>
                        <small className="block text-[8px] uppercase tracking-[0.1em] text-slate-400">
                          চলমান
                        </small>
                        <strong className="block text-[26px] font-bold text-[var(--app-warning)]">
                          01
                        </strong>
                      </div>
                      <div>
                        <small className="block text-[8px] uppercase tracking-[0.1em] text-slate-400">
                          প্রস্তুত
                        </small>
                        <strong className="block text-[26px] font-bold text-[var(--app-text)]">
                          02
                        </strong>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface-2)] p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--app-primary-bg)] text-[var(--app-primary)]">
                        <Globe2 size={17} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <small className="block text-[8px] uppercase tracking-[0.1em] text-slate-400">
                          সক্রিয় আবেদন
                        </small>
                        <strong className="block truncate text-[14px] font-semibold text-[var(--app-text)]">
                          ট্যুরিস্ট ভিসা · ভারত
                        </strong>
                        <p className="mt-1 text-[10px] text-[var(--app-text-secondary)]">
                          পরবর্তী ধাপ: নথি যাচাই
                        </p>
                      </div>
                      <span className="text-lg text-[var(--app-primary)]">
                        ↗
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between text-[10px] text-[var(--app-text-secondary)]">
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={13} /> ২ মিনিট আগে যাচাই হয়েছে
                      </span>
                      <span className="flex items-center gap-1.5">
                        <LockKeyhole size={12} /> ব্যক্তিগত workspace
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 z-20 flex items-start gap-3 rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-3 shadow-lg">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <Check size={14} />
                    </span>
                    <div>
                      <strong className="block text-[13px] text-[var(--app-text)]">
                        আরও এক ধাপ এগিয়ে
                      </strong>
                      <small className="block text-[10px] text-[var(--app-text-muted)]">
                        নথিগুলো সম্পূর্ণ মনে হচ্ছে
                      </small>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3 px-5 py-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--app-text-muted)] md:px-8 xl:px-0">
                <span>যাদের গন্তব্য আছে, তাদের জন্য</span>
                <span>নজরদারি</span>
                <span>গুছানো</span>
                <span>স্বচ্ছতা</span>
                <span>নিয়ন্ত্রণ</span>
              </section>
            </>
          )}
        </>
      )}
    </main>
  );
}
