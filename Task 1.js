console.log("Кошечка в окошечке");
// (function (obj = { color: "black", eyesColor: "green", character: "nasty, but bearable" }) {
//     Object.getOwnPropertyNames(obj).forEach((key) =>
//         console.log(`${key} — ${obj[key]}`)
//     );
// })();
let cat = { color: "black", eyesColor: "green", character: "nasty, but bearable" }

function getOwnProperties(obj) {
    Object.getOwnPropertyNames(obj).forEach((key) =>
        console.log(`${key} — ${obj[key]}`)
    );
}

getOwnProperties(cat);

// В данном случае не нужно использовать самовызывающуюся функцию, потому что в таком виде функцию невозможно использовать более 1-го раза и на разных объектах, не меняя кода функции. Лучше использоваться классический синтаксис объявления функции.