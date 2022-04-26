const Card =({name, fecha}) =>{
    let date = new Date(fecha);
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let actualDate = new Date();
    let edad = actualDate.getFullYear()-date.getFullYear();

    let semana =["domigo","lunes","martes","miercoles","jueves","viernes","sabado"];
    let meses =["enero","febrero","marzo","abril","Mayo","junio","julio","agosto","septiembre"];

    let dateString = `${semana[day]} del ${meses[month]} de ${year} `;
    
    
    return(
        
        <div class = "card">
            <h4>Informacion</h4>
            <p>Nombre: {name}</p>
            <p>Fecha de nacimiento: {fecha}</p>
            <p>Dia: {dateString}</p>
            <p>Edad: {edad}</p>

        </div>
    )
}


export default Card;