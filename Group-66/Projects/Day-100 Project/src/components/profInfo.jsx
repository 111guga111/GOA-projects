function ProfInfo({ name, memoryScore, reflexScore, tempProfile, handleTemp, profileSave, tempName, tempBio, Bio }) {
  return (
    <div className="flex flex-col justify-start items-center border-2 border-black p-5 bg-gray-100 rounded-2xl gap-4 w-full max-w-md shadow-lg">
      
      <h1 className="text-2xl font-bold text-center">Name: {tempName || name}</h1>

      <div className="w-full">
        <h1 className="text-lg font-semibold text-center mb-1">Bio:</h1>
        <div className="bg-gray-200 w-full h-20 p-3 rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500">
          <p className="text-sm">{tempBio || Bio }</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full items-center">
        <h3 className="text-md font-medium">Memory Record: {memoryScore ?? "-"}</h3>
        <h3 className="text-md font-medium">Reflex Record: {reflexScore ?? "-"}</h3>
      </div>

      <div className="flex flex-col gap-4 w-full mt-4">
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="font-semibold">Change Name:</label>
          <input
            className="w-full h-10 px-2 border rounded-md wtInputStyle text-center"
            type="text"
            placeholder="Name"
            name="Name"
            value={tempName || ''}
            onChange={handleTemp}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="font-semibold">Change Bio:</label>
          <input
            className="w-full h-10 px-2 border rounded-md wtInputStyle text-center"
            type="text"
            placeholder="Bio"
            name="Bio"
            value={tempBio || ''}
            onChange={handleTemp}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="font-semibold">Change Photo:</label>
          <input
            className="w-full h-10 px-2 border rounded-md wtInputStyle text-center"
            type="text"
            placeholder="Profile Photo"
            name="Profile"
            value={tempProfile || ''}
            onChange={handleTemp}
          />
        </div>
      </div>

      <button
        onClick={profileSave}
        className="blButtonStyle mt-6 px-4 py-2 w-full text-lg font-semibold rounded-xl"
      >
        Save Profile
      </button>
    </div>
  );
}

export default ProfInfo;
