#! /usr/bin/env node


import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import figlet from "figlet";
import inquirer from "inquirer";

async function welcome() {
    await new Promise((resolve) => {
        figlet(` "Brain  Test  Quiz" `, function (err: any, data: any) {
            if (err) {
                console.dir("Ops Something went wrong");
                console.log(err);
            }
            const rainbow = chalkAnimation.rainbow(data);
            setTimeout(() => {
                resolve(rainbow.stop());
            }, 1000);
        });
    });
}
await welcome();

// console.log("\n\n", chalk.yellow(figlet.textSync(` " Brain __ Test __ Quiz " `)));

let total_score = 0;

let Total: any = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.bgRed(`\nEnter Your name that dare to play my "Master_Piece"?\n\n`),

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 💀 ☠️   Dare not to Enter   💀 ☠️ `
            }
        },
    }
]);

console.log("\n\n", chalk.magenta(figlet.textSync(` " Welcome  ${Total.name} " `)));

let Q1: any = await inquirer.prompt([
    {
        name: "ques1",
        type: "list",
        message: chalk.yellow(`\n\nQuestion 1 : Tall when I'm young and short when I'm old. I'll help you to see when the darkness unfolds, What am I ?\n`),
        choices: ['Shadow', 'Day', 'Candle', 'Night'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q1.ques1 === 'Candle') {
    console.log(chalk.green(`\n 😁  YAHHAAAA!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(` 🕯️  A candle is tall when it's newly lit, and as it burns, it becomes shorter over time. It provides light to help you see in the darkness.`));
    console.log(`1/8`);
}
else {
    console.log(chalk.bgRedBright("\n 😵‍💫 You choose the wrong Question."));
}

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

let Q2: any = await inquirer.prompt([
    {
        name: "ques2",
        type: "list",
        message: chalk.yellow(`\n\nQuestion 2 : I run but I never walk, what am I?`),
        choices: ['Human', 'River', 'Animal', 'Lake'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q2.ques2 === 'River') {
    console.log(chalk.green(`\n 😇  YOOOOO!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(` 🌊 Rivers flow and "run" as water moves downstream, but they do not "walk" like a person or an animal.`));
    console.log(`2/8`);
}
else {
    console.log(chalk.bgRedBright("\n🥹 You choose the wrong Question."));
}

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

let Q3: any = await inquirer.prompt([
    {
        name: "ques3",
        type: "list",
        message: chalk.yellow(`\nQuestion 3 :  What has 88 keys , butb cannot open a single door, what am I?`),
        choices: ['Key', 'Piano', 'Animal', 'Human'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q3.ques3 === 'Piano') {
    console.log(chalk.green(`\n 🤭  AHHAA!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(` 🎹  Piano has 88 Keys.`));
    console.log(`3/8`);
}
else {
    console.log(chalk.bgRedBright("\n 😵 You choose the wrong Question."));
}

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
let Q4: any = await inquirer.prompt([
    {
        name: "ques4",
        type: "list",
        message: chalk.yellow(`\nQuestion 4 : I'am weightless but put me in a bucket & I will make it lighter , What am I? `),
        choices: ['Hole', 'Wall', 'Blanket', 'Cat'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q4.ques4 === 'Hole') {
    console.log(chalk.green(`\n  🤗 HAHAHAHA!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(`🕳️  A hole is weightless, but if you put it in a bucket, it will make the bucket lighter because it removes some of the material from the bucket, effectively reducing its weight.`));
    console.log(`4/8`);
}
else {
    console.log(chalk.bgRedBright("\n 😤  😠  😤  😠 You choose the wrong Question."));
}

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
let Q5: any = await inquirer.prompt([
    {
        name: "ques5",
        type: "list",
        message: chalk.yellow(`\nQuestion 5 : You can see me in water,  but I never get wet , what am I? `),
        choices: ['Reflection', 'Mirror', 'Sky', 'Bird'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q5.ques5 === 'Reflection') {
    console.log(chalk.green(`\n 😸 AIYYA!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(`\n 🤽🏻 Reflection is that you can see in water.`));
    console.log(`5/8`);
}
else {
    console.log(chalk.bgRedBright("\n 😭 You choose the wrong Question."));
}

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

let Q6: any = await inquirer.prompt([
    {
        name: "ques6",
        type: "list",
        message: chalk.yellow(`\nQuestion 6 : What is harder to catch the faster you run , what am I? `),
        choices: ['Animal', 'Breath', 'Friend', 'Family'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q6.ques6 === 'Breath') {
    console.log(chalk.green(`\n 🤪 HURRAH!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(` 😮‍💨🫁 When you run faster, you tend to breathe harder and it becomes more difficult to catch your breath.`));
    console.log(`6/8`);
}
else {
    console.log(chalk.bgRedBright("\n 🤐 You choose the wrong Question."));
}

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
let Q7: any = await inquirer.prompt([
    {
        name: "ques7",
        type: "list",
        message: chalk.yellow(`\nQuestion 7 : A blind man lost his phone, his cap, and his bag. What did he lose first? `),
        choices: ['Bag', 'Phone', 'Sight', 'Cap'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q7.ques7 === 'Sight') {
    console.log(chalk.green(`\n 😃 HAA!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(`👀 The Blind Man Lost His "Sight" First. Losing his sight is what made him unable to see his phone, cap, and bag, which he may have lost subsequently.`));
    console.log(`7/8`);
}
else {
    console.log(chalk.bgRedBright("\n 😭 You choose the wrong Question."));
}

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
let Q8: any = await inquirer.prompt([
    {
        name: "ques8",
        type: "list",
        message: chalk.yellow(`\nQuestion 8 : What water can you eat & chew , what am I? `),
        choices: ['Water', 'Drink', 'Coffee_drinks', 'Watermelon'],

        validate: function (value: string) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return ` 😠  Dare not to Select... 🫵 🤛 `
            }
        },
    }
])

if (Q8.ques8 === 'Watermelon') {
    console.log(chalk.green(`\n 🤣  WAHHH!!! You choose the correct option.`));
    total_score++;
    console.log(chalk.bgGray(` 🍉  Watermelon is a fruit that contains a significant amount of water and can be eaten and chewed.`));
    console.log(`8/8`);
}
else {
    console.log(chalk.bgRedBright("\n 🙅  You choose the wrong Question."));
}

if (total_score === 8) {
    console.log("\n\n", chalk.whiteBright(figlet.textSync(` " You  Win " `)));
    console.log("\n  🥳 🙂‍ 😏 🥳 🙂‍ 😏 🥳 🙂‍ 😏 🥳 🙂‍ 😏 \n");
}

else {

    console.log(`\n\n\n Your  total score is ${total_score}\n`, chalk.bgGreenBright(`Better Play next Time.  🤬 🤬 🤬  \n\n`), "----BYE -- 🙌   🙌  🙌  -- BYE----");
    console.log("\n\n");
}

