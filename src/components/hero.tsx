"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="hidden max-w-2xl sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Lorem ipsum dolor sit amet consectetur.{" "}
          <a href="#" className="font-semibold text-teal-600">
            <span aria-hidden="true" className="absolute inset-0" />
            Lorem. <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/mood"
            className="
            
             rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold leading-6 text-white hover:bg-teal-500
            "
          >
            Empezar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-1 inline size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <a
            href="mailto:monsanzc@gmail.com?subject=Más%20información"
            className="rounded-md bg-white/0 px-3.5 py-2.5 text-sm font-semibold leading-6 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
            aria-label="Send an email to get more information"
          >
            Escríbeme
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-1 inline size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
