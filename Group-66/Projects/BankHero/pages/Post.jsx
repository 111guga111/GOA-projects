import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/auth.context";

function Post() {
    const navigate = useNavigate()
    const {user} = useAuth();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePost = () => {
        const allPosts = JSON.parse(localStorage.getItem('posts')) || []
        const newPost = { ...formData, email:user.email, fullname:user.fullname, id:`${Date.now()}-${Math.random()}`};
        localStorage.setItem('posts', JSON.stringify([...allPosts, newPost]))
        setFormData({
            title: "",
            description: "",
            image: ""
        })
        navigate('/Profile')
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-gray-700">Create Post</h2>

                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                    type="button"
                    onClick={handlePost}
                    className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-md text-sm mt-2 w-32 self-start"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Post;
