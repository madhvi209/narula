"use client";

interface SectionHeaderProps {
  title: string;
  gradientText: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, gradientText, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`max-w-[1180px] mx-auto w-full ${className}`}>
      <h2
        className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3"
        style={{ color: 'var(--primary-blue-darker)' }}
      >
        {title}{" "}
        <span className="text-gradient-primary">
          {gradientText}
        </span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
