import fs from "fs";
import path from "path";
import EventList from "./EventList";

type FifthFridayEntry = { title: string; time: string; description: string; cancelled?: boolean };
type BikeNightEntry = { band: string; time: string; cancelled?: boolean };
type OneOffEvent = { year: number; month: number; day: number; title: string; type: string; label: string; sub: string; time: string; cancelled?: boolean };

export default function EventListLoader() {
  const fifthFridays: Record<string, FifthFridayEntry> = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content/events/fifth-fridays.json"), "utf-8")
  );
  const bikeNights: Record<string, BikeNightEntry> = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content/events/bike-nights.json"), "utf-8")
  );
  const oneOff: OneOffEvent[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content/events/one-off-events.json"), "utf-8")
  );
  return <EventList fifthFridays={fifthFridays} bikeNights={bikeNights} oneOff={oneOff} />;
}
