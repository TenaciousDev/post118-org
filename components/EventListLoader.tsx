import fs from "fs";
import path from "path";
import EventList from "./EventList";

export default function EventListLoader() {
  const fifthFridays = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content/events/fifth-fridays.json"), "utf-8")
  );
  const bikeNights = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content/events/bike-nights.json"), "utf-8")
  );
  const oneOff = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content/events/one-off-events.json"), "utf-8")
  );
  return <EventList fifthFridays={fifthFridays} bikeNights={bikeNights} oneOff={oneOff} />;
}
