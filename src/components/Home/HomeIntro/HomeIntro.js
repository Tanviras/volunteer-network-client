import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import './HomeIntro.css';

const HomeIntro = () => {
    return (
        <div>
        <div  className='introSize'>
        <h1>I grow by helping people in need</h1>
        <br/>
        </div>

        <div className='formSize'>
            <Form inline>
                <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                <Button variant="primary">Search</Button>
            </Form>
        </div>

        </div>
        
    );
};

export default HomeIntro;