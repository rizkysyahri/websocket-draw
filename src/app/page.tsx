import * as React from "react";
export default function Home() {
  return (
    <main className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col gap-10 pr-10">
        <button className="p-2 rounded-md border border-black" type="button">
          Clear canvas
        </button>
      </div>
      <canvas
        className="border border-black rounded-md"
        width={750}
        height={450}
      />
    </main>
  );
}
