import { ref } from "vue";
import { projectFirestore } from "./config.js";

// declare the connection & refs inside the function
// because the collection state is not global (like a user)
// different collections may be used at once this way

const AddDoc = (collection) => {
  const error = ref(null);
  const isPending = ref(false);

  const AddDocHandle = async (doc) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      isPending.value = false;
      return res;
    } catch (err) {
     
      error.value = err.message;
      isPending.value = false;
    }
  };

  return { AddDocHandle, error , isPending };
};

export default AddDoc;
