# Ćwiczenie #05

Twoim zadaniem jest zbudowanie prostego systemu zliczającego klinięcia w linki na stronie. W obecnym rozwiązaniu przeglądarka ma nie przeładowywać strony tylko zliczać klinięcia w konkretny link tj. `.link` (identyfikowany po atrybucie `href`) oraz sumować kliknięcia w paragraf tj. `.text` (identyfikowany po `dataset`).

Zadanie wykonaj w taki sposób, aby nasłuchiwanie było ustawione tylko na elementy `</a>`. Po każdym kliknięciu należy zaktualizować sturkturę danych. Początkowo ona wygląda następująco.

```
const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};
```

Zanim przystąpisz do zadania zapoznaj się z kodem w pliku app.js.
Jest tam już napisana cześć kodu, która renderuje dane przechowywane w zmiannej `stats`.
Twoim zadaniem jest tylko napisanie cześciu odpowiedzialnej za zliczanie klików.

&nbsp;

> Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://github.com/devmentor-pl/practice-js-events)