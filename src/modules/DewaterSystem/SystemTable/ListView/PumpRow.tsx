import React from "react";
import Td from "./Td";
import { cn } from "@/lib/utils";

type Props = {
  pumpData: PumpInfo;
};

export default function PumpRow({ pumpData }: Props) {
  const {
    name,
    runStatus,
    tripStatus,
    manHoleCoverStatus,
    panelCoverStatus,
    condition,
  } = pumpData;
  return (
    <>
      <Td>{name}</Td>
      <Td>
        <RunStatusView status={runStatus} />
      </Td>
      <Td>
        <TripStatusView status={tripStatus} />
      </Td>
      <Td>
        <CoverStatusView status={manHoleCoverStatus} />
      </Td>
      <Td>
        <CoverStatusView status={panelCoverStatus} />
      </Td>
      <Td>
        <PumpConditionStatusView status={condition} />
      </Td>
    </>
  );
}

function RunStatusView({ status }: { status: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto rounded-xl h-7 w-fit min-w-14 px-5",
        "flex items-center justify-center",
        status && "bg-green-100 text-green-600"
      )}
    >
      {status ? "On" : "OFF"}
    </div>
  );
}

function TripStatusView({ status }: { status: TripStatus }) {
  return (
    <div
      className={cn(
        "mx-auto rounded-xl h-7 w-fit min-w-14 px-5",
        "flex items-center justify-center",
        status === "TRIP" && "bg-red-100 text-red-600"
      )}
    >
      {status === "TRIP" ? "Trip" : "Normal"}
    </div>
  );
}

function CoverStatusView({ status }: { status: CoverStatus }) {
  return (
    <div
      className={cn(
        "mx-auto rounded-xl h-7 w-fit min-w-14 px-5",
        "flex items-center justify-center",
        status === "OPEN" && "bg-red-100 text-red-600"
      )}
    >
      {status === "OPEN" ? "Open" : "Close"}
    </div>
  );
}

function PumpConditionStatusView({ status }: { status: PumpCondition }) {
  return (
    <div
      className={cn(
        "mx-auto rounded-xl h-7 w-fit min-w-14 px-5",
        "flex items-center justify-center",
        status === "ALARM" && "bg-red-100 text-red-600"
      )}
    >
      {status === "ALARM" ? "Alarm" : "Normal"}
    </div>
  );
}
