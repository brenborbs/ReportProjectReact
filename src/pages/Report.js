import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Switch, Route } from "react-router-dom";

// components
import ReportList from "../components/Reports/reportList";
import ReportSingle from "../components/Reports/reportSingle";

const Report = () => {
  return (
    <div>
      <BreadcrumbsItem to="/report">Report</BreadcrumbsItem>
      <Switch>
        <Route exact path="/report" component={ReportList} />
        <Route exact path="/report/:id" component={ReportSingle} />
      </Switch>
    </div>
  );
};

export default Report;
