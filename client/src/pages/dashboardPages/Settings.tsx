// import { useEffect } from 'react';

// interface SettingsProps {

//     childPage: (page: string) => void;
  
//   }
//   const Settings: React.FC<SettingsProps> = ({ childPage }) => {
//     useEffect(() => {
//       childPage("settings");
//     }, [childPage]);
  
//     return (
//       <div>Settings</div>
//     )
//   }

// // const Settings = () => {
// //   return (
// //     <div>Settings</div>
// //   )
// // }

// export default Settings


const CardGrid = () => {
  const cards = [
    { title: "Vision", description: "Fill Out How Vision.", text: "Add Text..." },
    { title: "Why?", description: "Fill Out Why Summary.", text: "This Ambitious Venture Represents A Beacon Of Progress And Potential." },
    { title: "What?", description: "Fill Out What Summary.", text: "Add Text..." },
    { title: "How", description: "Fill Out How Summary.", text: "Add Text..." },
    { title: "Mission", description: "Fill Out Mission Summary.", text: "With A Focus On Sustainability And Renewable Energy, Project 001 Is Determined To Reshape Our Approach To Environmental Challenges." },
    { title: "Values", description: "Fill Out Values Summary.", text: "Add Text..." },
    // Add more cards to make it a 4x3 grid
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100 p-6">
      <div className="grid grid-cols-4 gap-4 max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
              <p className="mt-4 text-sm text-gray-600">{card.text}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="p-2 bg-blue-500 rounded-full text-white shadow hover:bg-blue-600">
                ✎
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
