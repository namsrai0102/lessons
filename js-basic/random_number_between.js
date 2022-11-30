let a = prompt(`Toooruulna uu?`);
let b = prompt(`Toooruulna uu?`);
if (a <= b) {
    let rand = Math.floor(Math.random() * a) + b;
    console.log(a + rand + b);
}
else {
    let rand = Math.floor(Math.random() * b) + a;
    console.log(b + rand + a);
}

