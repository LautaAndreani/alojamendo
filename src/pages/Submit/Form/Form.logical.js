import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
// import db from "../../../firebase/firebaseConfig";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const storage = getStorage(app);
const db = getFirestore(app);

export const HandleClick = () => {
  const [post, setPost] = useState([]);
  const [inputs, setInputs] = useState({});
  const [urlLink, setUrlLink] = useState([]);
  // let urlLink;

  //Upload poast firebase
  const firebaseAdd = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        inputs,
      });
    } catch (e) {
      console.error(e);
    }
  };

  //When the form is submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setPost([...post, { inputs }]);
    firebaseAdd();
  };
  //Upload images to Firebase
  const onFileChange = async (e) => {
    //Read file
    const file = e.target.files[0];
    //Upload
    const fileRef = ref(storage, `documents/${file.name}`);
    const upload = await uploadBytes(fileRef, file);
    //Get the url for download
    const urlLinkAwait = await getDownloadURL(fileRef);
    setUrlLink((prevUrlLink) => [...prevUrlLink, { urlLink: urlLinkAwait, imageData: upload.ref.name }]);
  };

  //Read and save inputs value on state

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      urlLink,
    });
  };

  return { handleSubmit, handleChange, onFileChange, firebaseAdd, urlLink, inputs };
};
