import { use, useContext, useEffect, useState } from "react";
import { PageContext } from "../Contexts/PageContext";



const AboutUs = () => {

    const [aboutUsTitle, setAboutUsTitle] = useState('Set Tittle');
    const [aboutUsTextarea, setAboutUsTextarea] = useState('Set Description');
    const [bgUrl, setBgUrl] = useState('https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg');
    const [imageUrlInput, setImageUrlInput] = useState('Copy img url');

    const setImage = () => {
        if (imageUrlInput) {
            setBgUrl(imageUrlInput);

        }
    };

    const { themes, currentTheme, textAligment ,fontFamily} = useContext(PageContext);
    const [hasIimage, setHasImage] = useState(true);

    console.log(hasIimage);
    const [themeInUse, setThemeInUse] = useState(themes.aboutUs[currentTheme]);
    useEffect(() => {
        setThemeInUse(themes.aboutUs[currentTheme]);
    }, [currentTheme]);

    const [textAlign, setTextAligne] = useState('center');

    console.log(themeInUse.input);


    return (
        hasIimage ?
            <div id="aboutUsSection"className={"flex flex-col items-center  " + themeInUse.main + " " + fontFamily}>

                <div className={"h-screen py-12 w-5/6  px-4  md:flex md:flex-row gap-2 justify-center items-center relative " + themeInUse.main}>
                    <div className="h-1/2 md:h-5/6 md:basis-1/2 w-full  md:flex flex-col ">
                        <div className="w-full flex justify-start py-4 md:ps-2 text-start">
                            <h1 className={"w-full md:w-64 text-md sm:text-md md:text-4xl md:text-md font-bold "}>
                                <input id="aboutUsTitleInput" type="text" placeholder="Enter Title" className={"p-2  w-full focus:outline-none border-b border-b-2 border-b-gray-500   border-b-gray-200 " + themeInUse.textBox} value={aboutUsTitle} onChange={e => setAboutUsTitle(e.target.value)} />
                            </h1>
                        </div>
                        <div className="w-full  h-48 md:h-96 flex justify-start md:pe-6 text-md md:text-2xl">
                            <textarea id="aboutUsTextarea" className={"w-full h-full p-2  focus:outline-none border-b border-b-2 border-b-gray-500 " + themeInUse.textBox} name="" placeholder="Set Description" value={aboutUsTextarea} onChange={e => setAboutUsTextarea(e.target.value)} ></textarea>
                        </div>

                    </div>
                    <div className="md:basis-1/2 w-full h-1/2 md:h-5/6  bg-gray-100  py-20 px-2 relative flex items-center rounded-lg relative">
                        <img src={bgUrl} alt="" className="w-full h-full object-cover bg-center  absolute bottom-0 left-0 opacity-70  rounded-lg" />
                        <div className="z-10 border-2 border-gray-800 w-full flex justify-center items-center  rounded-lg font-bold">
                            <div className="absolute right-0 top-0 p-2 bg-red-500 hover:cursor-pointer " onClick={e => setHasImage(!hasIimage)}>
                                x
                            </div>
                            <input
                                className={"bg-transparent px-2 rounded-lg w-full focus:outline-none"} type="text" name="" value={imageUrlInput}
                                onChange={e => setImageUrlInput(e.target.value)}
                                placeholder="Copy Img Url"
                            />
                            <div className="p-3 rouneded-lg bg-blue-500 hover:cursor-pointer" onClick={setImage}>
                                Change background
                            </div>


                        </div>
                    </div>


                </div>
                <div className="relative w-5/6 py-3 mb-3">
                    <div className="mt-2 w-full flex justify-center md:justify-end md:absolute bottom-1 pe-3">
                        <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-80 hover:bg-opacity-90 hover:cursor-pointer">SAVE</div>
                    </div>
                </div>
            </div>
            :
            <div className={"w-full  " + themeInUse.main}>
                <div className="flex gap-4 self-center md:self-start  p-4 md:ps-8 md:pe-0 pt-10">
                    <select className={"px-4 py-2 rounded-sm " + themeInUse.input} name="" id="" onChange={e => setTextAligne(e.target.value)}>
                        <option value="">select text aligment</option>
                        <option value="center">center</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                    </select>
                    <div className="p-4 bg-blue-500 bg-opacity-90 hover:bg-opacity-100 hover:cursor-pointer" onClick={e => setHasImage(!hasIimage)}>Return image</div>
                </div>
                <div className={"h-fit py-4 w-full  px-4 flex justify-center items-center relative " + themeInUse.main}>
                    <div className=" w-5/6 flex-col ">
                        <div className="w-full flex justify-center py-4 md:ps-2  ">
                            <h1 className={"w-full  text-md sm:text-md md:text-4xl md:text-md font-bold "}>
                                <input id="aboutUsTitleInput" type="text" placeholder="Enter Title" className={"p-4  w-full focus:outline-none border-b border-b-2 border-b-gray-500   border-b-gray-200  " + themeInUse.textBox + " " + textAligment.aboutUs[textAlign]} value={aboutUsTitle} onChange={e => setAboutUsTitle(e.target.value)} />
                            </h1>
                        </div>
                        <div className="w-full  h-48 md:h-96 flex justify-start  text-md md:text-2xl p-4">
                            <textarea id="aboutUsTextarea" className={"w-full h-full p-2  focus:outline-none border-b border-b-2 border-b-gray-500 " + themeInUse.textBox + " " + textAligment.aboutUs[textAlign]} name="" placeholder="Set Description" value={aboutUsTextarea} onChange={e => setAboutUsTextarea(e.target.value)} ></textarea>
                        </div>
                        <div className="w-full flex justify-center md:justify-end">
                            <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-90 hover:bg-opacity-100 hover:cursor-pointer">SAVE</div>
                        </div>
                    </div>

                </div>

            </div>




    )
}

export default AboutUs;