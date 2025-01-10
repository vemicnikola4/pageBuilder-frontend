import { useEffect, useState } from "react";
import MenuSectionItem from "./MenuSectionItem";
import { v4 as uuidv4 } from "uuid";

const MenuSection = ({ section, deliteMenuSection,updateSection }) => {


    const [menuSectionModal, setMenuSectionModal] = useState(section);
    const [titleInput, setTitleInput] = useState(menuSectionModal.title);

    const addItem = () => {
        let newItems = menuSectionModal.items;
        let newItem = {
            id: uuidv4(),
            imageUrl: 'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg',
            itemTitle: 'Enter item Title',
            itemDescription: 'Enter item Description',
            itemPrice: 0
        }
        newItems.push(newItem);
        setMenuSectionModal({ ...menuSectionModal, items: newItems });
    }

    const deleteSectionItem = (index) => {
        let newItems = [];
        if (menuSectionModal.items.length == 1) {
            newItems = [];
        } else {
            for(let i = 0; i < menuSectionModal.items.length; i++ ){
                if ( i !== index ){
                    newItems[i] = menuSectionModal.items[i];
                }
            }
            

        }
        
        setMenuSectionModal({...menuSectionModal,items:newItems
        });
       

    }
  
    const updateSectionItemsModal = (modal)=>{
        let newItems =[];
        for( let i = 0; i < menuSectionModal.items.length; i++){
            if ( menuSectionModal.items[i].id !== modal.id ){
                newItems[i]=menuSectionModal.items[i];
            }else{
                newItems[i]=modal;
            }
        }

        setMenuSectionModal({...menuSectionModal,items:newItems});



    }
    const deleteSection= (id)=>{
        deliteMenuSection(id);
    }
    const setTitle =(e)=>{
        setTitleInput(e.target.value);
        setMenuSectionModal({...menuSectionModal,title:e.target.value})
    }
    useEffect(() => {
        updateSection(menuSectionModal);

    }, [menuSectionModal]);



    return (
        <div className="p-3 w-5/6 border border-2 border-gray-500 mt-2 relative">
            <div className="absolute top-0 right-0  px-2 bg-red-500 font-bold hover:cursor-pointer" onClick={e=>deleteSection(menuSectionModal.id)}>
                x
            </div>
            <div className="w-64  self-center md:self-start mb-3">
                <h1>
                    <input className="p-2 rounded-sm bg-gray-200" type="text" placeholder="Set section Title" onChange={e=>(setTitle(e))}/>
                </h1>
            </div>
            <div className="flex overflow-x-auto space-x-4 p-4">

                <div className="h-full w-50px bg-blue-500 px-3  min-h-[350px] flex items-center font-extrabold text-2xl rounded-sm hover:cursor-pointer group relative" onClick={addItem}>
                    +
                    <div className="z-10 absolute left-0 ms-12 mt-2 opacity-0 scale-95 md:group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 bg-gray-200 p-4 rounded-md font-normal text-base " >
                        By clicking this button you'll add new product to this section.
                    </div>

                </div>

                <div className="flex justify-start gap-2">
                    {
                        menuSectionModal.items.map((item, ind) => (
                            <MenuSectionItem key={ind} index={ind} item={item} deleteSectionItem={deleteSectionItem} updateSectionItemsModal={updateSectionItemsModal}/> 
                        ))
                    }

                </div>
            </div>



        </div>




    )
}

export default MenuSection;