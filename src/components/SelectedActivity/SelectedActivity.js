import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Col, Button } from "react-bootstrap";
import { ButtonBase, Typography } from '@material-ui/core';
import { fakeData } from "./../fakeData/fakeData";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  }));

const SelectedActivity = (props) => {
    const classes = useStyles();

    const {selectedActivity, date}=props.activity;
    
    
    const foundActivity = fakeData.find(activity => activity.title === selectedActivity);
    const {imageName,color,id}=foundActivity;
     
    const [isDeleted,setIsDeleted]=useState(false)


    const handleDeleteActivity = (_id) => {
        console.log("deleting activity");
        fetch(
          `http://localhost:5000/selectedActivities/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("deleting activity");
          });
        setIsDeleted(true);
      };

    return (
        <Col md={6} lg={6}>
        <div className={classes.root}>
          <Paper className={classes.paper}>

            <Grid
              style={{borderRadius: 10}}
              container
              spacing={2}
            >

              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={imageName} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {selectedActivity}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {date}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button onClick={handleDeleteActivity}> Cancel</Button>
              
                </Grid>
              </Grid>

            </Grid>

          </Paper>
        </div>
      </Col>
    );
};

export default SelectedActivity;