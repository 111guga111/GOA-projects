import { useAdmin } from "../Context/adminContext";


function AdminPanel(){
    const {handleAdminSubmit} = useAdmin();

    return(<>

        <form onSubmit={(e) => (handleAdminSubmit(e)) }>
            <input name="brand" placeholder="Brand (e.g. Toyota)" required />

            <input name="model" placeholder="Model (e.g. Corolla)" required />

            <input name="year" type="number" placeholder="Year (e.g. 2020)" required />

            <input name="price" type="number" placeholder="Price (e.g. 15000)" required />

            <input name="imageUrl" type="url" placeholder="Image URL" required />

            <button type="submit">Add The Car</button>
        </form>
    </>)
}


export default AdminPanel; 