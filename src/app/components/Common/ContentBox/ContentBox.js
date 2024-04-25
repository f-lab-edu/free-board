import React from 'react';
import { Avatar, IconButton } from "@mui/material";
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';

function ContentBox({ data }) {
  return (
    <div
      style={{
        width: "500px",
        border: "solid 0.5px lightgray",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "10px"
      }}
    >
      <div style={{ display: "flex" }}>
        <Avatar alt="profile-image" src={data.imageSrc} />
        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: "10px",
          fontWeight: "bold"
        }}>
          {data.id}
        </div>
      </div>
      <div style={{ height: "10px" }} />
      <div style={{ fontSize: "16px" }}>
        {data.content}
      </div>
      <div style={{ height: "10px" }} />
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }}>
        <div>
          <FavoriteBorderOutlined />
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            marginLeft: "3px"
          }}
        >
          {data.good}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ fontSize: "12px", color: "grey" }}>
            {data.date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;