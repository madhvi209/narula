"use client";

interface DiscountTagProps {
  discount: string;
}

export function DiscountTag({ discount }: DiscountTagProps) {
  return (
    <div className="discount-tag">
      <svg viewBox="0 0 66 32" width={66} height={32} style={{ display: "block" }}>
        {/* Tag body */}
        <path
          d="M0 8 Q0 0 8 0 H58 Q66 0 66 8 V21 Q66 29 58 29 H8 Q0 29 0 21 Z"
          fill="url(#tagGradient)"
          stroke="#f59e0b"
          strokeWidth="1"
        />
        {/* Tag cut (triangle) */}
        <polygon points="0,8 10,16 0,24" fill="#fbbf24" />
        <defs>
          <linearGradient
            id="tagGradient"
            x1="0"
            y1="0"
            x2="66"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fde047" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        {/* Tag hole */}
        <circle
          cx="8"
          cy="8"
          r="2"
          fill="#fff3cd"
          stroke="#f59e0b"
          strokeWidth="1"
        />
        {/* Discount text */}
        <text
          x="33"
          y="20"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="15"
          fontWeight="bold"
          fill="#fff"
          style={{ fontFamily: "inherit", letterSpacing: 0.5 }}
          filter="url(#textShadow)"
        >
          {discount}
        </text>
        <filter id="textShadow">
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="0.8"
            floodColor="#c2410c"
            floodOpacity="0.16"
          />
        </filter>
      </svg>
    </div>
  );
}
