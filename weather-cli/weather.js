#!/usr/bin/ env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.services.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
    if(!token.length){
        printError('Not transferred token!');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess ('Token save!')
    } catch (e){
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if(!city.length){
        printError('Not transferred city!');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess ('City save!')
    } catch (e){
        printError(e.message);
    }
} 

const getForcast = async() => {
    try {
        getWeather();
    } catch(e) {
        if(e?.response?.status == 404) {
            printError('Invalid city!');
        } else if (e?.response?.status == 401) {
            printError('Invalid token!');
        } else {
            printError(e.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if(args.h){
        printHelp();
    }
    if(args.s){
        return saveCity(args.s);
    }
    if(args.t){
        return saveToken(args.t);
    }
    getForcast();    
};

initCLI();