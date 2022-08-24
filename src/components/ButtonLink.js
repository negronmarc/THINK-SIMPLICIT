import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Solutions from "./pages/Solutions";
import Fractional from "./pages/Fractional";
import Training from "./pages/Training";
import Work from "./pages/Work";

function LinkButton() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Solutions} />

          <Route path="/Fractional" component={Fractional} />

          <Route path="/Training" component={Training} />

          <Route path="/Workwithus" component={Work} />

          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default LinkButton;