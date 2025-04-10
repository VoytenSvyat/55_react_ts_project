import { useContext } from "react";

import { MessageComponent, MessageTitle } from "./styles";
import { BlogContext } from "../BlogManagement/BlogManagement";

function Message() {
    const postMessage = useContext(BlogContext);
    return (
        <MessageComponent>
            <MessageTitle>{postMessage}</MessageTitle>
        </MessageComponent>
    )
}

export default Message