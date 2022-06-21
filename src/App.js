import './App.css';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from "@mui/material";
import React from "react"
import axios from "axios"


function App() {

  const [file, setFile] = React.useState("")
  const [filename, setFilename] = React.useState("")
  const [text, setText] = React.useState("")



  const handleInputChange = (e) => {
    setFile(e.target.files[0]);


    setFilename(e.target.files[0].name);


  }
  const handleButtonClick = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', text);
    




    axios.post("http://192.168.1.27:3007/api/fileupload", formData).then((result) => {
      console.log(result.data)
    }).catch((error) => {
        console.log(error)
      })
  }

  return (

    <>
      <input style={{ display: "none" }} id="contained-button-file" type="file" onChange={handleInputChange} />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
        <TextField onChange={(e) => { setText(e.target.value) }} label="Enter a name" variant="outlined" sx={{ width: 340 }} />
        <Stack style={{ gap: 40, marginTop: 40, flexDirection: "row" }}>
          <div>


            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span" sx={{ width: 150, textTransform: "none", fontSize: 18, fontWeight: "bold" }}> Upload </Button>
            </label>


          </div>


          <Button variant="contained" color="primary" component="span" onClick={handleButtonClick} sx={{ width: 150, textTransform: "none", fontSize: 18, fontWeight: "bold" }}> Submit </Button>
        </Stack>
        <Typography >{filename}</Typography>
      </div>
    </>
  );
}

export default App;
