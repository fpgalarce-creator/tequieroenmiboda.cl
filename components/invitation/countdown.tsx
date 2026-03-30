"use client";

import { useEffect, useMemo, useState } from "react";

export function Countdown({ targetDate }: { targetDate: string }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(target - now, 0);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  return (
    <div className="grid grid-cols-3 gap-3 text-center sm:max-w-sm">
      {[`${days} días`, `${hours} horas`, `${minutes} min`].map((item) => (
        <div key={item} className="rounded-xl border border-white/15 bg-white/5 p-3 text-sm text-white/90">{item}</div>
      ))}
    </div>
  );
}
