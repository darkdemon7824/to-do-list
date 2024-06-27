import React from "react";
import '../App.css';
function Task(){
return (
    <div>
 <div className="TaskClass"><div className="TaskDesc" >
    <p>will do react 3-6:30 pm</p></div>
    <div className="TaskButton"><button >Edit</button><button>delete</button></div></div>
    <div className="TaskClass"><div className="TaskDesc" >
    <p>live class on mern 7-9 pm </p></div>
    <div className="TaskButton"><button>Edit</button><button>delete</button></div></div>
    <div className="TaskClass"><div className="TaskDesc" >
    <p>dinner 9-10 pm</p></div>
    <div className="TaskButton"><button>Edit</button><button>delete</button></div></div>
    <div className="TaskClass"><div className="TaskDesc" >
    <p>college work and preparation for lab internal 10-1 am</p></div>
    <div className="TaskButton"><button>Edit</button><button>delete</button></div></div>
    </div>

);
}
export default Task;