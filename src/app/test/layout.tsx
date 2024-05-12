import { type ReactNode } from "react";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen py-24">
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
}
