import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ResourceGrid = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

  const translations: any = {
    en: {
      header: {
        title: "FCHCC is dedicated to helping you have the tools you need to help your business grow and operate.",
        subtitle: "This page is designed to provide you resources and tools from FCHCC's members and partners."
      },
      resources: [
        { id: 1, label: "Request for Proposal Opportunities", slug: "rfp-opportunities" },
        { id: 2, label: "SBDC Programs", slug: "sbdc-programs" },
        { id: 3, label: "Disaster Recovery Assistance", slug: "disaster-recovery" },
        { id: 4, label: "JTA Programs", slug: "jta-programs" },
        { id: 5, label: "SBA Programs", slug: "sba-programs" },
        { id: 6, label: "Business Training Opportunities", slug: "business-training" },
        { id: 7, label: "SBDC at UNF Resources", slug: "unf-resources" },
        { id: 8, label: "About our Partners", slug: "our-partners" },
      ],
      case1: {
        jta: {
          title: "Jacksonville Transportation Authority (JTA)",
          info: "JTA’s Supplier Portal Information.",
          linkText: "Click here",
          suffix: "to browse the portal for bid opportunities."
        },
        city: {
          title: "City of Jacksonville",
          info: "City of Jacksonville’s Supplier Portal Information.",
          linkText: "Click here",
          suffix: "to log in/register as a supplier and browse bid opportunities."
        }
      },
      case2: {
        message: "More SBDC programs will be listed here as they become available."
      },
      case3: {
        prep: {
          title: "Hurricane Preparedness Resources",
          visit: "For preparedness resources from the Florida SBDC Network, please visit",
          disaster: "The state’s official source of information for individuals and businesses from the Florida Division of Emergency Management.",
          jobs: "FloridaCommerce’s website to provide businesses access to critical information before, during, and after a disaster.",
          checklist: "For a hurricane preparedness checklist and other resources from the U.S. Small Business Administration (SBA), please",
          click: "click here"
        },
        milton: {
          title: "Hurricane Milton Recovery Resources",
          desc1: "The Florida SBDC Network and our state and federal partners remain committed to helping you access the disaster capital and resources your business needs to recover and reopen.",
          desc2: "As during any disaster, we are here to help your business recover. Our team of disaster specialists are available to provide confidential, no-cost consulting and direction to help you assess and prepare disaster loan applications and assist with other post-disaster challenges.",
          assistance: "Available Assistance",
          item1: "Agriculture and Aquaculture Producers Natural Disaster Recovery Loan",
          item2: "SBA Economic Injury Disaster Loan – apply by July 11, 2025.",
          moreInfo: "For more information, please visit"
        },
        helene: {
          title: "Hurricane Helene Recovery Resources",
          item2: "SBA Economic Injury Disaster Loan – apply by June 30, 2025."
        }
      },
      case4: {
        title: "Small Business Enterprise Program",
        desc: "The Jacksonville Transportation Authority (JTA) is proud to announce the launch of its Small Business Enterprise (SBE) Program, a groundbreaking initiative designed to support and empower small businesses by way of growth, innovation, and sustainability.",
        info: "For more information about the SBE Program, please visit the landing page at",
        apply: "To apply for the SBE Certification, please go to",
        contact: "Should you have any questions or concerns about the SBE Program or the certification process, please feel free to contact us at"
      },
      case5: {
        desc1: "a challenging opportunity to accelerate their growth through targeted training led by motivating leaders in small business development. T.H.R.I.V.E. Emerging Leaders Reimagined revolutionizes the rich history of executive-level training for small businesses poised for growth.",
        desc2: "The Office of Entrepreneurial Development is committed to transforming our learning ecosystem to be timelier, more relevant, and to meet small businesses where they are right now. We embody this approach with T.H.R.I.V.E. Emerging Leaders Reimagined.",
        learnMore: "Learn more!",
        checkResources: "Check out these SBA resources:",
        res1: "Free business counseling",
        res2: "SBA-guaranteed business loans",
        res3: "Home & business disaster loans",
        res4: "Federal government contracting"
      },
      case6: {
        partners: [
          {
            title: "Bank of America",
            action: "Enroll Now:",
            text: "Online certificate program in Women’s Entrepreneurship at Cornell. Take the next step in your entrepreneurial journey with a free, 6-week online certificate program from Cornell University, offered in both English and Spanish. The Bank of America Institute for Women’s Entrepreneurship at Cornell is a collaboration between Bank of America and Cornell University, designed to equip entrepreneurs with the skills, knowledge, and resources needed to build, manage, and scale a successful business. Seats are now open. To learn more or enroll, visit ",
            linkText: "Bank of America Institute for Women’s Entrepreneurship at Cornell",
            url: "https://bofainstitute.cornell.edu/"
          },
          {
            title: "Prospera USA",
            action: "Click here",
            text: " to check out Prospera’s seminars/workshops schedule (conducted in Spanish).",
            url: "https://prosperausa.org/"
          },
          {
            title: "SCORE Jacksonville",
            action: "Watch SCORE's Previous Webinars.",
            text: " ",
            linkText: "Click here",
            url: "https://www.score.org/jacksonville/local-workshops",
            suffix: " to browse SCORE's pre-recorded webinars."
          },
          {
            title: "United States Hispanic Chamber of Commerce (USHCC)",
            text: "USHCC encourages you to sign up for FREE courses from the Verizon Small Business Digital Ready Program. Learn more ",
            linkText: "here",
            url: "https://www.ushcc.com/verizon-small-business-digital-ready.html"
          },
          {
            title: "Small Business Development Center (SBDC)",
            action: "SBDC Online Training Events:",
            text: " ",
            linkText: "click here",
            url: "https://floridasbdc.org/training/",
            suffix: " to check out their on-demand training videos and upcoming workshops."
          },
          {
            title: "Florida State College at Jacksonville",
            action: "",
            text: "",
            linkText: "Career Coach",
            url: "https://fscj.emsicc.com/",
            suffix: " – Florida State College at Jacksonville – take a Career Assessment to learn about yourself and Career Coach will give you career suggestions based on your interests."
          }
        ]
      },
      case7: {
        p1: "The Florida SBDC at UNF provides business owners with confidential consulting and training in all aspects of business startup, management and growth...from business plans and marketing strategy to financial analysis and lending options, we have a consultant ready to help make your business dreams come to life. Appointments are open during non-business hours – so you can meet with us in the early morning or after work or even over the weekend, we’re here to help you with your business needs!",
        p2: "Your entrepreneurship journey with the Florida SBDC at UNF starts by simply clicking the link below and getting registered in our system. As soon as you register, we will get you connected to one of our consultants. One-on-one consulting is provided at no-cost and is currently held virtually.",
        linkText: "Click here",
        or: "to make an appointment! Or, contact them directly to learn more at 800-450-4624 or email"
      },
      case8: {
        title: "Our Partners",
        desc: "FCHCC is proud to work with a diverse group of organizations committed to supporting the Hispanic business community. Our partners provide critical resources, funding, and expertise that help our members thrive."
      }
    },
    es: {
      header: {
        title: "FCHCC se dedica a ayudarle a tener las herramientas que necesita para que su negocio crezca y opere.",
        subtitle: "Esta página está diseñada para proporcionarle recursos y herramientas de los miembros y socios de la FCHCC."
      },
      resources: [
        { id: 1, label: "Oportunidades de Solicitud de Propuestas", slug: "rfp-opportunities" },
        { id: 2, label: "Programas del SBDC", slug: "sbdc-programs" },
        { id: 3, label: "Asistencia para la Recuperación de Desastres", slug: "disaster-recovery" },
        { id: 4, label: "Programas de la JTA", slug: "jta-programs" },
        { id: 5, label: "Programas de la SBA", slug: "sba-programs" },
        { id: 6, label: "Oportunidades de Capacitación Empresarial", slug: "business-training" },
        { id: 7, label: "Recursos del SBDC en UNF", slug: "unf-resources" },
        { id: 8, label: "Sobre Nuestros Socios", slug: "our-partners" },
      ],
      case1: {
        jta: {
          title: "Autoridad de Transporte de Jacksonville (JTA)",
          info: "Información del Portal de Proveedores de JTA.",
          linkText: "Haga clic aquí",
          suffix: "para navegar por el portal en busca de oportunidades de licitación."
        },
        city: {
          title: "Ciudad de Jacksonville",
          info: "Información del Portal de Proveedores de la Ciudad de Jacksonville.",
          linkText: "Haga clic aquí",
          suffix: "para iniciar sesión/registrarse como proveedor y buscar oportunidades de licitación."
        }
      },
      case2: {
        message: "Se enumerarán más programas del SBDC aquí a medida que estén disponibles."
      },
      case3: {
        prep: {
          title: "Recursos de Preparación para Huracanes",
          visit: "Para recursos de preparación de la Red SBDC de Florida, visite",
          disaster: "La fuente oficial de información del estado para individuos y empresas de la División de Gestión de Emergencias de Florida.",
          jobs: "El sitio web de FloridaCommerce para proporcionar a las empresas acceso a información crítica antes, durante y después de un desastre.",
          checklist: "Para obtener una lista de verificación de preparación para huracanes y otros recursos de la Administración de Pequeñas Empresas de EE. UU. (SBA), por favor",
          click: "haga clic aquí"
        },
        milton: {
          title: "Recursos de Recuperación para el Huracán Milton",
          desc1: "La Red SBDC de Florida y nuestros socios estatales y federales siguen comprometidos a ayudarle a acceder al capital por desastre y los recursos que su empresa necesita para recuperarse y reabrir.",
          desc2: "As durante cualquier desastre, estamos aquí para ayudar a su empresa a recuperarse. Nuestro equipo de especialistas en desastres está disponible para brindar consultoría y dirección confidenciales y sin costo para ayudarlo a evaluar y preparar solicitudes de préstamos por desastre y asistir con otros desafíos posteriores al desastre.",
          assistance: "Asistencia Disponible",
          item1: "Préstamo de recuperación ante desastres naturales para productores agrícolas y acuícolas",
          item2: "Préstamo por desastre por daños económicos de la SBA: solicite antes del 11 de julio de 2025.",
          moreInfo: "Para más información, por favor visite"
        },
        helene: {
          title: "Recursos de Recuperación para el Huracán Helene",
          item2: "Préstamo por desastre por daños económicos de la SBA: solicite antes del 30 de junio de 2025."
        }
      },
      case4: {
        title: "Programa de Pequeñas Empresas (SBE)",
        desc: "La Autoridad de Transporte de Jacksonville (JTA) se enorgullece de anunciar el lanzamiento de su Programa de Pequeñas Empresas (SBE), una iniciativa innovadora diseñada para apoyar y empoderar a las pequeñas empresas mediante el crecimiento, la innovación y la sostenibilidad.",
        info: "Para más información sobre el Programa SBE, visite la página de inicio en",
        apply: "Para solicitar la Certificación SBE, vaya a",
        contact: "Si tiene alguna pregunta o inquietud sobre el Programa SBE o el proceso de certificación, no dude en contactarnos en"
      },
      case5: {
        desc1: "una oportunidad desafiante para acelerar su crecimiento a través de capacitación específica dirigida por líderes motivadores en el desarrollo de pequeñas empresas. T.H.R.I.V.E. Emerging Leaders Reimagined revoluciona la rica historia de la capacitación de nivel ejecutivo para pequeñas empresas preparadas para el crecimiento.",
        desc2: "La Oficina de Desarrollo Empresarial se compromete a transformar nuestro ecosistema de aprendizaje para que sea más oportuno, más relevante y para llegar a las pequeñas empresas donde se encuentran ahora mismo. Incorporamos este enfoque con T.H.R.I.V.E. Emerging Leaders Reimagined.",
        learnMore: "¡Aprende más!",
        checkResources: "Consulte estos recursos de la SBA:",
        res1: "Asesoramiento empresarial gratuito",
        res2: "Préstamos comerciales garantizados por la SBA",
        res3: "Préstamos por desastres para hogares y empresas",
        res4: "Contratación con el gobierno federal"
      },
      case6: {
        partners: [
          {
            title: "Bank of America",
            action: "Inscríbase ahora:",
            text: "Programa de certificado en línea en Emprendimiento de Mujeres en Cornell. Dé el siguiente paso en su viaje empresarial con un programa de certificado en línea gratuito de 6 semanas de la Universidad de Cornell, ofrecido tanto en inglés como en español. El Instituto Bank of America para el Emprendimiento de Mujeres en Cornell es una colaboración entre Bank of America y la Universidad de Cornell, diseñada para equipar a las emprendedoras con las habilidades, conocimientos y recursos necesarios para construir, administrar y escalar un negocio exitoso. Las inscripciones ya están abiertas. Para obtener más información o inscribirse, visite ",
            linkText: "Instituto Bank of America para el Emprendimiento de Mujeres en Cornell",
            url: "https://bofainstitute.cornell.edu/"
          },
          {
            title: "Prospera USA",
            action: "Haga clic aquí",
            text: " para consultar el calendario de seminarios/talleres de Prospera (realizados en español).",
            url: "https://prosperausa.org/"
          },
          {
            title: "SCORE Jacksonville",
            action: "Vea los seminarios web anteriores de SCORE.",
            text: " ",
            linkText: "Haga clic aquí",
            url: "https://www.score.org/jacksonville/local-workshops",
            suffix: " para explorar los seminarios web pregrabados de SCORE."
          },
          {
            title: "Cámara de Comercio Hispana de los Estados Unidos (USHCC)",
            text: "USHCC le anima a inscribirse en cursos GRATUITOS del Programa Verizon Small Business Digital Ready. Aprende más ",
            linkText: "aquí",
            url: "https://www.ushcc.com/verizon-small-business-digital-ready.html"
          },
          {
            title: "Centro de Desarrollo de Pequeñas Empresas (SBDC)",
            action: "Eventos de capacitación en línea del SBDC:",
            text: " ",
            linkText: "haga clic aquí",
            url: "https://floridasbdc.org/training/",
            suffix: " para ver sus videos de capacitación bajo demanda y sus próximos talleres."
          },
          {
            title: "Florida State College at Jacksonville",
            action: "",
            text: "",
            linkText: "Asesor de carrera",
            url: "https://fscj.emsicc.com/",
            suffix: " – Florida State College at Jacksonville – realice una evaluación de carrera para conocerse a sí mismo y Career Coach le brindará sugerencias de carrera basadas en sus intereses."
          }
        ]
      },
      case7: {
        p1: "El SBDC de Florida en UNF brinda a los dueños de negocios consultoría y capacitación confidenciales en todos los aspectos de la puesta en marcha, administración y crecimiento de negocios... desde planes de negocios y estrategias de marketing hasta análisis financiero y opciones de préstamo, tenemos un consultor listo para ayudar a que sus sueños comerciales cobren vida. Las citas están abiertas durante el horario no comercial, para que pueda reunirse con nosotros temprano en la mañana o después del trabajo o incluso durante el fin de semana, ¡estamos aquí para ayudarlo con sus necesidades comerciales!",
        p2: "Su viaje empresarial con el SBDC de Florida en UNF comienza simplemente haciendo clic en el enlace a continuación y registrándose en nuestro sistema. Tan pronto como se registre, lo conectaremos con uno de nuestros consultores. La consultoría personalizada se brinda sin costo y actualmente se lleva a cabo de manera virtual.",
        linkText: "Haga clic aquí",
        or: "para programar una cita! O contáctelos directamente para obtener más información al 800-450-4624 o envíe un correo electrónico a"
      },
      case8: {
        title: "Nuestros Socios",
        desc: "FCHCC se enorgullece de trabajar con un grupo diverso de organizaciones comprometidas con el apoyo a la comunidad empresarial hispana. Nuestros socios brindan recursos críticos, financiamiento y experiencia que ayudan a nuestros miembros a prosperar."
      }
    }
  };

  const t = translations[currentLang];

  const [activeTab, setActiveTab] = useState(8);

  const handleButtonClick = (id: number) => {
    setActiveTab(id);
  };

  const renderActiveContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="space-y-12 pb-10 border border-[#1E73BE] p-8 rounded-xl">
            {/* JTA */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-[34px] font-normal text-[#1E73BE] tracking-tight">
                {t.case1.jta.title}
              </h3>
              <p className="text-lg sm:text-xl text-black">
                <span className="font-bold text-[#0F172A]">{t.case1.jta.info}</span>{" "}
                <a href="https://www.jtafla.com/business-center/how-to-do-business-with-jta/" target="_blank" className="text-[#1E73BE] hover:underline">{t.case1.jta.linkText}</a> {t.case1.jta.suffix}
              </p>
              <hr className="border-t border-slate-300 mt-10" />
            </div>

            {/* City of Jacksonville */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-[34px] font-normal text-[#1E73BE] tracking-tight">
                {t.case1.city.title}
              </h3>
              <p className="text-lg sm:text-xl text-black">
                <span className="font-bold text-[#0F172A]">{t.case1.city.info}</span>{" "}
                <a href="https://www.jacksonville.gov/departments/office-of-administrative-services/procurement/supplier-portal" target="_blank" className="text-[#1E73BE] hover:underline">{t.case1.city.linkText}</a> {t.case1.city.suffix}
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="border border-[#1E73BE] p-8 rounded-xl bg-white shadow-sm">
            <p className="text-lg sm:text-xl text-black">
              {t.case2.message}
            </p>
          </div>
        );
      case 3:
        return (
          <div className="space-y-16 pb-10 border border-[#1E73BE] p-8 rounded-xl">
            {/* Hurricane Preparedness Resources */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full max-w-[300px] shrink-0">
                  <img src="/images/LO1.jpg" alt="SBDC Florida Logo" className="w-full h-auto object-contain" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{t.case3.prep.title}</h3>
                  <p className="text-lg text-black">
                    {t.case3.prep.visit}{" "}
                    <a href="https://floridasbdc.org/services/consulting/preparedness/" target="_blank" className="text-[#1E73BE] hover:underline">https://floridasbdc.org/services/consulting/preparedness/</a>.
                  </p>
                  <p className="text-lg text-black">
                    <a href="https://www.FloridaDisaster.org" target="_blank" className="text-[#1E73BE] hover:underline font-bold">www.FloridaDisaster.org</a> – {t.case3.prep.disaster}
                  </p>
                  <p className="text-lg text-black">
                    <a href="https://floridajobs.org/floridadisaster.biz" target="_blank" className="text-[#1E73BE] hover:underline">https://floridajobs.org/floridadisaster.biz</a> – {t.case3.prep.jobs}
                  </p>
                  <p className="text-lg text-black">
                    {t.case3.prep.checklist}{" "}
                    <a href="https://www.sba.gov/business-guide/manage-your-business/prepare-emergencies" className="text-[#1E73BE] hover:underline">{t.case3.prep.click}</a>.
                  </p>
                </div>
              </div>
              <hr className="border-t border-slate-300 mt-10" />
            </div>

            {/* Hurricane Milton Recovery Resources */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{t.case3.milton.title}</h3>
              <p className="text-lg text-black">
                {t.case3.milton.desc1}
              </p>
              <p className="text-lg text-black">
                {t.case3.milton.desc2}
              </p>
              <div className="space-y-4">
                <h4 className="text-2xl sm:text-[34px] font-normal text-[#1E73BE] tracking-tight">{t.case3.milton.assistance}</h4>
                <ul className="list-disc pl-5 text-lg text-black space-y-1">
                  <li>{t.case3.milton.item1}</li>
                  <li>{t.case3.milton.item2}</li>
                </ul>
                <p className="text-lg text-black">
                  {t.case3.milton.moreInfo} <a href="http://www.FloridaSBDC.org/Milton" target="_blank" className="text-[#1E73BE] hover:underline">www.FloridaSBDC.org/Milton</a>
                </p>
              </div>
              <hr className="border-t border-slate-300 mt-10" />
            </div>

            {/* Hurricane Helene Recovery Resources */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full max-w-[300px] shrink-0">
                  <img src="/images/LO1.jpg" alt="SBDC Florida Logo" className="w-full h-auto object-contain" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{t.case3.helene.title}</h3>
                  <p className="text-lg text-black">
                    {t.case3.milton.desc1}
                  </p>
                  <p className="text-lg text-black">
                    {t.case3.milton.desc2}
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-2xl sm:text-[34px] font-normal text-[#1E73BE] tracking-tight">{t.case3.milton.assistance}</h4>
                    <ul className="list-disc pl-5 text-lg text-black space-y-1">
                      <li>{t.case3.milton.item1}</li>
                      <li>{t.case3.helene.item2}</li>
                    </ul>
                    <p className="text-lg text-black">
                      {t.case3.milton.moreInfo} <a href="http://www.FloridaSBDC.org/Helene" target="_blank" className="text-[#1E73BE] hover:underline">www.FloridaSBDC.org/Helene</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 pb-10 border border-[#1E73BE] p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full max-w-[120px] shrink-0">
                <img src="/images/LO2.jpg" alt="JTA Logo" className="w-full h-auto object-contain" />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-black">{t.case4.title}</h3>
                <p className="text-lg text-black leading-relaxed">
                  {t.case4.desc}
                </p>
                <div className="space-y-4">
                  <p className="text-lg text-black">
                    {t.case4.info} <a href="https://floridasbdc.org/services/consulting/preparedness/" target="_blank" className="text-[#1E73BE] hover:underline font-bold">https://www.floridadisaster.org/</a>. {t.case4.apply} <a href="https://jtafla.dbesystem.com" target="_blank" className="text-[#1E73BE] hover:underline font-bold">https://jtafla.dbesystem.com</a>.
                  </p>
                  <p className="text-lg text-black">
                    {t.case4.contact} <a href="mailto:DBE1@jtafla.com" className="text-[#1E73BE] hover:underline font-bold">DBE1@jtafla.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-10 pb-10 border border-[#1E73BE] p-8 rounded-xl">
            <div className="w-full">
              <img src="/images/LO3.jpg" alt="T.H.R.I.V.E. Emerging Leaders" className="w-full h-auto rounded-lg shadow-sm" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-black leading-relaxed">
                {t.case5.desc1}
              </p>
              <p className="text-lg text-black leading-relaxed">
                {t.case5.desc2} <a href="https://www.sba.gov/sba-learning-platform/thrive-emerging-leaders-reimagined" target="_blank" className="text-[#1E73BE] font-bold hover:underline">{t.case5.learnMore}</a>
              </p>
              <div className="space-y-4 pt-4">
                <h4 className="text-xl font-bold text-black">{t.case5.checkResources}</h4>
                <div className="flex flex-col space-y-2">
                  <a href="https://www.sba.gov/local-assistance" target="_blank" className="text-[#1E73BE] font-bold hover:underline">{t.case5.res1}</a>
                  <a href="https://www.sba.gov/funding-programs/loans" target="_blank" className="text-[#1E73BE] font-bold hover:underline">{t.case5.res2}</a>
                  <a href="https://www.sba.gov/funding-programs/disaster-assistance" target="_blank" className="text-[#1E73BE] font-bold hover:underline">{t.case5.res3}</a>
                  <a href="https://www.sba.gov/federal-contracting" target="_blank" className="text-[#1E73BE] font-bold hover:underline">{t.case5.res4}</a>
                </div>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-12 pb-10 border border-[#1E73BE] p-8 rounded-xl">
            {t.case6.partners.map((item: any, idx: number, arr: any[]) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl sm:text-[34px] font-normal text-[#1E73BE] tracking-tight">{item.title}</h3>
                <p className="text-lg text-black leading-relaxed">
                  {item.action && <span className="font-bold">{item.action} </span>}
                  {item.text}
                  <a href={item.url} target="_blank" className="text-[#1E73BE] hover:underline">
                    {item.linkText || item.url}
                  </a>
                  {item.suffix}
                </p>
                {idx !== arr.length - 1 && <hr className="border-t border-slate-300 mt-8" />}
              </div>
            ))}
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 border border-[#1E73BE] p-8 rounded-xl shadow-sm bg-white">
            <p className="text-lg text-black leading-relaxed">
              {t.case7.p1}
            </p>
            <p className="text-lg text-black leading-relaxed">
              {t.case7.p2}
            </p>
            <p className="text-lg text-black leading-relaxed">
              <a href="https://floridasbdc.org/consulting/" target="_blank" className="text-[#1E73BE] font-bold hover:underline">{t.case7.linkText}</a> {t.case7.or} <a href="mailto:smallbiz@unf.edu" className="text-[#1E73BE] font-bold hover:underline">smallbiz@unf.edu</a>
            </p>
          </div>
        );
      case 8:
        return (
          <div className="space-y-12 pb-10 border border-[#1E73BE] p-8 rounded-xl">
            <h3 className="text-2xl sm:text-4xl font-normal text-[#1E73BE] tracking-tight">{t.case8.title}</h3>
            <p className="text-lg text-black leading-relaxed">
              {t.case8.desc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="aspect-video bg-slate-50 rounded-lg flex items-center justify-center p-4 border border-slate-100">
                  <img src={`/images/${i}.png`} alt="Partner Logo" className="max-w-full max-h-full object-contain transition-all cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 my-15">
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-medium text-black mb-4 sm:mb-8">
          {t.header.title}
        </h2>
        <p className="text-black text-lg sm:text-xl font-normal">
          {t.header.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.resources.map((item: any) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
            className={`
              flex items-center justify-center text-center p-4 sm:p-6 min-h-[80px] sm:min-h-24 text-base sm:text-lg md:text-xl font-medium transition-all duration-200 rounded-md border cursor-pointer
              ${activeTab === item.id
                ? 'border-[#1E88E5] text-[#1E88E5] bg-blue-50 shadow-sm ring-1 ring-[#1E88E5]'
                : 'border-slate-200 text-black bg-white hover:border-[#1E88E5] hover:text-[#1E88E5] hover:shadow-md'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {activeTab !== 0 && (
        <div className="pt-8 mt-8 border-t border-slate-200 space-y-6">
          {renderActiveContent()}
        </div>
      )}
    </div>
  );
};

export default ResourceGrid;
