#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Toss me an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:contact.tupu4545@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: `Join my ${chalk.bold("discord")} server?`,
                value: () => {
                    open("https://discord.gg/W2Q7zKj7B3");
                    console.log("\nThanks for joining my community! :D\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Tupu4545"),
    handle: chalk.white("@tupu4545"),
    fact: chalk.hex('#B10000')('You\'re not the only one out there'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/tupu4545"),
    discord: chalk.hex('#ffac00')("https://discord.gg/W2Q7zKj7B3"),
    github: chalk.hex('#787878')("https://github.com/tupu4545"),
    website: chalk.hex('#00AB9E')("https://tupu4545.github.io"),
    npx: chalk.hex('#A1AB00')("npx tupu4545"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelDiscord: chalk.hex('#0bff00').bold("        Discord:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        
        `${data.labelDiscord}  ${data.discord}`,
        `${data.labelWebsite}  ${data.website}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'am Tupu4545 AKA Tupu and I love Everything." 
        )}`,
        `${chalk.bold("This is a 1st my npx card so don't complain LOL.")}`,
        `${chalk.bold(
            "I will improve it in the future though :)"
        )}`,
        `${chalk.bold(
            "If you find an issue with this card report it at:"
        )}`,
        `${chalk.bold(
            "https://github.com/Tupu4545/npx-tupu4545/issues/"
        )}`

    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());