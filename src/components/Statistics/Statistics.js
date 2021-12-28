import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsListStyle = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #5c6368;
`;

const StatisticsItemStyle = styled.li`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  display: flex;

  :nth-last-child(-n + 2) {
    background-color: teal;
    color: white;
    font-weight: 700;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    transition: box-shadow 250ms linear;
  }
`;

export default function Statistics({ options, total, positivePercentage }) {
  return (
    <StatisticsListStyle>
      {Object.entries(options).map(([key, value]) => (
        <StatisticsItemStyle key={key}>
          {key}: {value}
        </StatisticsItemStyle>
      ))}
      <StatisticsItemStyle>Total: {total}</StatisticsItemStyle>
      <StatisticsItemStyle>Positive feedback: {positivePercentage} %</StatisticsItemStyle>
    </StatisticsListStyle>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
