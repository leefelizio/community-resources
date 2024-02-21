import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from '../configs/firebaseConfig'

export function Resources() {
  const [resources, setResources] = useState([])

  useEffect(() => {
    const resourceRef = collection(db, "Resources");
    const q = query(resourceRef, orderBy('createdAt', 'desc'))
    onSnapshot(q, snapshot => {
      const resourceSnapshots = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setResources(resourceSnapshots)
      console.log(resourceSnapshots)
    })
  }, [])

  return <>
    {
      resources.length === 0 ? (
        <div className="tw-p-4 tw-m-4">No Resources added </div>
      ) : (
        resources.map(
          ({
            // TO DO - Display all the fields bellow
            id,
            address,
            category,
            createdAt,
            description,
            email,
            imgUrl,
            openFromTime,
            openToTime,
            phone,
            title,
            link
          }) => <div key={id} className="border mt-3 p-3">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12">

                    {/* TO DO - Conditional if fields are not empty they display */}
                   {/* {title ? <h3>{title}</h3> : ''}  */}

                    <h3>{title}</h3>
                    <p className="tw-inline-block tw-bg-slate-400 tw-text-slate-800 tw-rounded tw-px-2 tw-mb-2">{category}</p>
                    <p className="tw-my-0"><strong>Location: </strong>Switzerland</p>
                    <p className="tw-my-0"><strong>Address: </strong>{address}</p>
                    <p className="tw-my-0"><strong>Open hours: </strong> Week days from {openFromTime} to {openToTime}</p>
                    <p className="tw-my-0"><strong>Link: </strong> <a href={link} title={`${title} link`} alt={`${title} link`}>{link}</a></p>
                    <p className="tw-my-0"><strong>Phone: </strong>{phone}</p>
                    <p className="tw-my-0"><strong>Email: </strong><a href={`mailto:${email}`} title={`${email} to ${title}`}>{email}</a></p>

                    <h6 className="tw-mt-4">{description}</h6>
                    <img
                      src={imgUrl}
                      alt={`${title} image`}
                      className="tw-my-4"
                      title={title}
                      style={{'width': '60px', 'maxHeight': '60px', 'height' : 'auto'}}
                    />
                    <i>Content created at {createdAt.toDate().toDateString()}</i>

                  </div>

                  {/* TO DO - Google Auth: delete option only appears if you are connected */}
                  {/* <div className="col-3 d-flex flex-row-reverse">
                    <DeleteResource id={id} image={image} />
                    <button className="btn btn.primary">X</button>
                  </div> */}
                  {/* END TO DO */}

                </div>
              </div>
            </div>
          </div>
        )
      )
    }
  </>
}