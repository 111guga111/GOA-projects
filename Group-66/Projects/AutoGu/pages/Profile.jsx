import { useAuth } from "../Context/AuthContext";


function Profile() {
  const { user, adminRegister } = useAuth();
  
  return (
    <div>
      <h1>Profile Page</h1>
      <img src={user.imageURL} onError={(e)=> e.currentTarget.src =".\public\images\Profile\profile.webp"}/>

      {!user.admin &&
        <form onSubmit={(e) => adminRegister(e)}>
          <input name="adminPass" placeholder="Enter Admin Pass"  />
          <button type="Submit">Submit</button>
        </form>
      }

    </div>
  )
}

export default Profile;
