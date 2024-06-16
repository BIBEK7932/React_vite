
function printHello(event){
    console.log(event)
    console.log("Hello")
}
function pHover(){
    console.log(" hover")

}
function handleDoubleClick(){
    alert("Double Clicked..")
}

export default function Button(){


    return(<>
    <button onClick={printHello}>Click Me</button>
    <p onMouseOver={pHover} > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus porro dolore voluptas reprehenderit velit repellat voluptates praesentium sunt rerum sint exercitationem necessitatibus sit, inventore est ipsam officiis impedit soluta consequuntur!
    </p>
    <button onDoubleClick={handleDoubleClick}>Double Click</button>
    </>)
}