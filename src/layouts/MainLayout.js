import {Form} from "../components/Form/Form";
import {Cars} from "../components/Cars/Cars";

const MainLayout = () => {
    return (
        <div>
            <Form/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {MainLayout};