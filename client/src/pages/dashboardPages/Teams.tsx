import { useEffect } from "react";
import TeamMemberCard from "../../components/TeamMemberCard";


const Teams = ({childPage}: {childPage: (page: string) => void}) => {
  useEffect(() => {
    childPage("teams");
  }, [childPage]);
  
  return (
    <div>Teams
      <TeamMemberCard name="John Doe" role="Developer"/>
      <TeamMemberCard name="Jane Doe" role="Designer"/>
      
    </div>
  )
}

export default Teams