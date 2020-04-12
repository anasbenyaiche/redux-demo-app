import React from "react";
import { connect } from "react-redux";

const Home = ({ items }) => {
    
  let itemsList = items.map((item) => (
    <div className="card" key={item.id}>
      <div className="card-image">
        <img src={item.img} alt={item.title} />
        <span className="card-title">{item.title}</span>
        <span
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </span>
      </div>

      <div className="card-content">
        <p>{item.desc}</p>
        <p>
          <b>Price: {item.price}$</b>
        </p>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">{itemsList}</div>
    </div>
  );
};

const mapStateToProp = (state) => ({
  items: state.items,
});

export default connect(mapStateToProp)(Home);
