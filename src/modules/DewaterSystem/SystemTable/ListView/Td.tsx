import { cn } from "@/lib/utils";
import { type ReactNode, type TdHTMLAttributes } from "react";

type Props = {
  children: ReactNode;
} & TdHTMLAttributes<HTMLElement>;

export default function Td({ children, className, ...tdProps }: Props) {
  return (
    <td
      className={cn("px-2 text-gray-600 font-medium", className)}
      {...tdProps}
    >
      {children}
    </td>
  );
}
