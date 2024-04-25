'use client'
import Link from 'next/link';
import React from 'react';

function SideComp(props) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div style={{ padding: "40px 0px" }}>
      <Link href="/create" style={{textDecorationLine:"none"}}>
        <div
          onMouseOver={() => {
            setIsHovering(true);
          }}
          onMouseOut={() => {
            setIsHovering(false);
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "100px",
            backgroundColor: "black",
            borderRadius: "50px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: isHovering ? "50px" : "30px",
              fontWeight: "lighter"
            }}
          >
            +
          </div>
        </div>
      </Link>

    </div>
  );
}

export default SideComp;