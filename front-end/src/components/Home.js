 import React from 'react';
 import { Link } from 'react-router-dom';
 import '../CSS/Home.css'; // Import the CSS file

 const Home = () => {
   return (
    

    <>
     <div className="title-container">
       <h2>Welcome to Sports Management System</h2></div>
  <div className="container">
    <div className="button-container">
         <Link to="/hrlogin">
           <button>Login as HR</button>
     </Link>
         <Link to="/employeelogin">
           <button>Login as Employee</button>
         </Link>
      </div>
     </div>
     </>
   );
 };

 export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../CSS/Home.css'; // Import the CSS file
// import Homeimage from '../Images/Homeimage.jpg'; // Import the image with the correct path and file extension

// const Home = () => {
//   // Define the background image style
//   const backgroundStyle = {
//     backgroundImage: `url(${Homeimage})`, // Set the URL of the imported image
//     backgroundSize: 'cover', // Cover the entire container
//     backgroundPosition: 'center', // Center the background image
//   };

//   return (
//     <div className="container" style={backgroundStyle}>
//       <h2>Welcome to Sports Management System</h2>
//       <div className="button-container">
//         <Link to="/hrlogin">
//           <button>Login as HR</button>
//         </Link>
//         <Link to="/employeelogin">
//           <button>Login as Employee</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
