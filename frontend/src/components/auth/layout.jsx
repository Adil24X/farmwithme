// import { Outlet } from "react-router-dom";

// function AuthLayout() {
//   return (
//     <div className="flex min-h-screen w-full">
//       <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
//         <div className="max-w-md space-y-6 text-center text-primary-foreground">
//           <h1 className="text-4xl font-extrabold tracking-tight">
//             Welcome to Farm2Door
//           </h1>
//         </div>
//       </div>
//       <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AuthLayout;












// import { Outlet } from "react-router-dom";
// import img4 from "@/assets/images/img4.jpg";

// function AuthLayout() {
//   return (
//     <div className="flex min-h-screen w-full">
//       {/* Left Section with Background Image */}
//       <div
//         className="hidden lg:flex items-center justify-center w-1/2 px-12 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${img4})`,
//             // "url('https://i.pinimg.com/736x/7b/cf/3f/7bcf3f66f71a28b599ac3b237f7c8590.jpg')",
//         }}
//       >
//         {/* Semi-transparent white background for readability */}
//         {/* <div className="max-w-md space-y-6 text-center text-black /70 p-8 rounded-lg shadow-lg">
//           <h1 className="text-4xl font-extrabold tracking-tight">
//             Welcome to Farm2Door
//           </h1>
//           <p className="text-lg font-medium">
//             Bringing fresh, organic farm produce directly to your doorstep.
//           </p>
//         </div> */}
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AuthLayout;











import { Outlet } from "react-router-dom";
import img4 from "@/assets/images/img4.jpg";

function AuthLayout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left Section with Background Image */}
      <div
        className="absolute inset-0 lg:relative lg:w-1/2 h-full min-h-screen bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${img4})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          filter: 'saturate(150%) contrast(110%) brightness(105%)', // Enhancing colors for all devices
          // width: '100%', 
          // height: '100vh' 
        }}
      ></div>

      {/* Right Section */}
      <div className="relative z-10 flex flex-1 items-center justify-center bg-white bg-opacity-90 lg:bg-opacity-100 px-4 py-12 sm:px-6 lg:px-8 w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
