import React from 'react'

function TeamMenber(props) {
    return (
        <div className = "col-md-4 text-center">
            <div className="card">
                <div className = "card-header">
                    <img style={{maxWidth: '100%'}} src={props.info.img}/>
                </div>
                <div className = "card-body">
                <h2>{props.info.name}</h2>
                <h5>{props.info.position}</h5>
                <div>{props.info.phone}</div>
                <div>{props.info.email}</div>
                </div>
            </div>
        </div>
    )
}

export default TeamMenber;