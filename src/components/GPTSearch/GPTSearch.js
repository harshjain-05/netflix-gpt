import GPTSearchbar from "./GPTSearchBar"
import { backgroundImage } from "../../utils/constants"

const GPTSearch=()=>{


return(
    <div>

<div className="absolute top-0 bottom-0 -z-10">
        <img src={backgroundImage} />
      </div>

        <GPTSearchbar/>
    </div>
)



}

export default GPTSearch