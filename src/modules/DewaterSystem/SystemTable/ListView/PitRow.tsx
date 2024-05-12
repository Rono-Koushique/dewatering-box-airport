import React from "react";
import Td from "./Td";
import IonChevronForwardCircleOutline from "@/components/icons/IonChevronForwardCircleOutline";
import PitIcon from "@/components/icons/PitIcon";
import PumpRow from "./PumpRow";

type Props = {
  pitData: PitInfo;
};

export default function PitRow({ pitData }: Props) {
  const {
    name,
    pumps: [pump1, pump2],
  } = pitData;

  return (
    <>
      <tr className="h-16 text-center align-middle border-b">
        <Td rowSpan={2}>
          <IonChevronForwardCircleOutline className="text-base text-neutral-400 mx-auto" />
        </Td>
        <Td className="w-28" rowSpan={2}>
          <div className="flex items-center gap-1">
            <PitIcon />
            <span className="font-medium">{name}</span>
          </div>
        </Td>
        <PumpRow pumpData={pump1} />
      </tr>
      <tr className="h-16 text-center align-middle border-b">
        <PumpRow pumpData={pump2} />
      </tr>
    </>
  );
}
