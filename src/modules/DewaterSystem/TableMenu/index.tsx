"use client";
import React from "react";
import TableSearch from "./TableSearch";
import SaveReportBtn from "./SaveReportBtn";
import TableFilterBtn from "./TableFilterBtn";

type Props = {};

export default function TableMenu({}: Props) {
  return (
    <div className="flex items-center">
      <TableSearch />
      <div className="flex items-center ml-auto gap-3">
        <TableFilterBtn />
        <SaveReportBtn />
      </div>
    </div>
  );
}
