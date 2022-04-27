import PropTypes from 'prop-types';
const Card =({name, fecha}) =>{
    const date = new Date(fecha);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const actualDate = new Date();
    const edad = actualDate.getFullYear()-date.getFullYear();
    
    const semana =["domigo","lunes","martes","miercoles","jueves","viernes","sabado"];
    const meses =["enero","febrero","marzo","abril","Mayo","junio","julio","agosto","septiembre"];

    const dateString = `${semana[day]} del ${meses[month]} de ${year} `;
    
    
    return(
        
        <div className = "card">
            <h4>Informacion</h4>
            <p>Nombre: {name}</p>
            <p>Fecha de nacimiento: {fecha}</p>
            <p>Dia: {dateString}</p>
            <p>Edad: {edad}</p>

        </div>
    )
}

Card.propTypes ={
    name: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
}


export default Card;