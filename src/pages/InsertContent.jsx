import { Timestamp, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "../configs/firebaseConfig";

export function InsertContent() {
  const [formData, setFormData] = useState(createEmptyFieldsValue());

  const [progress, setProgress] = useState(0);

  // V2 - TO DO - get tags (it overloaded Firebase in the middle of the day)
  // const [stateCategories, setCategories] = useState({});
  // useEffect(() => {
  //   const documentRef = doc(db, 'ResourcesCategories', 'categories')
  //   getDoc(documentRef).then(d => setCategories(d.data()['categories']))
  // }, [])

  const handleChange = (e) => {
    setFormData((ov) => ({ ...ov, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setFormData((ov) => ({ ...ov, image: e.target.files[0] }));
  };

  const handlePublish = (e) => {
    if (checkInputFields(formData)) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now}_${formData.image.name}`,
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData(createEmptyFieldsValue());

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const resourceRef = collection(db, "Resources");
          const newDocObject = {
            address: formData.address,
            createdAt: Timestamp.now().toDate(),
            // V2 - TO DO - insert tag on InsertContent
            //tags: formData.tags,
            city: formData.city,
            description: formData.description,
            email: formData.email,
            imgUrl: url,
            openFromTime: formData.openFromTime,
            openToTime: formData.openToTime,
            phone: formData.phone,
            title: formData.title,
            link: formData.link,
            googleMaps: formData.googleMaps,
          };
          addDoc(resourceRef, newDocObject)
            .then(() => {
              setProgress(0);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
    );
  };

  return (
    <div className="bg-grad-orange-washed tw-min-h-screen tw-text-gray-900 tw-font-bold">
      <div className="page-container">
        <h2 className="page-title">Insert resource</h2>
        <div className="insert-content-ctn">
          <div className="insert-content--form-group">
            {/* title */}
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="input--text-textarea"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />

            {/* V2 - TO DO : Insert tag on DB - select controled by react - value onchange will put my value on DB */}
            {/* <label htmlFor="resources-categories" className="tw-mr-4">Category</label>
              <select 
                name="resources-categories"
                id="resources-categories"
                className="tw-capitalize input--text-textarea"
              >
              {Object.keys(stateCategories).map((category, index) => {
                  const subCategories = stateCategories[category]
                  // V2 - TO DO - check if cat has subcat - if(category)
                  return <option key={index} value={category}> {category} </option>
                })}
              </select> */}

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="input--text-textarea"
              value={formData.address}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="input--text-textarea"
              value={formData.city}
              onChange={(e) => handleChange(e)}
            />

            <div className="tw-flex tw-flex-row">
              <div className="tw-w-2/4 tw-mr-4">
                <label htmlFor="openFromTime">Open from</label>
                <input
                  type="text"
                  name="openFromTime"
                  className="input--text-textarea"
                  value={formData.openFromTime}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="tw-w-2/4 tw-ml-4">
                <label htmlFor="openToTime">Open until</label>
                <input
                  type="text"
                  name="openToTime"
                  className="input--text-textarea"
                  value={formData.openToTime}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <label htmlFor="city">Google Maps URL</label>
            <input
              type="text"
              name="googleMaps"
              className="input--text-textarea"
              value={formData.googleMaps}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="insert-content--form-group">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              className="input--text-textarea"
              value={formData.link}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              className="input--text-textarea"
              value={formData.phone}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="input--text-textarea"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="input--text-textarea"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="input--text-textarea"
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
              className="tw-w-1/5 tw-bg-teal-600 tw-py-2 tw-px-4 tw-ml-3 tw-mt-6 tw-float-right tw-rounded"
              onClick={handlePublish}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const createEmptyFieldsValue = (_) => ({
  address: "",
  // V2 - TO DO - handle select (onchange/value)
  // and add tags field value here and on checkInputFields
  // tags: "",
  createdAt: Timestamp.now().toDate(),
  city: "",
  description: "",
  email: "",
  image: "",
  openFromTime: "",
  openToTime: "",
  phone: "",
  title: "",
  link: "",
  googleMaps: "",
});

const checkInputFields = (fd) =>
  !fd.address ||
  // !formData.category ||
  !fd.createdAt ||
  !fd.city ||
  !fd.description ||
  !fd.email ||
  !fd.image ||
  !fd.openFromTime ||
  !fd.openToTime ||
  !fd.phone ||
  !fd.title ||
  !fd.link ||
  !fd.googleMaps;
