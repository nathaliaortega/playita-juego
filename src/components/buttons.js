
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Playa from "../images/beach_icon.png"
import './header.css'
import "./main.css"
const Buttons = () => {
    const [position, setPosition] = useState(0);
    const [scores, setScores] = useState([])
    const data = useStaticQuery(graphql`
    query NonPageQuery {
        allContentfulYoNuncaHe {
            edges {
              node {
                retoCorto
                id
              }
            }
          }
    }
  `)
    useEffect(() => {
        var scores_new = []
        data.allContentfulYoNuncaHe.edges.map(function (data) {
            scores_new.push(data.node.retoCorto)
        })
        setScores(scores_new)
    }, []);
    return (
        <div className="main">
            <div className="main--txt">Yo nunca he <span>
                {scores[position]}
            </span></div>
            <div className="main--btns">
                <div className="main--btns_btn" onClick={() => position != 0 ? setPosition(position - 1) : ``}><i className="fa fa-backward"></i></div>
                <div className="main--btns_btn"><i className="fa fa-random"></i></div>
                <div className="main--btns_btn" onClick={() => position != scores.length ? setPosition(position + 1) : ``}><i className="fa fa-forward" aria-hidden="true"></i></div>
                
            </div>
        </div>);
};



export default Buttons
