import { collection, doc, getFirestore } from "firebase/firestore";
import { IPost } from "utils/types/IPost";
import { defaultConvertorChain } from "./convertors";
const firestore = getFirestore();

export const PostsColRef = () =>
  collection(firestore, `/posts`).withConverter(defaultConvertorChain<IPost>());

export const PostDocRef = (id: string) => doc(PostsColRef(), id);
