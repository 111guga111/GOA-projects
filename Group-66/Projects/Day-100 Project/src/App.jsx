
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav'
import Account from './pages/account'
import { useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Arcade from './pages/Arcade'
import Home from './pages/Home'
import Footer from './components/Footer'
import Library from './pages/Library'
import Admin from './pages/Admin'



function App() {
  const [status,setStatus] = useState({state:false,account:null, admin:false})
  const [tempProfile, setTempProfile] = useState('');
  const [tempName, setTempName] = useState('');
  const [tempBio, setTempBio] = useState('')
  const [tempCode, setTempCode] = useState('')
  const code = `123`

  useEffect(() =>{
    setTempProfile('')
    setTempName('')
    setTempBio('')
    try{
      const savedStatus = JSON.parse(localStorage.getItem('status'));
      setStatus(savedStatus || { state: false, account: null, admin:false });

    }catch{
      setStatus({ state: false, account: null, admin:false})
    }
    
  },[])

  const save = (e)=>{
    e.preventDefault()

    const form = e.target
    const { Name, Email, Pass, PassConfirm, Profile} = form;
    const person = {}

    let valid = true

    
    Name.value.length > 0 ? person.name = Name.value : valid = false;

    Email.value.length > 5 ? person.Email = Email.value : valid = false;

    (Pass.value.length >= 8 && Pass.value.length <= 64) ? person.Pass = Pass.value : valid = false;
    
    PassConfirm.value !== Pass.value ? valid = false : null;

    person.Profile = Profile.value
    person.Bio = ''

    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const records = JSON.parse(localStorage.getItem('Records')) || {};

    const exists = accounts.some(acc => acc.Email === Email.value);

    if(!valid){
      alert("Invalid accaunt, Please Check Requirements for account")
    }else if (exists) {
      alert("Email already exists");
    }else {
      accounts.push(person);
      localStorage.setItem('accounts', JSON.stringify(accounts));

      records[Email.value] = {}
      localStorage.setItem('Records', JSON.stringify(records) )

      e.target.reset()
      alert("Account saved!");
    }
    
  }

  const log = (e)=>{
    e.preventDefault()

    const form = e.target
    const {Email,Pass} = form

    const accounts = JSON.parse(localStorage.getItem(`accounts`)) || []
    const Account = accounts.find(acc => acc.Email === Email.value && acc.Pass === Pass.value);


    const {account} = JSON.parse(localStorage.getItem('status')) || { state: false, account: null , admin:false , image:'/img/profile.webp'};

    if (account && account.Email === Email.value && account.Pass === Pass.value ){
      form.reset()
      alert("already Logged in")
    }else{
      if (Account){ 
        const newStatus = {...status, state:true, account:Account}
        localStorage.setItem('status', JSON.stringify(newStatus))
        setStatus(newStatus)
        form.reset()
      }else{
        alert("Invalid email or password");
      }
    }

    
  }

  const LogOut = ()=>{
    const newStatus = {state:false, account:null, admin:false}
    localStorage.setItem('status', JSON.stringify(newStatus))
    setStatus(newStatus)
  }
 

  const handleTemp = (e) => {
    const {name, value} = e.target

    if(name === 'Profile'){
      const trimmed = value
      setTempProfile(trimmed || null);
    }else if( name === 'Name'){
      setTempName(value)
    }else{
      setTempBio(value)
    }
  };

  const profileSave = () => {
    if (status?.account) {
      const nickName = tempName || status.account.name
      const prof = tempProfile || status.account.Profile
      const des = tempBio || status.account.Bio
    
      const newStatus = {...status, account: {...status.account, Profile: prof, name:nickName, Bio:des}};


      localStorage.setItem('status', JSON.stringify(newStatus));
      setStatus(newStatus);

      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      const updatedAccounts = accounts.map(acc =>
        acc.Email === status.account.Email ? { ...acc, Profile: prof, name:nickName, Bio:des} : acc
      );
      localStorage.setItem('accounts', JSON.stringify(updatedAccounts));

      setTempProfile('');
      setTempName('')
      setTempBio('')
    }else{
      alert(`make sure your Logged in`)
    }
  }


  
  const handletempCode = (e) =>{
    const {value} = e.target

    setTempCode(value)
  }
  const adminCheck = () => {
    const newStatus = tempCode === code ? {...status, admin:true} : {...status, admin:false}
    setStatus(newStatus)
    localStorage.setItem('status',JSON.stringify(newStatus))

    newStatus.admin ? setTempCode('') : alert('wrong')

  }

  return (
    <>

      <BrowserRouter>
        <Nav status={status}/>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/Profile' element={
            <Profile status={status} handleTemp={handleTemp} profileSave={profileSave} tempProfile={tempProfile} setTempName={setTempName} tempName={tempName} tempBio={tempBio} adminCheck={adminCheck} handletempCode={handletempCode} tempCode={tempCode}/>} 
          />

          <Route path='/Arcade/*' element={<Arcade status={status}/>} />
          <Route path='/Account/*' element={<Account save={save} log={log} LogOut={LogOut} />}/>
          <Route path='/Library' element={<Library status={status} />} />
          <Route path='/Admin' element={<Admin />}  />
          
        </Routes>

        <Footer status={status} />
      </BrowserRouter> 

      

    </>
  )
}

export default App
