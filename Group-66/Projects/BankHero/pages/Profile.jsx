import { useNavigate } from "react-router";
import { useAuth } from "../contexts/auth.context";
import { useState } from "react";

const Profile = () => {
    const { user } = useAuth(); 
    const navigate = useNavigate();
    const splitedFullname = user.fullname.toUpperCase().split(" ");
    const [allPosts, setAllPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);
    const posts = allPosts.filter(post => post.email == user.email) || [];
    const otherPost = allPosts.filter(post => post.email !== user.email) || [];

    const handlePost = () => {
        navigate('/Post');
    };

    const deletePost = (deletedPost) => {
        const updatedAllPosts = allPosts.filter(post => post.id !== deletedPost.id);
        setAllPosts(updatedAllPosts);
        localStorage.setItem('posts', JSON.stringify(updatedAllPosts));
    };

    return (
        <div>
            
            <div className="bg-gray-50 flex items-center justify-center p-6">
                <div className="mt-10 w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                    
                   
                    <div className="md:w-1/3 bg-linear-to-br from-indigo-600 to-purple-600 p-8 flex flex-col items-center justify-center text-white">
                        <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center text-3xl font-semibold">
                            {splitedFullname[0][0] + splitedFullname[1][0]}
                        </div>
                        <h2 className="mt-4 text-xl font-semibold">{user.fullname}</h2>
                        <p className="text-sm opacity-90">Premium Member</p>
                    </div>

                    
                    <div className="md:w-2/3 p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-gray-700">Profile</h3>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md text-sm"
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    onClick={handlePost}
                                    className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md text-sm"
                                >
                                    Post
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md">
                                <div>
                                    <p className="text-sm text-gray-500">Full name</p>
                                    <p className="mt-1 text-gray-800 font-medium">{user.fullname}</p>
                                </div>
                                <div className="mt-3 sm:mt-0 text-sm text-gray-500">Verified</div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md">
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="mt-1 text-gray-800 font-medium">{user.email}</p>
                                </div>
                                <div className="mt-3 sm:mt-0 text-sm text-gray-500">Primary</div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md">
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="mt-1 text-gray-800 font-medium">+1 (555) 123-4567</p>
                                </div>
                                <div className="mt-3 sm:mt-0 text-sm text-gray-500">Mobile</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="space-y-16 max-w-3xl mx-auto mt-10">

                
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 border-gray-200">
                        Your Posts
                    </h2>

                    <ul className="space-y-6">
                        {posts && posts.length > 0 ? (
                            posts.map(post => (
                                <li key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                                    <div className="flex items-center p-4">
                                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                                            {post.fullname.split(" ")[0][0] + post.fullname.split(" ")[1][0]}
                                        </div>
                                        <div className="ml-3">
                                            <p className="font-semibold text-gray-800">{post.fullname}</p>
                                            <p className="text-xs text-gray-500">Just now</p>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800">{post.title}</h3>
                                        <p className="mt-1 text-gray-700">{post.description}</p>
                                    </div>

                                    {post.image && (
                                        <div className="w-full">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                onError={(e) => (e.target.style.display = 'none')}
                                                className="w-full max-h-80 object-contain"
                                            />
                                        </div>
                                    )}

                                    <div className="flex justify-center px-4 py-2 border-t border-gray-200 text-sm text-gray-500">
                                        <button
                                            className="hover:text-red-600"
                                            onClick={() => deletePost(post)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mt-6">No posts yet.</p>
                        )}
                    </ul>
                </section>

               
                <section className="mb-50">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 border-gray-200">
                        Posts From Others
                    </h2>

                    <ul className="space-y-6">
                        {otherPost && otherPost.length > 0 ? (
                            otherPost.map(post => (
                                <li key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                                    <div className="flex items-center p-4">
                                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                                            {post.fullname.split(" ")[0][0] + post.fullname.split(" ")[1][0]}
                                        </div>
                                        <div className="ml-3">
                                            <p className="font-semibold text-gray-800">{post.fullname}</p>
                                            <p className="text-xs text-gray-500">Just now</p>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800">{post.title}</h3>
                                        <p className="mt-1 text-gray-700">{post.description}</p>
                                    </div>

                                    {post.image && (
                                        <div className="w-full">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                onError={(e) => (e.target.style.display = 'none')}
                                                className="w-full max-h-80 object-contain"
                                            />
                                        </div>
                                    )}
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mt-6">
                                No posts yet from others.
                            </p>
                        )}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Profile;
