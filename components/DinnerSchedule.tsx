"use client";

const ROTATION = [
  { name: "Fish Fry", time: "5:00 PM" },
  { name: "Chicken Fried Steak", time: "6:00 PM" },
  { name: "Steak Dinner", time: "6:00 PM" },
  { name: "Lasagna", time: "6:00 PM" },
];

function fridaysInMonth(year: number, month: number): Date[] {
  const d = new Date(year, month, 1);
  while (d.getDay() !== 5) d.setDate(d.getDate() + 1);
  const result: Date[] = [];
  while (d.getMonth() === month) {
    result.push(new Date(d));
    d.setDate(d.getDate() + 7);
  }
  return result;
}

export default function DinnerSchedule() {
  const now = new Date();
  const fridays = fridaysInMonth(now.getFullYear(), now.getMonth());
  const heading = now.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <div>
      <p className="text-xs font-semibold text-legion-navy uppercase tracking-widest mb-3">
        {heading} Dinner Schedule
      </p>
      <div className="divide-y divide-gray-100">
        {fridays.map((friday, i) => {
          const label = friday.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
          const isFifth = i === 4;
          const item = isFifth ? null : ROTATION[i];
          return (
            <div key={i} className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 w-24">{label}</span>
                <span className="text-sm font-medium text-gray-800">
                  {isFifth ? "5th Friday — call Post for menu" : item!.name}
                </span>
              </div>
              {!isFifth && (
                <span className="text-xs font-semibold text-legion-red">{item!.time}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
