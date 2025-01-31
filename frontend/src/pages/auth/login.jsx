import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;












// import CommonForm from "@/components/common/form";
// import { useToast } from "@/components/ui/use-toast";
// import { loginFormControls } from "@/config";
// import { loginUser } from "@/store/auth-slice";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// const initialState = {
//   email: "",
//   password: "",
// };

// function AuthLogin() {
//   const [formData, setFormData] = useState(initialState);
//   const dispatch = useDispatch();
//    const { toast } = useToast();

//   function onSubmit(event) {
//     event.preventDefault();

//     dispatch(loginUser(formData)).then((data) => {
//       if (data?.payload?.success) {
//         toast({
//           title: data?.payload?.message,
//         });
//       } else {
//         toast({
//           title: data?.payload?.message,
//           variant: "destructive",
//         });
//       }
//     });
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-green-100">
//       <div className="bg-white shadow-lg rounded-lg flex w-full max-w-5xl">
//         {/* Left Section */}
//         <div className="hidden md:flex flex-1 items-center justify-center bg-blue-50">
//           <img
//             src="https://img.freepik.com/free-vector/farm-fresh-cartoon_24908-57166.jpg"
//             alt="Farm Illustration"
//             className="max-w-[80%] max-h-[500px] object-contain rounded-lg"
//           />
//         </div>

//         {/* Right Section */}
//         <div className="flex-1 p-8 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">
//             Sign in to Your Account
//           </h2>
//           <p className="text-sm text-gray-500 text-center mb-8">
//             Welcome back! Please login to continue.
//           </p>

//           <CommonForm
//             formControls={loginFormControls}
//             buttonText={"Sign In"}
//             formData={formData}
//             setFormData={setFormData}
//             onSubmit={onSubmit}
//           />

//           <p className="text-center text-gray-600 mt-6">
//             Don't have an account? 
//             <Link to="/auth/register" className="text-blue-500 hover:underline ml-1">
//               Register here!
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AuthLogin;








