import {Form} from "../components";
import {Cars} from "../components";
import {useSelector} from "react-redux";

const MainLayout = () => {

    const {loading} = useSelector(state => state.cars);

    return (
        <div>
            <Form/>
            <hr/>
            {loading && <h1>Loading...................</h1>}
            <Cars/>
        </div>
    );
};

export {MainLayout};