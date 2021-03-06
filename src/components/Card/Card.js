import React, {Component} from 'react';

import Pokeball from './../../assets/pokeball.png';
import './Card.scss';

class Card extends Component {
    render(){
        const { pokemon, onClickHandler } = this.props;
        return (
            <div className="card">
                {<img onClick={onClickHandler} className={pokemon.open ? 'card-open' : 'card-closed'} src={pokemon.open ? pokemon.image : Pokeball} alt={pokemon.name} />}
            </div>
        )
    }
}

export default Card;
