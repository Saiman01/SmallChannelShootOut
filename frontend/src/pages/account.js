import React, {useContext, useState} from 'react';
import AuthContext from "../context/authcontext.js"
import accountIcon from "../images/account-icon.png";
import {CardDeck, Card, Button, Image, Tabs, Tab, Form, Row, Col, Container} from "react-bootstrap";
import axios from 'axios';
import {Video} from "../components/video.js";

import "../style/account.scss";
import thumbnail from "../images/thumbnail.png";
import { BiBorderRadius } from 'react-icons/bi';
import { AiFillPropertySafety, AiOutlineConsoleSql } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';



const cardbox=[
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
];

function signout(){
    axios.get('http://localhost:5000/logout', {
    withCredentials:true
}).then (function(response){
    console.log(response.data)
    window.location.href = "/"
    });
};
/*  First things a user sees
    when they click onto the
    "Account" page. */
function Account(){
    const [fname, setfname]=useState('');
    const [lname, setlname]=useState('');
    const [email, setemail]=useState('')
    axios.get('http://localhost:5000/userInfo', {
        withCredentials:true
    }).then (function(response){
       const fname = response.data.firstName;
        const lname = response.data.lastName;
        const email = response.data.email; 
        setfname(fname);
        setlname(lname);  
        setemail(email);
        });
  const {loggedIn} = useContext(AuthContext);
    return(
        <>
         {loggedIn==true && (
        <Container fluid>

        <Row style={{backgroundColor:'#c5dedd'}} >
            <Col sm={2} style={{marginTop: '10px', marginBottom:'10px'}}>
                <div>
                <Image style={{marginLeft:'5%'}} src={accountIcon} /* className="header_image" */ roundedCircle height="171px" width="171px"/>
                
                </div>

           {/*  <div className="header">
            </div> */}
            </Col>
            <Col sm={4} style={{marginTop: '3%'}} >
                <div>
                <h2>{fname} {lname}</h2>
                    <br/>
                    <h4>&nbsp;&nbsp;10 Liked Videos</h4>
                    <h4>&nbsp;&nbsp;7 Saved Videos</h4>
                </div>
            
            {/* <div className="inner_header">
                <div className="header_text"><br/>
                    <h2>John Doe</h2>
                    <br/>
                    <h4>&nbsp;&nbsp;10 Liked Videos</h4>
                    <h4>&nbsp;&nbsp;7 Saved Videos</h4>
                </div>
            </div> */}
            </Col>
        </Row>
       {/*  <div className="header">
            <Image src={accountIcon} className="header_image" roundedCircle height="171px" width="171px"/>
            
            <div className="inner_header">
                <div className="header_text">
                    <h2>John Doe</h2>
                    <br/>
                    <h4>10 Liked Videos - 7 Saved Videos</h4>
                </div>
            </div>


        </div> */}

        <Tabs className="wrap" >
            <Tab className="" eventKey="likedVideos" title="Liked Videos">
                <Container fluid>
                    <Row>
                        <Col>
                            <CardDeck>
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>            
            </Tab>

            <Tab className="" eventKey="votedVideos" title="Previously Voted For">
                <Container fluid>
                    <Row>
                        <Col>
                            <CardDeck>
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>  
            </Tab>
            
            <Tab eventKey="editInfo" title="Edit Information">
           
                <Tabs className="wrap">
              
                    <Tab className="page-manager-curr-info" eventKey="currentInfo" title="Current Information">
                        {showCurrentInfo(fname, lname, email)}
                    </Tab>
                    <Tab className="" eventKey="changeEmail" title="Change E-Mail">
                        {changeEmail()}
                    </Tab>
                    <Tab className="" eventKey="changePassword" title="Change Password">
                        {changePassword()}
                    </Tab>
                    <Tab className="" eventKey="changeUsername" title="Change Username">
                        {changeUsername()}
                    </Tab>
                    <Tab className="" eventKey="changeProfilePic" title="Change Profile Picture">
                        {changeProfilePic()}
                    </Tab>
                    
                </Tabs>
                
            </Tab>

            <Tab className="" eventKey="signout" title="Sign out">
                <Button block className="btn_acc" variant="" type="submit" onClick={()=>signout()}>
                    Signout 
                </Button>
            </Tab>

        </Tabs>
       
        </Container>
         )}
        </>
    );
}

 /* Current Information Tab */ 
function showCurrentInfo(fname, lname,email){

    //this function will get the user information
    
    return(
        <>
            <Form>
                <Form.Group as={Row} controlId="currentInfo">

                {/* Current Username */}
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="10">
                    {fname} {lname}
                    {/* <Form.Control plaintext readOnly defaultValue= "name"/> */}
                </Col>

                {/* Current Email */}
                <Form.Label column sm="2">
                    Email
                </Form.Label>

                <Col sm="10">
                    {email}
                </Col>

                {/* Current Password 
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="password123" />
                </Col>
*/}
                </Form.Group>
            </Form>
        </>
    );
}

/*  Change Email Tab */ 
function changeEmail(){
    return(
        <>
         <Row className="justify-content-md-start ml-sm-3 ">
            <Col md={3} > 
            <Form>
                <Form.Group controlId="formChangeEmail"><br/>
                    <Form.Label>Current Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter current email" />
                </Form.Group>

                <Form.Group controlId="formNewEmail01">
                    <Form.Label>New Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter new email" />
                </Form.Group>

                <Form.Group controlId="formNewEmail02">
                    <Form.Label>Re-enter New Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter new email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button  block className= "btn_acc" variant="" type="submit">
                    Submit
                </Button>
            </Form><br/>
            </Col>
          </Row>
        </>
    );
}

    /* Change Password Tab  */
function changePassword(){
    return(
        <>
         <Row className="justify-content-md-start ml-sm-3">
            <Col md={3} > 
            <Form>
                <Form.Group controlId="formChangePassword"><br/>
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter current Password" />
                </Form.Group>

                <Form.Group controlId="formNewPassword01">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter new Password" />
                </Form.Group>

                <Form.Group controlId="formNewPassword02">
                    <Form.Label>Re-enter New Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter new Password" />
                </Form.Group>

                <Button block className= "btn_acc" variant="" type="submit">
                    Submit
                </Button>
            </Form><br/>
            </Col>
          </Row>
        </>
    );
}

 /* Change Username Tab */ 
function changeUsername(){
    return(
        <>
         <Row className="justify-content-md-start ml-sm-3">
            <Col md={3} > 
            <Form>
                <Form.Group controlId="formChangeUsername"><br></br>
                    <Form.Label>Current Username</Form.Label>
                    <Form.Control placeholder="Enter current Username" />
                </Form.Group>

                <Form.Group controlId="formChangeUsername01">
                    <Form.Label>New Username</Form.Label>
                    <Form.Control placeholder="Enter new Username" />
                </Form.Group>

                <Form.Group controlId="formChangeUsername02">
                    <Form.Label>Re-enter New Username </Form.Label>
                    <Form.Control placeholder="Enter new Username" />
                </Form.Group>

                <Button block className= "btn_acc" variant="" type="submit">
                    Submit
                </Button>
            </Form><br/>
            </Col>
          </Row>
        </>
    );
}

 /* Change Profile Picture Tab  */
function changeProfilePic(){
    return(
        <>
         <Row className="justify-content-md-start ml-sm-3">
            <Col md={3} > 
            <Form>
            <br></br>
                <Form.File id="formNewProfilePic">
                <Form.File.Label>Choose new profile picture.</Form.File.Label><br/><br/>
                <Form.File.Input className="justify-content-md-start ml-sm-4" />
                </Form.File>
                    <br/>
                 <Button block className= "btn_acc" variant="" type="submit">
                    Submit
                </Button>
                
            </Form>
            <br/>
            </Col>
          </Row>
        </>
    );
}

export default Account;
