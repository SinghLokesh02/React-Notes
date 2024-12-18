import React from'react';
import ReactDOM from'react-dom/client';

// React Element

let name = "Lokesh Singh"
let h1 = React.createElement('h1',{},"Hello world");
let h2 = <h2 id="hello" className='hey' >Hey I am {100 +100} </h2>
console.log(h1,h2);

// Title 
const title = <p>This is Title</p>

let Card = ()=>{
    return <div>
        <div className="img">
            <img src="https://parceljs.org/avatar.b1be591d.avif" alt="" />
        </div>
        <h1>{title}</h1>
        <div className="desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa esse eveniet magni dolore? Tenetur earum dolorum nam saepe neque necessitatibus voluptas molestiae. Illo animi quis soluta in, maiores nemo!</p>
        </div>
    </div>
}

let root = ReactDOM.createRoot(document.getElementById('root'));
let arr = [<Card/>,<Card/>]

root.render(arr);