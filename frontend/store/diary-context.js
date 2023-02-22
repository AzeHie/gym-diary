import React, { useState } from "react";

const DiaryContext = React.createContext({
  onUpdatePrograms: (userId) => {},
  onLoadPrograms: (userId) => {}
});

export const DiaryContextProvider = (props) => {
  const [programs, setPrograms] = useState();

  const dummy_programs = [
    {
      id: 'c1', // in future this is coming from mongoDB
      current: false,
      programName: '2+2 jakoinen',
      workouts: [
        {
          workoutName: "Työntävät",
          exercises: [
            {
              exerciseName: "kyykky",
              sets: "4",
              reps: "5-7", 
              log: []
            },
            {
              exerciseName: "Penkki",
              sets: "4",
              reps: "5-7",
              log: []
            }
          ]
        },
        {
          workoutName: "Vetävät",
          exercises: [
            {
              exerciseName: "Mave",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Leuat",
              sets: "4",
              reps: "5-7",
              log: []
            }
          ]
        }
      ]
    },
    {
      id: 'c2',
      current: true,
      programName: '3-jakoista hinkkausta',
      workouts: [
        {
          workoutName: "Työntävät",
          exercises: [
            {
              exerciseName: "kyykky",
              sets: "4",
              reps: "5-7",
              log: [
                {
                  date: "29.1.2020",
                  completedReps: [
                    {
                      repOne: {
                        weights: "80kg", reps: 8
                      },
                      repTwo: {
                        weights: "80kg", reps: 7
                      },
                      repThree: {
                        weights: "80kg", reps: 7
                      },
                      repFour: {
                        weights: "80kg", reps: 6
                      }
                    }
                  ]
                }
              ]
            },
            {
              exerciseName: "Penkki",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Pystypunnerrus",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Dipit",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Etureisi",
              sets: "4",
              reps: "10-12",
              log: []
            },
            {
              exerciseName: "Sivuolkapää",
              sets: "4",
              reps: "8-10",
              log: []
            },
          ]
        },
        {
          workoutName: "Vetävät",
          exercises: [
            {
              exerciseName: "Mave",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Leuat",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Kulmasoutu",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Hauispenkki",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Forkku",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Vatsat",
              sets: "4",
              reps: "5-7",
              log: []
            },
          ]
        },
        {
          workoutName: "Jalat",
          exercises: [
            {
              exerciseName: "Bulg. kyykky",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Etukyykkyjaskdjraskdjaskdjaskdjaskdjasdkasjdksaj",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "Pakaralaite",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "hip thrust",
              sets: "4",
              reps: "5-7",
              log: []
            },
            {
              exerciseName: "SJMV",
              sets: "4",
              reps: "5-7",
              log: []
            },
          ]
        }
      ]
    },
  ];

  const updateProgramsHandler = () => {
    // change programs state, send update req to backend

  };

  const loadProgramsHandler = () => {
    // load users program details from the server
    // update programs state
  }

  return (
    <DiaryContext.Provider
    value={{
        dummy_programs: dummy_programs,
        onUpdatePrograms: updateProgramsHandler,
        onLoadPrograms: loadProgramsHandler
      }}
    >{props.children}</DiaryContext.Provider>
  );
};

export default DiaryContext;
