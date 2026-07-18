export default function CircuitBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
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

        {/* traveling signal pulse */}
        <circle r="5" fill="#4dffa8">
          <animateMotion dur="7s" repeatCount="indefinite" begin="0s">
            <mpath href="#trace-a" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur="7s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
