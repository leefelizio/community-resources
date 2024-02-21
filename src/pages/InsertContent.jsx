import { AddResource } from "../components/AddResource";
import { Resources } from "../components/Resources";

export function InsertContent() {
  return <div className="tw-container">
    <div className="tw-flex tw-flex-col">
      <div>
        <AddResource />
      </div>
      <div>
        <Resources />
      </div>
    </div>
  </div>
}

