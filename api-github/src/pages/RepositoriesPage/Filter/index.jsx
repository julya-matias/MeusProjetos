import React from "react";
import PropTypes from "prop-types";
import { Container, Selector, Cleaner } from "./styles";

const Filter = ({languagens}) => {

const selectors = languagens.map (({name,count,color}) =>(
  <Selector key={name.toLocaleLowerCase()} color = {color}>
    <span>{name}</span>
    <span>{count}</span>
  </Selector>
))

  return(
  <Container>
    {selectors}
    <Cleaner>Limpar</Cleaner>
  </Container>


)

}

Filter.propTypes = {
  languagens: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired
}


export default Filter;
