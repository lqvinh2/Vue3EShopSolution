import { ref } from "vue";
import { projectFirestore } from "./config";

const DeleteDoc = (collection, id) => {
  let error = ref(null);
  let isPending = ref(false);
  let docRef = projectFirestore.collection(collection).doc(id);

  const DeleteDocHandle = async () => {
    isPending.value = true;
    error.value = null;

    try {
      const res = await docRef.delete();
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      isPending.value = false;
      error.value = "could not delete the document";
    }
  };

  return { DeleteDocHandle, error, isPending};
};

export default DeleteDoc;
