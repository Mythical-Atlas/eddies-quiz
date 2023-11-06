/*
ideas:
- food runner mode (give name of food, ask what garnishes go on it)
- name that dish (given ingredients or a picture, asks for name of dish)
- picture mode (given picture, asks for ingredients and/or name)
- quiz mode (run through one or more sections, shuffled optionally, and ask for ingredients on all items - give stats at end)
- sizes quiz (what sizes does each dish come in)
- sauces/condiments
- backwards mode (ask what dishes get a certain ingredient)
- allergens quiz
*/

let currentDish;

class Dish {
    name;
    ingredients;

    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

function selectApp() {
    let select = document.getElementById("appselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "Filet Mignon Potstickers":
            currentDish = new Dish(name.toLowerCase(), potstick_ingredients);
            break;
        case "Sweet and Spicy Shrimp":
            currentDish = new Dish(name.toLowerCase(), ssShrimp_ingredients);
            break;
        case "Calamari":
            currentDish = new Dish(name.toLowerCase(), calamari_ingredients);
            break;
        case "Ahi Tuna Poke":
            currentDish = new Dish(name.toLowerCase(), poke_ingredients);
            break;
        case "Barbecue Shrimp":
            currentDish = new Dish(name.toLowerCase(), bbqShrimp_ingredients);
            break;
        case "Eddie's Shrimp Cocktail":
            currentDish = new Dish(name.toLowerCase(), shrimpCocktail_ingredients);
            break;
        case "Oysters on the Half Shell":
            currentDish = new Dish(name.toLowerCase(), halfShell_ingredients);
            break;
        case "Oysters Rockefeller":
            currentDish = new Dish(name.toLowerCase(), rockefeller_ingredients);
            break;
        case "Charbroiled Oysters":
            currentDish = new Dish(name.toLowerCase(), charbroiled_ingredients);
            break;
        case "Spinach and Artichoke Dip":
            currentDish = new Dish(name.toLowerCase(), spinDip_ingredients);
            break;
        case "Maryland Crab Cake":
            currentDish = new Dish(name.toLowerCase(), crabCake_ingredients);
            break;
        case "Beef Carpaccio":
            currentDish = new Dish(name.toLowerCase(), carpaccio_ingredients);
            break;
        case "Charcuterie and Cheese Plate":
            currentDish = new Dish(name.toLowerCase(), charcuterie_ingredients);
            break;
        case "Cheese Plate":
            currentDish = new Dish(name.toLowerCase(), cheesePlate_ingredients);
            break;
        case "Hot Appetizer Platter":
            currentDish = new Dish(name.toLowerCase(), hotApps_ingredients);
            break;
        case "Chilled Appetizer Platter":
            currentDish = new Dish(name.toLowerCase(), chilledApps_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectSoupSalad() {
    let select = document.getElementById("soupsaladselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "French Onion Soup":
            currentDish = new Dish(name.toLowerCase(), frenchOnion_ingredients);
            break;
        case "King Crab and Corn Bisque":
            currentDish = new Dish(name.toLowerCase(), crabBisque_ingredients);
            break;
        case "Caesar Salad":
            currentDish = new Dish(name.toLowerCase(), caesarSalad_ingredients);
            break;
        case "Eddie's House Salad":
            currentDish = new Dish(name.toLowerCase(), house_ingredients);
            break;
        case "Classic Wedge Salad":
            currentDish = new Dish(name.toLowerCase(), wedge_ingredients);
            break;
        case "Chopped Salad":
            currentDish = new Dish(name.toLowerCase(), chopped_ingredients);
            break;
        case "Grilled Romaine Salad":
            currentDish = new Dish(name.toLowerCase(), grilledRomaine_ingredients);
            break;
        case "Table Bread":
            currentDish = new Dish(name.toLowerCase(), bread_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectDressing() {
    let select = document.getElementById("dressingselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "Balsamic Vinaigrette":
            currentDish = new Dish(name.toLowerCase(), balsamicVin_ingredients);
            break;
        case "Ranch Dressing":
            currentDish = new Dish(name.toLowerCase(), ranch_ingredients);
            break;
        case "Maple Apple Cider Vinaigrette":
            currentDish = new Dish(name.toLowerCase(), mapleAppleVin_ingredients);
            break;
        case "Blue Cheese Dressing":
            currentDish = new Dish(name.toLowerCase(), blueCheeseDress_ingredients);
            break;
        case "Creamy Herb Dressing":
            currentDish = new Dish(name.toLowerCase(), creamyHerb_ingredients);
            break;
        case "Caesar Dressing":
            currentDish = new Dish(name.toLowerCase(), caesarDress_ingredients);
            break;
        case "Oil and Vinegar":
            currentDish = new Dish(name.toLowerCase(), oilAndVinegar_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectSide() {
    let select = document.getElementById("sideselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "Baked Potato":
            currentDish = new Dish(name.toLowerCase(), bakedPotato_ingredients);
            break;
        case "Loaded Potato":
            currentDish = new Dish(name.toLowerCase(), loadedPotato_ingredients);
            break;
        case "Roasted Garlic Mashed Potatoes":
            currentDish = new Dish(name.toLowerCase(), mashedPotatoes_ingredients);
            break;
        case "Roasted Garlic Mashed Potatoes with Lobster":
            currentDish = new Dish(name.toLowerCase(), lobsterMashed_ingredients);
            break;
        case "Parmesan Truffle Fries":
            currentDish = new Dish(name.toLowerCase(), parmesanFries_ingredients);
            break;
        case "Macaroni and Cheese":
            currentDish = new Dish(name.toLowerCase(), macaroni_ingredients);
            break;
        case "Macaroni and Cheese with Lobster":
            currentDish = new Dish(name.toLowerCase(), lobsterMac_ingredients);
            break;
        case "Eddie's Potatoes":
            currentDish = new Dish(name.toLowerCase(), eddiesPotatoes_ingredients);
            break;
        case "Sweet Potato Cassarole":
            currentDish = new Dish(name.toLowerCase(), sweetPotato_ingredients);
            break;
        case "Broccoli":
            currentDish = new Dish(name.toLowerCase(), broccoli_ingredients);
            break;
        case "Asparagus Spears":
            currentDish = new Dish(name.toLowerCase(), asparagus_ingredients);
            break;
        case "Tempura Asparagus":
            currentDish = new Dish(name.toLowerCase(), tempuraAsp_ingredients);
            break;
        case "Tempura Green Beans":
            currentDish = new Dish(name.toLowerCase(), tempuraBeans_ingredients);
            break;
        case "Eddie's Brussels Sprouts with Bacon":
            currentDish = new Dish(name.toLowerCase(), eddiesBrussels_ingredients);
            break;
        case "Creamed Spinach with Bacon":
            currentDish = new Dish(name.toLowerCase(), creamedSpinach_ingredients);
            break;
        case "Wild Mushrooms":
            currentDish = new Dish(name.toLowerCase(), wildMush_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectEntree() {
    let select = document.getElementById("entreeselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "Filet Mignon":
            currentDish = new Dish(name.toLowerCase(), filetMignon_ingredients);
            break;
        case "Prime New York Strip":
            currentDish = new Dish(name.toLowerCase(), nyStrip_ingredients);
            break;
        case "Prime Ribeye":
            currentDish = new Dish(name.toLowerCase(), ribeye_ingredients);
            break;
        case "Bourbon Ribeye":
            currentDish = new Dish(name.toLowerCase(), bourbonRib_ingredients);
            break;
        case "Trio of Filet Mignon Medalions":
            currentDish = new Dish(name.toLowerCase(), trio_ingredients);
            break;
        case "Filet Del Mar":
            currentDish = new Dish(name.toLowerCase(), delMar_ingredients);
            break;
        case "New Orleans Mixed Grill":
            currentDish = new Dish(name.toLowerCase(), newOrleans_ingredients);
            break;
        case "Bison Filet Mignon":
            currentDish = new Dish(name.toLowerCase(), bisonFiletMignon_ingredients);
            break;
        case "Bison Bone-in Ribeye":
            currentDish = new Dish(name.toLowerCase(), bisonBoneIn_ingredients);
            break;
        case "Prime Cheeseburger":
            currentDish = new Dish(name.toLowerCase(), cheeseburger_ingredients);
            break;
        case "Tarpoly Creek Wagyu MS 9+ Filet Mignon":
            currentDish = new Dish(name.toLowerCase(), tarpolyFiletMignon_ingredients);
            break;
        case "Tarpoly Creek Wagyu MS 7/8+ Ribeye":
            currentDish = new Dish(name.toLowerCase(), tarpolyRibeye_ingredients);
            break;
        case "Cedar Plank Roasted Salmon":
            currentDish = new Dish(name.toLowerCase(), cedarSalmon_ingredients);
            break;
        case "Grilled Salmon":
            currentDish = new Dish(name.toLowerCase(), grilledSalmon_ingredients);
            break;
        case "Blackened Salmon":
            currentDish = new Dish(name.toLowerCase(), blackenedSalmon_ingredients);
            break;
        case "Mojo Shrimp and Scallops":
            currentDish = new Dish(name.toLowerCase(), shimpScallops_ingredients);
            break;
        case "Yellowfin Tuna Steak":
            currentDish = new Dish(name.toLowerCase(), tunaSteak_ingredients);
            break;
        case "Sea Bass":
            currentDish = new Dish(name.toLowerCase(), seaBass_ingredients);
            break;
        case "Galapagos Island Cold Water Lobster Tail":
            currentDish = new Dish(name.toLowerCase(), lobsterTail_ingredients);
            break;
        case "Red King Crab Legs":
            currentDish = new Dish(name.toLowerCase(), crabLegs_ingredients);
            break;
        case "Lemon-Dijon Chicken":
            currentDish = new Dish(name.toLowerCase(), lemonChicken_ingredients);
            break;
        case "Vegan/Vegetarian Option":
            currentDish = new Dish(name.toLowerCase(), vegetarian_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectEnhance() {
    let select = document.getElementById("enhanceselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "Hollandaise Sauce":
            currentDish = new Dish(name.toLowerCase(), hollandaise_ingredients);
            break;
        case "Bearnaise Sauce":
            currentDish = new Dish(name.toLowerCase(), bearnaise_ingredients);
            break;
        case "Peppercorn Sauce":
            currentDish = new Dish(name.toLowerCase(), peppercorn_ingredients);
            break;
        case "Creamy Horseradish Sauce":
            currentDish = new Dish(name.toLowerCase(), horseradish_ingredients);
            break;
        case "Bacon Gargonzola Cheese":
            currentDish = new Dish(name.toLowerCase(), gargonzola_ingredients);
            break;
        case "Maxwell Style":
            currentDish = new Dish(name.toLowerCase(), maxwell_ingredients);
            break;
        case "Oscar Style":
            currentDish = new Dish(name.toLowerCase(), oscar_ingredients);
            break;
        case "Bacon Wrapped Shrimp":
            currentDish = new Dish(name.toLowerCase(), baconShrimp_ingredients);
            break;
        case "Crab and Shrimp Del Mar":
            currentDish = new Dish(name.toLowerCase(), crabShrimpDelMar_ingredients);
            break;
        case "Mixed Grill":
            currentDish = new Dish(name.toLowerCase(), mixedGrill_ingredients);
            break;
        case "Maryland Crab Cake":
            currentDish = new Dish(name.toLowerCase(), marylandCrabCake_ingredients);
            break;
        case "Red King Crab Legs":
            currentDish = new Dish(name.toLowerCase(), crabLegsEnhance_ingredients);
            break;
        case "Cold Water Lobster Tail":
            currentDish = new Dish(name.toLowerCase(), lobsterTailEnhance_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectDessert() {
    let select = document.getElementById("dessertselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "Bananas Foster":
            currentDish = new Dish(name.toLowerCase(), bananas_ingredients);
            break;
        case "Vanilla Cognac Brownie":
            currentDish = new Dish(name.toLowerCase(), brownie_ingredients);
            break;
        case "Carrot Cake":
            currentDish = new Dish(name.toLowerCase(), carrotCake_ingredients);
            break;
        case "Triple Chocolate Cake":
            currentDish = new Dish(name.toLowerCase(), chocolateCake_ingredients);
            break;
        case "Creme Brulee":
            currentDish = new Dish(name.toLowerCase(), cremeBrulee_ingredients);
            break;
        case "Peanut Butter Cup":
            currentDish = new Dish(name.toLowerCase(), pbCup_ingredients);
            break;
        case "Fresh Fruit Sorbet":
            currentDish = new Dish(name.toLowerCase(), sorbet_ingredients);
            break;
        case "Premium Ice Cream":
            currentDish = new Dish(name.toLowerCase(), iceCream_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectKidsMeal() {
    let select = document.getElementById("kidsselect");
    let name = select.options[select.selectedIndex].text;

    switch(name) {
        case "Kid's Chicken Fingers":
            currentDish = new Dish(name.toLowerCase(), kidsChicken_ingredients);
            break;
        case "Kid's Macaroni and Cheese":
            currentDish = new Dish(name.toLowerCase(), kidsMac_ingredients);
            break;
        default:
            return;
    }

    selectItem();
}

function selectItem() {
    document.getElementById("qsttext").innerHTML = "What are the ingredients for the <b>" + currentDish.name + "</b>? (Hint: There are " + currentDish.ingredients.length + ".)";

    document.getElementById("subtxt").value = "";

    document.getElementById('selection').hidden = true;
    document.getElementById('question').hidden = false;

    document.getElementById("subtxt").focus();
}

function submitAnswer() {
    let submission = document.getElementById("subtxt").value.toLowerCase();

    let ingredientPoints = [];
    let totalCorrect = 0;
    let corrections = [];
    let incorrectTips = [];
    
    for(let i = 0; i < currentDish.ingredients.length; i++) {
        let points = checkAnswer(submission, currentDish, i);

        if(points == 1) {
            let correction = createCorrection(submission, currentDish, i);

            if(correction.length > 0) {
                corrections.push(correction);
            }
        }

        if(points == 0) {
            let incorrectTip = createIncorrectTip(submission, currentDish, i);

            if(incorrectTip.length > 0) {
                incorrectTips.push(incorrectTip);
            }
        }

        ingredientPoints.push(points);

        if(points > 0) {
            totalCorrect++;
        }
    }

    if(totalCorrect == currentDish.ingredients.length) {
        document.getElementById("anstxt").innerHTML = "<b>Correct!</b>";
        document.getElementById("ingtxt").hidden = true;
    }
    else {
        if(totalCorrect == 0) {
            document.getElementById("anstxt").innerHTML = "<b>Incorrect.</b>";
            document.getElementById("ingtxt").innerHTML = "The ingredients for the " + currentDish.name + " are ";
        }
        else {
            document.getElementById("anstxt").innerHTML = "<b>Partially correct (" + totalCorrect + "/" + currentDish.ingredients.length + ").</b>";
            document.getElementById("ingtxt").innerHTML = "The ingredients for the " + currentDish.name + " are ";
        }

        for(let i = 0; i < ingredientPoints.length; i++) {
            if(ingredientPoints[i] == 2) {
                if(i < currentDish.ingredients.length - 1) {
                    document.getElementById("ingtxt").innerHTML += "<span class=\"correct\">" + currentDish.ingredients[i] + "</span>, ";
                }
                else {
                    document.getElementById("ingtxt").innerHTML += "and <span class=\"correct\">" + currentDish.ingredients[i] + "</span>.";
                }
                
            }
            else if(ingredientPoints[i] == 1) {
                if(i < currentDish.ingredients.length - 1) {
                    document.getElementById("ingtxt").innerHTML += "<span class=\"kinda\">" + currentDish.ingredients[i] + "</span>, ";
                }
                else {
                    document.getElementById("ingtxt").innerHTML += "and <span class=\"kinda\">" + currentDish.ingredients[i] + "</span>.";
                }
                
            }
            else {
                if(i < currentDish.ingredients.length - 1) {
                    document.getElementById("ingtxt").innerHTML += "<span class=\"incorrect\">" + currentDish.ingredients[i] + "</span>, ";
                }
                else {
                    document.getElementById("ingtxt").innerHTML += "and <span class=\"incorrect\">" + currentDish.ingredients[i] + "</span>.";
                }
            }
        }

        document.getElementById("ingtxt").hidden = false;
    }

    if(corrections.length > 0) {
        document.getElementById("notetxt").innerHTML = "<b>Points were counted for each of the following, but please avoid using \"kitchen speak\" or shorthand names when describing dishes to guests.</b><ul>";

        for(let i = 0; i < corrections.length; i++) {
            document.getElementById("notetxt").innerHTML += "<li>You entered <span class=\"kinda\">" + corrections[i][1] + "</span>, but <span class=\"correct\">" + corrections[i][0] + "</span> would be more correct.</li>";
        }

        document.getElementById("notetxt").innerHTML += "</ul>";

        document.getElementById("notetxt").hidden = false;
    }
    else {
        document.getElementById("notetxt").hidden = true;
    }

    if(incorrectTips.length > 0) {
        document.getElementById("note2txt").innerHTML = "<b>Points were not counted for each of the following.</b><ul>";

        for(let i = 0; i < incorrectTips.length; i++) {
            document.getElementById("note2txt").innerHTML += "<li>You entered <span class=\"incorrect\">" + incorrectTips[i][1] + "</span>, but <span class=\"correct\">" + incorrectTips[i][0] + "</span> would correct.</li>";
        }

        document.getElementById("note2txt").innerHTML += "</ul>";

        document.getElementById("note2txt").hidden = false;
    }
    else {
        document.getElementById("note2txt").hidden = true;
    }

    document.getElementById('question').hidden = true
    document.getElementById('answer').hidden = false
}

function resetSelection() {
    document.getElementById("appselect").value = document.getElementById("appselect").defaultSelected;
    document.getElementById("soupsaladselect").value = document.getElementById("soupsaladselect").defaultSelected;
    document.getElementById("dressingselect").value = document.getElementById("dressingselect").defaultSelected;
    document.getElementById("sideselect").value = document.getElementById("sideselect").defaultSelected;
    document.getElementById("entreeselect").value = document.getElementById("entreeselect").defaultSelected;
    document.getElementById("enhanceselect").value = document.getElementById("enhanceselect").defaultSelected;
    document.getElementById("dessertselect").value = document.getElementById("dessertselect").defaultSelected;
    document.getElementById("kidsselect").value = document.getElementById("kidsselect").defaultSelected;

    document.getElementById('question').hidden = true
    document.getElementById('answer').hidden = true
    document.getElementById('selection').hidden = false
}

document.addEventListener("DOMContentLoaded", function(event) {resetSelection()});

window.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        if(document.getElementById('question').hidden == false) {
            submitAnswer();
        }
        else if(document.getElementById('answer').hidden == false) {
            resetSelection();
        }
    }
});