//  Matcha Haven — Product Dashboard

var MATCHA_PRODUCTS = [
    {
        id: 1,
        name: "First Harvest Matcha",
        price: 3800,
        description: "First-harvest Uji ceremonial grade. Vibrant green, silky smooth, and naturally sweet.",
        badge: "Best Seller",
        image: "https://i.pinimg.com/736x/1b/dc/03/1bdc03992f716dfc5894b2029659c5b3.jpg"
    },
    {
        id: 2,
        name: "Hojicha",
        price: 3200,
        description: "Slow-roasted green tea with a warm, toasty aroma and naturally low caffeine.",
        badge: "Fan Favorite",
        image: "https://i.pinimg.com/736x/2d/99/5e/2d995e57b9b916410fc9e57dcfe0d022.jpg"
    },
    {
        id: 3,
        name: "Strawberry Matcha",
        price: 3500,
        description: "Ceremonial matcha layered with fresh strawberry purée and oat milk. Summer in a cup.",
        badge: "Seasonal",
        image: "https://i.pinimg.com/736x/38/95/27/3895272648e579a382c1a7e1bf3b40a4.jpg"
    },
    {
        id: 4,
        name: "Mango Matcha",
        price: 3500,
        description: "Tropical Alphonso mango meets earthy ceremonial matcha — bright, sweet, and refreshing.",
        badge: "New",
        image: "https://i.pinimg.com/736x/e5/0e/86/e50e8698c5d3b029db99945ca331a48c.jpg"
    },
    {
        id: 5,
        name: "Uji Matcha",
        price: 4200,
        description: "Single-origin, stone-ground from Uji, Kyoto. The purest expression of Japanese matcha.",
        badge: "Premium",
        image: "https://i.pinimg.com/736x/6b/e5/3f/6be53f0597f60a149b967a73a1916eaf.jpg"
    }
];
 
 
// ── Step 3: fetchProductsThen ─────────────────────────────
 
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            console.log("── Matcha Haven | fetchProductsThen — external API names ──");
            products.forEach(function (product) {
                console.log(product.fields.name);
            });
        })
        .catch(function (error) {
            console.error("fetchProductsThen error:", error);
        });
}
 
 
// ── Step 4: fetchProductsAsync ────────────────────────────

 
async function fetchProductsAsync() {
    try {
                // Simulate an async data fetch using the local product array
        var products = await Promise.resolve(MATCHA_PRODUCTS);
 
        if (!products || products.length === 0) {
            throw new Error("No products found.");
        }
 
        displayProducts(products);
 
    } catch (error) {
        handleError(error);
    }
}
 
 
// ── Step 5: displayProducts ───────────────────────────────

 
function displayProducts(products) {
    var container = document.getElementById("product-container");
 
    // Clear the loading message
    container.innerHTML = "";
 
    // Loop through the first 5 products
    var firstFive = products.slice(0, 5);
 
    firstFive.forEach(function (product) {
        var name        = product.name;
        var price       = product.price;
        var image       = product.image;
        var description = product.description;
        var badge       = product.badge;
 
        // Convert cents to dollars
        var formattedPrice = "$" + (price / 100).toFixed(2);
 
        // Outer article wrapper
        var card = document.createElement("article");
        card.classList.add("product-card");
 
        // Badge pill — e.g. "New", "Best Seller"
        if (badge) {
            var badgeEl = document.createElement("span");
            badgeEl.classList.add("card-badge");
            badgeEl.textContent = badge;
            card.appendChild(badgeEl);
        }
 
        var imageWrap = document.createElement("div");
        imageWrap.classList.add("card-image-wrap");
 
        var img = document.createElement("img");
        img.src     = image;
        img.alt     = name;
        img.loading = "lazy";
 
        imageWrap.appendChild(img);
        card.appendChild(imageWrap);


        // Card body
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
 
        var label = document.createElement("span");
        label.classList.add("card-label");
        label.textContent = "Matcha Haven";
 
        var title = document.createElement("h2");
        title.textContent = name;
 
        var desc = document.createElement("p");
        desc.classList.add("card-desc");
        desc.textContent = description;
 
        var priceEl = document.createElement("p");
        priceEl.classList.add("card-price");
        priceEl.textContent = formattedPrice;
 
        // Assemble card body
        cardBody.appendChild(label);
        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(priceEl);
 
        // Assemble full card
        card.appendChild(cardBody);
 
        // Add card to the grid
        container.appendChild(card);
    });
}
 
 

// ── Step 6: handleError ───────────────────────────────────
function handleError(error) {
    console.error("An error occurred: " + error.message);
 
    var container = document.getElementById("product-container");
    container.innerHTML =
        "<p class=\"error-msg\">" +
            "We couldn't load the collection right now.<br>" +
            "Please refresh or try again later." +
        "</p>";
}

 // ── Step 7: Call both functions ───────────────────────────
fetchProductsThen();
fetchProductsAsync();
 