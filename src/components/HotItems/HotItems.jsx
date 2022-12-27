import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@reach/router";
import profile from '../../images/profile.svg'
import { BsFillPatchCheckFill, BsFillPlusCircleFill } from "react-icons/bs";


function HotItems({token}) {

  const [thumbs, setThumbs] = useState(false);
  const handleLike = () => {
    setThumbs(!thumbs);
  };

  return (
      <Link to={`/token/${token.id}`}>
        <div className="flex flex-col justify-center w-full w-[250px] bg-[#FFFFFF] rounded-[20px] drop-shadow scaling">
          <div>
            <div className="justify-center">
              <img src={token.image} alt="" onContextMenu={(e)=> e.preventDefault()}  className="h-48 w-full rounded-t-xl object-center object-cover"/>
            </div>
          </div>
          <div className="px-[20px] py-[5px]">
            <div className="mt-2 items-details">
              <h1 className="">{token.title}</h1>
              <h1>{token.floor}</h1>
            </div>
          </div>

        </div>
       
      </Link>
                
  );
}

export default HotItems;
