import Button from './Button'

export default function Form () {
    
    return(
        <form className="form">
            
            <label>

                <h3>Log in</h3>

            </label>

            <input type='text' placeholder="Enter Username"></input>

            <br></br>

            <label>
                <h3>Password</h3>
            </label>

            <input type='text' placeholder="Enter Password"></input>

            <br></br>

            <Button />

        </form>
    )
}