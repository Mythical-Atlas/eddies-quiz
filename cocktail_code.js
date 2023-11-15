var currentDrink;

function populateDropdown()
{
    var select = document.getElementById("cockSelect");
    var opt;

    opt = document.createElement('option'); opt.innerHTML = ""; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_0[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_1[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_2[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_3[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_4[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_5[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_6[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_7[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_8[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_9[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_10[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_11[0]; select.appendChild(opt);
    opt = document.createElement('option'); opt.innerHTML = cocktail_12[0]; select.appendChild(opt);
}

function resetPage()
{
    document.getElementById("cockSelect").value = document.getElementById("cockSelect").defaultSelected;

    document.getElementById('question').hidden = true
    document.getElementById('answer').hidden = true
    document.getElementById('selection').hidden = false
}

function selectCocktail()
{
    var select = document.getElementById("cockSelect");
    var name = select.options[select.selectedIndex].text;

    switch(name)
    {
        case cocktail_0[0]: currentDrink = cocktail_0; break;
        case cocktail_1[0]: currentDrink = cocktail_1; break;
        case cocktail_2[0]: currentDrink = cocktail_2; break;
        case cocktail_3[0]: currentDrink = cocktail_3; break;
        case cocktail_4[0]: currentDrink = cocktail_4; break;
        case cocktail_5[0]: currentDrink = cocktail_5; break;
        case cocktail_6[0]: currentDrink = cocktail_6; break;
        case cocktail_7[0]: currentDrink = cocktail_7; break;
        case cocktail_8[0]: currentDrink = cocktail_8; break;
        case cocktail_9[0]: currentDrink = cocktail_9; break;
        case cocktail_10[0]: currentDrink = cocktail_10; break;
        case cocktail_11[0]: currentDrink = cocktail_11; break;
        case cocktail_12[0]: currentDrink = cocktail_12; break;
        default: return;
    }

    document.getElementById("glassText").innerHTML = "What glass does the <b>" + currentDrink[0] + "</b> come in?";
    document.getElementById("ingredsText").innerHTML = "What are the ingredients for the <b>" + currentDrink[0] + "</b>? (Hint: There are " + (currentDrink.length - 2) + ".)";

    document.getElementById("glassInput").value = "";
    document.getElementById("ingredsInput").value = "";

    document.getElementById('selection').hidden = true;
    document.getElementById('answer').hidden = true;
    document.getElementById('question').hidden = false;

    document.getElementById("glassInput").focus();
}

function submitAnswer()
{
    var glassInput = document.getElementById("glassInput").value.toLowerCase();
    var glassCorrect = glassInput == currentDrink[1];

    const submission = document.getElementById("ingredsInput").value.toLowerCase().split(",");
    const ingredsCorrect = [];
    var anyCorrect = false;

    for(var i = 0; i < currentDrink.length - 2; i++)
    {
        ingredsCorrect.push(false);

        for(var x = 0; x < submission.length; x++)
        {
            if(submission[x].includes(currentDrink[2 + i]))
            {
                ingredsCorrect[i] = true;
                anyCorrect = true;
            }
        }
    }

    var answerText = document.getElementById("answerText");
    var glassAnswerText = document.getElementById("glassAnswerText");
    var ingredListText = document.getElementById("ingredListText");

    if(!glassCorrect && !anyCorrect)
    {
        answerText.innerHTML = "Incorrect.";
    }
    else if(glassCorrect && anyCorrect)
    {
        answerText.innerHTML = "Correct!";
    }
    else
    {
        answerText.innerHTML = "Partially correct.";
    }
    
    if(glassCorrect)
    {
        glassAnswerText.innerHTML = "The <b>" + currentDrink[0] + "</b> comes in a <span class=\"correct\">" + currentDrink[1] + "</span>.";
    }
    else
    {
        glassAnswerText.innerHTML = "The <b>" + currentDrink[0] + "</b> comes in a <span class=\"incorrect\">" + currentDrink[1] + "</span>.";
    }

    ingredListText.innerHTML = "The ingredients for the <b>" + currentDrink[0] + "</b> are ";
    for(var i = 0; i < currentDrink.length - 2; i++)
    {
        if(i == currentDrink.length - 3)
        {
            ingredListText.innerHTML += "and "
        }

        if(ingredsCorrect[i])
        {
            ingredListText.innerHTML += "<span class=\"correct\">" + currentDrink[i + 2] + "</span>";
        }
        else
        {
            ingredListText.innerHTML += "<span class=\"incorrect\">" + currentDrink[i + 2] + "</span>";
        }

        if(i < currentDrink.length - 3)
        {
            ingredListText.innerHTML += ", ";
        }
        else
        {
            ingredListText.innerHTML += "."
        }
    }

    document.getElementById('question').hidden = true;
    document.getElementById('answer').hidden = false;
}

document.addEventListener("DOMContentLoaded", function(event)
{
    populateDropdown();
    resetPage();
});