import React, { useEffect, useState } from "react";
import axios from "axios";

export async function GetTasks() {

 	const [tasks, setTasks] = useState();

	const basePath = 'http://localhost:5000/qc';

  /**/
  useEffect(() => {
    axios.get(basePath+'/tasks/1')
    .then(function (response) {
      setTasks(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error);
    })
  }, []); 

  return (
      <div>
      <p>{tasks.taskId}</p>
    </div>
  )  ;
  
}





























// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const GetTasks = () => {

//  	const [tasks, setTasks] = useState();

// 	const basePath = 'http://localhost:5000/qc';

//   useEffect(() => {
//     axios.get(basePath+'/tasks/1')
//     .then(function (response) {
//       setTasks(response.data);
//     })
//     .catch(function (error) {
//       console.log('Error:', error);
//     })
//   }, []); 

//   return (
//       <div>
//       <p>{tasks.taskId}</p>
//     </div>
//   )  ;
  
// }

// export default GetTasks;