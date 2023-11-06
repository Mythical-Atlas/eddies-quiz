const aliases = [
    ["beef tips", "filet mignon"],
    ["iceberg lettuce", "iceberg"],
    ["romaine lettuce", "romaine"],
    ["grilled romaine lettuce", "romaine lettuce", "romaine"],
    ["70/90 count shrimp", "small shrimp", "70/90 shrimp"],
    ["gruyere cheese", "gruyere"],
    ["ranch dressing", "ranch"],
    ["creamy herb dressing", "creamy herb"],
];
const shorthands = [
    ["beef tips", "beef", "beef tip"],
    ["scallions", "scallion"],
    ["grape tomato halves", "tomatos", "tomato", "grape tomatoes", "grape tomato", "tomato halves"],
    ["asian ginger chili sauce", "asian ginger"],
    ["micro cilantro", "micro"],
    ["70/90 count shrimp", "70/90", "70/90 count", "shrimp"],
    ["sweet and spicy chili sauce", "sweet and spicy"],
    ["artichoke hearts", "artichoke", "hearts", "artichokes"],
    ["diced red onion", "red onion"],
    ["toasted almonds", "almonds", "almond"],
    ["crispy leeks", "leeks"],
    ["gargonzola cheese crumbles", "gargonzola", "gargonzola cheese", "cheese crumbles"],
    ["grape tomatoes", "tomatoes"],
    ["diced cherrywood smoked bacon lardons", "diced cherrywood smoked bacon", "diced cherrywood bacon lardons", "cherrywood smoked bacon lardons", "diced cherrywood bacon", "cherrywood smoked bacon", "cherrywood bacon lardons", "diced bacon lardons", "diced smoked bacon", "cherrywood bacon"],
];
const incorrects = [
    ["chili paste", "chili"],
    ["sesame oil", "sesame"],
    ["soy sauce", "soy"],
    ["sweet and spicy chili sauce", "chili sauce"],
    ["asian ginger chili sauce", "chili sauce"],
    ["tempura batter", "tempura"],
    ["diced cherrywood smoked bacon lardons", "diced smoked bacon lardons", "smoked bacon lardons", "diced bacon lardons", "diced smoked bacon", "smoked bacon", "bacon lardons", "bacon"],
];

const potstick_ingredients = ["beef tips", "garlic", "sesame oil", "onion", "ginger", "chili paste", "soy sauce", "cilantro", "scallions", "asian ginger chili sauce", "micro cilantro"];
const ssShrimp_ingredients = ["70/90 count shrimp", "tempura batter", "sweet and spicy chili sauce", "sriracha"];
const calamari_ingredients = ["buttermilk", "blackened seasoning", "calamari rings", "tempura batter", "sliced peppadew peppers", "creamy wasabi sauce", "sweet and spicy chili sauce", "lemon vinaigrette"];
const poke_ingredients = ["asian ginger chili sauce", "diced yellowfin tuna", "creamy wasabi sauce", "diced avacado", "sweet soy sauce", "micro cilantro", "sesame wontons"];
const bbqShrimp_ingredients = ["8/10 count shrimp", "horseradish", "cherrywood smoked bacon", "southern comfort barbeque sauce", "chopped parsley"];
const shrimpCocktail_ingredients = ["jumbo shrimp", "spicy horseradish cocktail sauce", "watercress", "lemon fork"];
const halfShell_ingredients = ["chesapeake oysters", "apple champagne mignonette", "spicy horseradish cocktail sauce", "lemon forks", "mini tabasco bottles", "saltine crackers", "crushed ice"];
const rockefeller_ingredients = ["chesapeake oysters", "creamed spinach", "cherrywood smoked bacon", "steak butter", "parmesan cheese", "lemon fork", "watercress", "chopped parsley"];
const charbroiled_ingredients = ["chesapeake oysters", "cajun butter", "parmesan cheese", "grilled bread", "lemon fork", "watercress", "chopped parsley"];
const spinDip_ingredients = ["onions", "garlic", "killion's beer", "cream cheese", "artichoke hearts", "spinach", "heavy cream", "pepper jack cheese", "parmesan cheese", "tabasco sauce", "crushed red pepper", "chopped parsley", "crispy pita chips"];
const crabCake_ingredients = ["eggs", "pancake mix", "mayonnaise", "dijon mustard", "chopped parsley", "old bay seasoning", "tabasco sauce", "worcestershire sauce", "small jumbo lump crab", "yellow corn", "red onion", "red pepper", "parsley", "basil", "cajun remoulade"];
const carpaccio_ingredients = ["beef tenderloin", "extra virgin olive oil", ""];
const charcuterie_ingredients = [];
const cheesePlate_ingredients = [];
const hotApps_ingredients = [];
const chilledApps_ingredients = [];

const frenchOnion_ingredients = [];
const crabBisque_ingredients = [];
const caesarSalad_ingredients = [];
const house_ingredients = [];
const wedge_ingredients = [];
const chopped_ingredients = ["iceberg lettuce", "romaine lettuce", "red cabbage", "creamy herb dressing", "grape tomato halves", "celery", "gruyere cheese", "artichoke hearts", "diced red onion", "prosciutto", "toasted almonds"];
const grilledRomaine_ingredients = ["romaine lettuce", "ranch dressing", "gargonzola cheese crumbles", "grape tomatoes", "diced cherrywood smoked bacon lardons", "crispy leeks"];
const bread_ingredients = [];

const balsamicVin_ingredients = [];
const ranch_ingredients = [];
const mapleAppleVin_ingredients = [];
const blueCheeseDress_ingredients = [];
const creamyHerb_ingredients = [];
const caesarDress_ingredients = [];
const oilAndVinegar_ingredients = [];

const bakedPotato_ingredients = [];
const loadedPotato_ingredients = [];
const mashedPotatoes_ingredients = [];
const lobsterMashed_ingredients = [];
const parmesanFries_ingredients = [];
const macaroni_ingredients = [];
const lobsterMac_ingredients = [];
const eddiesPotatoes_ingredients = [];
const sweetPotato_ingredients = [];
const broccoli_ingredients = [];
const asparagus_ingredients = [];
const tempuraAsp_ingredients = [];
const tempuraBeans_ingredients = [];
const eddiesBrussels_ingredients = [];
const creamedSpinach_ingredients = [];
const wildMush_ingredients = [];

const filetMignon_ingredients = [];
const nyStrip_ingredients = [];
const ribeye_ingredients = [];
const bourbonRib_ingredients = [];
const trio_ingredients = [];
const delMar_ingredients = [];
const newOrleans_ingredients = [];
const bisonFiletMignon_ingredients = [];
const bisonBoneIn_ingredients = [];
const cheeseburger_ingredients = [];
const tarpolyFiletMignon_ingredients = [];
const tarpolyRibeye_ingredients = [];
const cedarSalmon_ingredients = [];
const grilledSalmon_ingredients = [];
const blackenedSalmon_ingredients = [];
const shimpScallops_ingredients = [];
const tunaSteak_ingredients = [];
const seaBass_ingredients = [];
const lobsterTail_ingredients = [];
const crabLegs_ingredients = [];
const lemonChicken_ingredients = [];
const vegetarian_ingredients = [];

const hollandaise_ingredients = [];
const bearnaise_ingredients = [];
const peppercorn_ingredients = [];
const horseradish_ingredients = [];
const gargonzola_ingredients = [];
const maxwell_ingredients = [];
const oscar_ingredients = [];
const baconShrimp_ingredients = [];
const crabShrimpDelMar_ingredients = [];
const mixedGrill_ingredients = [];
const marylandCrabCake_ingredients = [];
const crabLegsEnhance_ingredients = [];
const lobsterTailEnhance_ingredients = [];

const bananas_ingredients = [];
const brownie_ingredients = [];
const carrotCake_ingredients = [];
const chocolateCake_ingredients = [];
const cremeBrulee_ingredients = [];
const pbCup_ingredients = [];
const sorbet_ingredients = [];
const iceCream_ingredients = [];

const kidsChicken_ingredients = [];
const kidsMac_ingredients = [];