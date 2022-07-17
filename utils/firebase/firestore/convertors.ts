import firestore, { Timestamp } from "firebase/firestore";

export const timeStampToDateConvertor = <
  T
>(): firestore.FirestoreDataConverter<T> => ({
  toFirestore(modelObject) {
    Object.keys(modelObject).forEach((k) => {
      if (modelObject[k] instanceof Date) {
        modelObject[k] = Timestamp.fromDate(modelObject[k]);
      }
    });
    return modelObject;
  },
  fromFirestore(snapshot, options?) {
    const data = snapshot.data(options);
    Object.keys(data).forEach((k) => {
      if (data[k] instanceof Timestamp) {
        data[k] = (data[k] as Timestamp).toDate();
      }
    });
    return data as T;
  },
});
export const convertorChain = <T>(
  convertors: (() => firestore.FirestoreDataConverter<T>)[]
): firestore.FirestoreDataConverter<T> => {
  return {
    toFirestore: (modelObject) => {
      return convertors.reduce(
        (final, convertor) => (final = convertor().toFirestore(final)),
        modelObject
      );
    },
    fromFirestore: (snapshot, options) => {
      return convertors.reduce(
        (final, convertor) =>
          (final = convertor().fromFirestore(snapshot, options)),
        {} as T
      );
    },
  };
};

export const defaultConvertorChain = <T>() =>
  convertorChain<T>([timeStampToDateConvertor]);
