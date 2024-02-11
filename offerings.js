
class Article {
    constructor(title, imgSrc, content) {
      this.title = title;
			this.img = imgSrc;
      this.content = content;

			populate("title", "change", title) // page title
			setImageSrc("articleImg", imgSrc) // article image
			populate("articleTitle", "change", title) // article title

			for (let i = 0; i < this.content.length; i++) {
				populate("offeringArticle", "add", content[i])
			}
    }
};


const article = localStorage.getItem('article');

if (article == "cookingOil") {
	const cookingOil = new Article(
		"Cooking Oil and Animal Feed",
		"images/cooking_oil.jpg", 
		[
			`<p class="contents">
				We deliver the nutritious feed to our esteemed 
				clients at affordable prices ranging from pig, 
				chicken feed (broilers, layers and village chickens).
				</p>`,
			`<p class="contents"> 
				We have affordable and free cholesterol vegetable oil. 
			</p>`
		]
	);
} else if (article == "porkProducts") {
	const poultry = new Article(
		"Pig Breeding and Pork Products",
		"images/piggery.jpg", 
		[
      `<p class="contents">
				We supply quality breeds (gilts) to farmers the winners,
				sow and Boar.
			</p>` ,
			`<p class="contents">
				We also supply pokers to our esteemed clients. 
				We believe in quality that is affordable.
			</p>`
		]
	);
} else if (article == "fruits") {
	const poultry = new Article(
		"Fruit Plantations",
		"images/banana_plantation.jpg", 
		[
			`<p class="contents">
			Banana and Avocado plantations are maintained 
			to supply fresh and delicious fruits to the market.
			</p>`
		]
	);
} else if (article == "compostManure") {
	const poultry = new Article(
		"Liquid fertilizer and Compost Manure",
		"images/compost_manure.jpg", 
		[
			`<p class="contents">
				We believe in organic farming farming which does 
				not pollute our environment or affect the land. 
				Hence we promote organic farming.
			</p>`
		]
	);
}  else if (article == "fishFarming") {
	const poultry = new Article(
		"Fish Farming",
		"images/fish_farming.jpg", 
		[
			`<p class="contents">
				We also sale fish at point of sale only. 
			</p>`
		]
	);
} else if (article == "nurseryPM") {
	const poultry = new Article(
		"Nursery Plant Management",
		"images/nursery_plant_management.jpg", 
		[
			`<p class="contents">
				We all sell nursery plants (has avocado, Williams,  bananas, oranges) 
				tomatoes and onions per order. 
			</p>`
		]
	);
} else if (article == "poultryR") {
	const poultry = new Article(
		"Poultry Rearing",
		"images/poultry.jpg", 
		[	
      `<p class="contents">
				We have broilers and village chickens that we 
				sell at point of maturity to reliable customers 
				where quality is affordable
			</p>` 
		]
	);
} else if (article == "agricT") {
	const poultry = new Article(
		"Agricultural Training and consultations",
		"images/agricultural_training.jpg", 
		[
			`<p class="contents">
				We also offer trainings to farmers and run the Goldfield 
				training institute of Zambia (GFTIZ) that focuses on farming as a business’s.
				(Agriculture, ICT, entrepreneurship and project management).
			</p>`
		]
	);
} else if (article == "vegeCult") {
	const poultry = new Article(
		"Vegetable Cultivation",
		"images/vegetable_cultivation.jpg", 
		[
			`<p class="contents">
				A wide variety of vegetables, including Rape, Chinese, 
				Cabbage, Okra, Tomatoes, Onions, Green Pepper, Chili, 
				and Eggplants are cultivated using sustainable farming practices.
			</p>`
		]
	);
} 

/*
const goHomeListener = addEventListener('click',
() => window.location = 'index.html')

let goHomeLink = (id) => document.getElementById(id).goHomeListener;

goHomeLink('site-log-item-1')
goHomeLink('site-log-item-2')
goHomeLink('site-log-item-3')
*/

document.getElementById('site-log-item-1').addEventListener('click', () => window.location = 'index.html');
document.getElementById('site-log-item-2').addEventListener('click', () => window.location = 'index.html');
document.getElementById('site-log-item-3').addEventListener('click', () => window.location = 'index.html');