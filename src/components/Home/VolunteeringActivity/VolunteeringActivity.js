import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunteeringActivity.css';

const VoluteeringActivity = (props) => {
    const {title,imageName,color,id}=props.activity;

    return (
        <>
        <Col md={6} lg={3}>
          <Link to={"/registration/" + id}>
            <Card
              className="activityCard"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <Card.Img style={{ width: "100%", height: "100%" }} src={imageName} />
              <Card.Footer
                style={{
                  backgroundColor:color,
                  color: "white",
                  textAlign: "center",
                  height:66
                }}
              >
                {title}
              </Card.Footer>
            </Card>
          </Link>
        </Col>
      </>
    );
};

export default VoluteeringActivity;