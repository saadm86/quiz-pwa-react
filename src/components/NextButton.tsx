import React, {useContext} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {QuizContext} from '../globalstate/context'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function NextButton() {
  
  const [,,,,[loading,gameOver],[,nextQuestion],[userAnswers,,number, amount]] = useContext(QuizContext)

  const classes = useStyles();

  return (
    <>
    {!gameOver && !loading && userAnswers.length === number + 1 && number !== amount - 1 ? 
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </div>
    : null}
    
    </>
  );
}