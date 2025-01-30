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












import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section with Background Image */}
      <div
        className="hidden lg:flex items-center justify-center w-1/2 px-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/watercolor-farmers-market-illustration_23-2149346023.jpg')",
        }}
      >
        {/* Semi-transparent white background for readability */}
        <div className="max-w-md space-y-6 text-center text-black /70 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Farm2Door
          </h1>
          <p className="text-lg font-medium">
            Bringing fresh, organic farm produce directly to your doorstep.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

