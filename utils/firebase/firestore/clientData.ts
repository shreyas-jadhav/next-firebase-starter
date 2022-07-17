import { getDoc } from "firebase/firestore";
import { PostDocRef } from "./clientReferences";

export const getPost = (id: string) =>
  getDoc(PostDocRef(id)).then((s) => s.data());
