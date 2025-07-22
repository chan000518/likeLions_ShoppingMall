import { ItemCard } from './ItemCard';

export const ItemList = ({ ItemList=[], setShowModal, setLoginModal }) => {

  return (
    <div className="px-10 pt-5">
      <div className="grid ph:grid-cols-2 dt:grid-cols-4 gap-4 justify-items-center">
        {ItemList?.map((item, index) => (
          <ItemCard key={item.id || index} item={item} setShowModal={setShowModal} setLoginModal={setLoginModal}/>
        ))}
      </div>
    </div>
  );
};

export default ItemList;