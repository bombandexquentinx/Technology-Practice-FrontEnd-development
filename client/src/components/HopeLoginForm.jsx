import React,{useState} from "react";
import Button from "../components/Button";
import Box from '@mui/material/Box';
import Card from "../components/Card";
import TextField from "@mui/material/TextField";


const HopeLoginForm = () =>  {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const validateInput = () => {
        if(email.trim() === "" || email === undefined){
            setEmailError(true)
        }
        if(password.trim() === "" || password === undefined){
            setPasswordError(true)
        }

        if(email.trim() !== "" && password.trim() !== ""){
            if(email !== "admin" || password !== "admin"){
                setError(true);
                setSuccess(false)
            }
            else{
                setSuccess(true);
                setError(false)
            }
        }
    }
    return(
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        >
            
            <Card title="Hope Login Page">
                <div>
                    <TextField
                        error={emailError}
                        id="outlined-error"
                        label="Email"
                        placeholder="Password"
                        type="text"
                        value={email}
                        helperText={emailError === true ? "Enter your email": ""}
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <TextField
                        error={passwordError}
                        id="outlined-error"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        helperText={emailError === true ? "Enter your password": ""}
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <Button onClick={validateInput} size="small" className="align-self-center">
                        Submit
                    </Button>
                </div>
                {error?<h1 className="color-red">Invalid Credentials</h1>: ""}
                {success?<h1 className="color-red">Login Success</h1>: ""}
            </Card>
        </Box>
    )
}

export default HopeLoginForm;