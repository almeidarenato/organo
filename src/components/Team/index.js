import './Team.css';

const Team = ({team,name,primaryColor,secondaryColor}) => {

    return(
        <section className='time' style={{ backgroundColor: secondaryColor}}>
            <h3 style={{borderColor: primaryColor}}>{name}</h3>
        </section>
    )

}

export default Team;