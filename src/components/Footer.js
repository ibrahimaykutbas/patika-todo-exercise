import React from "react";

import { CardFooter } from "reactstrap";

function Footer() {
  return (
    <>
      <CardFooter align="right" style={{ paddingRight: 25, marginBottom: 10 }}>
        Patika.dev <br />
        Frontend Web Development Patikası <br />
        Redux To-do App Exercise <br />
      </CardFooter>{" "}
    </>
  );
}

export default React.memo(Footer);
