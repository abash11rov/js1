// for (let i = 0; ; i++) {

//     let input = prompt("Iltimos son kiriting");

//     if (input === null) {
//         break;
//     }

//     if (input.trim() === "" || isNaN(input)) {
//         alert("Bu son emas, iltimos son kiriting");
//         continue;
//     }

//     let num = Number(input);

//     if (num % 2 === 0) {
//         alert("Sizning soningiz juft");
//     } else {
//         alert("Sizning soningiz toq");
//     }
// }
for (;;) {

    let son = prompt("Son kiriting");
    if (son === null) break;

    let daraja = prompt("Darajani kiriting");
    if (daraja === null) break;

    if (
        son.trim() === "" || 
        daraja.trim() === "" || 
        isNaN(son) || 
        isNaN(daraja) || 
        Number(son) === 0 || 
        Number(daraja) === 0
    ) {
        alert("Boshidan kiriting!");
        continue;
    }

    son = Number(son);
    daraja = Number(daraja);

    let natija = 1;

    for (let i = 0; i < daraja; i++) {
        natija *= son;
    }

    alert("Javob: " + natija);
}