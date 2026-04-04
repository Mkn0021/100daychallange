export const CycleMomentum = () => (
    <div className="h-full w-full px-6 py-4">
        <h4 className="text-foreground text-lg font-semibold">Cycle 37</h4>
        <div className="mt-6 flex items-center gap-4">
            {[
                ["#d1d5db", "Scope"],
                ["#f59e0b", "Started"],
                ["#6366f1", "Completed"],
            ].map(([color, label]) => (
                <span key={label} className="text-foreground/80 flex items-center gap-1.5 text-xs">
                    <span className="size-3 rounded-full" style={{ background: color }} />
                    {label}
                </span>
            ))}
        </div>
        <GraphSvg className="w-[calc(100%+3rem)] md:h-full lg:h-auto" />
    </div>
);

const GraphSvg = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 320 140" className={className} preserveAspectRatio="none">
        <defs>
            <linearGradient id="gs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#d1d5db" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gi" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
        </defs>
        <path
            d="M0,110 C30,108 60,104 90,98 C120,92 150,84 180,76 C210,68 240,60 270,52 C290,47 305,44 320,40 L320,140 L0,140 Z"
            fill="url(#gs)"
        />
        <path
            d="M0,110 C30,108 60,104 90,98 C120,92 150,84 180,76 C210,68 240,60 270,52 C290,47 305,44 320,40"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M0,132 C30,128 60,120 90,110 C120,100 150,88 180,80 C210,72 240,64 270,58 C290,54 305,52 320,50 L320,140 L0,140 Z"
            fill="url(#ga)"
        />
        <path
            d="M0,132 C30,128 60,120 90,110 C120,100 150,88 180,80 C210,72 240,64 270,58 C290,54 305,52 320,50"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M0,136 C30,134 60,130 90,122 C120,114 150,102 180,90 C210,78 240,66 270,56 C290,50 305,46 320,42 L320,140 L0,140 Z"
            fill="url(#gi)"
        />
        <path
            d="M0,136 C30,134 60,130 90,122 C120,114 150,102 180,90 C210,78 240,66 270,56 C290,50 305,46 320,42"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);
