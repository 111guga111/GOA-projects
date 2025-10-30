import { useState } from "react"


const App = () => {
    const [acc,setAcc] = useState('')

    const asy = async(nameA)=> {
        try{
            const fet = await fetch(`https://api.github.com/users/${nameA}`)
            const data = await fet.json()
            console.log(data)
            setAcc(data)
        }catch(err){
            console.log(err)
        }
        
    }

    const nameFunc = (e) => {
        e.preventDefault();
        const form = e.target
        const {name} = form
        asy(name.value)
    }



    return(
        
        <>
          <main className=" flex flex-col justify-center w-200 items-center gap-10 border-2 border-black text-amber-50 bg-blue-950 ">
              <div>
                  <img src={acc.avatar_url} className=" border-2 border-black rounded-2xl"  />
                  <h1>{acc.name} </h1>
              </div>
              
              <form onSubmit={nameFunc} >
                  <input type="text" name='name' placeholder='Enter User' className="border-2 border-black" />
                  <button type='submit' className="border-black border-2 w-20 bg-amber-50 text-black hover:bg-black hover:text-white  cursor-pointer ">Enter</button>
              </form>
          </main>
        </>
    )
}

export default App;
