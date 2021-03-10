import { Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Typography variant="h4" gutterBottom>
          Contact Manager
        </Typography>
      </div>
    </div>
  );
}

export default Header;
