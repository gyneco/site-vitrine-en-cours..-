const produits = [
    {
        image: "manioc.avif",
        nom: "Manioc",
        nomWolof: "Niambi",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image:"carotte.jpg" ,
        nom: "Carotte",
        nomWolof: "Carotte",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image: "patate.jpg",
        nom: "Patate",
        nomWolof: "Patass",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image: "choux.avif",
        nom: "Choux",
        nomWolof: "Choupamé",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image: "navé.jpg",
        nom: "Navé",
        nomWolof: "Nawé",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image:"basanté.jpg" ,
        nom: "Aubergine",
        nomWolof: "Basanté",
        categorie: "Légumes frais",
        prix: 1500,
    },


    {
        image:"citron.jpg" ,
        nom: "citron",
        nomWolof: "limon",
        categorie: "famille verte",
        prix: 1500,
    }, 
    {
        image:"gombo.jpg" ,
        nom: "gombo",
        nomWolof: "kandia",
        categorie: "famille verte",
        prix: 1500,
    },
    {
        image:"concombre.png" ,
        nom: "concombre",
        nomWolof: "comcombr",
        categorie: "famille verte",
        prix: 1500,
    }, 
    {
        image:"ognon vert.webp" ,
        nom: "Ognon vert",
        nomWolof: "Ognon vert",
        categorie: "famille vert",
        prix: 1500,
    }, 
    {
        image:"percil chinois.jpg" ,
        nom: "percil ",
        nomWolof: "perci chinois",
        categorie: "famille vert",
        prix: 1500,
    }, 
    {
        image:"percil frisé.jpg" ,
        nom: "percil frisé",
        nomWolof: "perci roff",
        categorie: "famille vert",
        prix: 1500,
    }, 
    {
        image:"poivron vert.jpg" ,
        nom: "poivron vert",
        nomWolof: "cani salade vert",
        categorie: "piment",
        prix: 1500,
    }, 
    {
        image:"../IMAGES/poivron jaune.jpg" ,
        nom: "poivron jaune",
        nomWolof: "cani salade jaune",
        categorie: "piment",
        prix: 1500,
    }, 
    {
        image:"poivron rouge.jpg" ,
        nom: "poivron rouge",
        nomWolof: "cani salade rouge",
        categorie: "piment",
        prix: 1500,
    }, 
    {
        image:"thioukri long vert.jpg" ,
        nom: "piment",
        nomWolof: "cani thioukri vert long",
        categorie: "piment",
        prix: 1500,
    }, 
    {
        image:"thioukri long rouge.jpg" ,
        nom: "piment",
        nomWolof: "cani thioukri rouge long",
        categorie: "piment",
        prix: 1500,
    },
    {
        image:"tomate.jpg" ,
        nom: "tomate",
        nomWolof: "tomate",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image:"tomate fraiche.jpg" ,
        nom: "tomate fraiche",
        nomWolof: "tamaté farci",
        categorie: "Légumes frais",
        prix: 1500,
    }, 
    {
        image:"kani thioukri vert.jpg" ,
        nom: "piment forte",
        nomWolof: "cani thioukri vert",
        categorie: "piment",
        prix: 1500,
    },
    {
        image:"kani thioukri rouge.jpg" ,
        nom: "piment forte",
        nomWolof: "cani thioukri rouge",
        categorie: "piment",
        prix: 1500,
    },
    {
        image:"cani goana rouge.jpg" ,
        nom: "piment",
        nomWolof: "cani goana rouge",
        categorie: "piment",
        prix: 1500,
    }, 
    {
        image:"cani goana vert.jpg" ,
        nom: "piment vert",
        nomWolof: "cani goana vert",
        categorie: "piment",
        prix: 1500,
    },
    {
        image:"cani goana jaune.jpg" ,
        nom: "piment jaune",
        nomWolof: "cani goana jaune",
        categorie: "piment",
        prix: 1500,
    },
    {
        image:"cani projet sophia.jpg" ,
        nom: "piment sophia",
        nomWolof: "cani projet sophia",
        categorie: "piment",
        prix: 1500,
    },                
]

produits.forEach(produit => {
    const lesProduits = document.querySelector(".les-produits");
    const div = document.createElement("div");
    const image = document.createElement("img");
    const h4 = document.createElement("h4");
    const h3 = document.createElement("h3");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const panier = document.createElement("button")
    lesProduits.appendChild(div);
    div.appendChild(image);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(panier)
    panier.textContent = "Ajouter au panier"
    image.src = produit.image
    h3.textContent = "Nom:  "+ produit.nom
    h4.textContent = "Nom-Wolof:  "+ produit.nomWolof
    h5.textContent = "Catégorie:   "+ produit.categorie
    p.textContent = "Prix: "+ produit.prix +" FCFA 💰"
    div.classList.add("produit");
    image.classList.add("image")
    panier.classList.add("panier")
});


