function Rules(){
    return(<>
        <div className="text-center w-[550px] text-xl mt-10 mx-auto">
          <h3 className=" text-2xl mb-3">Sign-Up Rules</h3>
          <ul className="flex flex-col gap-2.5">
            <li>Username must not be empty.</li>
            <li>Email must be at least 6 characters long.</li>
            <li>Password must be between 8 and 64 characters.</li>
            <li>Confirm Password must match the password exactly.</li>
            <li>Email must be unique (not already registered).</li>
          </ul>
        </div>
    </>)    
}

export default Rules