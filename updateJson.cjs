const fs = require('fs');
const path = require('path');

const enFile = path.resolve('src/locales/en.json');
const esFile = path.resolve('src/locales/es.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const es = JSON.parse(fs.readFileSync(esFile, 'utf8'));

en.privacy_policy = {
  title: "Privacy Policy",
  whoWeAre: {
    title: "Who we are",
    p1: "We are the First Coast Hispanic Chamber of Commerce in Northeast Florida. Our mission is to positively impact the regional economy by creating value, promoting and facilitating the success of Hispanic-owned businesses and by engaging the community at large.",
    p2: "Our website address is: <1>https://fchcc.com</1>. If you want to learn more about our history, <2>click here</2>."
  },
  whatWeCollect: {
    title: "What personal data we collect and why we collect it",
    commentsTitle: "Comments",
    commentsP1: "When visitors leave comments on our site, we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.",
    commentsP2: "An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <1>http://automattic.com/privacy/</1>. After approval of your comment, your profile picture is visible to the public in the context of your comment."
  },
  sensitiveInfo: {
    title: "Sensitive Information",
    p1: "FCHCC does not keep on file sensitive information such as credit card numbers or any other payment confidential information from its members, subscribers and customers."
  },
  contactForms: {
    title: "Contact forms",
    p1: "When you use our <1>Contact Froms</1>, we collect (a) your name, (b) email address, (c) company name (if applicable, and (d) phone #. Information is kept in our database for one year and only used to reply back to you. We do not use your information for marketing purposes. Also, our contact form includes a captcha code and allows you to have a copy made of the email message you send to us."
  },
  mailList: {
    title: "Mail List Sign-up",
    p1: "We have your name and email address when you subscribe to receive our enewsletter and networking events invitations."
  },
  whatWeDo: {
    title: "What do we do with your data?",
    p1: "When you subscribe to our mail list, we use your name and email address to send you our e-newsletter, events and announcements to keep you updated with our chamber. Also, we use your email address to send you information on workshops from our partners that might be of interest to you. You are able to opt out at the bottom of every email we send. And your information is deleted immediately after opting out.",
    p2: "FCHCC does not sell or share its contact list with any third parties."
  },
  cookies: {
    title: "Cookies",
    p1: "Our website uses cookies and by using the website, you consent to the use of cookies. Our Cookies Policy explains what cookies are, how we use cookies, how third parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.",
    whatAreCookiesTitle: "What are cookies",
    whatAreCookiesP1: "Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third party to recognize you and make your next visit easier and the Service more useful to you. Cookies can be “persistent” or “session” cookies.",
    howWeUseTitle: "How we use cookies",
    howWeUseP1: "If you leave a comment on our site, you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year."
  },
  embeddedContent: {
    title: "Embedded content from other websites",
    p1: "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.",
    p2: "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website."
  },
  howLongRetain: {
    title: "How long we retain your data",
    p1: "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.",
    p2: "For users that register on our members only site, we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information."
  },
  whatRights: {
    title: "What rights you have over your data",
    p1: "If you have an account on our members only site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."
  },
  whereWeSend: {
    title: "Where we send your data",
    p1: "Visitor comments may be checked through an automated spam detection service."
  },
  contactInfo: {
    title: "Your contact information",
    p1: "If you have questions about how privacy concerns, please contact us at <1>fchcc@fchcc.com</1>."
  },
  additionalInfo: {
    title: "Additional information",
    howWeProtectTitle: "How we protect your data",
    howWeProtectP1: "We have encryption software on the website to protect data about our members and visitors and we do not share our distro lists. That means we don’t sell or give away contact information about our visitors.",
    dataBreachTitle: "What data breach procedures we have in place",
    dataBreachP1: "We have internal reporting systems set up to protect visitors and members data. And our board and staff are alert and trained in data protection."
  },
  footerText: "For any questions regarding our privacy policy, contact us at <1>fchcc@fchcc.com</1>."
};

es.privacy_policy = {
  title: "Política de Privacidad",
  whoWeAre: {
    title: "Quiénes somos",
    p1: "Somos la Cámara de Comercio Hispana de la Primera Costa en el noreste de Florida. Nuestra misión es tener un impacto positivo en la economía regional mediante la creación de valor, promoviendo y facilitando el éxito de las empresas de propiedad hispana e involucrando a la comunidad en general.",
    p2: "La dirección de nuestro sitio web es: <1>https://fchcc.com</1>. Si desea conocer más sobre nuestra historia, <2>haga clic aquí</2>."
  },
  whatWeCollect: {
    title: "Qué datos personales recopilamos y por qué los recopilamos",
    commentsTitle: "Comentarios",
    commentsP1: "Cuando los visitantes dejan comentarios en el sitio, recopilamos los datos que se muestran en el formulario de comentarios, así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.",
    commentsP2: "Una cadena anónima creada a partir de su dirección de correo electrónico (también llamada hash) puede ser proporcionada al servicio de Gravatar para ver si lo está usando. La política de privacidad del servicio Gravatar está disponible aquí: <1>http://automattic.com/privacy/</1>. Después de la aprobación de su comentario, la imagen de su perfil es visible para el público en el contexto de su comentario."
  },
  sensitiveInfo: {
    title: "Información Sensible",
    p1: "FCHCC no mantiene en archivo información sensible, como números de tarjetas de crédito o cualquier otra información confidencial de pago de sus miembros, suscriptores y clientes."
  },
  contactForms: {
    title: "Formularios de contacto",
    p1: "Cuando utiliza nuestros <1>Formularios de contacto</1>, recopilamos (a) su nombre, (b) dirección de correo electrónico, (c) nombre de la empresa (si corresponde) y (d) número de teléfono. La información se mantiene en nuestra base de datos durante un año y solo se utiliza para responderle. No usamos su información para fines de marketing. Además, nuestro formulario de contacto incluye un código captcha y le permite obtener una copia del mensaje de correo electrónico que nos envía."
  },
  mailList: {
    title: "Suscripción a la Lista de Correo",
    p1: "Tenemos su nombre y dirección de correo electrónico cuando se suscribe para recibir nuestro boletín electrónico y nuestras invitaciones a eventos de networking."
  },
  whatWeDo: {
    title: "¿Qué hacemos con sus datos?",
    p1: "Cuando se suscribe a nuestra lista de correo, usamos su nombre y correo electrónico para enviarle nuestro boletín electrónico, eventos y anuncios para mantenerlo actualizado con nuestra cámara. También usamos su correo electrónico para enviarle información sobre talleres de nuestros socios que puedan ser de su interés. Puede optar por no participar en la parte inferior de cada correo electrónico que enviamos. Y su información se elimina inmediatamente después de optar por no participar.",
    p2: "FCHCC no vende ni comparte su lista de contactos con terceros."
  },
  cookies: {
    title: "Cookies",
    p1: "Nuestro sitio web utiliza cookies y, al usar el sitio web, usted da su consentimiento para el uso de cookies. Nuestra Política de Cookies explica qué son las cookies, cómo utilizamos las cookies, cómo terceros con los que nos asociamos pueden utilizar cookies en el Servicio, sus opciones con respecto a las cookies y más información sobre las cookies.",
    whatAreCookiesTitle: "Qué son las cookies",
    whatAreCookiesP1: "Las cookies son pequeños fragmentos de texto enviados por su navegador web a través de un sitio web que visita. Un archivo de cookie se almacena en su navegador web y permite que el Servicio o un tercero lo reconozcan y hagan que su próxima visita sea más fácil y que el Servicio le sea más útil. Las cookies pueden ser \"persistentes\" o de \"sesión\".",
    howWeUseTitle: "Cómo usamos las cookies",
    howWeUseP1: "Si deja un comentario en nuestro sitio, puede optar por guardar su nombre, dirección de correo electrónico y sitio web en cookies. Esto es para su comodidad, para que no tenga que volver a rellenar sus datos cuando deje otro comentario. Estas cookies tendrán una duración de un año."
  },
  embeddedContent: {
    title: "Contenido incrustado de otros sitios web",
    p1: "Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otros sitios web se comporta de la misma manera que si el visitante hubiera visitado el otro sitio web.",
    p2: "Estos sitios web pueden recopilar datos sobre usted, utilizar cookies, incrustar un seguimiento adicional de terceros y supervisar su interacción con ese contenido incrustado, incluido el seguimiento de su interacción con el contenido incrustado si tiene una cuenta y está conectado a ese sitio web."
  },
  howLongRetain: {
    title: "Cuánto tiempo conservamos sus datos",
    p1: "Si deja un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar sucesivos comentarios automáticamente en lugar de mantenerlos en una cola de moderación.",
    p2: "Para los usuarios que se registran en nuestro sitio solo para miembros, también almacenamos la información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores del sitio web también pueden ver y editar esa información."
  },
  whatRights: {
    title: "Qué derechos tiene sobre sus datos",
    p1: "Si tiene una cuenta en nuestro sitio solo para miembros, o ha dejado comentarios, puede solicitar recibir un archivo exportado de los datos personales que tenemos sobre usted, incluidos los datos que nos haya proporcionado. También puede solicitar que eliminemos los datos personales que tenemos sobre usted. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad."
  },
  whereWeSend: {
    title: "Dónde enviamos sus datos",
    p1: "Los comentarios de los visitantes pueden ser verificados a través de un servicio de detección automática de spam."
  },
  contactInfo: {
    title: "Su información de contacto",
    p1: "Si tiene preguntas sobre cuestiones de privacidad, comuníquese con nosotros a <1>fchcc@fchcc.com</1>."
  },
  additionalInfo: {
    title: "Información adicional",
    howWeProtectTitle: "Cómo protegemos sus datos",
    howWeProtectP1: "Tenemos software de encriptación en el sitio web para proteger los datos de nuestros miembros y visitantes y no compartimos nuestras listas de distribución. Eso significa que no vendemos ni regalamos información de contacto de nuestros visitantes.",
    dataBreachTitle: "Qué procedimientos contra brechas de datos tenemos implementados",
    dataBreachP1: "Contamos con sistemas de reportes internos implementados para proteger los datos de visitantes y miembros. Y nuestra junta y personal están alerta y capacitados en protección de datos."
  },
  footerText: "Si tiene alguna pregunta sobre nuestra política de privacidad, contáctenos en <1>fchcc@fchcc.com</1>."
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(esFile, JSON.stringify(es, null, 2));

console.log("Translations successfully updated.");
