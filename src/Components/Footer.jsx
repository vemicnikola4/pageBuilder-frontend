import { useState, useContext, useEffect } from "react";
import { PageContext } from "../Contexts/PageContext";

const Footer = () => {

    const { themes, currentTheme, contactInfo, setContactInfo,fontFamily } = useContext(PageContext);
    const [themeInUse, setThemeInUse] = useState(themes.footer[currentTheme]);
    useEffect(() => {
        setThemeInUse(themes.footer[currentTheme]);
    }, [currentTheme]);
   

    const setPhoneNumber = (value) => {
        setContactInfo({ ...contactInfo, phone: value });
    }
    const setInstagramLink = (value) => {
        setContactInfo({ ...contactInfo, instagram: value });
    }
    const setFacebookLink = (value) => {
        setContactInfo({ ...contactInfo, facebook: value });
    }
    return (
        <div className={"flex justify-center h-fit py-8 " + themeInUse.main + " " + fontFamily}>

            <div className="w-5/6 flex justify-center items-center">
                <div className="flex flex-col items-center gap-4">
                    <div>
                        <h1 className={"text-md md:text-4xl " + themeInUse.title}>
                            All Copyright Reserved
                        </h1>
                    </div>
                    <div className="flex justify-center w-12 h-12 rounded-lg">
                        <a href={contactInfo.phone}><img className="h-full w-full rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" /></a>
                    </div>
                    <div className="py-3">
                        <input className={"py-4 px-2 text-center rounded-sm w-full focus:outline-none " + themeInUse.input} type="text" value={contactInfo.phone} onChange={e => setPhoneNumber(e.target.value)} placeholder="Copy link to your peofile" />
                        
                    </div>
                    <div className="flex justify-center w-12 h-12 rounded-lg">
                        <a href={contactInfo.instagram}><img className="h-full w-full rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png
                        " alt="" /></a>
                    </div>
                    <div className="py-3">
                        <input className={"py-4 px-2 text-center rounded-sm w-full focus:outline-none " + themeInUse.input} type="text" value={contactInfo.instagram} onChange={e => setInstagramLink(e.target.value)} placeholder="Copy link to your peofile" />
                        
                    </div>
                    <div className="flex justify-center w-12 h-12 rounded-lg">
                        <a href={contactInfo.facebook} className="h-full w-full">
                            <img className="h-full w-full rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                        </a>
                    </div>
                    <div className="py-3">
                        <input className={"py-4 px-2 text-center rounded-sm w-full focus:outline-none " + themeInUse.input} type="text" value={contactInfo.facebook} onChange={e => setFacebookLink(e.target.value)} placeholder="Copy link to your peofile" />
                       

                    </div>
                    <div className="py-3 mb-3 flex self-center w-full">
                        <div className="mt-2 w-full flex justify-center  ">
                            <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-80 hover:bg-opacity-90 hover:cursor-pointer">SAVE</div>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Footer;