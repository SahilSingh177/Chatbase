"use client";
import React from "react";

const text = () => {
  return (
    <div className="max-w-2xl lg:w-4/6 m-auto" style={{ width: "92%" }}>
      <div className="mb-10 rounded border border-zinc-200">
        <div className="border-b border-zinc-200 bg-white px-5 py-4">
          <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
            Text
          </h3>
        </div>
        <div className="p-5">
          <div className="w-full relative">
            <div
              className="pwa-container-wrapper"
              style={{ display: "flex", height: "0px" }}
            >
              <div
                className="pwa-container"
                style={{
                  overflow: "hidden",
                  position: "absolute",
                  boxSizing: "border-box",
                  pointerEvents: "none",
                  margin: "8px 0px",
                  padding: "4px 12px",
                  width: "626.85px",
                  height: "409.6px",
                  zIndex: 1,
                }}
              >
                <div
                  className="pwa"
                  style={{
                    position: "absolute",
                    top: "99999px",
                    left: "999999px",
                    width: "1px",
                    height: "1px",
                  }}
                />
              </div>
              <div
                className="pwa-container"
                style={{
                  overflow: "hidden",
                  position: "absolute",
                  boxSizing: "border-box",
                  pointerEvents: "none",
                  margin: "8px 0px",
                  padding: "4px 12px",
                  width: "626.85px",
                  height: "409.6px",
                  zIndex: 1,
                }}
              >
                <div className="pwa" />
              </div>
            </div>
            <div
              className="pwa-sync"
              style={{
                opacity: "0",
                position: "absolute",
                boxSizing: "border-box",
                pointerEvents: "none",
                whiteSpace: "pre-wrap",
                borderWidth: "0.8px",
                borderStyle: "solid",
                borderColor: "rgba(24, 24, 27, 0.1)",
                borderRadius: "6px",
                width: "626.85px",
                color: "rgb(24, 24, 27)",
                background:
                  "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
                display: "inline-block",
                fontSize: "14px",
                margin: "8px 0px",
                padding: "4px 12px",
                lineHeight: "20px",
                overflowWrap: "break-word",
                height: "409.6px",
                zIndex: 1,
                overflow: "hidden",
              }}
            />
            <textarea
              placeholder="data"
              name="data"
              rows={20}
              className="my-2 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
              spellCheck={false}
              style={{ position: "relative", zIndex: "auto" }}
            />
            <p className="h-8 text-center text-sm text-zinc-600"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default text;
