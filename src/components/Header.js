import React from "react";

import { CardHeader } from "reactstrap";

function Header() {
  return (
    <>
      <CardHeader align="center" style={{ fontSize: 50, marginTop: 10 }}>
        To-do App
      </CardHeader>
    </>
  );
}

export default React.memo(Header);
