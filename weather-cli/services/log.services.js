import chalk from 'chalk';
import dedent from 'dedent';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('HELP')}
        Without params - output weather
        -s [CITY] for install city
        -h for output help
        -t [API_KEY] for save token`
    );
};

const printWeather = (res) => {
    console.log(
        dedent`${chalk.bgYellow('WEATHER')} Weather in city ${res.name}
        ${res.weather[0].description}
        Temperature: ${res.main.temp} (feel how ${res.main.feels_like})
        Humidity: ${res.main.humidity}% 
        Speed wind: ${res.wind.speed}`
    );
};

export { printError, printSuccess, printHelp, printWeather };