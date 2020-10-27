import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { QuizContext } from "../globalstate/context";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 1,
  },
});

export default function QuestionCard() {
  const classes = useStyles();

  const [[question], , , , [loading, gameOver]] = useContext(QuizContext);

  return (
    <>
    
      {!loading && !gameOver && (
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Question 1 of 1
            </Typography>
            <Typography variant="h5" component="h2">
              <p dangerouslySetInnerHTML={{ __html: question }} />
            </Typography>
          </CardContent>
        </Card>
      )}
  
    </>
  );
}
