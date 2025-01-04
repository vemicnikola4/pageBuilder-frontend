import { useState,useEffect } from "react";


const MenuSectionItem = ({index, item,deleteSectionItem}) => {

    const [modal, setModal] = useState(item)
    index=index ;
    // const [imgInput, setImgInput] = useState('Copy img Url Here');
    // const [titleInput, setTitleInput] = useState(modal.itemTitle);
    // const [description, setDescription] = useState(modal.itemDescription);
    // const [price, setPrice] = useState(modal.itemPrice);
    // const setModalImg = () => {
    //     setModal({ ...modal, imageUrl: imgInput });
    //     updateSectionItemsModal(modal);
        
    // }

    // const setModalTitle = (e)=>{

    //     setTitleInput(e.target.value);
    //     setModal({ ...modal, itemTitle: titleInput });
    //     updateSectionItemsModal(modal);

    // }
    // const setModalDescription = (e)=>{

    //     setDescription(e.target.value);
    //     setModal({ ...modal,itemDescription: description });
    //     updateSectionItemsModal(modal);

    // }
    // const setModalPrice = (e)=>{

    //     setPrice(e.target.value);
    //     setModal({ ...modal,  itemPrice: price  });
    //     updateSectionItemsModal(modal);

    // }
    const deleteItem = (modal)=>{

        deleteSectionItem(modal);
    }
    useEffect(()=>{

        },[modal]);

    return (
        <div className="min-w-[250px] max-w-[250px] block bg-gray-300 shadow-lg shadow-white rounded-md min-h-[350px] pb-6 relative">
            <button className="py-1 px-2 bg-red-500 absolute top-0 right-0" onClick={e=>deleteItem(modal)}>
                x
            </button>
            <div className="w-full">
                <img src={modal.imageUrl} alt="" className="w-full object-cover  rounded-t-lg h-48" />
            </div>
            <div>
                <div className="py-3 flex flex-col items-center">
                    <input
                        className={"px-2 py-1  bg-transparent border-b-4 text-center "} type="text" name=""
                        // onChange={e => setImgInput(e.target.value)}
                        // placeholder="Copy Img Url"
                    />
                    <div className="p-2 bg-blue-500 rounded-md w-32 mt-1 hover:cursor-pointer " >
                        Set image
                    </div>
                </div>


                <div className="flex justify-center w-full">
                    <h2 className="font-bold text-2xl">
                        <input type="text" className="bg-transparent text-center border-b-2 w-full" placeholder="Enter Title" />
                    </h2>
                </div>


                <div className="mt-2 ">
                    <textarea name="" className="bg-transparent text-center border-b-2 w-full" id="" ></textarea>
                </div>
                <div>
                    <p>
                    <input type="number" className="bg-transparent text-center border-b-2 " placeholder="Enter Item Price"  />   
                    </p>
                    </div>
            </div>
        </div>
    )
}

export default MenuSectionItem;