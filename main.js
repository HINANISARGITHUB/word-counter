#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: (chalk.bold.magentaBright("Enter your sentence here to count the word: ")),
    }
]);
const word = answer.Sentence.trim().split(" ");
console.log(chalk.cyanBright(word));
console.log(chalk.bold.yellowBright(`The word count of your sentence is: ${word.length}`));
