console.log("Кошечка в окошечке");
(function (obj = { color: "black", eyesColor: "green", character: "nasty, but bearable" }) {
    Object.getOwnPropertyNames(obj).forEach((key) =>
        console.log(`${key} — ${obj[key]}`)
    );
})();