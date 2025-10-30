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
            <div>
                <img src={acc.avatar_url}/>
                <h1 >{acc.name}</h1>
            </div>
            
            <form onSubmit={nameFunc} >
                <input type="text" name='name' placeholder='Enter User' />
                <button type='submit'>Enter</button>
            </form>
        </>
    )
}

export default App;
