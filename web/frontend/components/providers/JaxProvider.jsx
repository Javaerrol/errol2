import { createContext } from "react";
import { addDays } from "date-fns";

//Context api file
const createContext = createContext();
export default function App(){
    const [state, setState] = useState([
        {
          startDate:addDays(new Date(), -30),
          endDate: new Date(Date.now()),
          
        } ]);
      
        return (
          <JaxProvider.Provider onChange={item => setState([])}
          ranges={state}/>
            
          
        )
      }
      
     
      