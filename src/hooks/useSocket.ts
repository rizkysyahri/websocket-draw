"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState(null);
  const [matchStart, setMatchStart] = useState(null);
  const [liveEvent, setLiveEvent] = useState(null);

  useEffect(() => {
    const socketIo = io("http://localhost:5000");

    socketIo.on("matchStart", (data) => {
      setMatchStart(data.message);
      if (Notification.permission === "granted") {
        new Notification(data.message);
      }
    });

    socketIo.on("liveMatchEvent", (data) => {
      setLiveEvent(data.message);
      if (Notification.permission === "granted") {
        new Notification(data.message);
      }
    });

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return { matchStart, liveEvent };
};

export default useSocket;
