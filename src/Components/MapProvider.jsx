import { useState, useContext,useEffect } from "react";
import { PageContext } from "../Contexts/PageContext";


const MapProvider = () => {
    const[embededUrl,setEmbededUrl] = useState('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929771.0984429284!2d18.270405976483328!3d44.18431185116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2srs!4v1736416153743!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    const start = embededUrl.indexOf('"') + 1; // position after '['
    const end = embededUrl.indexOf('"',start); // position of ']'
    const mapUrl = embededUrl.substring(start, end);
    const { themes, currentTheme,fontFamily} = useContext(PageContext);
    const [themeInUse, setThemeInUse] = useState(themes.menu[currentTheme]);
    const [mapUrlInput,setMapUrlInput] = useState('Copy embeded map');

    useEffect(() => {
        setThemeInUse(themes.menu[currentTheme]);
    }, [currentTheme]);
    const setMapUrl = () =>{
        setEmbededUrl(mapUrlInput);
    }
    console.log(mapUrlInput);

    // https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.365183118
    return (
      <div id="locationSection" className={"w-full h-fit md:h-screen  flex flex-col items-center pb-4 " + themeInUse.main + " "+ fontFamily}>
        <h1 className={"font-light text-4xl py-4 " + themeInUse.title} >
            Set your location
        </h1>
        <div className="p-4 md:flex gap-2 justify-center bg-transparent">
            <input type="text" name="" id="" className={"ps-3 rounded-sm border border-b-2 mb-2 md:m-0 md:w-96 " + themeInUse.input}value={mapUrlInput} placeholder="Copy your embeded location" onChange={e=>setMapUrlInput(e.target.value)}/>
            <div className="p-4 rounded-sm bg-blue-500 w-full md-w-64 relative group  hover:cursor-pointer" onClick={e=>setMapUrl()}>
               Set location
                <div className="absolute left-0 ms-12 mt-2 opacity-0 scale-95 md:group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 bg-gray-200 p-4 rounded-md"> Go to google maps. Find your location. Choose share option, embed a map. Then copy html and paste it in the feald. Easy peasy !</div>

            </div>

        </div>
        <div className="w-5/6 h-full rounded-sm">
            
            <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>
        <div className="py-3 mb-3 flex self-centerw-full md:w-5/6">
                <div className="mt-2 w-full flex justify-center md:justify-end ">
                    <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-80 hover:bg-opacity-90 hover:cursor-pointer">SAVE</div>
                </div>
            </div>
      </div>
    );
  };
  
  export default MapProvider;