const BackgroundOverlay = () => {
  return (
    <div className="min-h-screen w-full dark:bg-neutral-900 bg-zinc-200/60 opacity-100 fixed size-full">
      <div
        className="fixed size-full inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229, 231, 235, 0.0) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229, 231, 235, 0.0) 1px, transparent 1px),
        radial-gradient(circle 700px at 20% 100%, rgba(255, 54, 54, 0), transparent),
        radial-gradient(circle 700px at 80% 10%, rgba(125, 125, 125, 0), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
    </div>
  );
};

export default BackgroundOverlay;
