import { ItemList } from "../component/ItemList"
import dogData from "../data/dogData.json"
import '../index.css'

export const Main = () => {
  return <main>
    <ItemList ItemList ={dogData} />
  </main>;
};