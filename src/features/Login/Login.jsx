// import React,{useEffect,useState} from 'react';
// import LoginForm from './components/LoginForm';
// import { Route} from 'react-router-dom';
// import Product from "../Product/product"
// import { useHistory, useLocation } from 'react-router-dom';
// // import APP_CONSTANTS from '../../constants/appConstants'
// function Login(props) {
//     const User = {
//         email : "luongdang1999@gmail.com",
//         password : "Ducluong99",
//     }
//     const  [user,setUser] = useState({email:"",password:""});
//     const [error ,setError] = useState("");
//     const history= useHistory();
//     const Login = details =>{
//         console.log(details);
//         if(details.email==User.email && details.password==User.password){
//             console.log("Logging")
//             setUser({
//                 email:details.email,
//             })
//         }else {
//             setError("Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại")
//         }
//     }
//     // useEffect(() => {
//     //     const token = localStorage.getItem(APP_CONSTANTS.USER_TOKEN)
//     //     if (token) {
//     //         history.replace('/')
//     //     }
//     // }) 
//     return (
//         <div>
//             {(user.email !="")?(
//                 <div className="welcome">
//                   { history.push(('/'))}
//                 </div>
//             ):(
//                 <LoginForm Login={Login} error={error}/>
//             )}
//         </div>
//     );
// }
// export default Login;