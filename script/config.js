// variables parcours

var parcours = new Array();

parcours["intro"] = "Dans cette section, vous pourrez retrouver mon parcours scolaire, et découvrir la formation du BTS SIO plus en détails." ;

parcours["etudes"]["stmg"]["title"] = "Bac STMG - SIG";
parcours["etudes"]["stmg"]["subtitle"] = "Sep. 2021 - Jul. 2023";
parcours["etudes"]["stmg"]["liste"] = "<li>Découverte du monde de l'entreprise</li>\n<li>Management des organisations, économie et droit</li>\n<li>Introduction à l'informatique: découverte de HTML, CSS, SQL ...</li>";
parcours["etudes"]["stmg"]["diplome"] = "Bac Mention Très Bien";

parcours["etudes"]["sio"]["title"] = "BTS SIO - SLAM";
parcours["etudes"]["sio"]["subtitle"] = "Sep. 2023 - Aujourd'hui";
parcours["etudes"]["sio"]["liste"] = `
<ul>
    <li>Assistance et support technique aux utilisateurs</li>
    <li>Protection et sécurisation des données et des systèmes</li>
    <li>Développement et maintenance d'applications</li>
    <li>Création de sites web et d'applications mobiles</li>
    <li>Analyse et exploitation des données</li>
    <li>Gestion et optimisation des bases de données</li>
    <li>Utilisation de systèmes de gestion de version (comme Git)</li>
    <li>Communication et collaboration en équipe</li>
    <li>Veille technologique et adaptation aux nouvelles technologies</li>
    <li>Gestion de projets informatiques</li>
</ul>
`;

parcours["etudes"]["sio"]["diplome"] = "En cours d'obtention";

parcours["sio"]["def"] =  `Cette formation de 2 ans, est disponible dans près de 130 établissements publics en France, et allie à la fois théorie et pratique. Il y en a pour tout les goûts, puisqu’on y aborde les systèmes et les réseaux (Wi-fi, routeurs, composants de l’ordinateur) mais aussi le développement (conception de sites internet, d’applications, découverte de langages tels que Php, Java, C#, HTML, CSS ...). 
De plus, il se révèle très professionnalisant, avec 4 semaines de stage en 1ère année et 8 semaines en 2ème année, mais aussi une multitude de projets pratiques tout au long de la formation.`;
parcours["sio"]["objectifs"] = `<h4>Acquérir des compétences techniques :</h4>
<p>Développer des aptitudes en programmation, en administration de base de données, en gestion de réseaux et en cybersécurité.</p>
<h4>Préparer à l’insertion professionnelle :</h4>
<p>À la sortie du BTS SIO, il est possible de se rendre directement sur le marché du travail. Des entreprises numériques, des sociétés de conseil en technologies, des éditeurs de logiciels, ou encore les services informatiques internes des entreprises ou administrations publiques peuvent être intéressants.</p>
<h4>Favoriser la poursuite d’études :</h4>
<p>Les titulaires du BTS SIO peuvent poursuivre aussi en licence professionnelle, en école d’ingénieurs ou en master dans le domaine de l’informatique.</p>
`;
parcours["sio"]["sisr"] = " Cette option se concentre sur le développement et la maintenance des applications logicielles. Les étudiants apprennent à concevoir, développer et tester des logiciels, ainsi qu’à rédiger des cahiers des charges et à gérer des projets de développement.";
parcours["sio"]["slam"] = "Cette option forme les étudiants à la gestion et à la maintenance des infrastructures réseaux et systèmes informatiques. Les compétences acquises incluent l’installation, la configuration, la sécurisation et la gestion des réseaux et des systèmes informatiques.";

var projets = new Array();

projets["AP"]["MVC"]["title"]="Patron de conception <span>MVC</span> restaurant";
projets["AP"]["MVC"]["descr"]="Apport de modification pour regarder comment fonctionne le pattern MVC , apport de fonctionnalités : inscription, ajouter un j'aime, récupérer les commentaires des utilisateurs sous les restaurants. Initation au PDO";
projets["AP"]["MVC"]["photos"]["src1"] = ;
projets["AP"]["MVC"]["photos"]["src2"] = ;
projets["AP"]["MVC"]["photos"]["src3"] = ;

projets["AP"]["MVC"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div><div class="comp-btn">SQL</div>`;
projets["AP"]["MVC"]["lien"]="https://github.com/AssFrdz/1SIOA_MVC_NASRI_Sara_FERRADJ_Assia";
projets["AP"]["MVC"]["statut"]="Fini";

var projets = new Array();

projets["AP"]["GestionContacts"]["title"]="Gestion de <span>contacts MVC</span>";
projets["AP"]["GestionContacts"]["descr"]="Application simple de gestion de contacts, avec possibilité de se connecter, supprimer ou encore créer de nouveaux contacts.";
projets["AP"]["GestionContacts"]["photos"]["src1"] = ;
projets["AP"]["GestionContacts"]["photos"]["src2"] = ;
projets["AP"]["GestionContacts"]["photos"]["src3"] = ;

projets["AP"]["GestionContacts"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div>`;
projets["AP"]["GestionContacts"]["lien"]="https://github.com/AssFrdz/1SIOA_MVC_NASRI_Sara_FERRADJ_Assia";
projets["AP"]["GestionContacts"]["statut"]="Fini";

projets["AP"]["SiteCV"]["title"]="Site <span>CV</span> avec CMS";
projets["AP"]["SiteCV"]["descr"]="Site portfolio réalisé à partir du CMS Jimdo.";
projets["AP"]["SiteCV"]["photos"]["src1"] = ;
projets["AP"]["SiteCV"]["photos"]["src2"] = ;
projets["AP"]["SiteCV"]["photos"]["src3"] = ;

projets["AP"]["SiteCV"]["competences"]=`<div class="comp-btn">CMS</div>`;
projets["AP"]["SiteCV"]["lien"]="https://github.com/AssFrdz/AP-Sara-Assia-gestion-des-contacts";
projets["AP"]["SiteCV"]["statut"]="Fini";


projets["AP"]["SiteBeaute"]["title"]="Site de prestataire de <span>maquillage</span> avec CMS";
projets["AP"]["SiteBeaute"]["descr"]="Site portfolio réalisé à partir du CMS Jimdo.";
projets["AP"]["SiteBeaute"]["photos"]["src1"] = ;
projets["AP"]["SiteBeaute"]["photos"]["src2"] = ;
projets["AP"]["SiteBeaute"]["photos"]["src3"] = ;

projets["AP"]["SiteBeaute"]["competences"]=`<div class="comp-btn">CMS</div>`;
projets["AP"]["SiteBeaute"]["lien"]="https://as-beauty-institute.jimdofree.com/";
projets["AP"]["SiteBeaute"]["statut"]="Fini";


projets["AP"]["ChoixFormation"]["title"]="Choix de <span>formations</span>";
projets["AP"]["ChoixFormation"]["descr"]="Gestion du contrôleur, création d'un système de connexion simple sans BD";
projets["AP"]["ChoixFormation"]["photos"]["src1"] = ;
projets["AP"]["ChoixFormation"]["photos"]["src2"] = ;
projets["AP"]["ChoixFormation"]["photos"]["src3"] = ;

projets["AP"]["ChoixFormation"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">Php</div>`;
projets["AP"]["ChoixFormation"]["lien"]="https://github.com/AssFrdz/Formations--etudiant---master";
projets["AP"]["ChoixFormation"]["statut"]="Fini";


projets["PP"]["CalculatriceJS"]["title"]="Calculatrice <span>JS</span>";
projets["PP"]["CalculatriceJS"]["descr"]="Gestion du contrôleur, création d'un système de connexion simple sans BD";
projets["PP"]["CalculatriceJS"]["photos"]["src1"] = ;
projets["PP"]["CalculatriceJS"]["photos"]["src2"] = ;
projets["PP"]["CalculatriceJS"]["photos"]["src3"] = ;

projets["PP"]["CalculatriceJS"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">JS</div>`;
projets["PP"]["CalculatriceJS"]["lien"]="https://github.com/AssFrdz/Calculette-html-css";
projets["PP"]["CalculatriceJS"]["statut"]="En cours";


projets["PP"]["Reseau"]["title"]="Réseau <span>social simplifié</span>";
projets["PP"]["Reseau"]["descr"]="Entièrement conçu sur le pattern MVC, possibilité de créer son compte, choisir sa photo de profil, publier des posts, aimer et commenter";
projets["PP"]["Reseau"]["photos"]["src1"] = ;
projets["PP"]["Reseau"]["photos"]["src2"] = ;
projets["PP"]["Reseau"]["photos"]["src3"] = ;

projets["PP"]["Reseau"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div>`;
projets["PP"]["Reseau"]["lien"]="https://github.com/AssFrdz/Calculette-html-css";
projets["PP"]["Reseau"]["statut"]="Fini";



projets["PP"]["Evenementiel"]["title"]="Site <span>prestataire</span> de <span>mariage</span>";
projets["PP"]["Evenementiel"]["descr"]="Site en collaboration avec ma camarade, avec différentes prestations couvrant l'ensemble des besoins pour la réalisation d'un mariage";
projets["PP"]["Evenementiel"]["photos"]["src1"] = ;
projets["PP"]["Evenementiel"]["photos"]["src2"] = ;
projets["PP"]["Evenementiel"]["photos"]["src3"] = ;

projets["PP"]["Evenementiel"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div>`;
projets["PP"]["Evenementiel"]["lien"]="https://github.com/AssFrdz/KeyAssEvents";
projets["PP"]["Evenementiel"]["statut"]="En cours";




projets["PP"]["SiteImmo"]["title"]="Site <span>immobilier</span>";
projets["PP"]["SiteImmo"]["descr"]="Suivi d'un tutoriel de @faizdev pour réaliser cette page d'accueil de ce site vitrine d'une agence d'immobilier";
projets["PP"]["SiteImmo"]["photos"]["src1"] = ;
projets["PP"]["SiteImmo"]["photos"]["src2"] = ;
projets["PP"]["SiteImmo"]["photos"]["src3"] = ;

projets["PP"]["SiteImmo"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">JS</div>`;
projets["PP"]["SiteImmo"]["lien"]="https://github.com/AssFrdz/Site-immobilier";
projets["PP"]["SiteImmo"]["statut"]="Fini";


projets["PP"]["Ecommerce"]["title"]="Site d'<span>e-commerce</span>";
projets["PP"]["Ecommerce"]["descr"]="Page d'accueil de site e-commerce";
projets["PP"]["Ecommerce"]["photos"]["src1"] = ;
projets["PP"]["Ecommerce"]["photos"]["src2"] = ;
projets["PP"]["Ecommerce"]["photos"]["src3"] = ;


projets["PP"]["Ecommerce"]["competences"]=`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">JS</div>`;
projets["PP"]["Ecommerce"]["lien"]="https://github.com/AssFrdz/Site-immobilier";
projets["PP"]["Ecommerce"]["statut"]="En cours";














