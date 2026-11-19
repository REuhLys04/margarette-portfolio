type ArrowProps = {
  diagonal?: boolean;
};

export function Arrow({ diagonal = false }: ArrowProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${diagonal ? "-rotate-45" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}
