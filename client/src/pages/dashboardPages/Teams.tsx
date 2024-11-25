import { useEffect } from "react";
import NotFound from "../404 page/404pages";


const Teams = ({childPage}: {childPage: (page: string) => void}) => {
  useEffect(() => {
    childPage("teams");
  }, [childPage]);
  
  return (
    <div>
      <NotFound/>
    </div>
  )
}

export default Teams