import LabelInputPublicVacant from "@/components/LabelInputPublicVacant";
import Img from "next/image";
import imagen from "@/public/assets/pagina.jpg";
import ButtonAddVacant from "@/components/ButtonAddVacant";
function PublicarVacantePage() {
  return (
    <div className="PublicarVacante__container">
      <div className="formVacant">
        <p className="titles_vacant">¡Hola, NOMBRE!</p>
        <p className="titles_vacant">Comencemos con información basica</p>
        <p className="subtitle_vacant">
          Debe ser clara y específica, para ayudar a las personas a encontrar tu
          publicación.
        </p>
        <LabelInputPublicVacant
          label="Busco una persona para el puesto de"
          name="puesto"
          holder="Soldado"
        />
        <LabelInputPublicVacant
          label="Que tenga experiencia en"
          name="experiencia"
          holder="Disparar"
        />
        <p className="titles_vacant">¿Cuál es el sueldo mensual que ofreces?</p>
        <LabelInputPublicVacant
          label="Ofrecemos sueldos mensuales de"
          name="sueldo"
          holder="$0.00"
          id={1}
        />
        <p className="titles_vacant">Ahora platiquemos sobre tu empresa</p>
        <LabelInputPublicVacant
          label="El nombre comercial de mi empresa es"
          name="nombre"
          holder="Tacos el Tommy"
        />
        <LabelInputPublicVacant
          label="Mi empresa esta ubicada en la ciudad de"
          name="ubicacion"
          holder="suchiapa"
        />
        <div className="button_add">
          <ButtonAddVacant text="PUBLICAR VACANTE"/>
        </div>
      </div>
      <div className="img_pageweb">
      <Img src={imagen} width={300} height={600}/>
      </div>
    </div>
  );
}
export default PublicarVacantePage;
