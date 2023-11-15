/*
ideas:
- food runner mode (give name of food, ask what garnishes go on it)
- name that dish (given ingredients or a picture, asks for name of dish)
- picture mode (given picture, asks for ingredients and/or name)
- quiz mode (run through one or more sections, shuffled optionally, and ask for ingredients on all items - give stats at end)
- sizes quiz (what sizes does each dish come in)
- amounts quiz (how many shrimp? etc.)
- sauces/condiments
- backwards mode (ask what dishes get a certain ingredient)
- allergens quiz
- alcohol
- top scores
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

function resetSelection() {
    document.getElementById("catselect").value = document.getElementById("appselect").defaultSelected;
    document.getElementById("appselect").value = document.getElementById("appselect").defaultSelected;
    document.getElementById("soupsaladselect").value = document.getElementById("soupsaladselect").defaultSelected;
    document.getElementById("dressingselect").value = document.getElementById("dressingselect").defaultSelected;
    document.getElementById("sideselect").value = document.getElementById("sideselect").defaultSelected;
    document.getElementById("entreeselect").value = document.getElementById("entreeselect").defaultSelected;
    document.getElementById("enhanceselect").value = document.getElementById("enhanceselect").defaultSelected;
    document.getElementById("dessertselect").value = document.getElementById("dessertselect").defaultSelected;
    document.getElementById("kidsselect").value = document.getElementById("kidsselect").defaultSelected;
    
    document.getElementById('appSelection').hidden = true
    document.getElementById('soupSaladSelection').hidden = true
    document.getElementById('dressingSelection').hidden = true
    document.getElementById('sideSelection').hidden = true
    document.getElementById('entreeSelection').hidden = true
    document.getElementById('enhanceSelection').hidden = true
    document.getElementById('dessertSelection').hidden = true
    document.getElementById('kidsSelection').hidden = true

    document.getElementById('question').hidden = true
    document.getElementById('answer').hidden = true
    document.getElementById('selection').hidden = false
}

function selectCat() {
    let select = document.getElementById("catselect");
    let selectedIndex = select.selectedIndex;
    let name = select.options[select.selectedIndex].text;

    resetSelection();

    document.getElementById("catselect").selectedIndex = selectedIndex;

    switch(name) {
        case "Appetizers":
            document.getElementById("appSelection").hidden = false;
            break;
        case "Salads, Soups, and Bread":
            document.getElementById("soupSaladSelection").hidden = false;
            break;
        case "Salad Dressings":
            document.getElementById("dressingSelection").hidden = false;
            break;
        case "Sides":
            document.getElementById("sideSelection").hidden = false;
            break;
        case "Entrees":
            document.getElementById("entreeSelection").hidden = false;
            break;
        case "Enhancements":
            document.getElementById("enhanceSelection").hidden = false;
            break;
        case "Desserts":
            document.getElementById("dessertSelection").hidden = false;
            break;
        case "Children's Menu":
            document.getElementById("kidsSelection").hidden = false;
            break;
    }
}

function selectApp()
{
    var select = document.getElementById("appselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectSoupSalad()
{
    var select = document.getElementById("soupsaladselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectDressing()
{
    var select = document.getElementById("dressingselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectSide()
{
    var select = document.getElementById("sideselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectEntree()
{
    var select = document.getElementById("entreeselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectEnhance()
{
    var select = document.getElementById("enhanceselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectDessert()
{
    var select = document.getElementById("dessertselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectKidsMeal()
{
    var select = document.getElementById("kidsselect");
    selectItem(select.options[select.selectedIndex].text);
}

function selectItem(selectedName) {
    for(var i = 0; i < bigIngredientsArray.length; i++)
    {
        if(selectedName == bigIngredientsArray[i][0])
        {
            currentDish = new Dish(bigIngredientsArray[i][0], bigIngredientsArray[i].slice(1));
            break;
        }
    }

    document.getElementById("qsttext").innerHTML = "What are the ingredients for the <b>" + currentDish.name + "</b>? (Hint: There are " + currentDish.ingredients.length + ".)";

    document.getElementById("subtxt").value = "";

    document.getElementById('selection').hidden = true;
    document.getElementById('answer').hidden = true;
    document.getElementById('question').hidden = false;
}

function submitAnswer() {
    const submission = document.getElementById("subtxt").value.toLowerCase().split(",");

    const answers = gradeSubmission(submission, currentDish);

    if(answers[0] == currentDish.ingredients.length) {
        document.getElementById("anstxt").innerHTML = "<b>Correct!</b>";
        document.getElementById("ingtxt").hidden = true;
    }
    else {
        if(answers[0] == 0) {
            document.getElementById("anstxt").innerHTML = "<b>Incorrect.</b>";
            document.getElementById("ingtxt").innerHTML = "The ingredients for the " + currentDish.name + " are ";
        }
        else {
            document.getElementById("anstxt").innerHTML = "<b>Partially correct (" + answers[0] + "/" + currentDish.ingredients.length + ").</b>";
            document.getElementById("ingtxt").innerHTML = "The ingredients for the " + currentDish.name + " are ";
        }

        for(let i = 0; i < currentDish.ingredients.length; i++) {
            if(answers[1][i]) {
                if(i < currentDish.ingredients.length - 1) {
                    document.getElementById("ingtxt").innerHTML += "<span class=\"correct\">" + currentDish.ingredients[i] + "</span>, ";
                }
                else {
                    document.getElementById("ingtxt").innerHTML += "and <span class=\"correct\">" + currentDish.ingredients[i] + "</span>.";
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

    if(answers[2].length != 0)
    {
        document.getElementById("notetxt").innerHTML = "<b>Wrong entries:</b><ul>";

        for(let i = 0; i < answers[2].length; i++)
        {
            document.getElementById("notetxt").innerHTML += "<li><span class=\"incorrect\">" + answers[2][i] + "</span></li>";
        }

        document.getElementById("notetxt").innerHTML += "</ul>";

        document.getElementById("notetxt").hidden = false;
    }
    else
    {
        document.getElementById("notetxt").hidden = true;
    }

    document.getElementById("note2txt").hidden = true;

    document.getElementById('question').hidden = true;
    document.getElementById('answer').hidden = false;
}

document.addEventListener("DOMContentLoaded", function(event) {
    resetSelection();
});

window.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        if(document.getElementById('question').hidden == false) {
            submitAnswer();
        }
    }
});