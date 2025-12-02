function DiagonalStripesPattern() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden text-neutral-900/5">
      <div className="absolute inset-0 z-0 h-full w-full bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]"></div>
    </div>
  );
}

export default DiagonalStripesPattern;
