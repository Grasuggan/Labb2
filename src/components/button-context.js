import React from 'react'




// export const ButtonContext = React.createContext();

// export const ButtonGlobalProvider = 
// ({children}) => {

  
//  const btnInfo = {
//   disabled: {
//     color: 'red',
//     text: 'Disabled'
//   },
//   enabled: {
//     color: 'green',
//     text: 'Enabled'
//   },
 
// };

//     return (
//       <ButtonContext.Provider value={btnInfo}>
//         {children}
//       </ButtonContext.Provider>
//     );
//   };




export const btnInfo = {
    disabled: {
      color: 'red',
      text: 'Disabled'
    },
    enabled: {
      color: 'green',
      text: 'Enabled'
    },
    
  };
  
  export const ButtonContext = React.createContext(btnInfo.disabled);
  