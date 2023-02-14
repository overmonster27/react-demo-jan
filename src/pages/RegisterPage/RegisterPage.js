import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {userService} from "../../services";

const RegisterPage = () => {

    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
           await userService.create(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }
    };
    return (<div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type={"text"} placeholder={'User name'} {...register('username')}/>
                    <input type={"text"} placeholder={'Password'} {...register('password')}/>
                    <button>Register</button>
                </form>
            </div>
            {error && <div>{JSON.stringify(error)}</div>}
        </div>
    );
};

export {RegisterPage};
