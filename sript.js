let crystalDescription = [
    {
        img: "./assets/rose-quartz.jpg",
        desc: "Rose Quartz stone is strongly attached to both the heart and the throat chakra.",
        price: "$99.99"
    },
    {
        img: "./assets/selenite-wands.jpg",
        desc: "Selenite brings protection, harmony, and soul healing to your body, mind, and home.",
        price: "$99.99"
    },
    {
        img: "./assets/amethyst.jpg",
        desc: "Amethyst helps balance metabolism and positively serves the endocrine system.",
        price: "$99.99"
    },
    {
        img: "./assets/black-tourmaline.jpg",
        desc: "Black tourmaline effectively helps the wearer be absolved of dark feelings.",
        price: "$99.99"
    },
    {
        img: "./assets/azurite.jpg",
        desc: "Azurite is all about removing blockages in life so you can flourish.",
        price: "$99.99"
    },
    {
        img: "./assets/celestite.jpg",
        desc: "Celestite does a great job when it comes to chakra cleansing and grounding.",
        price: "$99.99"
    },
    {
        img: "./assets/citrine.jpg",
        desc: "Citrine works wonders when it comes to warming the physical body and bringing uplifting moods.",
        price: "$99.99"
    },
    {
        img: "./assets/Fluorite.jpg",
        desc: "Fluorite crystal carries the spiritual qualities of symmetry, beauty, lucid dreams, and even genius.",
        price: "$99.99"
    },
    {
        img: "./assets/blue-agate.jpg",
        desc: "Agate brings a flush of physical energy to the wearer, giving the metabolism a boost leading to a stonger immune system.",
        price: "$99.99"
    },
    {
        img: "./assets/angelite-stone.jpg",
        desc: "Angelite stone connects you to the soul of your guardian angel who brings all its protection.",
        price: "$99.99"
    },
    {
        img: "./assets/lapis-lazuli.jpg",
        desc: "Lapis lazuli liberates the wearer and allows one to communicate emotions and feelings with ease.",
        price: "$99.99"
    },
    {
        img: "./assets/labradorite.jpg",
        desc: "Labradorite crystal stone inspires one to reach for the stars for a higher consciousness.",
        price: "$99.99"
    }
]

let crystalInfo = document.querySelector("#card-wrapper");
let html="";

crystalDescription.forEach(e => {
    html += `
                <div class="col-lg-4 col-md-6 py-2">
                    <div class="card">
                        <img src="${e.img}" class="card-img-top" alt="..." width="300px" height="300px"/>
                        <div class="card-body">
                            <p class="card-text">${e.desc}</p>
                            <p class="fw-bold">${e.price}</p>
                            <a href="#!" class="btn happy-acid">Buy</a>
                        </div>
                    </div>
                </div>
            
              
    `
    crystalInfo.innerHTML = html;

})