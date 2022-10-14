import { CaretDown } from "phosphor-react";
import * as Select from "@radix-ui/react-select";
import { Dispatch, SetStateAction, useEffect } from "react";

export const PeriodByButton = ({
  setPeriodBy,
}: {
  setPeriodBy: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setPeriodBy("anos");
  }, []);

  return (
    <Select.Root
      defaultValue="anos"
      onValueChange={(valueSelected) => {
        setPeriodBy(valueSelected);
      }}
    >
      <Select.Trigger className="w-full h-full flex items-center justify-center gap-1 outline-none">
        <Select.Value className="w-full h-full" />
        <Select.Icon>
          <CaretDown weight="bold" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal className="h-20 w-32 bg-slate-500/70 rounded-md">
        <Select.Content className="">
          <Select.Viewport className="">
            {[
              { value: "meses", id: 1 },
              { value: "anos", id: 2 },
            ].map((t) => (
              <Select.Item
                value={t.value}
                key={`${t.id}_${t.value}`}
                className="w-full h-10 flex items-center justify-center rounded-md hover:bg-slate-900 hover:text-zinc-200 outline-none"
              >
                <Select.ItemText>{t.value}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
