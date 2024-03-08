import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore/lite';
import { Link } from "react-router-dom";
import './Read.css';

const Read = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const docRef = doc(projectFirestore, 'jobs', id);
    getDoc(docRef).then((doc) => {
      console.log(doc.data());
      if (doc.exists) {
        setData(doc.data());
      } else {
        console.log('Could not find that recipe');
      }
    });
  }, [id]);

  return (
    <div className="read-container">
      <Card className="my-3"style={{boxShadow:"rgb(29 129 29 / 82%) 5px 10px", width:"60%",margin:"auto"}}>
        {data && (
          <>
            <Card.Body>
              <Card.Title className="text-center mb-4" style={{ fontSize: "30px", fontFamily: 'Roboto, sans-serif',fontWeight: 'bold' }}>
                {data.company}
              </Card.Title>
              <Card.Text className='mb-4' style={{ fontSize: "21px", fontFamily: 'Roboto, sans-serif' }}>{data.desc}</Card.Text>
              <hr />
              <Card.Text><strong>Location:</strong> {data.location}</Card.Text>
              <Card.Text><strong>Job Profile:</strong> {data.profile}</Card.Text>
              <Card.Text><strong>Salary:</strong> {data.salary}</Card.Text>
              <Card.Text><strong>Helpline Email:</strong> {data.email}</Card.Text>
            </Card.Body>
            <Link to={`/jobform/${id}`}>
              <center>
                <Button className="center" variant="dark" style={{ backgroundColor: "green" }}>
                  Apply
                </Button>
              </center>
            </Link>
          </>
        )}
      </Card>
    </div>
  );
};

export default Read;
