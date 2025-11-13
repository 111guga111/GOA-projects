import { useState } from "react"


function Admin(){
    const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem('accounts')))
    const [records, setRecords] = useState(JSON.parse(localStorage.getItem('Records')))
    const {account} = JSON.parse(localStorage.getItem('status')) 
    const {Email} = account
    
    const others = accounts.filter(ac => ac.Email != Email )

    const Delete = (accoun) => {
        const newAcc = accounts.filter(acc => acc.Email !== accoun.Email);
        const newRec = { ...records }; 
        delete newRec[accoun.Email];    

        setAccounts(newAcc);
        setRecords(newRec);

        localStorage.setItem('accounts', JSON.stringify(newAcc));
        localStorage.setItem('Records', JSON.stringify(newRec));
    };


    return(<>
        <main className="flex flex-col items-center mt-10 p-5">
            <section className="w-full max-w-3xl">
                <h1 className="text-4xl font-bold mb-5 text-center p-1">All Accounts</h1>
                <ul className="flex flex-col gap-4">
                    {others.map((acco, i) => (
                        <li
                            key={i}
                            className="flex justify-between items-center border-2 border-gray-300 rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition-all"
                        >
                            <div className="flex flex-col gap-1 p-1">
                                <p><span className="font-semibold">Name:</span> {acco.name}</p>
                                <p><span className="font-semibold">Email:</span> {acco.Email}</p>
                                <p><span className="font-semibold">Pass:</span> {acco.Pass}</p>
                                <p><span className="font-semibold">Bio:</span> {acco.Bio || 'None'}</p>
                                <button className="blButtonStyle" onClick={() => Delete(acco)}>Delete </button>
                            </div>
                            <img 
                                src={acco.Profile || '/img/profile.webp'} 
                                alt="Profile" 
                                className="w-30 h-30 rounded-full border-3 object-cover ml-5"
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </main>


    </>)
}

export default Admin