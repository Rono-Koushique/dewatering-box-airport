import MaterialSymbolsLightPrintOutlineRounded from "@/components/icons/MaterialSymbolsLightPrintOutlineRounded";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export default function SaveReportBtn({}: Props) {
  return (
    <Button>
      <MaterialSymbolsLightPrintOutlineRounded className="text-xl" />
      <span>Save Report</span>
    </Button>
  );
}
