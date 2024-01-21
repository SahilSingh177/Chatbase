"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "./components/Navbar";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Chatbase | demo",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="my-8 ">
          <div className="my-8">
            <h1 className="mb-2 text-center text-3xl font-bold">
              Data Sources
            </h1>
            <p className="  text-center text-zinc-500">
              Add your data sources to train your chatbot
            </p>
          </div>
          <div>
            <div className="max-w-7xl px-4 lg:mx-auto">
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: "0.15fr 0.6fr 0.26fr",
                }}
              >
                {/* grid-col-1 */}
                <div className="max-w-xl lg:w-4/6" style={{ width: "100%" }}>
                  <div>
                    <div className="md:hidden">
                      <nav className="" data-headlessui-state="">
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                          <div className="relative flex h-6 items-center justify-end sm:hidden">
                            <div className="left-100 absolute inset-y-0 flex items-center sm:hidden">
                              <button
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                id="headlessui-disclosure-button-:Rall6:"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="block h-6 w-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="hidden grow flex-col gap-y-5 overflow-y-auto border-gray-200  bg-white sm:flex ">
                      <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col">
                          <li>
                            <ul role="list" className="space-y-1">
                              <li>
                                <button
                                  className={`group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold  leading-6  ${
                                    path === "/files"
                                      ? "bg-gray-50 text-violet-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-violet-600"
                                  }`}
                                  onClick={() => router.push("/files")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className={`h-6 w-6 shrink-0 ${
                                      path === "/files"
                                        ? "text-violet-600 text-violet-600"
                                        : "text-gray-400 group-hover:text-violet-600"
                                    }`}
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    ></path>
                                  </svg>
                                  Files
                                </button>
                              </li>
                              <li>
                                <button
                                  className={`group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold  leading-6 ${
                                    path === "/text"
                                      ? "bg-gray-50 text-violet-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-violet-600"
                                  }`}
                                  onClick={() => router.push("/text")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className={`h-6 w-6 shrink-0  ${
                                      path === "/text"
                                        ? "text-violet-600 fill-violet-600"
                                        : "text-gray-400 group-hover:text-violet-600"
                                    }`}
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                                    ></path>
                                  </svg>
                                  Text
                                </button>
                              </li>
                              <li>
                                <button
                                  className={`group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold  leading-6 ${
                                    path === "/website"
                                      ? "bg-gray-50 text-violet-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-violet-600"
                                  }`}
                                  onClick={() => router.push("/website")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className={`h-6 w-6 shrink-0 ${
                                      path === "/website"
                                        ? "text-violet-600 text-violet-600"
                                        : "text-gray-400 group-hover:text-violet-600"
                                    }`}
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                    ></path>
                                  </svg>
                                  Website
                                </button>
                              </li>
                              <li>
                                <button
                                  className={`group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold  leading-6 ${
                                    path === "/qna"
                                      ? "bg-gray-50 text-violet-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-violet-600"
                                  }`}
                                  onClick={() => router.push("/qna")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className={`h-6 w-6 shrink-0 ${
                                      path === "/qna"
                                        ? "text-violet-600 text-violet-600"
                                        : "text-gray-400 group-hover:text-violet-600"
                                    }`}
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                    ></path>
                                  </svg>
                                  Q&amp;A
                                </button>
                              </li>
                              <li>
                                <button
                                  className={`group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold  leading-6 ${
                                    path === "/notion" || path === "/"
                                      ? "bg-gray-50 text-violet-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-violet-600"
                                  }`}
                                  onClick={() => router.push("/notion")}
                                >
                                  <svg
                                    viewBox="13.38 3.2 485.44 505.7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={` h-6 w-6 shrink-0 ${
                                      path === "/notion" || path === "/"
                                        ? "fill-violet-600 text-violet-600"
                                        : "fill-gray-400 group-hover:fill-violet-600"
                                    }`}
                                    fill="white"
                                  >
                                    <path d="m186.84 13.95c-79.06 5.85-146.27 11.23-149.43 11.86-8.86 1.58-16.92 7.59-20.71 15.5l-3.32 6.96.32 165.88.47 165.88 5.06 10.28c2.85 5.69 22.14 32.26 43.17 59.61 41.59 53.92 44.59 56.93 60.4 58.51 4.59.47 39.06-1.11 76.38-3.32 37.48-2.37 97.56-6.01 133.62-8.06 154.01-9.35 146.1-8.56 154.95-16.15 11.07-9.17 10.28 5.85 10.75-195.76.32-170.94.16-182.16-2.37-187.38-3-5.85-8.38-9.96-78.59-59.3-46.96-32.89-50.28-34.63-71.32-34.95-8.69-.31-80.48 4.43-159.38 10.44zm177.73 21.66c6.64 3 55.19 36.84 62.3 43.33 1.9 1.9 2.53 3.48 1.58 4.43-2.21 1.9-302.66 19.77-311.35 18.5-3.95-.63-9.8-3-13.12-5.22-13.76-9.33-47.91-37.32-47.91-39.37 0-5.38-1.11-5.38 132.83-15.02 25.62-1.74 67.68-4.9 93.3-6.96 55.49-4.43 72.1-4.27 82.37.31zm95.51 86.5c2.21 2.21 4.11 6.48 4.74 10.59.47 3.8.79 74.64.47 157.18-.47 141.68-.63 150.54-3.32 154.65-1.58 2.53-4.74 5.22-7.12 6.01-6.63 2.69-321.46 20.56-327.94 18.66-3-.79-7.12-3.32-9.33-5.53l-3.8-4.11-.47-152.75c-.32-107.21 0-154.65 1.27-158.92.95-3.16 3.32-6.96 5.38-8.22 2.85-1.9 21.51-3.48 85.71-7.27 45.07-2.53 114.8-6.8 154.81-9.17 95.17-5.86 94.86-5.86 99.6-1.12z"></path>
                                    <path d="m375.48 174.45c-17.08 1.11-32.26 2.69-34 3.64-5.22 2.69-8.38 7.12-9.01 12.18-.47 5.22 1.11 5.85 18.18 7.91l7.43.95v67.52c0 40.16-.63 66.73-1.42 65.94-.79-.95-23.24-35.1-49.97-75.9-26.72-40.95-48.86-74.64-49.18-74.95-.32-.32-17.71.63-38.58 2.06-25.62 1.74-39.69 3.32-42.54 4.9-4.59 2.37-9.65 10.75-9.65 16.29 0 3.32 6.01 5.06 18.66 5.06h6.64v194.18l-10.75 3.32c-8.38 2.53-11.23 4.11-12.65 7.27-2.53 5.38-2.37 10.28.16 10.28.95 0 18.82-1.11 39.37-2.37 40.64-2.37 45.22-3.48 49.49-11.86 1.27-2.53 2.37-5.22 2.37-6.01 0-.63-5.53-2.53-12.18-4.11-6.8-1.58-13.6-3.16-15.02-3.48-2.69-.79-2.85-5.69-2.85-73.69v-72.9l48.07 75.43c50.44 79.06 56.77 88.08 64.52 92.03 9.65 5.06 34.16 1.58 46.49-6.48l3.8-2.37.32-107.84.47-108 8.38-1.58c9.96-1.9 14.55-6.48 14.55-14.39 0-5.06-.32-5.38-5.06-5.22-2.83.13-19.12 1.08-36.04 2.19z"></path>
                                  </svg>
                                  Notion
                                </button>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {children}
                {/* grid-col-2 */}
                <div className="">
                  <div className="flex flex-col align-top lg:flex-row lg:space-x-8 lg:align-middle">
                    <div className="m-auto w-full lg:my-0">
                      <div className="  rounded border p-4">
                        <div className="text-center font-semibold lg:mb-2">
                          Sources
                        </div>
                        <div className="mb-4 flex flex-col space-y-2"></div>
                        <p className="flex flex-col text-sm">
                          <span className="font-semibold">
                            Total detected characters{" "}
                          </span>
                          <span className="flex justify-center">
                            <span className="font-bold">0</span>{" "}
                            <span className=" text-zinc-500">
                              /400,000 limit
                            </span>
                          </span>
                        </p>
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-900 dark:text-zinc-50 shadow dark:hover:bg-zinc-800/90 bg-zinc-900 text-zinc-50 hover:bg-zinc-800/90 h-9 px-4 py-2 mt-4 w-full"
                          type="submit"
                        >
                          Create Chatbot
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
