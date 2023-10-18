import { useSelector } from "react-redux"
import langUageConstants from "../../utils/languageConstants"

const GPTSearchbar=()=>{

    const languageSeleted=useSelector((state)=>state.language.languageSeleted)


return(

    <div className="pt-[12%] flex justify-center ">
        <form className="bg-black w-1/2 grid grid-cols-12 rounded-lg shadow-stone-950">
           
           <input type="text" placeholder={langUageConstants[`${languageSeleted}`].gptSearchPlaceHolder} className="p-4 m-4 col-span-9"/>
           <button className="bg-red-700 text-white col-span-3 m-4 py-2 px-4 rounded-lg">{langUageConstants[languageSeleted].search}</button>
        </form>


    </div>
)

}


export default GPTSearchbar