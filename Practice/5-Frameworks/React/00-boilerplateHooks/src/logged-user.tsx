import React, { useContext } from "react";
import { MyContext } from "./demo";

export const LoggedUser = () => {
    const {username} = useContext(MyContext);
return <div>
    {username}
</div>

}
