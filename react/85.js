

let obj = {
    number: 5,
    sayNumber: function() {
        say = () => {
            console.log(this)
        }
        say();

    }
}

obj.sayNumber();

let names = ["Ivan", "Elena", "Petr", "Vladimir"];

let shortNames = names.filter((name) => {
    return name.length < 5
});

console.log(shortNames);