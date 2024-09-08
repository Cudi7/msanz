"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Quiénes somos", href: "https://montsesanz.com/quienes-somos/" },
  { name: "Proyectos", href: "https://montsesanz.com/proyectos/" },
  { name: "Servicios", href: "https://montsesanz.com/servicios/" },
  { name: "Mood Boards", href: "https://montsesanz.com/mood-boards/" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 max-w-20 p-1.5 sm:max-w-20">
            <span className="sr-only">
              Montse Sanz, Disseny d&apos;interiors
            </span>
            <Image
              alt="Montse Sanz, Disseny d'interiors"
              src="https://montsesanz.com/wp-content/uploads/2024/06/montse-sanz-icono-01-sin-fondo.png"
              height="80"
              width="80"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className=" hidden lg:flex  lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 hover:text-teal-500 "
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            className="scale-[.80]"
            href="https://buymeacoffee.com/montsesanz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="buy me a coffee img"
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=montsesanz&button_colour=14b8a6&font_colour=ffffff&font_family=Poppins&outline_colour=065f46&coffee_colour=1e40af"
            />
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 max-w-20 p-1.5 sm:max-w-20">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Montse Sanz, Disseny d'interiors"
                src="https://montsesanz.com/wp-content/uploads/2024/06/montse-sanz-icono-01-sin-fondo.png"
                height="80"
                width="80"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root  pt-6">
            <div className="-my-6 ">
              <div className="mb-6 space-y-2 border-b border-slate-200 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  className="scale-[.75]"
                  href="https://buymeacoffee.com/montsesanz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="buy me a coffee img"
                    src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=montsesanz&button_colour=14b8a6&font_colour=ffffff&font_family=Poppins&outline_colour=065f46&coffee_colour=1e40af"
                  />
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
