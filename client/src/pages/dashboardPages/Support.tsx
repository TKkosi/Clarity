import { useEffect } from 'react';

interface SettingsProps {

    childPage: (page: string) => void;
  
  }
  const Support: React.FC<SettingsProps> = ({ childPage }) => {
    useEffect(() => {
      childPage("settings");
    }, [childPage]);
  
    return (
      <div>Settings</div>
    )
  }
export default Support