"use client";
import React from "react";

const qna = () => {
  return (
    <div className="max-w-2xl lg:w-4/6 m-auto" style={{ width: "92%" }}>
      <div className="mb-10 rounded border border-zinc-200">
        <div className="border-b border-zinc-200 bg-white px-5 py-4">
          <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
            Q&amp;A
          </h3>
        </div>
        <div className="p-5">
          <div className="">
            <div className="my-2 flex justify-end">
              <button
                className="justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-50 text-zinc-900 hover:bg-zinc-50/90 h-9 flex items-center rounded-md border border-transparent dark:bg-zinc-200 px-2 py-1 text-sm font-medium text-black shadow-sm dark:hover:bg-zinc-300"
                type="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default qna;
