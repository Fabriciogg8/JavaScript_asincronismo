const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve ('Hey!');
        } else {
            reject ('whooo!');
        }
    });
};


somethingWillHappend()
    .then(response => console.log(response))
    .catch(err => console.log(err));


const somethingWillHappend2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve ('Es verdadero')
            }, 3000)
        } else {
            const error = new Error ('whopp!');
            reject(error);
        }
    });
}

somethingWillHappend2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.log(err));