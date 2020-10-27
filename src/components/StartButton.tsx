import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { QuizContext } from "../globalstate/context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function StartButton() {
  const classes = useStyles();

  const [, , [startQuiz], , [, gameOver], ,[userAnswers,,,amount]] = useContext(QuizContext);
  
  return (
    <>
      {gameOver || userAnswers.length === amount ? (
        <div className={classes.root}>
          <Button variant="contained" color="primary" onClick={startQuiz}>
            Start
          </Button>
        </div>
      ) : null}
    </>
  );
}
