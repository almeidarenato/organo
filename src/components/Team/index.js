import './Team.css'
import Employee from '../Employee';

const Team = ({name,primaryColor,secondaryColor,employees}) => {

    return(
      (employees.length > 0) &&
      <section className='time' style={{ backgroundColor: secondaryColor}}>
            <h3 style={{borderColor: primaryColor}}>{name}</h3>
        <div className='colaboradores'>
            {employees.map(({nome,cargo,imagem}) => 
            <Employee 
                key={nome}
                nome={nome} 
                cargo={cargo} 
                imagem={imagem}
                corDeFundo={primaryColor}
                />
            )}
        </div>
        </section>
    )

}

export default Team;