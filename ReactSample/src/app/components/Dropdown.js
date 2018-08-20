import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownComponent extends React.Component {
  render() {
    return (
      <Dropdown>
        <DropdownToggle caret color="primary">
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Regular link</DropdownItem>
          <DropdownItem href="#" disabled>Disabled link</DropdownItem>
          <DropdownItem href="#">Another link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownComponent;
