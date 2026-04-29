// True-3D rotating dotted globe — pure CSS animation, no client JS.

const RINGS = 20;
const RADIUS_PX = 250;

type Dot = { x: number; y: number; z: number };

function buildDots(): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < RINGS; i++) {
    const phi = (i / (RINGS - 1)) * Math.PI;
    const ringR = Math.sin(phi);
    const y = Math.cos(phi) * RADIUS_PX;
    const dotsAtRing = Math.max(8, Math.round(ringR * 32));
    for (let j = 0; j < dotsAtRing; j++) {
      const theta = (j / dotsAtRing) * 2 * Math.PI;
      const x = ringR * Math.cos(theta) * RADIUS_PX;
      const z = ringR * Math.sin(theta) * RADIUS_PX;
      dots.push({ x, y, z });
    }
  }
  return dots;
}

const DOTS = buildDots();

export default function Globe({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full ${className}`} style={{ perspective: "1600px" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="ring-pulse-1 absolute w-full h-full rounded-full border border-sky-400/50" />
        <div className="ring-pulse-2 absolute w-full h-full rounded-full border border-sky-400/40" />
        <div className="ring-pulse-3 absolute w-full h-full rounded-full border border-sky-400/30" />
      </div>

      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14, 165, 233,0.20) 0%, transparent 55%)" }} />

      <div
        className="globe-3d-spin absolute"
        style={{
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
        }}
      >
        {DOTS.map((d, i) => (
          <div
            key={i}
            className="globe-dot"
            style={{
              top: 0,
              left: 0,
              transform: `translate3d(${d.x}px, ${d.y}px, ${d.z}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
