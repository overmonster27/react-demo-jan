import {Users} from "../Users/Users";
import {useState} from "react";

import {Posts} from "../Posts/Posts";

const Constructor = () => {
    const [userId, setUserId] = useState(null)

    return (
        <div>
            <Users setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export {Constructor};