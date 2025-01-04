import { useState, useContext, useEffect } from "react";
import { PageContext } from "../Contexts/PageContext";

const HeaderMenu = () => {
    const { themes, currentTheme, textBoxPosition } = useContext(PageContext);
    if ( currentTheme == 'dark' ){
        console.log(currentTheme);

    }
    const [themeInUse, setThemeInUse] = useState(themes.hero[currentTheme]);
    const [menuPosition, setMenuPosition] = useState('left');
    const[dropDownMenu,setDropDownMenu] = useState('hidden');
    const setMenu= (e)=>{
        if(e.target.value !== ''){
            setMenuPosition(e.target.value);
        }
    }
    const toggleDropDown = ()=>{
        console.log('jvj');
        if ( dropDownMenu == 'hidden' ){
            setDropDownMenu('block');
        }else{
            setDropDownMenu('hidden');
        }
    }
    useEffect(() => {
        setThemeInUse(themes.hero[currentTheme]);
    }, [currentTheme]);
    return (
        <div id="menuDiv" className={"w-full absolute top-0 h-16  flex   " + themeInUse.menuDiv + " " + textBoxPosition.headerMenu[menuPosition]}>
            <div className="flex md:flex-col">
                <div className="hidden md:flex gap-3 items-center font-bold">
                    <div>About Us</div>
                    <div>Menu</div>
                    <div>Location</div>
                    <div className="me-4">Reviews</div>
                </div>
                
                <div className="hidden md:flex justify-center p-4">
                <select name="" id="" className={"p-3 rounded-md " + themeInUse.selectThemeInput} onChange={e=>setMenu(e)}>
                    <option value="">menu position</option>
                    <option value="center">center</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                </select>
            </div>
            </div>
            <div className={"md:hidden p-4 flex justify-start items-center w-full h-full z-40 " } >
                {
                    currentTheme === 'dark' ?
                    <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-6 h-6  bg-white opacity-100"} onClick={e=>toggleDropDown()} />
                    :
                    <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-6 h-6 opacity-100 "} onClick={e=>toggleDropDown()} />
                }
                    
                    <div className={ dropDownMenu + " absolute top-10 left-18 font-bold rounded-md bg-gray-500 z-40 bg-opacity-100" }>
                        <div className=" p-4">About Us</div>
                        <div className="    p-4">Menu</div>
                        <div className="    p-4">Location</div>
                        <div className="    p-4" >Reviews</div>
                    </div>
                </div>
           
            
            
        </div>
    )
}
export default HeaderMenu;