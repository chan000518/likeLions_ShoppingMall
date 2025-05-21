import { ItemList } from "../component/ItemList"
import dogData from "../data/dogData.json"

export const Main = () => {
  return <main>
    <ItemList ItemList ={dogData} />
  </main>;
};