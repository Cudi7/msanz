"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl pt-32  sm:pt-48 lg:pt-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
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
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Get started
          </Link>
          <a
            href="mailto:monsanzc@gmail.com?subject=Más%20información"
            className="text-sm font-semibold leading-6 text-gray-900"
            aria-label="Send an email to get more information"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
