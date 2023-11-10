/*
ideas:
- sauces/condiments
- andouille sausage gravy
- seasonings (blackening seasoning)
*/

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
const crabCake_ingredients = ["eggs", "pancake mix", "mayonnaise", "dijon mustard", "chopped parsley", "old bay seasoning", "tabasco sauce", "worcestershire sauce", "small jumbo lump crab", "yellow corn", "red onion", "red pepper", "chopped parsley", "basil", "cajun remoulade"];
const carpaccio_ingredients = ["beef tenderloin", "extra virgin olive oil", "balsamic glaze", "salt", "pepper", "capers", "diced red onion", "shaved parmesan cheese", "potato chips", "watercress"];
const charcuterie_ingredients = ["hot soppressata", "coppa secca", "dry chorizo", "wheel cut manchego", "pie cut parmesan", "pie cut gargonzola", "triangle gruyere"];
const cheesePlate_ingredients = ["wheel cut manchego cheese", "pie cut parmesan cheese", "pie cut gargonzola cheese", "triangle gruyere cheese"];
const hotApps_ingredients = ["barbeque shrimp", "maryland crab cakes", "filet mignon pot stickers"];
const chilledApps_ingredients = ["cocktail shrimp", "oysters on the half shell", "sesame crusted yellowfin ahi tuna"];

const frenchOnion_ingredients = ["croutons", "gruyere cheese", "grated parmesan cheese", "chopped parsley", "red onions", "yellow onions", "leeks", "green onions", "beef stock", "roasted garlic puree", "madeira wine", "thyme", "brandy"];
const crabBisque_ingredients = ["minors crab base", "white wine", "yellow corn", "heavy cream", "half and half", "corn starch", "tabasco", "lemon juice", "salt", "white pepper", "roasted corn", "king crab knuckle meat", "chopped parsley"];
const caesarSalad_ingredients = ["chopped romaine lettuce", "parmesan cheese", "croutons", "caesar dressing"];
const house_ingredients = ["iceberg lettuce", "romaine lettuce", "red cabbage", "grape tomatoes", "cucumber slices", "croutons", "red onion rings"];
const wedge_ingredients = ["iceberg lettuce", "diced cherrywood smoked bacon lardons", "blue cheese crumbles", "tomato wedges", "blue cheese dressing"];
const chopped_ingredients = ["iceberg lettuce", "romaine lettuce", "red cabbage", "creamy herb dressing", "grape tomato halves", "celery", "gruyere cheese", "artichoke hearts", "diced red onion", "prosciutto", "toasted almonds"];
const grilledRomaine_ingredients = ["romaine lettuce", "ranch dressing", "gargonzola cheese crumbles", "grape tomatoes", "diced cherrywood smoked bacon lardons", "crispy leeks"];
const bread_ingredients = ["grated parmesan cheese", "paprika", "granulated garlic", "kosher salt", "herbs de provence"];

const balsamicVin_ingredients = ["balsamic vinegar", "salad oil", "shallots", "garlic", "bay leaves", "thyme", "herbs de provence", "crushed red pepper", "dijon mustard", "honey", "pepper", "salt"];
const ranch_ingredients = ["mayonnaise", "buttermilk", "lemon juice", "wocestershire sauce", "tabasco", "roasted garlic puree", "cracked black peppercorns", "ranch seasoning mix"];
const mapleAppleVin_ingredients = ["maple syrup", "apple cider vinegar", "dijon mustard", "salt", "pepper", "shallots", "extra virgin olive oil"];
const blueCheeseDress_ingredients = ["gargonzola cheese chunks", "buttermilk", "mayonnaise", "sour cream", "red wine vinegar", "worcestershire sauce", "tabasco", "mustard", "salt", "cayenne pepper", "pepper"];
const creamyHerb_ingredients = ["liquid egg yolk", "dijon mustard", "rice wine vinegar", "honey", "dry mustard", "salt", "pepper", "basil", "chives", "chopped parsley", "salad oil"];
const caesarDress_ingredients = ["liquid egg yolk", "anchovies", "red wine vinegar", "white vinegar", "lemon juice", "roasted garlic puree", "mustard", "black pepper", "salt", "grated parmesan cheese", "tabasco", "salad oil", "olive oil", "worcestershire sauce"];
const oilAndVinegar_ingredients = ["balsamic vinegar", "extra virgin olive oil"];

const bakedPotato_ingredients = ["salt", "potato", "clarified butter", "chopped parsley", "butter", "sour cream"];
const loadedPotato_ingredients = ["salt", "potato", "clarified butter", "chopped parsley", "butter", "sour cream", "chives", "cheese", "diced cherrywood smoked bacon lardons"];
const mashedPotatoes_ingredients = ["potatoes", "butter", "half and half", "roasted garlic", "chopped parsley"];
const lobsterMashed_ingredients = ["potatoes", "butter", "half and half", "roasted garlic", "sauteed lobster meat", "lobster butter", "chives"];
const parmesanFries_ingredients = ["french fried potatoes", "truffle oil", "salt", "pepper", "grated parmesan cheese", "chopped parsley"];
const macaroni_ingredients = ["mascarpone cheese", "cream cheese", "pepperjack cheese", "gruyere cheese", "cheddar cheese", "half and half", "white pepper", "mustard powder", "chicken base", "gratinee", "chopped parsley"];
const lobsterMac_ingredients = ["mascarpone cheese", "cream cheese", "pepperjack cheese", "gruyere cheese", "cheddar cheese", "half and half", "white pepper", "mustard powder", "chicken base", "gratinee", "chopped parsley", "sauteed lobster meat", "lobster butter"];
const eddiesPotatoes_ingredients = ["diced potatoes", "rich cream sauce", "gruyere cheese", "parmesan cheese", "heavy cream", "jalepeno peppers", "cheddar cheese", "chopped parsley"];
const sweetPotato_ingredients = ["sweet potatoes", "brown sugar", "salt", "pepper", "maple syrup", "butter", "pecans"];
const broccoli_ingredients = ["steamed broccoli florets", "clarified butter", "salt", "pepper"];
const asparagus_ingredients = ["steamed asparagus", "clarified butter", "salt", "pepper"];
const tempuraAsp_ingredients = ["sesame tempura batter", "asparagus", "salt", "pepper", "creamy wasabi sauce"];
const tempuraBeans_ingredients = ["sesame tempura batter", "green beans", "salt", "pepper", "creamy wasabi sauce"];
const eddiesBrussels_ingredients = ["brussels sprouts", "caramelized onions", "cherrywood smoked bacon", "clarified butter", "steak butter", "grated parmesan cheese"];
const creamedSpinach_ingredients = ["spinach", "cherrywood smoked bacon", "yellow onions", "granulated garlic", "nutmeg", "cayenne pepper", "cream sauce", "gruyere cheese"];
const wildMush_ingredients = ["shiitake mushrooms", "oyster mushrooms", "cremini mushrooms", "oil", "mushroom stock", "steak butter", "chives"];

const filetMignon_ingredients = ["filet mignon", "steak butter", "chopped parsley", "watercress"];
const nyStrip_ingredients = ["prime new york strip", "steak butter", "chopped parsley", "watercress"];
const ribeye_ingredients = ["prime ribeye", "steak butter", "chopped parsley", "watercress"];
const bourbonRib_ingredients = ["prime ribeye", "bourbon", "brown sugar", "spices", "garlic", "fried seasoned onion straws", "watercress"];
const trio_ingredients = ["filet mignon medallions", "peppercorn sauce", "bacon gargonzola cheese crust", "oscar topping", "chopped parsley"];
const delMar_ingredients = ["filet mignon medallion", "fingerling potatoes", "sauteed shrimp", "garlic infused crab", "dijonaise"];
const newOrleans_ingredients = ["shrimp", "andouille sausage", "blackening spice", "filet medallion", "steak butter", "andouille sausage gravy", "roasted garlic mashed potatoes", "watercress", "chopped parsley"];
const bisonFiletMignon_ingredients = ["bison filet mignon", "steak butter", "chopped parsley", "watercress"];
const bisonBoneIn_ingredients = ["bone-in bison ribeye", "steak butter", "chopped parsley", "watercress"];
const cheeseburger_ingredients = ["prime beef patty", "toasted bun", "choice of cheddar, gruyere, or gargonzola cheese", "pepperjack cheese", "iceberg lettuce", "tomato slice", "red onion", "pickle spear", "choice of chips or french fries"];
const tarpolyFiletMignon_ingredients = ["ms 9+ filet mignon", "steak butter", "watercress", "chopped parsley"];
const tarpolyRibeye_ingredients = ["ms 7/8+ wagyu ribeye", "steak butter", "watercress", "chopped parsley"];
const cedarSalmon_ingredients = ["60 south salmon", "charred cedar plank", "steak butter", "roasted fingerling potatoes", "sauteed green beans"];
const grilledSalmon_ingredients = ["60 south salmon", "steak butter", "roasted fingerling potatoes", "sauteed green beans"];
const blackenedSalmon_ingredients = ["60 south salmon", "blackening seasoning", "cajun butter", "roasted fingerling potatoes", "sauteed green beans"];
const shimpScallops_ingredients = ["8/12 count shrimp", "u-15 scallops", "corn", "poblano peppers", "rice", "mojo sauce", "shaved manchego cheese", "micro cilantro"];
const tunaSteak_ingredients = ["black and white sesame seed crust", "tuna steak", "furikake rice", "ahi vegetables", "ginger mirin", "scallion puree", "frizzled scallions"];
const seaBass_ingredients = ["sea bass", "maple apple cider vinaigrette", "julienned carrots", "julienned zuccini", "julienned yellow squash", "balsamic reduction", "chives"];
const lobsterTail_ingredients = ["galapagos island cold water red lobster tail", "white wine", "butter", "paprika", "chopped parsley", "lemon fork", "butter tower"];
const crabLegs_ingredients = ["red king crab legs", "butter tower", "lemon fork"];
const lemonChicken_ingredients = ["airline chicken breasts", "rosemary", "oregano", "lemon juice", "chicken broth", "roasted garlic mashed potatoes", "grilled asparagus spears", "lemon-dijon mustard pan sauce", "grilled lemon"];
const vegetarian_ingredients = ["zucchini", "yellow squash", "red pepper", "canola oil", "salt", "pepper", "furikake rice", "ahi vegetables", "sesame oil", "black sesame seeds", "white sesame seeds", "sweet soy sauce", "frizzled scallions"];

const hollandaise_ingredients = ["butter", "egg yolks", "lemon juice", "worcestershire sauce", "tabasco", "salt", "white pepper"];
const bearnaise_ingredients = ["hollandaise", "tarragon", "white wine", "red wine vinegar", "garlic", "shallots", "thyme"];
const peppercorn_ingredients = ["cracked peppercorns", "brandy", "veal sauce", "heavy cream"];
const horseradish_ingredients = ["sour cream", "worcestershire sauce", "tabasco sauce", "horseradish", "lemon juice", "heavy cream", "parsley", "salt", "pepper"];
const gargonzola_ingredients = ["gorgonzola cheese", "diced cherrywood smoked bacon", "blue cheese dressing", "panko bread crumbs", "pepper", "parsley"];
const maxwell_ingredients = ["lobster meat", "asparagus spears", "bearnaise"];
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