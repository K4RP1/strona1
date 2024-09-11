function Wprowadzenie1() {
    console.log("Witaj świecie!");
}

function Wprowadzenie2() {
    let tekst = "Witaj świecie!";
    console.log(tekst);
}

function Wprowadzenie3() {
    const e = 2.718228;
    alert(e);
}

function Wprowadzenie4() {
    let zmienna = 12;
    console.log(typeof zmienna);

    zmienna = 'Język Java Script';
    console.log(typeof zmienna);
}

function Wprowadzenie5() {
    let opis = "JavaScript to język programowania.";
    console.log("Informacja: " + opis);
}

function Wprowadzenie6() {
    let a = 21;
    let b = 17;
    console.log(a + "+" + b + "=" + (a + b));
    alert(a + "+" + b + "=" + (a + b));
}

function Wprowadzenie7() {
    let a = prompt("Podaj liczbę: ");
    console.log('Pobrana wartość: ' + a);
}


function Wstrzykiwanie1() {
    const wynik = document.querySelector("#wynik");

    let a = 5;
    let b = 10;

    wynik.innerHTML = "wynik:" + (a + b);
}

function Wstrzykiwanie2() {
    const wynik = document.querySelector("#wynik");

    let a = 75;
    let b = 123;

    wynik.innerHTML = '<h1>' + a + '+' + b + '=' + (a + b) + '</h1>';
}

function Wstrzykiwanie3() {
    const wynik = document.querySelector("#wynik");

    let a = 75;
    let b = 123;

    wynik.innerHTML = `<h1>${a}+${b}=${a + b}</h1>`;
}


function Petle1() {
    const wynik = document.querySelector('#wynik');

    let kodHTML = '';

    //pętla for
    for (let i = 1; i <= 100; i++) {
        kodHTML = kodHTML + i + ', ';
    }

    wynik.innerHTML = kodHTML;
}

function Petle2() {
    const wynik = document.querySelector('#wynik');

    let kodHTML = '';

    for (let i = 1; i <= 100; i++) {
        kodHTML += i + ', ';
    }

    wynik.innerHTML = kodHTML;
}

function Petle3() {
    const dane = document.querySelector('#dane');

    let text = '<table>';
    for (let i = 0; i < 10; i++) {
        text += '<tr><td>' + i + '</td><td>' + (i * i) + '</td></tr>';
    }
    text += '</table>';

    dane.innerHTML = text;
}

function Petle4() {
    let liczba = 10;

    console.log('===== pętla DO WHILE =====');
    do {
        console.log(liczba);
        liczba++;
    } while (liczba <= 0);

    console.log('===== pętla DO =====');
    liczba = 10;
    while (liczba <= 0) {
        console.log(liczba);
        liczba++;
    }
}


function Warunkowe1() {
    let liczba = -3;

    if (liczba > 0) {
        opis.innerHTML = '<h2>' + liczba + ' - Liczba większa od zera.</h2>';
    }
    else {
        opis.innerHTML = '<h2>' + liczba + ' - Zero lub liczba ujemna.</h2>';
    }
}

function Warunkowe2() {
    let liczba = -3;

    liczba > 0 ? opis.innerHTML = 'dodatnia' : opis.innerHTML = '0/ujemna';
}

function Warunkowe3() {
    let liczba = 0;

    if (liczba > 0) {
        opis.innerHTML = '<h2>' + liczba + ' - Liczba większa od zera.</h2>';
    }
    else if (liczba == 0) {
        opis.innerHTML = '<h2>' + liczba + ' - Zero.</h2>';
    }
    else {
        opis.innerHTML = '<h2>' + liczba + ' - Liczba ujemna.</h2>';
    }
}

function Warunkowe4() {
    const opisoceny = document.querySelector('#opisoceny');

    let ocena = 4;

    switch (ocena) {
        case 1:
            opisoceny.innerHTML = ocena + '<h2>niedostateczny</h2>';
            break;
        case 2:
            opisoceny.innerHTML = ocena + '<h2>dopuszczający</h2>';
            break;
        case 3:
            opisoceny.innerHTML = ocena + '<h2>dostateczny</h2>';
            break;
        case 4:
            opisoceny.innerHTML = ocena + '<h2>dobry</h2>';
            break;
        case 5:
            opisoceny.innerHTML = ocena + '<h2>bardzo dobry</h2>';
            break;
        case 6:
            opisoceny.innerHTML = ocena + '<h2>celujący</h2>';
            break;
        default:
            opisoceny.innerHTML = '<h2>nieznana ocena</h2>';
    }
}

function Warunkowe5() {
    console.log('"" - ' + !!"");
    console.log('0 - ' + !!0);
    console.log('null - ' + !!null);
    console.log('undefined - ' + !!undefined);
    console.log('abc - ' + !!"abc");
    console.log('" " - ' + !!" ");
    console.log('7 - ' + !!7);
    console.log('-45 - ' + !!45);
}

function Warunkowe6() {
    let a = prompt("Podaj liczbę: ");

    if (a == 0) {
        console.log('Zero.');
    }
    else {
        console.log('Liczba różna od zera.')
    }
}