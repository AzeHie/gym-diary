import { useState } from "react";
import { Tooltip } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


import classes from "./AddProgram.module.css";

import addImg from "../../assets/icons/add.png";
import removeImg from "../../assets/icons/x.png";
import buttonImage from "../../assets/icons/diskette.png";
import Card from "../../Layout/Card";
import BackButton from "../../Layout/BackButton";

const AddProgramComponent = () => {
  const [isAddingWorkout, setIsAddingWorkout] = useState(false);
  const programs = [];
  const tempExercises = [];

  return (
    <Card>
      <form className={classes.pageContainer}>
        <div className={classes.titleRow}>
          <div className={classes.submitButtonsContainer}>
            <BackButton title="back to menu" loc="/diary"/>
            <Tooltip title="Save">
      <button className={classes.submitButton}>
        <img
          className={classes.buttonImg}
          src={buttonImage}
          alt="back button"
        />
      </button>
    </Tooltip>
          </div>
          <span className={classes.pageTitle}>Add new program</span>
        </div>
        <div className={classes.programDetailsContainer}>
          <label htmlFor="programName" className={classes.programName}>
            Program name:
          </label>
          <input className={classes.programNameInput} />
        </div>
        <div className={classes.workoutsContainer}>
          <Tabs className={classes.tabContainer}>
            <TabList>
              <Tab
                onClick={() => {
                  setIsAddingWorkout(!isAddingWorkout);
                }}
              >
                + Add workout..
              </Tab>
            </TabList>
            {isAddingWorkout && (
              <TabPanel>
                <div className={classes.workoutDetailTabPanel}>
                  <div className={classes.workoutNameContainer}>
                    <label>Workout name:</label>
                    <input className={classes.workoutNameInput} />
                  </div>
                  <h3 className={classes.exercisesTitle}>Exercises:</h3>
                  <div className={classes.addedExercisesContainer}>
                    <div className={classes.addedExercise}>
                      <span>- Kyykky</span>
                      <span>sets: 4</span>
                      <span>reps: 4</span>
                      <span>
                        <Tooltip title="remove">
                          <img
                            className={classes.removeImg}
                            src={removeImg}
                            alt="remove exercise"
                          />
                        </Tooltip>
                      </span>
                    </div>
                    <div className={classes.addedExercise}>
                      <span>- Penkki</span>
                      <span>sets: 4</span>
                      <span>reps: 4</span>
                      <span>
                        <Tooltip title="remove">
                          <img
                            className={classes.removeImg}
                            src={removeImg}
                            alt="remove exercise"
                          />
                        </Tooltip>
                      </span>
                    </div>
                    <div className={classes.addedExercise}>
                      <span>- Pystypunnerrus</span>
                      <span>sets: 4</span>
                      <span>reps: 4</span>
                      <span>
                        <Tooltip title="remove">
                          <img
                            className={classes.removeImg}
                            src={removeImg}
                            alt="remove exercise"
                          />
                        </Tooltip>
                      </span>
                    </div>
                  </div>
                  <div className={classes.exercisesContainer}>
                    <div className={classes.exerciseInputs}>
                      <label>Exercise name:</label>
                      <input />
                    </div>
                    <div className={classes.exerciseInputs}>
                      <label>Sets:</label>
                      <input />
                    </div>
                    <div className={classes.exerciseInputs}>
                      <label>Reps:</label>
                      <input />
                    </div>
                    <div className={classes.addExerciseBtn}>
                      <div>
                      <Tooltip title="Add">
                        <img
                          className={classes.addBtnImg}
                          src={addImg}
                          alt="plus mark"
                        />
                      </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            )}
          </Tabs>
        </div>
      </form>
    </Card>
  );
};

export default AddProgramComponent;
