// import React, { useState, useEffect } from "react";
// import MetaData from "../layouts/MataData/MataData";
// import Sidebar from "./Siderbar";
// import Navbar from "./Navbar";
// import useStyles from "../User/LoginFromStyle";
// import { TextField, Button } from "@mui/material";
// import axios from "axios";
// import { baseURL } from "../utils/constant";
// import { useRef } from "react";
// import AdminMessageList from "./adminMessageList";
// import { Input } from "@material-ui/core";

// function CreateUser() {
//   const [toggle, setToggle] = useState(false);
//   const [input, setInput] = useState("");
//   const [secondInput, setSecondInput] = useState("");

//   const [images, setImages] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);
//   const [tasksz, setTasksz] = useState([]);
//   const [updateUI, setUpdateUI] = useState(false);
//   const [updateId, setUpdateId] = useState(null);
//   const fileInputRef = useRef();

//   const classes = useStyles();
//   // togle handler =>
//   const toggleHandler = () => {
//     console.log("toggle");
//     setToggle(!toggle);
//   };
//   const createProductImagesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages([]);
//     setImagesPreview([]);

//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((old) => [...old, reader.result]);
//           setImages((old) => [...old, reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };
//   useEffect(() => {
//     axios.get(`${baseURL}/get`).then((res) => {
//       console.log(res.data);
//       setTasksz(res.data);
//     });
//   }, [updateUI]);

//   const createdAt = (message) => {
//     const createdAt = new Date(message.createdAt);
//     const options = {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//       timeZone: "Asia/Kolkata",
//     };

//     const formatter = new Intl.DateTimeFormat("en-IN", options);
//     const formattedDate = formatter.format(createdAt);
//     return formattedDate;
//   };

//   const addTasks = () => {
//     axios
//       .post(`${baseURL}/save`, { task: input, secondtasks: secondInput })
//       .then((res) => {
//         console.log(res.data);
//         setSecondInput("");
//         setUpdateUI((prevState) => !prevState);
//       });
//   };
//   const updateMode = (id, text) => {
//     setSecondInput(text);
//     setUpdateId(id);
//   };

//   const updateTasks = () => {
//     axios
//       .put(`${baseURL}/update/${updateId}`, {
//         task: input,
//         secondtasks: secondInput,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setUpdateUI((prevState) => !prevState);
//         setUpdateId(null);
//         setSecondInput("");
//       });
//   };

//   return (
//     <>
//       <>
//         <MetaData title={"Notice"} />
//         <div className={classes.updateProduct}>
//           <div
//             className={
//               !toggle ? `${classes.firstBox1}` : `${classes.toggleBox1}`
//             }
//           >
//             <Sidebar />
//           </div>

//           <div className={classes.secondBox1}>
//             <div className={classes.navBar1}>
//               <Navbar toggleHandler={toggleHandler} />
//             </div>

//             <div
//               className={`${classes.formContainer} ${classes.formContainer2}`}
//             >
//               <main>
//                 <div className="heading">
//                   <h1>Ask your Question</h1>
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     label="Reply"
//                     multiline
//                     rows={1}
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                   />
//                   <Button variant="bordered" component="label">
//                     Upload File
//                     <input
//                       type="file"
//                       onChange={createProductImagesChange}
//                       multiple
//                       ref={fileInputRef}
//                     />
//                   </Button>
//                   <Button
//                     variant="contained"
//                     className={classes.loginButton}
//                     fullWidth
//                     type="submit"
//                     onClick={updateId ? updateTasks : addTasks}
//                   >
//                     {updateId ? "Update Message" : "Send Message"}
//                   </Button>
//                 </div>
//               </main>
//             </div>
//             <ul>
//               {tasksz.map((task) => (
//                 <AdminMessageList
//                   key={task._id}
//                   id={task._id}
//                   task={task.task}
//                   createdAt={createdAt()}
//                   secondtasks={task.secondtasks}
//                   setUpdateUI={setUpdateUI}
//                   updateMode={updateMode}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </>
//     </>
//   );
// }
// export default CreateUser;
