import { useState, useContext, useEffect } from "react";
import { PageContext } from "../Contexts/PageContext";
import MenuSection from "./MenuSection";
import { v4 as uuidv4 } from "uuid";

const Menu = () => {

    const { themes, currentTheme } = useContext(PageContext);

    const [themeInUse, setThemeInUse] = useState(themes.menu[currentTheme]);

    useEffect(() => {
        setThemeInUse(themes.menu[currentTheme]);
    }, [currentTheme]);


    const [menuSections, setMenuSections] = useState([

        {
            id: uuidv4(),
            title: 'Enter title of this section',
            items: [
                {
                    id: uuidv4(),
                    imageUrl: 'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg',
                    itemTitle: 'Enter item Title',
                    itemDescription: 'Enter item Description',
                    itemPrice: 0
                }
            ]

        }
    ]);

     useEffect(() => {
        console.log(menuSections)
     }, [menuSections]);

    const addMenuSection = () => {
        const newSection = {
            id: uuidv4(),
            title: 'Enter title of this section',
            items: [
                {
                    id: uuidv4(),
                    imageUrl: 'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg',
                    itemTitle: 'Enter item Title',
                    itemDescription: 'Enter item Description',
                    itemPrice: 0
                }
            ]
        }
        setMenuSections([...menuSections, newSection]);
    }
   
    const onAddSectionItem = (section)=>{
        console.log(section);

    }
    const onDeleteSectionItem=()=>{
     

        // console.log(sectionId,itemId);
    }
    // const updateSection = (modal) => {

    //     let m = menuSections;
    //      m.map((section,ind)=>section.id == modal.id ? m.splice(ind,1,modal) : null);
    //     setMenuSections((prevItems)=>{
    //         return m;
    //     });
    //     console.log(menuSections);

    // }

    const addMenuSectionItem = (sectionId, newItem) => {

        let a = menuSections;
        a.map((section) => (
            section.id == sectionId ? section.items.push(newItem) : null
        ));


        setMenuSections(a);
    }
    const deliteMenuSection = (id) => {

        setMenuSections((prevItems) => {
            return prevItems.filter(item => item.id !== id);

        });



    }
   
    

    return (
        <div className={"h-fit py-6 " + themeInUse.main}>
            <div id="createMenuTitleDiv" className="md:p-8">
                <h1 className={"text-md sm:text-md md:text-4xl text-center md:text-start " + themeInUse.title}>Create Your Menu items</h1>
            </div>
            <div className="md:ps-6 py-4 relative flex justify-center md:block">
                <div className="w-64 py-2 px-4  rounded-sm bg-blue-500 hover:cursor-pointer flex justify-center items-centertext-center group " onClick={addMenuSection} >
                    Add menu section
                    <div className=" absolute left-0 ms-12 mt-2 opacity-0 scale-95 md:group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 bg-gray-200 p-4 rounded-md">
                        By clicking this button you'll add a section to your menu. Main course, appetizers, dessert etc.
                    </div>
                </div>

            </div>
            <div className="py-6 flex flex-col items-center w-full ">
                {
                    menuSections.map((section) => (
                        <MenuSection key={section.id} section={section} onAddSectionItem={onAddSectionItem} onDeleteSectionItem={onDeleteSectionItem}/>

                    ))
                }
            </div>
            <div className="py-3 mb-3 flex self-center w-5/6">
                <div className="mt-2 w-full flex justify-center md:justify-end ">
                    <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-80 hover:bg-opacity-90 hover:cursor-pointer">SAVE</div>
                </div>
            </div>

        </div>
    )


}

export default Menu;