import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title,active,isRed, cases, total,...props }) {
  return (
    <Card 
    onClick={props.onClick}
    className={`infobox ${active && "infobox--selected"} ${
        isRed && "infobox--red"
      }`}>
      <CardContent>
        <Typography className="infobox__title" color="textSecondary">
          {title}{" "}
        </Typography>
        <h2 className={`infobox__cases ${!isRed && "infobox__cases--green"}`}>{cases}</h2>
        <Typography color="textSecondary" className="infobox__total">
          {total} Total{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
