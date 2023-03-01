import React, { useState } from 'react'
import pic from "./images/pic1.png";
import "./App.css"

const Todo = () => {
  
  const [search, setSearch] = useState('');
  const [list , setList] = useState ([]);
  const [toggle , setToggle] =useState(true);
  const [editId, setEditId] = useState(null);

  const addItems =() => {
    if(!search){
      alert(`pls enter the value`);
    }else if (search && !toggle) {
      setList(
        list.map((elem)=>{
        if(elem.id === editId){
          return{...elem, name:search}
        }
        return elem;
    })
    
    );
    setToggle(true);
    setSearch('');
    setEditId (null);
    }else{
      const allSearch = {id:new Date().getTime().toString(), name:search}
      setList([...list,allSearch]);
      setSearch('');
    }
    
  }

  const deleteItems = (id) => {

    const updatedItems = list.filter((curE)=>{
        return curE.id !== id ;
    })
    setList(updatedItems);
  }

  const updateItems = (id) => {
    const editItems = list.find((element)=>{
        return element.id === id    
    });
    setToggle(false);
    setSearch(editItems.name);
    setEditId (id);
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
                {
                  toggle ? 
                  <i className="fa fa-plus" title='Add Items' onClick={addItems}></i> :
                  <i className="fa fa-edit" title='Update Items' onClick={addItems}></i>
                }
                
            </div>
             <div className="showItems">
                { list.map((element)=>{
                  return(
                    <div className="eachItem" key={element.id}>
                    <h2>{element.name}</h2>
                    <div className="todo-btn">
                    <i className="fas fa-edit" title='Update Items' onClick={() =>{updateItems(element.id);}} ></i>
                    <i className="fas fa-trash-alt" title='Delete Items' onClick={() =>{deleteItems(element.id);}}></i>
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
