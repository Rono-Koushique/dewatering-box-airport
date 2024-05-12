import MaterialSymbolsLightFilterList from "@/components/icons/MaterialSymbolsLightFilterList";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export default function TableFilterBtn({}: Props) {
  return (
    <Button variant="outline">
      <MaterialSymbolsLightFilterList className="text-xl" />
      <span>Filters</span>
    </Button>
  );
}
