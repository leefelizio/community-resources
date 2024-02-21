import { Resources } from "../components/Resources";
import { Search } from "../components/Search";

export function Home() {
    return <>
        <div>
            <Search />
        </div>
        <div>
            <Resources />
        </div>
    </>
}