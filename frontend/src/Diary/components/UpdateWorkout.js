import { Tooltip } from "@material-ui/core";
import { useLocation } from "react-router-dom";


import classes from "./UpdateWorkout.module.css";

import removeImg from "../../assets/icons/x.png";
import plusImg from "../../assets/icons/add.png";
import Card from "../../Layout/Card";
import BackButton from "../../Layout/BackButton";

const UpdateWorkoutComponent = (props) => {
  const { state } = useLocation(); // has to be "state", anything else won't work
  const workout = state;

  const workoutLog = "moikkis";

  console.log(workout);

  const editEntryHandler = () => {};

  return (
    <Card>
      <div className={classes.container}>
        <BackButton title="back" loc="/diary/currentprogram"/>
        <div className={classes.workoutName}>
          <h2>Workout name:</h2>
          <span>{workout.workoutName}</span>
        </div>
        <div className={classes.workoutContainer}>
          {workout.exercises.map((e) => {
            return (
              <div className={classes.exerciseContainer} key={e.exerciseName}>
                <p className={classes.exerciseName}>{e.exerciseName}</p>
                <p className={classes.setsReps}>
                  Sets: {e.sets} - Reps: {e.reps}
                </p>
                <p className={classes.suggestion}>
                  Today you should start with 80kg in {e.exerciseName} (based on
                  your last workout)
                </p>
                <div className={classes.logContainer}>
                  <table className={classes.logTable}>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th className={classes.startingKg}>
                          <span>KG</span><br />
                          <span>(starting)</span>
                        </th>
                        <th className={classes.lastTh}>
                          <span className={classes.thSpacer} />
                          <span className={classes.repsTh}>REPS x KG</span>
                          <Tooltip title="Add new entry">
                          <img
                              className={classes.addSetImg}
                              src={plusImg}
                              alt="add new entry"
                            />
                          </Tooltip>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>30.1.2022</td>
                        <td>85kg</td>
                        <td className={classes.repsTd}>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove"
                              />
                            </Tooltip>
                            <span>7 x</span>
                            <br />
                            <span className={classes.kg}>85kg</span>
                          </div>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove"
                              />
                            </Tooltip>
                            <span>7 x</span>
                            <br />
                            <span className={classes.kg}>85kg</span>
                          </div>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove this entry"
                              />
                            </Tooltip>
                            <span>6 x</span>
                            <br />
                            <span className={classes.kg}>85kg</span>
                          </div>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove this entry"
                              />
                            </Tooltip>
                            <span>8 x</span>
                            <br />
                            <span className={classes.kg}>82.5kg</span>
                          </div>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove this entry"
                              />
                            </Tooltip>
                            <span>8 x</span>
                            <br />
                            <span className={classes.kg}>82.5kg</span>
                          </div>
                          <Tooltip title="add new set">
                            <img
                              className={classes.addSetImg}
                              src={plusImg}
                              alt="add new entry"
                            />
                          </Tooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>26.1.2022</td>
                        <td>80kg</td>
                        <td className={classes.repsTd}>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove"
                              />
                            </Tooltip>
                            <span>8 x</span>
                            <br />
                            <span className={classes.kg}>80kg</span>
                          </div>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove"
                              />
                            </Tooltip>
                            <span>8 x</span>
                            <br />
                            <span className={classes.kg}>80kg</span>
                          </div>
                          <div
                            onClick={editEntryHandler}
                            className={classes.repsSpa}
                          >
                            <Tooltip title="remove">
                              <img
                                className={classes.removeImg}
                                src={removeImg}
                                alt="remove this entry"
                              />
                            </Tooltip>
                            <span>8 x</span>
                            <br />
                            <span className={classes.kg}>80kg</span>
                          </div>
                          <Tooltip title="add new set">
                            <img
                              className={classes.addSetImg}
                              src={plusImg}
                              alt="add new entry"
                            />
                          </Tooltip>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default UpdateWorkoutComponent;

/* {e.log.map((logItem) => {
                  return (
                    <div key={logItem.date}>
                      <div>Date: {logItem.date}</div>
                      {logItem.completedReps.map((rep) => {
                        return (
                          <div key={logItem.date}>
                            KG: {rep}
                            <br />
                            REPS: {rep}
                          </div>
                        )
                      })}
                    </div>
                  );
                })} */
