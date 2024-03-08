import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { doc,getDoc } from 'firebase/firestore/lite';

const Email = window.Email;

function HireJob() {

  const {id}=useParams()

  const [data,setData]=useState(null)

  useEffect(()=>{
      const docRef = doc(projectFirestore,'post', id); 
      getDoc(docRef).then((doc)=>{
        console.log(doc.data())
        if(doc.exists)
        {
          setData(doc.data())
        }
        else{
          console.log('Could not find that recipe')
        }
      })
    },[id])

  const [name, setName] = useState('');
  const [email,setEmail]=useState('');

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    console.log("I want to hire you")
    // 438228C787535263AA75ED655233DBA4B7F6DFF88D9402BF10D8996B6E9030330CD5C6EB4B749E416448E9F35B1D23D6
    Email.send({
      SecureToken : "89bb53d5-bcf6-4e8e-8f2f-433f1904972e",
      To: data.email,
      From:'vedangjoshi772@gmail.com' ,
      Subject: `Job application for hiring of ${data.role}`,
      Body: `Hii ${data.name} myself ${name} I want to hire you for the post of ${data.role}.I found your description listed on Job Ease ,You can share your details on ${email} for further process.`,
    }).then((message) => alert(message));
  }

  return (
    <Container className="post-container">
      <Form onSubmit={handleSubmit} className="post-form" style={{boxShadow:"#252627 5px 10px"}}>
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>



        <Container className="text-center">
          <Button variant="dark" type="submit" style={{backgroundColor:"green"}}>
            Hire 
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default HireJob;