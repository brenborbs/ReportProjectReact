import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

const reportSingle = props => {
  return (
    <div>
      <BreadcrumbsItem to={`/report/${props.match.params.id}`}>
        Report {props.match.params.id}
      </BreadcrumbsItem>
      Report {props.match.params.id}
    </div>
  );
};

export default reportSingle;
