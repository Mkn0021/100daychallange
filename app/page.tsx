import Link from "next/link";
import Image from "next/image";
import { Days } from "@/lib/constant";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#fbfaf3] px-6 py-8 text-zinc-900 sm:px-10 sm:py-12 lg:px-16">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 -left-24 h-72 w-72 rounded-full bg-lime-300/35 blur-3xl" />
                <div className="absolute top-28 -right-16 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
            </div>

            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
                <header className="rounded-3xl border border-zinc-200/80 bg-white/75 p-8 shadow-[0_20px_80px_-30px_rgba(24,24,27,0.25)] backdrop-blur md:p-10">
                    <p className="text-sm font-medium tracking-[0.28em] text-zinc-500 uppercase">
                        Daily Interface Experiments
                    </p>
                    <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                        100 Days of UI in a bright, modern showcase.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base text-zinc-600 sm:text-lg">
                        A focused gallery of daily builds, each crafted to explore a different
                        design direction and frontend pattern.
                    </p>
                </header>

                <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {Days.map(({ day, title, description, href, cover }) => (
                        <Link
                            key={day}
                            href={href}
                            className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_18px_60px_-32px_rgba(24,24,27,0.35)] transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="relative aspect-16/10 w-full overflow-hidden border-b border-zinc-200">
                                <Image
                                    src={cover}
                                    alt={`Day ${day} preview for ${title}`}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    priority
                                />
                            </div>
                            <div className="p-6 sm:p-7">
                                <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500 uppercase">
                                    Day {day}
                                </p>
                                <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                                    {title}
                                </h2>
                                <p className="mt-2 text-zinc-600">{description}</p>
                                <span className="mt-5 inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-zinc-700">
                                    Open Project
                                </span>
                            </div>
                        </Link>
                    ))}

                    <div className="rounded-3xl border border-dashed border-zinc-300/80 bg-white/50 p-8 text-zinc-600 sm:p-10">
                        <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500 uppercase">
                            Next Drops
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-zinc-900">
                            More daily pages are coming.
                        </h3>
                        <p className="mt-3 max-w-md">
                            This space will expand into a clean index for all 100 days with
                            previews, tags, and quick filters.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
