import React from "react";
import "./CategoryHeader.scss";

function CategoryHeader({ title }) {
  return (
    <div className="category-header">
      <h2>{title}</h2>
    </div>
  );
}

export default CategoryHeader;
