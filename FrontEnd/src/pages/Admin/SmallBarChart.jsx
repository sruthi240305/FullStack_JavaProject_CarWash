import React from "react";

const barColor = "#7b1e2b";

export default function SmallBarChart({ values = [], height = 120 }) {
  const max = Math.max(...values, 1);
  const w = 40;
  const gap = 12;
  const totalW = values.length * (w + gap);
  return (
    <svg width={totalW} height={height}>
      {values.map((v, i) => {
        const h = (v / max) * (height - 20);
        return (
          <g key={i} transform={`translate(${i * (w + gap)},0)`}>
            <rect x={0} y={height - h - 10} width={w} height={h} rx={8} fill={barColor} />
            <text x={w / 2} y={height - 2} textAnchor="middle" fontSize={11} fill="#5b1b1b">{i + 1}</text>
          </g>
        );
      })}
    </svg>
  );
}
