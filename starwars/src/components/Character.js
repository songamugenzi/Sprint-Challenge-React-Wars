// Write your Character component here
import React from 'react';
import styled from 'styled-components'

function Character(props) {
    const { image, name, species, status } = props.character
    return (
        <CharacterBio>
            <div>
                <img src={image} alt={name} />
            </div>
            <div className="textBio">
                <h3>{name}</h3>
                <p>{` `}
                    <span>
                        Species{` `}
                        <i className="fas fa-dna"></i>{` `}:{` `}
                    </span>{species}
                </p>
                <p>{`Status: ${status}`}</p>
            </div>
        </CharacterBio>
    )
}

const CharacterBio = styled.li`
    color: #333;
    background: aliceblue;
    text-align: left;
    margin-top: 5%;
    border-radius: 12px 12px 0 0;

    img {
        border-radius: 12px 12px 0 0;
        width: 100%;
    }

    .textBio {
        padding: 0 10px;
    }

    h3 {
        color: lightcoral;
    }

    span {

    }
`

export default Character;