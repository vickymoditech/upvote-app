import React from "react";

type Props = {
  selected: {
    id: string;
    state: boolean;
  };
  onToggle: () => void;
};

// Upvote component that toggles its state and appearance based on the selected prop
const Upvote = ({ selected, onToggle }: Props) => {
  const { state } = selected;
  return (
    <button
      onClick={onToggle}
      style={{
        backgroundColor: state ? "#E5E8FD" : "#F4F6F8",
        border: "none",
        borderRadius: "4px",
        padding: "10px",
        cursor: "pointer",
      }}
      aria-pressed={state}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 4L6 12H18L12 4Z" fill={state ? "#253CF2" : "#343A40"} />
      </svg>
    </button>
  );
};

export default Upvote;
