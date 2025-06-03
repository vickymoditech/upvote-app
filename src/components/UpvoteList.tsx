import React, { useContext } from "react";
import Upvote from "./Upvote";
import { UpvoteContext } from "../contexts/UpvoteContext";

type Props = {
  upvotesList: { id: string; state: boolean }[];
  listName: string;
};

// React memo is used to prevent unnecessary re-renders of the UpvoteList component
// props drilling is used to pass the upvotesList and listName to the UpvoteList component
const UpvoteList = React.memo(({ upvotesList, listName }: Props) => {
  const { toggleUpvote, addUpvote } = useContext(UpvoteContext);

  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <div
          style={{
            border: "2px solid #ccc",
            borderRadius: "4px",
            gap: "10px",
            display: "flex",
            width: "50%",
            overflowX: "auto",
            padding: "10px",
          }}
        >
          {upvotesList.map((upvote, index) => (
            <Upvote
              key={index}
              selected={upvote}
              onToggle={() => toggleUpvote(listName, upvote.id)}
            />
          ))}
        </div>
        <button
          onClick={() => addUpvote(listName)}
          style={{
            backgroundColor: "#ddd",
            padding: "10px 14px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
});

export default UpvoteList;
