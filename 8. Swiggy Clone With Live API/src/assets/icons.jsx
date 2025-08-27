export const hrLine = (
  <div className="relative z-15 container mx-auto mt-3 mb-9 max-w-full">
    <i className="block h-[1px] w-full bg-neutral-500 opacity-30" />
  </div>
);

export const vegIcon = (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="15"
      ry="15"
      fill="none"
      stroke="#008060"
      strokeWidth="10"
    />
    <circle cx="50" cy="50" r="25" fill="#008060" />
  </svg>
);

export const nonVegIcon = (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="15"
      ry="15"
      fill="none"
      stroke="#d9534f"
      strokeWidth="10"
    />
    <polygon points="50,25 25,75 75,75" fill="#d9534f" />
  </svg>
);
