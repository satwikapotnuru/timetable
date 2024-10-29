import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css"; // Import CSS file for styling

function PageNotFound() {
  return (
    <div className="not-found-container">
      <h2 className="not-found-heading">404 - Page Not Found</h2>
      <p className="not-found-message">
        Oops! The page you are looking for could not be found.
      </p>
      <p className="not-found-suggestion">
        Please check the URL or go back to the{" "}
        <Link to="HomePage">homepage</Link>.
      </p>
    </div>
  );
}

export default PageNotFound;
