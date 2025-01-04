import MenuSectionItem from "./MenuSectionItem";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";

const MenuSectionItems = ({sectionItems})=>{

    const[sectionItemsModal,setSectionItemsModal] = useState(sectionItems);

    const addItem=()=>{
        const newItem = {
            id:uuidv4(),
            imageUrl: 'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg',
            itemTitle: 'Enter Item Title',
            itemDescription: 'Enter Item Title',
            itemPrice: 0
        };
        setSectionItemsModal([...sectionItemsModal,newItem]);
        // updateSection(modal);

        // addMenuSectionItem(modal.id,newItem);

    }
    const deleteSectionItem = (id)=>{
        setSectionItemsModal((prevItems) => {
            return prevItems.filter(item => item.id !== id);

        });
    }
    const updateSection = (menuItemModal)=>{
        
        let m = sectionItemsModal;

        m.items.map((item,ind)=>(
            item.id == menuItemModal.id ? m.items.splice(ind, 1, menuItemModal) : null
        ));
        setSectionItemsModal(m);
        updateSection(sectionItemsModal);


        
    }

    return (
        <div className="flex overflow-x-auto space-x-4 p-4">
            <div className="h-full w-50px bg-blue-500 px-3  min-h-[350px] flex items-center font-extrabold text-2xl rounded-sm hover:cursor-pointer group relative" onClick={addItem}>
                +
                <div className="z-10 absolute left-0 ms-12 mt-2 opacity-0 scale-95 md:group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 bg-gray-200 p-4 rounded-md font-normal text-base " >
                    By clicking this button you'll add new product to this section.
                </div>
            </div>
            {/* {
            sectionItemsModal.map((item, ind)=>(
                <MenuSectionItem key={ind} item={item} updateSection={updateSection}
                deleteSectionItem={deleteSectionItem} addItem={addItem}/>
            ))
            } */}
            
            
        </div>
    )
}

export default MenuSectionItems;