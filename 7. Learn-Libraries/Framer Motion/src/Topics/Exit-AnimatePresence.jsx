// 1. Core React and Framer Motion Imports
import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  Icon360View,
  IconMessage,
  IconSearch,
  IconSphere,
  IconX,
} from "@tabler/icons-react";

export const ExitAnimatePresence = () => {
  // State to control the visibility of the card for exit animations
  const [open, setOpen] = useState(true);

  const cardShadow = "shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]";

  return (
    // AnimatePresence is crucial for Exit Animations to work.
    // It must directly wrap the conditionally rendered component.
    <AnimatePresence>
      {/* Conditionally render the card based on the 'open' state */}
      {open && (
        // Main Card Component wrapped in motion.div for animations
        <motion.div
          // Initial animation state when the component mounts [5]
          initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          // Animation state for when the component is present [5]
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          // Exit animation state when the component unmounts
          exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          // Using spring for a more "bouncy" feel as explored in the video.
          transition={{ type: "spring", damping: 15 }}
          className={`relative flex h-[28rem] w-72 flex-col rounded-xl bg-white p-4 ${cardShadow}`}
        >
          <h2 className="text-[10px] font-bold">Eternity UI Components</h2>
          <p className="mt-2 text-[10px] text-neutral-400">
            A collection of beautiful UI components
          </p>
          <div className="mt-4 flex items-center gap-1">
            <div className="flex flex-1 items-center gap-1 text-[10px]">
              <span className="font-bold">Eternity</span>
            </div>
            {/* Close Button: On click, sets 'open' to false to trigger exit animation */}
            <button
              onClick={() => setOpen(false)}
              className={`rounded-md px-2 py-1 ${cardShadow}`}
            >
              <IconX className="h-3 w-3 text-neutral-400" />
            </button>
          </div>
          {/* Hoverable Content Area */}
          <div className="relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-100">
            {/* Inner div for hover effect, wrapped in motion.div */}
            <motion.div
              // Initial state (hidden)
              initial={{ opacity: 0, filter: "blur(10px)" }}
              // State when hovered over
              whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
              // Transition for the hover effect
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 flex h-full w-full flex-col justify-between divide-y divide-neutral-200 rounded-lg bg-white p-4"
            >
              <div className="flex items-center gap-2 py-2">
                <IconMessage className="h-4 w-4" />
                <div className="text-sm">
                  <p className="font-semibold">Universal Access</p>
                  <p className="text-neutral-400">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-2 py-2">
                <IconSearch className="h-4 w-4" />
                <div className="text-sm">
                  <p className="font-semibold">24 Hours Turnaround</p>
                  <p className="text-neutral-400">
                    Super fast delivery at warp speed
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 py-2">
                <Icon360View className="h-4 w-4" />
                <div className="text-sm">
                  <p className="font-semibold">360 Days All Around</p>
                  <p className="text-neutral-400">
                    We're here to help you 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 py-2">
                <IconSphere className="h-4 w-4" />
                <div className="text-sm">
                  <p className="font-semibold">Global Reach</p>
                  <p className="text-neutral-400">
                    Your CTA (not really required)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
