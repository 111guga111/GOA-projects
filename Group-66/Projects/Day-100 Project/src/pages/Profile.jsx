import { useEffect, useState } from "react";
import ProfInfo from "../components/profInfo";

function Profile({ status, handleTemp, profileSave, tempProfile, tempName, tempBio, handletempCode, tempCode, adminCheck}) {
  const { name = "Guest" } = status?.account || {};
  const {Bio} = status?.account || ''
  const imageSrc = tempProfile?.trim() || status?.account?.Profile || '/img/profile.webp';
  const { Email = '' } = status?.account || {};
  const records = JSON.parse(localStorage.getItem('Records')) || {};
  const EmailRecord = records[Email] || {};
  const memoryScore = EmailRecord.memoryRecord || null;
  const reflexScore = EmailRecord.reflexRecord || null;
  
  

  

  return (
    <main className="h-screen">
      <div className="flex flex-col lg:flex-row justify-center p-4 gap-15 mt-10 w-full max-w-5xl mx-auto rounded-3xl">

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-bold">My profile:</h1>
            {(tempProfile || tempName || tempBio) && <p className="text-red-600 text-sm">(Temporary Profile)</p>}
          </div>
          <img
            className="border-3 border-black rounded-2xl w-95 h-100 object-cover"
            src={imageSrc}
            onError={(e) => e.target.src = '/img/profile.webp'}
            alt="Profile"
          />
          <div className="flex justify-center items-center gap-1 mt-5 p-1"> 
            <input placeholder="Admin Code" name="admintempCode" onChange={handletempCode} value={tempCode} className="wtInputStyle text-center" />
            <button className="blButtonStyle w-20" onClick={adminCheck} >Enter</button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ProfInfo
            name={name}
            memoryScore={memoryScore}
            reflexScore={reflexScore}
            tempProfile={tempProfile}
            handleTemp={handleTemp}
            profileSave={profileSave}
            tempName={tempName}
            tempBio={tempBio}
            Bio={Bio}
          />

          
        </div>
      </div>

    </main>
  );
}

export default Profile;
