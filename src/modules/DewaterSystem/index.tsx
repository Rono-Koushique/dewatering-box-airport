"use client";
import React from "react";
import TableMenu from "./TableMenu";
import SystemTable from "./SystemTable";

type Props = {};

export default function DewaterSystem({}: Props) {
  return (
    <div className="flex flex-col">
      <TableMenu />
      <div className="mt-10">
        <SystemTable />
      </div>
    </div>
  );
}
