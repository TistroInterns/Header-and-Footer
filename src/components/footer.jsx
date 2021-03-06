import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function footer(/*props*/) {
  return (
    <footer>
      <Grid>
        <Nav justified>
          <NavItem
            eventKey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem
            eventKey={3}>
            Some other professional link
          </NavItem>
        </Nav>
        <div className="text-center small copyright">
          © Tistro Website 2017
        </div>
      </Grid>
    </footer>
  );
}

export default footer;