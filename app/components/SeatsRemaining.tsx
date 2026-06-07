"use client";

// Live beta-group availability for the /beta scarcity line.
//
// Reads the SOC app's public signup config — the SAME source the in-app
// signup form uses (Super-Admin → Settings: cap + default group) — so the
// number here stays tied to Settings instead of a hardcoded value.
//
// This is a static-export site, so the fetch runs in the browser. The
// static HTML ships the honest fallback ("Beta access is limited.") and
// the live "Group N has X seats remaining." replaces it once the fetch
// resolves. On any failure we keep the fallback — never a fabricated count.

import { useEffect, useState } from "react";

const AVAILABILITY_URL = "https://db.sentineloc.io/api/signup/availability";
const FALLBACK = "Beta access is limited.";

type Availability = {
  cap: number;
  remaining: number | null;
  isFull: boolean;
  groupId: string | null;
};

function groupLabel(groupId: string | null): string {
  if (!groupId) return "This group";
  const m = groupId.match(/(\d+)/);
  return m ? `Group ${m[1]}` : "This group";
}

export default function SeatsRemaining({ className = "" }: { className?: string }) {
  const [data, setData] = useState<Availability | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(AVAILABILITY_URL, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad status"))))
      .then((d: Availability) => { if (alive) setData(d); })
      .catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, []);

  let text = FALLBACK;
  if (data && !failed) {
    const group = groupLabel(data.groupId);
    if (data.isFull || data.remaining === 0) {
      text = `${group} is full — join the waitlist below.`;
    } else if (data.cap > 0 && data.remaining != null) {
      text = `${group} has ${data.remaining} ${data.remaining === 1 ? "seat" : "seats"} remaining.`;
    }
  }

  return <p className={className}>{text}</p>;
}
