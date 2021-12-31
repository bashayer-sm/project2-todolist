import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import {Routes, Route, Link} from 'react-router-dom';
import Todo from './component11/Todo'
import Add from './component11/Add'
import Register from './component11/Register'

function App() {
  const [Tasks, setTasks] = useState([])

  const [islogedin, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')


useEffect(()=>{
  getdata()
}, [])




  const getdata=()=>{
axios
.get('http://localhost:5000/tasks')
.then((respones)=>{
 // console.log('RESPONES', respones);
  console.log('DATA', respones.data);
  setTasks(respones.data)
})
.catch((err)=>{
  console.log('ERR', err);
});
  };


const postNewTask=(body)=>{
  axios
.post('http://localhost:5000/tasks', body)
.then((respones)=>{
 // console.log('RESPONES', respones);
  console.log('DATA', respones.data);
//  setTasks(respones.data)
getdata()

})
.catch((err)=>{
  console.log('ERR', err);
});
} 



const deleteTask =(id)=>{
  axios
.delete(`http://localhost:5000/tasks/${id}`)
.then((respones)=>{
 // console.log('RESPONES', respones);
  console.log('DATA', respones.data);
//  setTasks(respones.data)
getdata()

})
.catch((err)=>{
  console.log('ERR', err);
});
} 


//.....toggle (true /false)
const updateTask =(id, newstatus)=>{
  axios
.put(`http://localhost:5000/tasks/${id}/${!newstatus}`)
.then((respones)=>{
 // console.log('RESPONES', respones);
  console.log('DATA', respones.data);
//  setTasks(respones.data)
getdata()

})
.catch((err)=>{
  console.log('ERR', err);
});
} 
//...........تطبيقات الأسبوع الثامن................
const logout=()=>{
  setIsLoggedIn(false)
  setUserName('')
}

const mapOverTasks=Tasks.map((taskObj, i)=> <Todo key={i} task={taskObj}
deleteTask={deleteTask}  updateTask={updateTask}
/>)
  return (
    <div className="App">
      <p id='A'>THE SECOND PROJECT : TODO LIST </p>

<nav>
 <Link class="navbar navbar-dark" to='Register'>Register</Link> {'  *  '}
 <Link class="navbar navbar-dark"   to='Add'>Add</Link>
</nav>
<br/>
<br/>
<button className='btn btn-outline-info' onClick={logout}>LOGOUT</button>
      <Routes>
        <Route path="/Register" element={<Register/>}  />
        <Route path="/Add" element={<Add createfunction={postNewTask}  />}  />
      </Routes>
      
      
        <button onClick={getdata}>Get Task</button>
        {mapOverTasks}
    </div>
  );
}

export default App;
