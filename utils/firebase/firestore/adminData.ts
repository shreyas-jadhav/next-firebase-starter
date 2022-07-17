// Note: Do not use these references for client!

import { postDocRef } from "./adminReferences";

// Only use in getStaticProps / getStaticPaths / etc.
export const getPost = async (id: string) => {
  const doc = await postDocRef(id).get();
  // do parsing etc.
  return doc.data();
};
