import {Outlet} from "react-router-dom";

import {PostDetails} from "../../components";

const PostDetailSPage = () => {
 return (
  <div  className='Details'>
   <PostDetails/>
      <Outlet/>
  </div>
 );
};

export {PostDetailSPage};