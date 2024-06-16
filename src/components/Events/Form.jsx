function handleSubmit(event){
    event.preventDefault()
    console.log("Submitted")

}
export default function Form(){
    return(
        <form>
            <input type="text" name="" id="" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}