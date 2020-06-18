import React from "react";

const withClass2 = (WrappedComponent, className) => (props) => (
  <div className={className}>
    <WrappedComponent {...props}></WrappedComponent>
  </div>
);

//the above code in clearer syntax is

// const withClass = (WrappedComponent, classNae) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent></WrappedComponent>
//     </div>
//   );
// };

export const WithClass2 = withClass2;
