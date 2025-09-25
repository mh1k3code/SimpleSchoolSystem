import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper , Button } from '@mui/material';
import { useState , useEffect  } from 'react';


export default function Student() {
  const properStyle={padding: "50px 20px " , width:600 , margin:"20px auto"}
  const [name , setName] = useState('')
  const [address , setAddress] = useState('')
  const [students , setStudents] = useState([])
  const [student , setStudent] = useState('')
  const [grade , setGrade] = useState('')
  
  const handleClick =(e)=>{
    e.preventDefault()
    const student={name , address , grade}
    console.log(student)
    fetch("http://localhost:8080/student/add", {

    method: "POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(student)

    }).then(()=>{
      console.log("New student added ")
    })
     .catch((err) => {
      console.error("Fetch error:", err);
    });

  
  }

  
  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res => res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
},[])





  return (
    <Paper elevation={3} style={properStyle}>
      <h1 >Add Student</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      
    >
      <TextField id="filled-basic" label="Student Name" variant="filled" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="filled-basic" label="Student Address" variant="filled" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      <TextField id="filled-basic" label="Grade" variant="filled" fullWidth
      value={grade}
      onChange={(e)=>setGrade(e.target.value)}/>
  
  
      <Button variant="contained" color="success" onClick={handleClick}>
        Submit
      </Button>
      


    </Box>
   
   
   <h1>Students</h1>
    <Paper elevation={3} style={properStyle}>
      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px" , padding:"15px" , textAlign:"left"}} key={student.id}>
          Id:{student.id}<br/>
          Name:{student.name}<br/>
          Address:{student.address}<br/>
          Grade:{student.grade}
    </Paper>
      ))
    }
    </Paper>
    </Paper>

  );
}
