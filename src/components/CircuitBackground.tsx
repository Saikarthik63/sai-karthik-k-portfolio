export default function CircuitBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* ambient color blobs for depth */}
      <div className="blob blob-a h-[420px] w-[420px] bg-cyan/50 -left-24 -top-24" />
      <div className="blob blob-b h-[380px] w-[380px] bg-purple/50 right-0 top-40" />
      <div className="blob blob-a h-[320px] w-[320px] bg-emerald/40 left-1/3 bottom-0" style={{ animationDelay: '4s' }} />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#1e352b" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#grid)" />

        {/* main trace path used both for the static line and the traveling pulse */}
        <path
          id="trace-a"
          d="M -20 620 H 220 V 420 H 480 V 540 H 760 L 860 440 H 1220"
          fill="none"
          stroke="#2a4a3c"
          strokeWidth="2"
        />
        <path
          d="M -20 160 H 300 L 380 240 H 640 V 100 H 1000 V 260 H 1220"
          fill="none"
          stroke="#2a4a3c"
          strokeWidth="2"
        />

        {/* vias */}
        {[
          [220, 620], [220, 420], [480, 420], [480, 540], [760, 540], [860, 440],
          [300, 160], [380, 240], [640, 240], [640, 100], [1000, 100], [1000, 260],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={4} fill="#3a5c4c" />
        ))}

        {/* traveling signal pulses (multicolor) */}
        <circle r="5" fill="#4dffa8">
          <animateMotion dur="7s" repeatCount="indefinite" begin="0s">
            <mpath href="#trace-a" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#22d3ee">
          <animateMotion dur="7s" repeatCount="indefinite" begin="3.5s">
            <mpath href="#trace-a" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur="7s" repeatCount="indefinite" begin="3.5s" />
        </circle>

        {/* ambient particles */}
        {[
          [120, 90], [520, 60], [900, 140], [1080, 380], [180, 500], [640, 620], [980, 640], [360, 720],
        ].map(([cx, cy], i) => (
          <circle
            key={`p-${i}`}
            cx={cx}
            cy={cy}
            r={i % 2 === 0 ? 2 : 1.4}
            fill={['#22d3ee', '#b48bfa', '#34d399', '#fb923c'][i % 4]}
            style={{
              animation: `particle-pulse ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </svg>

      <div className="grain" />
    </div>
  )
}
