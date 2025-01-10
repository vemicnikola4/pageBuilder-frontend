import { useState, useContext,useEffect } from "react";
import { PageContext } from "../Contexts/PageContext";
import Tag from "./Tag";
import { preload } from "react-dom";
const Tags = () => {
    const { themes, currentTheme,fontFamily} = useContext(PageContext);
    
    const [themeInUse, setThemeInUse] = useState(themes.tagsSection[currentTheme]);
    const[selectedTags,setSelectedTags]=useState([]);
    
    
    const addTag = (value)=>{
        
        setSelectedTags([...selectedTags,value]);
    }
    const removeTag = (value)=>{
       
        setSelectedTags((prevTags)=>{
            return prevTags.filter((element)=>element !== value);
        });
    }
    const onTagClicked = (value)=>{
        let s = selectedTags;
        if (s.includes(value)){
            removeTag(value);
        }else{
            addTag(value);
        }
    }
    
    useEffect(() => {
        setThemeInUse(themes.tagsSection[currentTheme]);
    }, [currentTheme]);
    const [tipesOfRestaurants,setTipesOfRestaurant] = useState ([
        'Food truck','Pub','Bakery','Pizza','Deli','Fine Dining','Buffet','Bar','Bar and Brewery','Fast food','Cafeteria','BBQ','Giros','BreakFast','Lunch','Dinner', 'Dine in', 'Drive trough','Drinks','Kebab','Indian','Fish','Pasta','Italian','International','Mexican','Tai','Chinese','Japanese','French','French Fries'
    ]);
   
   
    useEffect(()=>{
    },[selectedTags]);
    tipesOfRestaurants.sort();
    return (
        <div className={"flex flex-col py-6 px-4 " + themeInUse.main + " " + fontFamily}>
            <div>
                <h1 className={"text-xl sm:text-md md:text-4xl underline " + themeInUse.title}>Select tags for your restaurant</h1>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-10 gap-4 py-10 px-4">
               { tipesOfRestaurants.map((restaurant)=>(<Tag title={restaurant} onTagClicked={onTagClicked}/>))}
            </div>
            <div className="py-3 mb-3 flex self-center w-full md:w-5/6">
                <div className="mt-2 w-full flex gap-2  justify-center md:justify-end ">
                    
                    <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-80 hover:bg-opacity-90 hover:cursor-pointer">SAVE</div>
                </div>
            </div>
        </div>
    )
}

export default Tags;