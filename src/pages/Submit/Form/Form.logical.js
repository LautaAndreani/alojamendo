import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
// import db from "../../../firebase/firebaseConfig";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const storage = getStorage(app);
const db = getFirestore(app);

export const HandleClick = () => {
  // const [post, setPost] = useState([]);
  const [toSubmit, setToSubmit] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [inputs, setInputs] = useState({});
  const [urlLink, setUrlLink] = useState([]);

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
    const validate = inputs.name === "" || inputs.address === "" || inputs.surname === "" || inputs.phone.length < 10 || inputs.title === "";
    e.preventDefault();
    // setPost([...post, { inputs }]);else
    if (validate) {
      return alert("Revisa todos los campos");
    }
    setToSubmit(true);
    setTimeout(() => {
      setToSubmit(false);
      setRedirect(true);
    }, 3000);
    firebaseAdd();
  };
  //Upload images to Firebase
  const onFileChange = async (e) => {
    if (urlLink.length < 3) {
      //Read file
      const file = e.target.files[0];
      //Upload
      const fileRef = ref(storage, `documents/${file.name}`);
      const upload = await uploadBytes(fileRef, file);
      //Get the url for download
      const urlLinkAwait = await getDownloadURL(fileRef);
      setUrlLink((prevUrlLink) => [...prevUrlLink, { urlLink: urlLinkAwait, imageData: upload.ref.name }]);
    } else {
      return alert("Solo puedes subir 3 imágenes");
    }
  };

  //Read and save inputs value on state

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      urlLink,
    });
  };

  return { handleSubmit, handleChange, onFileChange, firebaseAdd, urlLink, toSubmit, redirect };
};
