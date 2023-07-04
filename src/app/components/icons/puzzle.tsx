// src/app/components/icons/puzzle.tsx

export default function PuzzleIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.381 10.4762H17.8095V6.28571C17.8095 5.12811 16.8719 4.19046 15.7143 4.19046H11.5238V2.61903C11.5238 1.17332 10.3505 0 8.90475 0C7.45903 0 6.28571 1.17332 6.28571 2.61903V4.19046H2.09525C0.937652 4.19046 0.0105089 5.12806 0.0105089 6.28571L0.00525446 10.2667H1.57143C3.1324 10.2667 4.4 11.5343 4.4 13.0953C4.4 14.6562 3.1324 15.9238 1.57143 15.9238H0.00525446L0 19.9047C0 21.0624 0.937603 22 2.09525 22H6.07622V20.4286C6.07622 18.8676 7.34383 17.6 8.90479 17.6C10.4658 17.6 11.7334 18.8676 11.7334 20.4286V22H15.7143C16.8719 22 17.8095 21.0624 17.8095 19.9047V15.7143H19.381C20.8267 15.7143 22 14.541 22 13.0953C22 11.6495 20.8267 10.4762 19.381 10.4762Z"
        fill="white"
      />
    </svg>
  );
}