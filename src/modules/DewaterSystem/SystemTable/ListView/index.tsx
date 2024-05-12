import React from "react";
import Th from "./Th";
import PitRow from "./PitRow";

const data: PitInfo[] = [
  {
    id: "1",
    name: "Pit-1",
    pumps: [
      {
        id: "1",
        name: "Pump-1",
        runStatus: true,
        tripStatus: "NORMAL",
        manHoleCoverStatus: "CLOSE",
        panelCoverStatus: "CLOSE",
        condition: "NORMAL",
      },
      {
        id: "2",
        name: "Pump-2",
        runStatus: false,
        tripStatus: "TRIP",
        manHoleCoverStatus: "CLOSE",
        panelCoverStatus: "OPEN",
        condition: "ALARM",
      },
    ],
  },
  {
    id: "2",
    name: "Pit-2",
    pumps: [
      {
        id: "1",
        name: "Pump-1",
        runStatus: false,
        tripStatus: "NORMAL",
        manHoleCoverStatus: "CLOSE",
        panelCoverStatus: "CLOSE",
        condition: "NORMAL",
      },
      {
        id: "2",
        name: "Pump-2",
        runStatus: true,
        tripStatus: "NORMAL",
        manHoleCoverStatus: "CLOSE",
        panelCoverStatus: "CLOSE",
        condition: "NORMAL",
      },
    ],
  },
  {
    id: "3",
    name: "Pit-3",
    pumps: [
      {
        id: "1",
        name: "Pump-1",
        runStatus: false,
        tripStatus: "NORMAL",
        manHoleCoverStatus: "OPEN",
        panelCoverStatus: "CLOSE",
        condition: "ALARM",
      },
      {
        id: "2",
        name: "Pump-2",
        runStatus: false,
        tripStatus: "TRIP",
        manHoleCoverStatus: "CLOSE",
        panelCoverStatus: "CLOSE",
        condition: "ALARM",
      },
    ],
  },
];

type Props = {};

export default function ListView({}: Props) {
  const [pit1, pit2, pit3] = data;

  return (
    <table className="text-sm w-full border-collapse">
      <thead>
        <tr>
          <Th></Th>
          <Th className="w-52" colSpan={2}>
            Description
          </Th>
          <Th sortable={true}>Run Status</Th>
          <Th sortable={true}>Trip Status</Th>
          <Th sortable={true}>Man-hole Cover</Th>
          <Th sortable={true}>Panel Cover</Th>
          <Th sortable={true}>Condition</Th>
        </tr>
      </thead>
      <tbody>
        <PitRow pitData={pit1} />
        <PitRow pitData={pit2} />
        <PitRow pitData={pit3} />
      </tbody>
    </table>
  );
}
