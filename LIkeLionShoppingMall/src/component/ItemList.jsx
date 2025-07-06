import { useState,useEffect } from 'react';
import { ItemCard } from "./ItemCard";

export const ItemList = ({ItemList}) => {
  const [selectedItem, setSelectedItem] = useState(null); // 어떤 아이템을 선택했는지

  return (
    <div className="p-10">
      <div className="grid ph:grid-cols-2 dt:grid-cols-4 gap-4 justify-items-center">
          { ItemList.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
    </div>
  );
};
