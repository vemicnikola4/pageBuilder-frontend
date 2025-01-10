import { useContext, useEffect, useState } from "react";
import { PageContext } from "../Contexts/PageContext";
import HeaderMenu from "./HeaderMenu";

const Hero = () => {

    const [heroTitle, setHeroTitle] = useState('Enter title');
    const [heroSubtitle, setHeroSubtitle] = useState('Enter Subtitle');
    const [bgUrlInput, setbgUrlInput] = useState('Copy img url');
    const [bgUrl, setBgUrl] = useState('https://cdn.pixabay.com/photo/2023/10/28/06/40/wine-8346641_1280.jpg');

    const{ themes,currentTheme,setCurrentTheme,textBoxPosition,fontFamily, setFontFamily} = useContext(PageContext);
    const setBackground = () => {
        if (bgUrlInput) {
            setBgUrl(bgUrlInput);

        }
    };
    const[themeInUse,setThemeInUse] = useState(themes.hero[currentTheme]);
    const [heroTextPosition,setHeroTextPosition] = useState('center');

    useEffect(()=>{
        setThemeInUse(themes.hero[currentTheme]);
    },[currentTheme]);

    const setTheme= (value) => {
        if (value){
            setCurrentTheme(value);
            setThemeInUse(themes.hero[value])
            
        }
       
    }
    return (
        <div className={" flex flex-col relative w-full h-screen justify-center text-black " +  textBoxPosition.hero[heroTextPosition].parent + " "+ fontFamily}>
            <img src={bgUrl} alt="" className="w-full h-full object-cover bg-center absolute bottom-0 opacity-90" />
            <HeaderMenu />
            <div className="absolute top-16 mt-6 right-5 flex gap-2 ">
                <select id="selectThemeInput" className={'w-full p-2 rounded-md ' + themeInUse.selectThemeInput}
                name="chooseTheme" onChange={e=>setTheme(e.target.value)} >
                    <option value="">choose theme</option>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="purple">purple</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                </select>
                <select id="selectFontInput" className={'w-full p-2 rounded-md ' + themeInUse.selectThemeInput}
                name="chooseTheme" onChange={e=>setFontFamily(e.target.value)} >
                    <option value="">choose font</option>
                    <option value="font-sans">sans</option>
                    <option value="font-serif">serif</option>
                    <option value="font-mono">mono</option>
                    
                </select>
            </div>
            <div id="setBgDiv" className={"z-10 shadow-sm hover:shadow-lg flex flex-col gap-4 py-6 p-4 mb-4 rounded-lg  " + themeInUse.setBgDiv.main + " " +   textBoxPosition.hero[heroTextPosition].setBgDiv.main }>
                <div className={"flex flex-col justify-center  gap-4 " + textBoxPosition.hero[heroTextPosition].setBgDiv.subDiv }>
                    <input
                        className={"px-2 py-1 rounded-lg "+ themeInUse.setBgDiv.input} type="text" name="" value={bgUrlInput}
                        onChange={e => setbgUrlInput(e.target.value)}
                        placeholder="Copy Img Url"
                    />
                    <div className={"w-32 py-3 p-6 rounded-lg  hover:cursor-pointer " + themeInUse.setBgDiv.button } onClick={setBackground}>Set background</div>
                </div>

            </div>
            <div id="titleSubTitleDiv" className={"z-10  flex flex-col gap-4 py-8 p-4 rounded-lg  " + themeInUse.titleSubTitleDiv.main + " " + textBoxPosition.hero[heroTextPosition].titleSubTitleDiv}>
                <h1 className={"text-md sm:text-2xl md:text-6xl font-bold " }>
                    <input className={"ps-2 rounded-lg  " + themeInUse.titleSubTitleDiv.input + " " + textBoxPosition.hero[heroTextPosition].titleInput  } type="text" placeholder="Enter Title" value={heroTitle} onChange={e => setHeroTitle(e.target.value)} />
                </h1>
                <p className={"text-lg md:text-2xl font-light text-gray-800 "}>
                    <textarea className={"rounded-lg p-2 "+ themeInUse.titleSubTitleDiv.textArea + " " + textBoxPosition.hero[heroTextPosition].textArea} type="text" placeholder="Enter Subtitle" value={heroSubtitle} onChange={e => setHeroSubtitle(e.target.value)} />
                </p>
                <div className="px-4 ">
                    <select name="textBoxPosition" className={'hidden md:block w-full p-2 rounded-lg ' + themeInUse.selectThemeInput} id="" onChange={e=>setHeroTextPosition(e.target.value)}>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                        <option value="left">Left</option>
                    </select>
                </div>
            </div>
            <div className="w-full flex justify-center md:justify-end absolute bottom-10 pe-3">
                <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-90 hover:bg-opacity-100 hover:cursor-pointer">SAVE</div>
            </div>


        </div>
    )


}

export default Hero;