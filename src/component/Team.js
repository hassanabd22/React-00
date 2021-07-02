import React from 'react'
import TeamMenber from './TeamMember';

function Team() {
    return (
        <div className = "row">
            <TeamMenber 
            info = {
                {   
                    img:"/img/img1.jpg",
                    name: "hassan",
                    position: "Bagdad",
                    phone: "+964 307802489",
                    email:"website@email.com",
                }
            } />
            <TeamMenber 
                info = {
                {

                    img:"/img/img1.jpg",
                    name: "Ameer",
                    position: "Najaf",
                    phone: "+964 307802489",
                    email:"website@email.com",
                }
            } />
            <TeamMenber 
            info = {
                {   img:"/img/img1.jpg",
                    name: "Kadem",
                    position: "Hela",
                    phone: "+964 307802489",
                    email:"website@email.com",
                }
            } />
             <TeamMenber 
            info = {
                {   img:"/img/img1.jpg",
                    name: "Kadem",
                    position: "Hela",
                    phone: "+964 307802489",
                    email:"website@email.com",
                }
            } />
             <TeamMenber 
            info = {
                {   img:"/img/img1.jpg",
                    name: "Kadem",
                    position: "Hela",
                    phone: "+964 307802489",
                    email:"website@email.com",
                }
            } />
             <TeamMenber 
            info = {
                {   img:"/img/img1.jpg",
                    name: "Kadem",
                    position: "Hela",
                    phone: "+964 307802489",
                    email:"website@email.com",
                }
            } />
        </div>
        
    )
}

export default Team;