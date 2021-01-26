import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const LandingPage = () => {
  const props = {
    tabs: {
      selected: 0,
      role: 'navigation',
    },
    tab: {
      role: 'presentation',
      tabIndex: 0,
    },
  };

  return (
    <div className="bx--row landing-page__banner">
      <div className="bx--col-lg-16">
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Design &amp; build with Carbon
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
