import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import baseUrl from './baseUrl';

function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: ""
    });
    const handleTextChanges = (event: any) => {
        const {name, value} = event.target;
        setPost(prev => {
            return {...prev, 
                [name]: value 
            }
        })
    };
    const handleCreatePost = (event: any) => {
        event.preventDefault();
        console.log(post);
        axios.post(`${baseUrl}/create`, post)
        .then((res: any) => {
            console.log(res);
        })
        .catch((error: any) => {
            console.log(error);
        });
    }
    return <div>
        <h1>
            Create a post !!
        </h1>
        <Form>
            <Form.Group>
                <Form.Control name="title" placeholder='title' value={post.title} onChange={handleTextChanges}/>
                <Form.Control name="description" placeholder="description" value={post.description} onChange={handleTextChanges}/>
            </Form.Group>
            <Button onClick={handleCreatePost}>Create Post</Button>
        </Form>
        <Button onClick={() => { navigate(-1); }}>
            Back
        </Button>
    </div>
}

export default CreatePost;