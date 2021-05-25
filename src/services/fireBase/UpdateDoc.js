import { ref } from "vue";
import { projectFirestore } from "./config";

const  UpdateDoc = (collection, id) => {
  let error = ref(null);
  let isPending = ref(false);
  let docRef = projectFirestore.collection(collection).doc(id);

  const UpdateDocHandle = async (newDocUpdate) => {
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.update(newDocUpdate)
      isPending.value = false
      return res
    }
    catch(err) {
     // console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }

  return { UpdateDocHandle, error, isPending };
};

export default  UpdateDoc;
