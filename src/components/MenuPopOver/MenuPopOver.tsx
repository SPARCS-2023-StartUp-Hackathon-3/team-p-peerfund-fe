import React, { FunctionComponent } from 'react';
import { Button, ButtonProps, Popover, PopoverProps } from 'antd';

interface IMenuPopOverProps {
  buttonProps?: ButtonProps;
  children?: any;
}

const MenuPopOver: FunctionComponent<IMenuPopOverProps & PopoverProps> = ({ buttonProps, children }) => {
  return (
    <div>
      <Popover placement="bottomRight" trigger="click" {...buttonProps}>
        <Button style={{ border: 'none' }} ghost>
          {children}
        </Button>
      </Popover>
    </div>
  );
};

export default MenuPopOver;
