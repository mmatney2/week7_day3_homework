let day = new Date();

console.log(day);

day = day.getDay();
console.log(day);

let literalDay=new Date().toString()
console.log(literalDay)
console.log(literalDay.split(' ')[0])
console.log(literalDay.split(' '))
literalDay = literalDay.split(' ')[0]
//0 is sunday,
//6 is sat

//switch case statement !!!
switch(day){
    case 0:
        console.log('go to church');
        break;
    case 1:
        console.log('its a monday');
        break;
    case 2:
        console.log('test code');
        break;
    case 3:
        console.log('test more its humpday');
        break;
    case 4:
        console.log('write a feature');
        break;
    case 5:
        console.log('test for feature friday');
        break;
    case 6:
        console.log('sleep all day');
        break;
    default:
        console.log('go away');
        break; 
}
switch(literalDay){
    case 'sun':
        console.log('go to church');
        break;
    case 'mon':
        console.log('its a monday');
        break;
    case 'tue':
        console.log('test code');
        break;
    case 'wed':
        console.log('test more its humpday');
        break;
    case 'thur':
        console.log('write a feature');
        break;
    case 'fru':
        console.log('test for feature friday');
        break;
    case 'sat':
        console.log('sleep all day');
        break;
    default:
        console.log('go away');
        break; 
}