import { useState,useEffect } from 'react';
import { ItemCard } from "./ItemCard";
import {Modal} from "./Modal"

export const ItemList = ({ItemList}) => {
  const [selectedItem, setSelectedItem] = useState(null); // 어떤 아이템을 선택했는지
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창이 열려있는지

  // 모달 창을 여는 함수
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // 모달 창을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // isModalOpen가 바뀔시 즉, 모달 변경 시 실행
  // 스크롤 안되게
  useEffect(() => { 
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 스크롤을 막음
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 스크롤을 다시 가능
    }

    return () => {
      document.body.style.overflow = 'auto'; // 언마운트 -> 스크롤 다시 가능, 이게 없으면 다른 페이지로 이동했을 때 스크롤이 안될수도
    };
  }, [isModalOpen]);

  return (
    <div className="p-10">
      <div className="grid ph:grid-cols-2 dt:grid-cols-4 gap-4 justify-items-center">
          { ItemList.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onClick={() => openModal(item)}
            />
          ))}
        </div>
        
        {isModalOpen && ( // 모달
          <Modal item={selectedItem} onClose={closeModal} /> 
        )}
    </div>
  );
};
