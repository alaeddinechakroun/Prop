import React from 'react'
import PropTypes from 'prop-types';

const Profile = ({ FullName, Bio, Profession, alert }) => {

    return (
        <div >
            <h1>Je m'appelle : {FullName}</h1>
            <p>{Bio}</p>
            <h2> Je suis un {Profession}</h2>
            <button onClick={alert} style={{width:"100px", height:"40px", color:"white",background:"red"}}> Alert Me </button>
            
        </div>
    )
}
Profile.propTypes={
    FullName:PropTypes.string,
    Bio:PropTypes.string,
    Profession:PropTypes.string,
}

export default Profile
