import React from 'react';
import {Navbar,MenuItem,Nav,NavItem,NavDropdown,FormControl,FormGroup,Button} from 'react-bootstrap';



class HomePageHeader extends React.Component {
    render() {
      return (
        <div className="homepage-header">
           
            <Navbar  collapseOnSelect>
  
  <Navbar.Collapse>
            <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
      
    </Nav>
    <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
     
    </Navbar.Form>
    
  </Navbar.Collapse>
  
</Navbar>
        </div>
      );
    }
  }
  
  export default HomePageHeader;