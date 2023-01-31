import {Albums} from "../../Components";
import {useContext} from "react";
import {MyContext} from "../../index";



const AlbumPage = () => {

const context = useContext(MyContext);

    return (
        <div>
            {/*<Albums/>*/}
            {/*<div>name:{context.name}</div>*/}
            {/*<div>age:{context.age}</div>*/}
            {JSON.stringify(context)}
        </div>
    );
};

export {AlbumPage};