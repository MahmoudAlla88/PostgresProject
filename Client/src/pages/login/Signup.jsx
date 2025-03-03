// import { useState } from "react";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     role: "donor", // القيمة الافتراضية
//     status: "pending", // القيمة الافتراضية
//     phoneNumber: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User Data:", formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex gap-4">
//             <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-1/2 p-2 border rounded-md" required />
//             <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-1/2 p-2 border rounded-md" required />
//           </div>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded-md" required />
//           <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border rounded-md" required />
//           <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-md" required></textarea>
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// import { useState } from "react";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     role: "donor", // القيمة الافتراضية
//     status: "pending", // القيمة الافتراضية
//     phoneNumber: "",
//     address: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.post("http://localhost:5000/api/users/signup", formData);
//       setSuccess("User registered successfully!");
//       console.log("User Data:", response.data);
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//     }
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
//         {/* Image Section - Hidden on mobile, visible on medium screens and up */}
//         <div className="hidden md:block md:w-1/2 bg-blue-600 relative">
//           <img
//             src="/api/placeholder/600/800" 
//             alt="Sign up illustration"
//             className="w-full h-full object-cover opacity-90"
//           />
//           <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex flex-col justify-center items-center text-white p-8">
//             <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
//             <p className="text-center text-lg">Join our community and start your journey with us today.</p>
//           </div>
//         </div>
        
//         {/* Form Section */}
//         <div className="w-full md:w-1/2 p-8 md:p-12">
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Account</h2>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="w-full sm:w-1/2">
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                 <input 
//                   type="text" 
//                   id="firstName"
//                   name="firstName" 
//                   placeholder="First Name" 
//                   value={formData.firstName} 
//                   onChange={handleChange} 
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
//                   required 
//                 />
//               </div>
//               <div className="w-full sm:w-1/2">
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                 <input 
//                   type="text" 
//                   id="lastName"
//                   name="lastName" 
//                   placeholder="Last Name" 
//                   value={formData.lastName} 
//                   onChange={handleChange} 
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
//                   required 
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input 
//                 type="email" 
//                 id="email"
//                 name="email" 
//                 placeholder="Email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
//                 required 
//               />
//             </div>
            
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <input 
//                 type="password" 
//                 id="password"
//                 name="password" 
//                 placeholder="Password" 
//                 value={formData.password} 
//                 onChange={handleChange} 
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
//                 required 
//               />
//             </div>
            
//             <div>
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//               <input 
//                 type="text" 
//                 id="phoneNumber"
//                 name="phoneNumber" 
//                 placeholder="Phone Number" 
//                 value={formData.phoneNumber} 
//                 onChange={handleChange} 
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
//                 required 
//               />
//             </div>
            
//             <div>
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//               <textarea 
//                 id="address"
//                 name="address" 
//                 placeholder="Address" 
//                 value={formData.address} 
//                 onChange={handleChange} 
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
//                 required 
//                 rows="3"
//               ></textarea>
//             </div>
            
//             {/* <div>
//               <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//               <select
//                 id="role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//               >
//                 <option value="donor">Donor</option>
//                 <option value="recipient">Recipient</option>
//                 <option value="volunteer">Volunteer</option>
//               </select>
//             </div> */}
            
//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-lg"
//             >
//               Sign Up
//             </button>
            
//             <p className="text-center text-gray-600 mt-4">
//               Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "donor", // القيمة الافتراضية
    status: "pending", // القيمة الافتراضية
    phoneNumber: "",
    address: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:4000/api/signup", formData);
      setSuccess("تم التسجيل بنجاح!");
      setFormData({ firstName: "", lastName: "", email: "", password: "", phoneNumber: "", address: "" }); // تفريغ الحقول
      console.log("بيانات المستخدم:", response.data);
      navigate("/Login"); 
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ ما");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row-reverse">
        {/* قسم الصورة */}
        <div className="hidden md:block md:w-1/2 bg-blue-600 relative">
          <img
            src="/api/placeholder/600/800"
            alt="تسجيل حساب"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex flex-col justify-center items-center text-white p-8">
            <h1 className="text-3xl font-bold mb-4">مرحبًا بك!</h1>
            <p className="text-center text-lg">انضم إلينا وابدأ رحلتك معنا اليوم.</p>
          </div>
        </div>
        
        {/* قسم النموذج */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">إنشاء حساب</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأول</label>
                <input type="text" name="firstName" placeholder="الاسم الأول" value={formData.firstName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">اسم العائلة</label>
                <input type="text" name="lastName" placeholder="اسم العائلة" value={formData.lastName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
              </div>
            </div>
            
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
            <input type="email" name="email" placeholder="البريد الإلكتروني" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
            <input type="password" name="password" placeholder="كلمة المرور" value={formData.password} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
            <input type="text" name="phoneNumber" placeholder="رقم الهاتف" value={formData.phoneNumber} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
            
            <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
            <textarea name="address" placeholder="العنوان" value={formData.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required rows="3"></textarea>
            
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-lg">
              تسجيل
            </button>
          </form>
          <Link to={"/Login"}>
        <p className="text-center text-gray-600 mt-4">
          هل  تملك حسابًا؟ <a href="#" className="text-blue-600 hover:underline">تسجيل دخول</a>
        </p></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;