// import {useForm} from "react-hook-form";
// import {authService} from "../../services";
// import {useState} from "react";
// import {useNavigate} from "react-router-dom";
//
// const LoginPage = () => {
//
//     const {register, handleSubmit} = useForm();
//     const [error, setErrors] = useState(null);
//     const navigate = useNavigate();
//
//
//     const login = async (userCredential) => {
//         try {
//           await authService.login(userCredential);
//             navigate('/cars')
//         } catch (e) {
//             if (e.response.status === 401) {
//                 setErrors(e.response.data)
//             }
//         }
//     }
//
//     return (
//         <div>
//             <div>
//                 <form onSubmit={handleSubmit(login)}>
//                     <input placeholder={'User name'} {...register('username')}/>
//                     <input placeholder={'Password'} {...register('password')}/>
//                     <button>click</button>
//                 </form>
//             </div>
//
//             {error?.detail &&
//                 <div>
//                     {error.detail}
//                 </div>
//             }
//         </div>
//     );
// };
//
// export {LoginPage};


import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (userCredential) => {
        try {
            await authService.login(userCredential);
            navigate('/cars')
        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data)
            }
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input placeholder={'username'} {...register('username')}/>
                    <input placeholder={'password'} {...register('password')}/>
                    <button>login</button>
                </form>
            </div>
            {error?.detail &&
                <div>
                    {error.detail}
                </div>
            }
        </div>
    );
};

export {LoginPage};