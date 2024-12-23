"use client";

import useSocket from "@/hooks/useSocket";
import React from "react";

export default function LiveMatch() {
  const { matchStart, liveEvent } = useSocket();

  return (
    <div>
      <h1>Live match events</h1>
      {matchStart && (
        <div className="notification match-start">{matchStart}</div>
      )}
      {liveEvent && <div className="notification live-event">{liveEvent}</div>}
      <div></div>
    </div>
  );
}
