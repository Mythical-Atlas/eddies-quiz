// submission is an array of answers
// dish is an object containing an array of ingredients
function gradeSubmission(submission, dish)
{
    // for each ingredient:
    // - iterate through submission indices (that haven't already been matched)
    // - check if answer matches ingredient
    // - if yes: remove this ingredient and this answer

    //var ingredientsLeft = Array.from(dish.ingredients);
    var ingredientsMatched = [];
    var answersLeft = Array.from(submission);
    var answersMatched = [];

    for(var i = 0; i < dish.ingredients.length; i++)
    {
        if(answersLeft.length == 0) {break;}

        for(var a = 0; a < answersLeft.length; a++)
        {
            if(matchAnswer(answersLeft[a], dish.ingredients[i]))
            {
                ingredientsMatched.push(dish.ingredients[i]);
                answersMatched.push(answersLeft.splice(a, 1));

                break;
            }
        }
    }

    return [answersMatched, answersLeft];
}

function matchAnswer(answer, ingredient)
{
    return answer == ingredient;
}

function createCorrection(submission, dish, ingredientIndex) {
    for(let i = 0; i < shorthands.length; i++) {
        // the first index is the correct version of the shorthand
        if(shorthands[i][0] == dish.ingredients[ingredientIndex]) {
            for(let o = 1; o < shorthands[i].length; o++) {
                if(submission.includes(shorthands[i][o])) {
                    return [shorthands[i][0], shorthands[i][o]];
                }
            }
            
            break;
        }
    }

    return [];
}

function createIncorrectTip(submission, dish, ingredientIndex) {
    for(let i = 0; i < incorrects.length; i++) {
        // the first index is the correct version of the incorrect answer
        if(incorrects[i][0] == dish.ingredients[ingredientIndex]) {
            for(let o = 1; o < incorrects[i].length; o++) {
                if(submission.includes(incorrects[i][o])) {
                    return [incorrects[i][0], incorrects[i][o]];
                }
            }
            
            break;
        }
    }

    return [];
}

// returns 2 if correct, 1 if partially correct, and 0 if incorrect
function checkAnswer(submission, dish, ingredientIndex) {
    let ingredient = dish.ingredients[ingredientIndex];

    if(submission.includes(ingredient)) {
        return 2;
    }
    else {
        // check the list of allowed aliases
        for(let i = 0; i < aliases.length; i++) {
            // the first index is the "best version" (usually most verbose) of the alias
            if(aliases[i][0] == ingredient) {
                for(let o = 1; o < aliases[i].length; o++) {
                    if(submission.includes(aliases[i][o])) {
                        return 2;
                    }
                }
                
                break;
            }
        }

        // check the list of shorthands
        for(let i = 0; i < shorthands.length; i++) {
            // the first index is the correct version of the shorthand
            if(shorthands[i][0] == ingredient) {
                for(let o = 1; o < shorthands[i].length; o++) {
                    if(submission.includes(shorthands[i][o])) {
                        return 1;
                    }
                }
                
                break;
            }
        }
    }

    return 0;
}