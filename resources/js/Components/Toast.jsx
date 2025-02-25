import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, X } from "lucide-react";

export default function Toast({ show, closeToast, message, className }) {
  className = className ? className : "bg-white/[96%] backdrop-blur-md";
  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 animate-toast z-50"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-5"
            enterTo="translate-y-0   opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg  ring-1 ring-black ring-opacity-5 text-gray-600 ${className}`}
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="text-emerald-500 translate-y-0.5" />
                  </div>
                  <div className="ml-2 w-0 flex-1 ">
                    <p className="text-sm font-medium">{message}</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md   hover:text-gray-800 text-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1"
                      onClick={closeToast}
                    >
                      <span className="sr-only">Close</span>
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
