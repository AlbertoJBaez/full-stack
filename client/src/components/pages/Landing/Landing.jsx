import { Link } from 'react-router-dom';
import TextBand from '../../baseComponents/TextBand/TextBand';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';
import Chatbot from '../../baseComponents/Chatbot/Chatbot';

const Landing = () => {
  
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>

      <article className='claim_container'>
        <p className='TitleXL'>Transformando comunidades</p>
        <p className='bodyXXLRegular'>Creamos soluciones energéticas sostenibles</p>
        <Link to="/contact"><button className='claimCta_btn cta_btn bodyXXLBold'>Quiero saber más</button></Link>
      </article>

      <TextBand className="text_band" text="Title XL * Beneficios * Title XL * Beneficios" />
      
      <section className='cards_container'>
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>Cuidado de la estética</h1>
            <p className='card_text'>Cuidamos del factor energético pero también factor estético con soluciones paisajísticas modernas y fácilmente integrables en cualquier tipo de construcción</p>
          </section>
          <img className='card_img' src='../../../../public/assets/landingEstética.png'  alt='imagen de fondo'/>
        </article>

        <article className='card_img_text'>
          <img className='card_img' src='../../../../public/assets/landingMateriales.png'  alt='Card background'/>
          <section className='case_content'>
            <h1 className='TitleM'>Materiales ecosostenibles. </h1>
            <p className='card_text'> Proporcionamos las últimas tecnologías ecosostenibles con materiales que ayudan a reducir el gasto energético de los edificios a la vez que aportan un toque verde y moderno.</p>
          </section>
        </article>
      
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>Compromiso a largo plazo.</h1>
            <p className='card_text'>No creas que nuestra labor termina cuando instalamos nuestros productos. Seguiremos contigo a lo largo del tiempo asegurándonos de ofrecerte siempre el mejor servicio post-venta.</p>
          </section>
          <img className='card_img' src='../../../../public/assets/landingCompromiso.png'  alt='Card background'/>
        </article>
      </section>

      <Chatbot/>
    </>
  )
};
export default Landing;