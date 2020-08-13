<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <h1>Application pour apprendre l'hiragana (alphabet japonais)</h1>

    <section id="translate2">

        <div id="left2">
            <span>Mot à traduire : </span> <span id="wordToTranslate2">あ</span><br>

            <input type="text" id="wordToGuess2">

            <button onclick="AppHira.checkWord()" id="check2" >Valider</button> <button onclick="AppHira.reverse()" id="reverse2">Reverse</button> <br>
            <p>Résultat : <span id="response2"></span></p>

            <span>Bonne réponse : </span> <span id="goodAnswer2">0</span> | <span>Mauvaise réponse : </span> <span id="wrongAnswer2">0</span><br>

            <div id="clavierVirtuel2"></div>
        </div>

        <div id="right2">
            <button onclick="AppHira.indiceByWord()">Indice</button>
            <p id="indice2"></p>
        </div>
    </section>

    <section id="test">
        <div class="theWord">
            <p></p>
        </div>
        <div class="theHiragana">
            <p></p>
        </div>
        <div class="theLatin">
            <p></p>
        </div>
    </section>

    <script src="data.js"></script>
    <script src="application.js"></script>
</body>
</html>