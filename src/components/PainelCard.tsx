import React from "react";

interface IPainelCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PainelCard({ children, className, ...rest }: IPainelCardProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center p-4 w-full text-zinc-200 bg-slate-500 rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
