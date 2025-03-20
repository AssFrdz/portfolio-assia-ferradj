
var pageActuelle = window.location.pathname;
//menu
if(pageActuelle.includes(".html")){
    var hamburger_button = document.getElementById("hamburger_button");
var menu = document.querySelector("nav ul")
hamburger_button.addEventListener("click", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        hamburger_button.src = "assets/icon/cross.svg"
        menu.style.display = "block";
        menu.classList.add("hamburger_menu");
    } else {
        hamburger_button.src = "assets/icon/bars.svg"
        menu.style.display = "none";
        menu.classList.remove("hamburger_menu");
    }
});
}else if(pageActuelle.includes("index.html")){
    var projetAccueilBtnRight = document.querySelector(".home-bloc-1 .vague .proj-slide .galerie .btn-arrow-right");
    var projetAccueilBtnLeft= document.querySelector(".home-bloc-1 .vague .proj-slide .galerie .btn-arrow-left");
    var projetAccueilImg = document.querySelector(".home-bloc-1 .vague .proj-slide .galerie .proj-img");
    var ch = "./assets/projets/FormulaireSimple/fs ";
    var projetAccueilArraySourcesImage = [ch+"(1).png",ch+"(2).png",ch+"(3).png"];
    var i = 0;
    
    // gestion des boutons : accueil
    
    projetAccueilImg.src ="./assets/projets/FormulaireSimple/fs (1).png";
    projetAccueilImg.objectFit="fill";
    projetAccueilBtnRight.addEventListener("click",()=>{
        if(i<projetAccueilArraySourcesImage.length-1){
            i++;
            projetAccueilImg.src = projetAccueilArraySourcesImage[i];
        }
    })
    projetAccueilBtnLeft.addEventListener("click",()=>{
        if(i>0){
            i--;
            projetAccueilImg.src = projetAccueilArraySourcesImage[i];
        }
    })
}else if(pageActuelle.includes("parcours.html")){
    var parcoursArray = {};

// STMG
parcoursArray["stmg"] = {
    title: "Bac STMG Option SIG",
    date: "Sep.2021 - Jul 2023",
    liste: `
        <li>Découverte du monde de l'entreprise</li>
        <li>Management des organisations, économie et droit</li>
        <li>Introduction à l'informatique: découverte de HTML, CSS, SQL ...</li>
    `,
    diplome: "Bac Mention Très Bien"
};

// SIO
parcoursArray["sio"] = {
    title: "BTS SIO Option SLAM",
    date: "Sep.2023 - Maintenant",
    liste: `
        <li>Acquisitions de connaissances en réseau (adressage IP, switchs, routeurs) et développement (C#)</li>
        <li>Résolution de problèmes et projets en équipe</li>
        <li>Mise au point d'applications et projets divers</li>
    `,
    diplome: "Préparation en cours"
};

// Les variables du document
var parcoursDiv = {
    title: document.querySelector(".post-it .bloc-1 h3"),
    date: document.querySelector(".post-it .bloc-1 p"),
    liste: document.querySelector(".post-it .bloc-2 ul"),
    diplome: document.querySelector(".post-it .cta-2-blue"),
    btnRight: document.querySelectorAll(".slide-parcours .btn-arrow-right"),
    btnLeft: document.querySelectorAll(".slide-parcours .btn-arrow-left")
};



var iP = 0;
var keys = Object.keys(parcoursArray);

// Initialisation des valeurs
parcoursDiv.title.textContent = parcoursArray[keys[iP]].title;
parcoursDiv.date.textContent = parcoursArray[keys[iP]].date;
parcoursDiv.liste.innerHTML = parcoursArray[keys[iP]].liste;
parcoursDiv.diplome.textContent = parcoursArray[keys[iP]].diplome;

document.addEventListener("DOMContentLoaded",()=>{
    
    parcoursDiv.btnRight.forEach(btn=>{
        btn.addEventListener("click", () => {
        if (iP < keys.length - 1) {
        iP++;
        parcoursDiv.title.textContent = parcoursArray[keys[iP]].title;
        parcoursDiv.date.textContent = parcoursArray[keys[iP]].date;
        parcoursDiv.liste.innerHTML = parcoursArray[keys[iP]].liste;
        parcoursDiv.diplome.textContent = parcoursArray[keys[iP]].diplome;
    }
    })
    
   
});

parcoursDiv.btnLeft.forEach(btn=>{
    btn.addEventListener("click", () => {
    if (iP > 0) {
        iP--;
        parcoursDiv.title.textContent = parcoursArray[keys[iP]].title;
        parcoursDiv.date.textContent = parcoursArray[keys[iP]].date;
        parcoursDiv.liste.innerHTML = parcoursArray[keys[iP]].liste;
        parcoursDiv.diplome.textContent = parcoursArray[keys[iP]].diplome;
    }
    });
})

    
})



    
}

