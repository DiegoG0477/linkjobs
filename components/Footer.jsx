import "./styles.css";

function Footer() {
    return (
        <div className="footer_contain">
            <div className="contain1">
                <h1 className="mensajes_footer">LinkJobs</h1>
                <ul className="list">
                    <li>Acerca de LinkJobs</li>
                    <li>Trabaja en LinkJobs</li>
                    <li>Iniciar sesión </li>
                </ul>
            </div>
            <div className="contain2">
                <h1 className="mensajes_footer">Acerca de</h1>
                <p>Somo una empresa que ayuda la busqueda de empleo y que se haga mas facil</p>

            </div>
            <div className="contain3">
                <h1 className="mensajes_footer">¿Te ayudamos?</h1>
                <ul className="list">
                    <li>contacto</li>
                    <li>preguntas frecuentes</li>
                    <li>Quejas</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;