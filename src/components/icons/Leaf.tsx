export default function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 4c-9 0-16 5-16 14 9 0 14-5 16-14Z" />
      <path d="M5 18c3-4 6-7 14-13" />
    </svg>
  );
}
