type PitInfo = {
  id: string;
  name: string;
  pumps: PumpInfo[];
};

type PumpInfo = {
  id: string;
  name: string;
  runStatus: boolean;
  tripStatus: TripStatus;
  manHoleCoverStatus: CoverStatus;
  panelCoverStatus: CoverStatus;
  condition: PumpCondition;
};

type TripStatus = "NORMAL" | "TRIP";
type CoverStatus = "OPEN" | "CLOSE";
type PumpCondition = "NORMAL" | "ALARM";
