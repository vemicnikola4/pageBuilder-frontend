import { useState } from "react";


const MenuSectionTitle = ({title,setSectionTitle})=>{

    const[sectionTitleModal,setSectionTitleModal] = useState(title)

    const setTitle= (e)=>{
        setSectionTitleModal(e.target.value);
        setSectionTitle(sectionTitleModal);
    }
    return (
        <div className="w-64  self-center md:self-start mb-3">
           <h1>
                <input className="p-2 rounded-sm bg-gray-200" type="text" placeholder="Set section Title" value={sectionTitleModal} onChange={e=>setTitle(e)} />
            </h1>
        </div>
    )
}

export default MenuSectionTitle;