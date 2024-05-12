import CarbonChevronSort from "@/components/icons/CarbonChevronSort";
import { cn } from "@/lib/utils";
import { type ThHTMLAttributes } from "react";

type Props = {
  sortable?: boolean;
  children?: string;
} & ThHTMLAttributes<HTMLElement>;

export default function Th({
  sortable,
  children,
  className,
  ...thProps
}: Props) {
  return (
    <th
      className={cn(
        "p-0 py-3 bg-gray-100 first:rounded-l-xl last:rounded-r-xl",
        sortable &&
          "hover:bg-gray-200/70 cursor-pointer transition-all duration-200 ease-in-out",
        className
      )}
      {...thProps}
    >
      <div className="flex items-center justify-center gap-1">
        <span className="font-medium text-gray-600">{children}</span>
        {sortable && <CarbonChevronSort className="text-gray-700" />}
      </div>
    </th>
  );
}
