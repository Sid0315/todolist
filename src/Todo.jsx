import React, { useState } from 'react'
import pic from "./images/pic1.png";
import "./App.css"

const Todo = () => {
  
  const [search, setSearch] = useState('');
  const [list , setList] = useState ([]);

  const addItems =() => {
    if(!search){

    }else{
      setList([...list,search]);
      setSearch('');
    }
    
  }

  const deleteItems = (id) => {
    const updatedItems = list.filter((curE, ind)=>{
        return ind !== id ;
    })
    setList(updatedItems);
  }

  const removeAll = () => {
    setList([]);
  }

  return (
    <>
      <div className="main_div">
        <div className="child_div">
            <figure>
                <img src={pic} alt="pic" />
                <figcaption>Add Your List Here 👇</figcaption>
            </figure>
            <div className="addItems">
                <input 
                type="text" 
                placeholder='Add Your Item'
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}

                />
                <i className="fa fa-plus" title='Add Items' onClick={addItems}></i>
            </div>
             <div className="showItems">
                { list.map((element,ind)=>{
                  return(
                    <div className="eachItem" key={ind}>
                    <h2>{element}</h2>
                    <div className="todo-btn">
                    <i className="fas fa-trash-alt" title='Delete Items' onClick={() =>{deleteItems(ind);}}></i>
                    </div>
                    </div>
                  )
                  })
                }
            </div>
            
            <div className="showItems">
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}> <span>CHECK LIST</span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
