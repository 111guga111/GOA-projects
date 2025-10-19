
function Form({formState, handleChange, handleAdd, messages, handleReset}) {
    return(<>
        <form>
          <input type="text" onChange={handleChange} name="name" value={formState.name} placeholder="Product name" /> <br />
          <input type="text" onChange={handleChange} name="description" value={formState.description} placeholder="Product description" /> <br />
          <input type="number" onChange={handleChange} name="price" value={formState.price} placeholder="Product price" /> <br />
          <input type="number" onChange={handleChange} name="quantity" value={formState.quantity} placeholder="Product quantity" /> <br />
          <button type="button" onClick={handleAdd}>Submit</button> <br />
          <button type="reset" onClick={handleReset}>Reset</button>

          {
            
            messages.length != 0 && (
              <div>
                <h3>Some inputs need to be filled!</h3>
                {
                  messages.map(message => <p key={message}>{message}</p>)
                }
              </div>
            )

          }
        </form>
    </>)
}


export default Form;