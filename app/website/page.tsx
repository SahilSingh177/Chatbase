"use client";
import React from "react";

const website = () => {
  return (
    <div className="max-w-2xl lg:w-4/6 m-auto" style={{ width: "92%" }}>
      <div className="mb-10 rounded border border-zinc-200">
        <div className="border-b border-zinc-200 bg-white px-5 py-4">
          <h3 className="text-xl font-semibold leading-6 text-zinc-900">
            Website
          </h3>
        </div>
        <div className="p-5">
          <div>
            <label className="my-2 block text-sm font-medium leading-6 text-zinc-900">
              Crawl
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="flex flex-col gap-2 lg:flex-row ">
                <input
                  type="text"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                  name="website"
                  placeholder="https://www.example.com"
                  value=""
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2">
                  Fetch links
                </button>
              </div>
              <div className="py-4 text-sm text-zinc-600">
                This will crawl all the links starting with the URL (not
                including files on the website).
              </div>
            </div>
          </div>
          <div className="my-4 flex items-center">
            <hr className="w-full border-t border-zinc-300" />
            <span className="whitespace-nowrap px-2 text-zinc-600">OR</span>
            <hr className="w-full border-t border-zinc-300" />
          </div>
          <div>
            <label
              htmlFor="sitemap"
              className="my-2 block text-sm font-medium leading-6 text-zinc-900"
            >
              Submit Sitemap
            </label>
            <div className="relative mt-2 rounded-md ">
              <div className="flex flex-col gap-2 lg:flex-row">
                <input
                  type="text"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                  name="sitemap"
                  placeholder="https://www.example.com/sitemap.xml"
                  value=""
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2">
                  Load sitemap
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="my-4 flex items-center">
              <hr className="w-full border-t border-zinc-300" />
              <span className="whitespace-nowrap px-2 text-zinc-600">
                Included Links
              </span>
              <hr className="w-full border-t border-zinc-300" />
            </div>
            <div
              dir="ltr"
              className="relative overflow-hidden mt-5 h-[36rem]"
              style={{
                position: "relative",
              }}
            >
              <style>{`
                [data-radix-scroll-area-viewport] {
                  scrollbar-width: none;
                  -ms-overflow-style: none;
                  -webkit-overflow-scrolling: touch;
                }

                [data-radix-scroll-area-viewport]::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div
                data-radix-scroll-area-viewport
                className="h-full w-full rounded-[inherit]"
                style={{ overflow: "hidden scroll" }}
              >
                <div style={{ minWidth: "100%", display: "table" }}>
                  <div className="p-2"></div>
                </div>
              </div>
            </div>
            <div className="my-2 flex justify-end">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2 hover:bg-zinc-200"
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

export default website;
