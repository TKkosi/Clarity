import { useEffect } from 'react';

interface SettingsProps {

    childPage: (page: string) => void;
  
  }
  const Settings: React.FC<SettingsProps> = ({ childPage }) => {
    useEffect(() => {
      childPage("settings");
    }, [childPage]);
  
    return (
      <div>Settings</div>
    )
  }

// const Settings = () => {
//   return (
//     <div>Settings</div>
//   )
// }

export default Settings