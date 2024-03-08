
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { projectFirestore } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore/lite";
import "./Post.css";

function Post() {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [desc, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const doc = { name, role, desc, email, location };
    try {
      await addDoc(collection(projectFirestore, "post"), doc);
      navigate('/findJob');
    } catch (err) {
      console.log(err);
    }
    console.log(doc);
  }

  return (
    <Container className="post-container">
      <Form onSubmit={handleSubmit} className="post-form">
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridRole">
          <Form.Label>Job Role Interested In</Form.Label>
          <Form.Control type="text" required placeholder="Enter job role" value={role} onChange={(e) => setRole(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridLocation">
          <Form.Label>Preferred Location</Form.Label>
          <Form.Control type="text" required placeholder="Enter preferred location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDesc">
          <Form.Label>About Yourself</Form.Label>
          <Form.Control as="textarea" required rows={3} placeholder="Enter description" value={desc} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Container className="text-center">
        <div style={{ textAlign: 'center' }}>
  <Button variant="dark" type="submit" className="login-button" style={{ margin: "10px auto" }}>
    Submit
  </Button>
</div>

        </Container>
      </Form>
    </Container>
  );
}

export default Post;

