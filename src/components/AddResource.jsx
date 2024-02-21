import { Timestamp, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "../configs/firebaseConfig";

export function AddResource() {
  const [formData, setFormData] = useState(createEmptyFieldsValue());

  const [progress, setProgress] = useState(0);

  const [stateCategories, setCategories] = useState({})

  useEffect(() => {
    const documentRef = doc(db, 'ResourcesCategories', 'categories')
    getDoc(documentRef).then(d => setCategories(d.data()['categories']))
  }, [])

  const handleChange = e => {
    setFormData(ov => ({...ov, [e.target.name]: e.target.value}))
  }

  const handleImageChange = e => {
    setFormData(ov => ({...ov, image: e.target.files[0]}))
  }

  const handlePublish = e => {
    if ( checkInputFields(formData) ) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now}_${formData.image.name}`)
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData(createEmptyFieldsValue());
        
        getDownloadURL(uploadImage.snapshot.ref)
        .then((url) => {
          const resourceRef = collection(db, "Resources");
          const newDocObject = {
            address: formData.address,
            createdAt: Timestamp.now().toDate(),
            description: formData.description,
            email: formData.email,
            imgUrl: url,
            openFromTime: formData.openFromTime,
            openToTime: formData.openToTime,
            phone: formData.phone,
            title: formData.title,
            link: formData.link,
          }
          addDoc(resourceRef, newDocObject)
            .then(() => {
              setProgress(0);
            })
            .catch((err) => {
              console.log(err)
            });
        });
      }
    );
  }

  return <div className="tw-border tw-border-sky-500 tw-p-4 tw-m-4 tw-rounded">
      <h2>Create resource</h2>
      {/* title */}
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* TO DO : Insert cat on DB
          select controled by react -- 
          value onchange will put my value on DB */}
      {/* category */}
      <div className="tw-my-5">
        <label htmlFor="resources-categories" className="tw-mr-4">Category</label>
        <select 
          name="resources-categories"
          id="resources-categories"
          className="tw-capitalize
          tw-block tw-w-full
          tw-bg-gray-700
          tw-border tw-border-gray-600
          tw-placeholder-gray-400
          tw-text-sm tw-text-white 
          tw-rounded-lg
          tw-p-2
          focus:tw-ring-blue-500 focus:tw-border-blue-500"
        >
        {
          Object.keys(stateCategories).map((category, index) => {
            const subCategories = stateCategories[category]
            // TO DO - check if cat has subcat - if(category)
            return <option key={index} value={category}> {category} </option>
          })
        }
        </select>
        </div> 

        {/* address */}
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
          value={formData.address}
          onChange={(e) => handleChange(e)}
        />

        <div className="tw-flex tw-flex-row tw-justify-between">
        {/* open hours */}

        {/* open from */}
        <div>
          <label htmlFor="openFromTime">Open from</label>
          <input
            type="text"
            name="openFromTime"
            className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
            value={formData.openFromTime}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* open until */}
        <div>
          <label htmlFor="openToTime">Open until</label>
          <input
            type="text"
            name="openToTime"
            className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
            value={formData.openToTime}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      {/* URL */}
      <label htmlFor="link">Link</label>
      <input
        type="text"
        name="link"
        className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
        value={formData.link}
        onChange={(e) => handleChange(e)}
      />

      {/* phone */}
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
        value={formData.phone}
        onChange={(e) => handleChange(e)}
      />

      {/* email */}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
        value={formData.email}
        onChange={(e) => handleChange(e)}
      />


      {/* description */}
      <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="tw-bg-slate-300 tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-my-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600"
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />
     

      {/* image */}
      <label htmlFor="">Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className="form-control"
        onChange={(e) => handleImageChange(e)}
      />

      {progress === 0 ? null : (
        <div className="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-1.5 tw-mb-4 tw-dark:bg-gray-700">
          <div
            className="tw-bg-blue-600 tw-h-1.5 tw-rounded-full tw-dark:bg-blue-500"
            style={{ width: `${progress}%` }}
          >
            {`uploading image ${progress}%`}
          </div>
        </div>
      )}
      <button
        className="tw-rounded-md tw-bg-indigo-600 tw-px-4 tw-py-2 tw-mt-2 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 tw-focus-visible:outline tw-focus-visible:outline-2 tw-focus-visible:outline-offset-2 tw-focus-visible:outline-indigo-600"
        onClick={handlePublish}
      >
        Publish
      </button>
  </div>
}

const createEmptyFieldsValue = _ => ({
  address: "",
  // TO DO - handle select (onchange/value) 
  // AND add category field value here and on checkInputFields
  // category: "",
  // TO DO - add field "city"
  createdAt: Timestamp.now().toDate(),
  description: "",
  email: "",
  image: "",
  openFromTime: "",
  openToTime: "",
  phone: "",
  title: "",
  link: ""
})

const checkInputFields = fd => !fd.address ||
// !formData.category ||
!fd.createdAt ||
!fd.description ||
!fd.email ||
!fd.image ||
!fd.openFromTime ||
!fd.openToTime ||
!fd.phone ||
!fd.title ||
!fd.link