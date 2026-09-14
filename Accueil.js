const produits = [
    {
        image: "manioc.avif",
        nom: "Manioc",
        nomWolof: "Niambi",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image: "carotte.jpg",
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
        image: "basanté.jpg",
        nom: "Aubergine",
        nomWolof: "Basanté",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image: "citron.jpg",
        nom: "Citron",
        nomWolof: "Limon",
        categorie: "Famille verte",
        prix: 1500,
    }, 
    {
        image: "gombo.jpg",
        nom: "Gombo",
        nomWolof: "Kandia",
        categorie: "Famille verte",
        prix: 1500,
    },
    {
        image: "concombre.png",
        nom: "Concombre",
        nomWolof: "Comcombr",
        categorie: "Famille verte",
        prix: 1500,
    }, 
    {
        image: "ognon vert.webp",
        nom: "Ognon vert",
        nomWolof: "Ognon vert",
        categorie: "Famille verte",
        prix: 1500,
    }, 
    {
        image: "percil chinois.jpg",
        nom: "Persil",
        nomWolof: "Perci chinois",
        categorie: "Famille verte",
        prix: 1500,
    }, 
    {
        image: "percil frisé.jpg",
        nom: "Persil frisé",
        nomWolof: "Perci roff",
        categorie: "Famille verte",
        prix: 1500,
    }, 
    {
        image: "poivron vert.jpg",
        nom: "Poivron vert",
        nomWolof: "Cani salade vert",
        categorie: "Piment",
        prix: 1500,
    }, 
    {
        image: "poivron jaune.jpg",
        nom: "Poivron jaune",
        nomWolof: "Cani salade jaune",
        categorie: "Piment",
        prix: 1500,
    }, 
    {
        image: "poivron rouge.jpg",
        nom: "Poivron rouge",
        nomWolof: "Cani salade rouge",
        categorie: "Piment",
        prix: 1500,
    }, 
    {
        image: "thioukri long vert.jpg",
        nom: "Piment",
        nomWolof: "Cani thioukri vert long",
        categorie: "Piment",
        prix: 1500,
    }, 
    {
        image: "thioukri long rouge.jpg",
        nom: "Piment",
        nomWolof: "Cani thioukri rouge long",
        categorie: "Piment",
        prix: 1500,
    },
    {
        image: "tomate.jpg",
        nom: "Tomate",
        nomWolof: "Tomate",
        categorie: "Légumes frais",
        prix: 1500,
    },
    {
        image: "tomate fraiche.jpg",
        nom: "Tomate fraîche",
        nomWolof: "Tamaté farci",
        categorie: "Légumes frais",
        prix: 1500,
    }, 
    {
        image: "kani thioukri vert.jpg",
        nom: "Piment fort",
        nomWolof: "Cani thioukri vert",
        categorie: "Piment",
        prix: 1500,
    },
    {
        image: "kani thioukri rouge.jpg",
        nom: "Piment fort",
        nomWolof: "Cani thioukri rouge",
        categorie: "Piment",
        prix: 1500,
    },
    {
        image: "cani goana rouge.jpg",
        nom: "Piment",
        nomWolof: "Cani goana rouge",
        categorie: "Piment",
        prix: 1500,
    }, 
    {
        image: "cani goana vert.jpg",
        nom: "Piment vert",
        nomWolof: "Cani goana vert",
        categorie: "Piment",
        prix: 1500,
    },
    {
        image: "cani goana jaune.jpg",
        nom: "Piment jaune",
        nomWolof: "Cani goana jaune",
        categorie: "Piment",
        prix: 1500,
    },
    {
        image: "cani projet sophia.jpg",
        nom: "Piment sophia",
        nomWolof: "Cani projet sophia",
        categorie: "Piment",
        prix: 1500,
    }
];

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


