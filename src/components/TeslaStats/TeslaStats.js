import React from 'react';
import './TeslaStats.css';

const TeslaStats = (props) => {
  const listItems = props.carstats.map((stat) => (
    <li key={stat.model} className="col-xs-6 col-sm-6 col-md-6 col-lg-4 justify-content-center">
      <div className="col-12 justify-content-center">
        <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
        <p className="miles">{stat.miles}</p>
      </div>
    </li>
  ));
  return (
    <div className="tesla-stats row justify-content-center ">
    <ul className=" col-8">
      {listItems}
    </ul>
  </div>
  )
};

TeslaStats.propTypes = {
  carstats: React.PropTypes.array
}

export default TeslaStats
