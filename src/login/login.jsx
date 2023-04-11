import React, {useState} from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}

// import { Button, Checkbox, Container, Input, InputLabel } from "@material-ui/core";
// import React from "react";
// import { Col, Row } from "react-bootstrap";

// function App() {
//     return (
//         <Container fluid className="p-3 my-5 h-custom">
//             <Row>
//                 {/* <Col col='10' md='6'>
//                     <img src="" className="img-fluid" alt="ASTEP Logo"/>
//                 </Col> */}
//                 <Col sm='6' className='d-none d-sm-block px-0'>
//                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
//                         alt="ASTEP Logo" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
//                 </Col>

//                 <Col col='4' md='6'>
//                     <Card className='my-5'>
//                         <CardBody className='p-5'>
//                             <Row>
                                            
//                                 <Input wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//                                 <Input wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//                                 <div className="text-center pt-1 mb-5 pb-1">
//                                     <Button className="mb-4 w-100 gradient-custom-2">Login</Button>
//                                 </div>

//                                 <div className="d-flex justify-content-between mb-4">
//                                     <Checkbox name="flexCheck" value='' id='flexCheckDefault' label='Remember Me'/>
//                                     <a href="!#">Forgot password?</a>
//                                 </div>

//                                 <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
//                                     <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>
//                                 </div>
//                             </Row>
//                         </CardBody>
//                     </Card>
//                 </Col>

//             </Row>
//         </Container>
//     )
// }