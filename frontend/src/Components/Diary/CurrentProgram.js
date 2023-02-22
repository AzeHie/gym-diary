import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

import DiaryContext from "../../store/diary-context";
import BackButton from "../Layout/BackButton";
import Card from "../Layout/Card";
import editImage from "../../assets/icons/edit-32.png";

import classes from "./CurrentProgram.module.css";

const CurrentProgramComponent = () => {
  const navigate = useNavigate();
  const diaryCtx = useContext(DiaryContext);

  const currentProgram = diaryCtx.dummy_programs.filter(
    (program) => program.current === true
  );

  const programName = currentProgram[0].programName;

  const openInDiaryHandler = (workoutname) => {
    const filteredWorkout = currentProgram[0].workouts.filter(
      (workout) => workout.workoutName === workoutname
    );

    const workout = filteredWorkout[0];

    navigate("/diary/currentprogram/updateworkout", { state: workout });
  };

  const workouts = currentProgram[0].workouts.map((w) => {
    return (
      <div key={w.workoutName} className={classes.workoutsContainer}>
        <div className={classes.workoutTitle}>
          <div className={classes.workoutSpacer} />
          <div className={classes.workoutName}>{w.workoutName}:</div>
          <div
            className={classes.editButton}
            onClick={() => openInDiaryHandler(w.workoutName)}
          >
            <Tooltip title="open in diary">
              <img
                className={classes.editImage}
                src={editImage}
                alt="edit button"
              />
            </Tooltip>
          </div>
        </div>
        <div className={classes.exerciseContainer}>
          {w.exercises.map((e) => {
            return (
              <div key={e.exerciseName} className={classes.exercise}>
                <div className={classes.exerciseLi}>
                  {e.exerciseName.length < 15 ? (
                    <p className={classes.exerciseName}>{e.exerciseName}:</p>
                  ) : (
                    <Tooltip title={e.exerciseName}>
                      <p className={classes.exerciseName}>{e.exerciseName}:</p>
                    </Tooltip>
                  )}

                  <p className={classes.setsReps}>
                    Sets: {e.sets}
                    <br />
                    Reps: {e.reps}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <Card>
      <div>
        <BackButton title={"Back to menu"} loc="/diary"/>
        <div className={classes.programContainer}>
          <span className={classes.pageTitle}>{programName}</span>
          {workouts}
        </div>
      </div>
    </Card>
  );
};

export default CurrentProgramComponent;
