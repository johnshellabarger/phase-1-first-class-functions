function receivesAFunction(callBack){
    callBack();
}

function consoleLogMe(){
    console.log("Yoooo im console logged xD")
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("Hey")
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("Hola")
}

console.log(returnsAnAnonymousFunction())