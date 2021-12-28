import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionStyle = styled.section`
  padding: 20px;
  text-align: center;

  text-align: center;
  width: 400px;
  margin: 30px auto;

  border: 1px solid grey;
  border-radius: 2%;

  font-family: 'Helvetica Neue', Helvetica, Arial;
  background: white;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
`;

const TitleStyle = styled.h2`
  padding: 10px;
  font-size: 24px;
  color: #5c6368;
`;

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      {<TitleStyle>{title}</TitleStyle>}
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
