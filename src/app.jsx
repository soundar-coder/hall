import { useState } from "react"

function App(){
    
    const [roll,setroll]=useState("")
  

  
    
    function handleinput(event){
        setroll(event.target.value)
    }
    function btn(){
        if(roll>=2105000 && roll<=2105061){
             let examno=roll-2105000;
            window.location.replace(`https://gackarurcoe.com/hallticketpdf.php?sid=${9945+examno}`)
        }
        else{
            alert("Enter a correct exam no")
        }
        
            

      }
  
     
    return(<div className="m-5 p-3 " style={{backgroundColor:'#D5CCD1'}}>
        
        <div>
            <h1 className="font-bold"> Hi Guys 👋</h1>
            <p>Government arts college ,karur </p>
            <p>Hallticket-2024</p>
            <input className="border border-black " placeholder="Enter a roll no"  onChange={handleinput}></input><br></br>
            <button className="bg-yellow-600 text-white p-1 my-2 " onClick={btn}> Download</button>
        </div>
    </div>)
}

export default App