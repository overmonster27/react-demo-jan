import {useSelector} from "react-redux";

import {Cars, Form} from "../../components";


const CarsPage = () => {

    const {loading} = useSelector(state => state.cars);

    return (
        <div className="App">
            <Form/>
            <hr/>
            {loading && <div className="loader"></div>}
            <Cars/>
        </div>
    );
};

export {CarsPage};