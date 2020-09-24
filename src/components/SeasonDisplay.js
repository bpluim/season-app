import '../css/SeasonDisplay.css';
import React from 'react';

const seasonConfig = {

  spring: {
    text: 'April showers bring May flowers',
    iconName: 'blind'
  },
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  fall: {
    text: 'Time for Pumpkin Pie',
    iconName: 'leaf'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
    console.log(month);
  if (month >= 3 && month < 6) {
    return lat > 0 ? 'spring' : 'fall';
  } else if (month >= 6 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else if  (month >= 9 && month < 12) {
      return lat > 0 ? 'fall' : 'spring';
  } else if (month === 12 || month < 3) {
      return lat > 0 ? 'winter' : 'summer'
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
