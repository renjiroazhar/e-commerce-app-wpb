/* eslint-disable react/prop-types */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

export default function ProductCard({ item }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar style={{ background: "#fff", color: "#000" }}>
          {item.quantity + "x"}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div style={{ fontSize: "small", width: "60%" }}>{item.name}</div>
        }
        secondary={
          item.quantity +
          "x " +
          `${Number(Math.round(item.price)).toLocaleString("ID-id", {
            currency: "IDR",
            style: "currency"
          })}`
        }
      />
      <ListItemSecondaryAction>
        <div style={{ fontSize: "smaller", fontWeight: 600 }}>
          {Number(
            Math.round(Number(item.price) * Number(item.quantity) * 100) / 100
          ).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR"
          })}
        </div>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
