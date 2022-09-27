import { IconProps, Money } from "phosphor-react";
import { InputHTMLAttributes } from "react";

interface ISectionProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  startAdornment?: any;
  endAdornment?: any;
}

function Adornment({
  adornment,
  className,
}: {
  adornment: any;
  className?: string;
}) {
  return (
    <i
      className={`flex items-center justify-center bg-slate-400 text-slate-600 font-semibold h-full w-8 text-sm cursor-default ${className}`}
    >
      {adornment}
    </i>
  );
}

export function Section({
  id,
  label,
  className,
  startAdornment,
  endAdornment,
  ...rest
}: ISectionProps) {
  return (
    <section className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-xs text-zinc-300 font-semibold">
        {label}
      </label>
      <div className="flex items-center justify-right">
        {!!startAdornment ? (
          <Adornment adornment={startAdornment} className="rounded-l-md" />
        ) : null}

        <input
          type="text"
          id={id}
          className={`w-full text-slate-600 p-1 pl-2 outline-none rounded ${
            !!startAdornment ? "rounded-none rounded-r-md" : "rounded-none rounded-l-md"
          }`}
          {...rest}
        />

        {!!endAdornment ? <Adornment adornment={endAdornment} className='rounded-r-md' /> : null}
      </div>
    </section>
  );
}
