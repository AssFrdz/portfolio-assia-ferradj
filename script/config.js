// variables parcours

var parcoursSio= {
    def:`Cette formation de 2 ans, est disponible dans près de 130 établissements publics en France, et allie à la fois théorie et pratique. Il y en a pour tout les goûts, puisqu’on y aborde les systèmes et les réseaux (Wi-fi, routeurs, composants de l’ordinateur) mais aussi le développement (conception de sites internet, d’applications, découverte de langages tels que Php, Java, C#, HTML, CSS ...). 
    De plus, il se révèle très professionnalisant, avec 4 semaines de stage en 1ère année et 8 semaines en 2ème année, mais aussi une multitude de projets pratiques tout au long de la formation.`,
    objectifs: `<h4>Acquérir des compétences techniques :</h4>
    <p>Développer des aptitudes en programmation, en administration de base de données, en gestion de réseaux et en cybersécurité.</p>
    <h4>Préparer à l’insertion professionnelle :</h4>
    <p>À la sortie du BTS SIO, il est possible de se rendre directement sur le marché du travail. Des entreprises numériques, des sociétés de conseil en technologies, des éditeurs de logiciels, ou encore les services informatiques internes des entreprises ou administrations publiques peuvent être intéressants.</p>
    <h4>Favoriser la poursuite d’études :</h4>
    <p>Les titulaires du BTS SIO peuvent poursuivre aussi en licence professionnelle, en école d’ingénieurs ou en master dans le domaine de l’informatique.</p>
    `,
    sisr:" Cette option se concentre sur le développement et la maintenance des applications logicielles. Les étudiants apprennent à concevoir, développer et tester des logiciels, ainsi qu’à rédiger des cahiers des charges et à gérer des projets de développement.",
    slam:"Cette option forme les étudiants à la gestion et à la maintenance des infrastructures réseaux et systèmes informatiques. Les compétences acquises incluent l’installation, la configuration, la sécurisation et la gestion des réseaux et des systèmes informatiques."
};

class Projet{
    titre;
    descr;
    photos;
    competences;
    lien;
    statut;
    domaine;

    constructor(_titre,_descr,_photos,_competences,_lien,_statut,_domaine){
        this.titre = _titre;
        this.descr = _descr;
        this.photos = _photos;
        this.competences = _competences;
        this.lien = _lien;
        this.statut = _statut;
        this.domaine = _domaine;
    }
}

var projets = [];

var cheminPhotos = "assets/projets/";
var extension = ".png";

projets.push(new Projet("Patron de conception <span>MVC</span> restaurant",
"Apport de modification pour regarder comment fonctionne le pattern MVC , apport de fonctionnalités : inscription, ajouter un j'aime, récupérer les commentaires des utilisateurs sous les restaurants. Initation au PDO",
cheminPhotos+"mvc"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div><div class="comp-btn">SQL</div>`,
"https://github.com/AssFrdz/1SIOA_MVC_NASRI_Sara_FERRADJ_Assia",
"Fini",
"AP"
));

projets.push(new Projet("Gestion de <span>contacts MVC</span>",
"Application simple de gestion de contacts, avec possibilité de se connecter, supprimer ou encore créer de nouveaux contacts.",
cheminPhotos+"contact"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div>`,
"https://github.com/AssFrdz/1SIOA_MVC_NASRI_Sara_FERRADJ_Assia",
"Fini",
"AP"
));
projets.push(new Projet("Site <span>CV</span> avec CMS",
"Site portfolio réalisé à partir du CMS Jimdo.",
cheminPhotos+"cvjimdo"+extension,
`<div class="comp-btn">CMS</div>`,
"https://frdjdz.jimdofree.com/",
"Fini",
"AP"
));
projets.push(new Projet("Site de prestataire de <span>maquillage</span> avec CMS",
"Site de maquilleuse professionnelle réalisé à partir du CMS Jimdo.",
cheminPhotos+"beaute"+extension,
`<div class="comp-btn">CMS</div>`,
"https://as-beauty-institute.jimdofree.com/",
"Fini",
"AP"
));

projets.push(new Projet("Choix de <span>formations</span>",
"Gestion du contrôleur, création d'un système de connexion simple sans BD",
cheminPhotos+"choix"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">Php</div>`,
"https://github.com/AssFrdz/Formations--etudiant---master",
"Fini",
"AP"
));


projets.push(new Projet("Calculatrice <span>JS</span>",
"Suivi d'un tutoriel pour réaliser cette calculatrice simple",
cheminPhotos+"calculette"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">JS</div>`,
"https://github.com/AssFrdz/Calculette-html-css",
"Fini",
"PP"
));

projets.push(new Projet("Réseau <span>social simplifié</span>",
"Entièrement conçu sur le pattern MVC, possibilité de créer son compte, choisir sa photo de profil, publier des posts, aimer et commenter",
cheminPhotos+"reseau (1)"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div>`,
"https://github.com/AssFrdz/Rseau",
"Fini",
"PP"
));

projets.push(new Projet("Site <span>prestataire</span> de <span>mariage</span>",
"Site en collaboration avec ma camarade, avec différentes prestations couvrant l'ensemble des besoins pour la réalisation d'un mariage",
cheminPhotos+"keyass"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div>`,
"https://github.com/AssFrdz/KeyAssEvents",
"Fini",
"PP"
));

projets.push(new Projet("Site <span>immobilier</span>",
"Suivi d'un tutoriel de @faizdev pour réaliser cette page d'accueil de ce site vitrine d'une agence d'immobilier",
cheminPhotos+"immo"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">JS</div>`,
"https://github.com/AssFrdz/Site-immobilier",
"Fini",
"PP"
));

projets.push(new Projet("Mission <span>Jeux Olympiques</span>",
"Apports de modifications sur le site, ajout de la confirmation admin de suppression",
cheminPhotos+"jo"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div>`,
"https://github.com/AssFrdz/Site-immobilier",
"Fini",
"AP"
));
projets.push(new Projet("Mission <span>Orange</span>",
"Ajout de rôles, contraintes de mot de passe dans la création de compte",
cheminPhotos+"orange"+extension,
`<div class="comp-btn">HTML</div><div class="comp-btn">CSS</div><div class="comp-btn">PHP</div>`,
"https://github.com/AssFrdz/Site-immobilier",
"Fini",
"AP"
));










