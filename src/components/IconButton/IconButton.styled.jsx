import styled from 'styled-components';

import PropTypes from 'prop-types';

const IconButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`;

const ButtonWithIcon = ({ type = 'button', children, onClick, ...allyProps }) => (
  <IconButton type={type} onClick={onClick} {...allyProps}>
    {children}
  </IconButton>
);

export default ButtonWithIcon;

ButtonWithIcon.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
