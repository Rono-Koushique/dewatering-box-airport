import PhMagnifyingGlassThin from "@/components/icons/PhMagnifyingGlassThin";
import { IconInput } from "@/components/ui/iconInput";
import React from "react";

type Props = {};

export default function TableSearch({}: Props) {
  return (
    <div className="flex items-center gap-1.5 h-10 rounded-xl border border-neutral-200 bg-white px-5 py-2 ring-offset-white focus-within:ring-2 focus-within:ring-neutral-950 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      <PhMagnifyingGlassThin />
      <input
        type="text"
        className="text-xs placeholder:text-neutral-500 focus-visible:outline-none grow"
        placeholder="Search"
      />
    </div>
  );
}
