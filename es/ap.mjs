/*import log, {charac, greet} from './charac.mjs';

log();

for(const c of charac){
    greet(c);
}*/

async function main(){
    try{
        const { charac, greet } = await import('./charac.mjs')
        for(const c of charac) {
            greet(c);
        }
    } catch (e) {
        console.log('Error');
    }
}
main();