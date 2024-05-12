import DewaterSystem from "@/modules/DewaterSystem";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-24">
      <DewaterSystem />
    </div>
  );
}
