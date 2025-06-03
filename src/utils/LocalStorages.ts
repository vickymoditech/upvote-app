const STORAGE_KEY = "upvote_state";

export const saveState = (state: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadState = (): any | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored
    ? JSON.parse(stored)
    : {
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
};
