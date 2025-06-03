import React, { createContext, useEffect, useState } from "react";
import UpvoteList from "../components/UpvoteList";
import { loadState, saveState } from "../utils";

const defaultUpvotes = {
  list1: [
    { id: crypto.randomUUID(), state: true },
    { id: crypto.randomUUID(), state: false },
    { id: crypto.randomUUID(), state: false },
  ],
  list2: [
    { id: crypto.randomUUID(), state: false },
    { id: crypto.randomUUID(), state: true },
    { id: crypto.randomUUID(), state: false },
  ],
  list3: [
    { id: crypto.randomUUID(), state: false },
    { id: crypto.randomUUID(), state: false },
    { id: crypto.randomUUID(), state: true },
  ],
};

type UpvoteType = {
  [key: string]: {
    id: string;
    state: boolean;
  }[];
};

type UpvoteContextType = {
  toggleUpvote: (listName: string, id: string) => void;
  addUpvote: (listName: string) => void;
};

// creates and exports a context for upvotes
export const UpvoteContext = createContext<UpvoteContextType>({
  toggleUpvote: () => {},
  addUpvote: () => {},
});

const UpvoteProvider = () => {
  const [upvotes, setUpvotes] = useState<UpvoteType>(
    loadState() || defaultUpvotes
  );

  useEffect(() => {
    saveState(upvotes);
  }, [upvotes]);

  const addUpvote = (listName: string) => {
    setUpvotes((prevUpvotes) => {
      return {
        ...prevUpvotes,
        [listName]: [
          ...prevUpvotes[listName],
          { id: crypto.randomUUID(), state: false },
        ],
      };
    });
  };

  const toggleUpvote = (listName: string, id: string) => {
    setUpvotes((prevUpvotes) => {
      return {
        ...prevUpvotes,
        [listName]: prevUpvotes[listName].map((upvote) =>
          upvote.id === id ? { ...upvote, state: !upvote.state } : upvote
        ),
      };
    });
  };

  return (
    // Context Provider is used to pass down the toggleUpvote and addUpvote functions
    <UpvoteContext.Provider value={{ toggleUpvote, addUpvote }}>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        {/* // Render each UpvoteList component for the different upvote lists */}
        {Object.entries(upvotes).map(([key, upvotesList]) => (
          <UpvoteList key={key} upvotesList={upvotesList} listName={key} />
        ))}
      </div>
    </UpvoteContext.Provider>
  );
};

export default UpvoteProvider;
