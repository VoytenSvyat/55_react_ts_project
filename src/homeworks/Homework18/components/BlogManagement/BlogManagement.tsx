import { useState, createContext, ChangeEvent } from "react";

import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Card from "../Card/Card";
import { BlogManagementTitle, BlogManagementWrapper } from "./styles";

export const BlogContext = createContext<string | null>(null);

function BlogManagement () {
    const [inputValue, setInputValue] = useState('');
    const [postMessage, setPostMessage] = useState<string| null>(null)
    
    const handlePost = () => {
        setPostMessage(inputValue);
        setInputValue('');
    }

   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
      }

    return (
        <BlogContext.Provider value={postMessage}>
        <BlogManagementWrapper>
            <BlogManagementTitle>Blog</BlogManagementTitle>
            <Input 
            name="message"
            label="Message"
            id="message_id"
            placeholder="Please enter your message"
            value={inputValue}
            onChange={onChange}
            />
            <Button name="Post" onClick={handlePost}/>
            <Card />
        </BlogManagementWrapper>
        </BlogContext.Provider>
    )
}

export default BlogManagement 