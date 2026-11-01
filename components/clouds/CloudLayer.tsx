const WIDTH = 1440;
const HEIGHT = 320;
const PUFFS = 26;

type CloudLayerProps = {
  seed: number;
  className?: string;
};

// Same seed gives the same shape, so server and client markup match.
function random(n: number) {
  const value = Math.sin(n * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export default function CloudLayer({ seed, className }: CloudLayerProps) {
  const puffs = Array.from({ length: PUFFS }, (_, i) => {
    const r = (offset: number) => random(seed + i + offset / 10);
    const big = i % 3 === 0;
    return {
      cx: Math.round(((i + r(1)) / PUFFS) * WIDTH),
      top: {
        cy: Math.round(100 + r(2) * 45),
        r: Math.round(big ? 62 + r(3) * 34 : 28 + r(3) * 30),
      },
      // Close spacing so this row always hides the flat edge of the rect.
      bottom: {
        cy: Math.round(190 + r(4) * 20),
        r: Math.round(36 + r(5) * 30),
      },
    };
  });

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <rect y="120" width={WIDTH} height="70" />
      {puffs.map(({ cx, top, bottom }, i) => (
        <g key={i}>
          <circle cx={cx} cy={top.cy} r={top.r} />
          <circle cx={cx} cy={bottom.cy} r={bottom.r} />
        </g>
      ))}
    </svg>
  );
}
