import React from 'react'

function LoadPage({apidata}) {
  return (
    <div style={{ backgroundColor: "black" }}>
      {apidata.map((item) => (
        <div
          style={{
            borderBottom: "1px solid white",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              padding: "9px",
              paddingRight: "5rem",
              paddingLeft: "2rem",
              marginTop: "1rem",
            }}
          >
            {item.name}
          </p>
          <img
            style={{
              padding: "9px",
              marginTop: "1rem",
              width: "4rem",
              height: "4rem",
            }}
            src={item.image}
          ></img>
          <p
            style={{
              padding: "9px",
              paddingRight: "5rem",
              paddingLeft: "2rem",
              marginTop: "1rem",
              color: "green",
            }}
          >
            {item.current_price}
          </p>
          <p
            style={{
              padding: "9px",
              paddingRight: "5rem",
              paddingLeft: "2rem",
              marginTop: "1rem",
              color: "red",
            }}
          >
            {item.last_updated}
          </p>
          <p
            style={{
              padding: "9px",
              paddingRight: "5rem",
              paddingLeft: "2rem",
              marginTop: "1rem",
              color: "blue",
            }}
          >
            {item.atl_date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LoadPage
