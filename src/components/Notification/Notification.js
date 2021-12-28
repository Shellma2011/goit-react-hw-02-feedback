import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageStyle = styled.p`
  padding: 20px;
  margin: 0px auto;
  background-color: teal;
  border: 1px solid grey;
  border-radius: 2%;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
  color: white;
  font-weight: 700;
`;

function Notification({ message }) {
  return <MessageStyle>{message}</MessageStyle>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
