import validator from 'validator';
import chalk from 'chalk';

function validateEmail(email) {

    const isValid = validator.isEmail(email);
    if (isValid) {
        console.log(chalk.green(`${email} est valide`))
    } else {
        console.log(chalk.red(`${email} est mal format`))
    }
}
// commentaire 2 : rennomage de variable
const emails = [
'test@example.com',
    'pas-un-email.fr',
    'user.name@domain.co',
    'mauvais@format',
    'hello@world.io'
];

emailsToTest.forEach(email => validateEmail(email));
