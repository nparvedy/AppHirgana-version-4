
// Function qui permet de valider en appuyant sur la touche entrer et qui lance la function du boutton valider // version class
var wordToGuess2 = document.getElementById("wordToGuess2");
wordToGuess2.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("check2").click();
    }else if (AppHira.areYouReverse == 1){AppHira.clickClavier(event)}

});

//objectif du jour, changer toute l'application en class

class AppHiragana {
    wordToTranslate = document.getElementById("wordToTranslate2");
    answer = document.getElementById("response2");
    goodAnswer = document.getElementById("goodAnswer2");
    wrongAnswer = document.getElementById("wrongAnswer2");
    areYouReverse = 0;
    change = 1;
    valeur = 0;
    valeur2 = 0;
    buttonSoluceOn = false;
    buttonSoluceClicked = false;

    clavierVirtuel = document.getElementById("clavierVirtuel2");

    theIndice = document.getElementById("indice2");

    right = document.getElementById("right2");

    checkWord(){

        //vérifie si la réponse est correcte

        if(hiraganaVerso[this.valeur][this.change] == wordToGuess2.value.toLowerCase() && this.buttonSoluceClicked == true){
            this.answer.innerHTML = "Bonne réponse, la traduction de : " 
            +  hiraganaVerso[this.valeur][this.valeur2] 
            + " était bien " 
            + "["+ hiraganaVerso[this.valeur][this.change] + "].<br>" 
            + " Sauf que tu as vu la solution donc tu ne gagnes aucun point."
            + "<p>Exemple : " 
            + " [" 
            + hiraganaVerso[this.valeur][4][0][3] 
            + "]" 
            + " "
            + hiraganaVerso[this.valeur][4][0][1] 
            + " qui veut dire " 
            + " [" + hiraganaVerso[this.valeur][4][0][4] + "]</p>";
            
        }else if (hiraganaVerso[this.valeur][this.change] == wordToGuess2.value.toLowerCase()){
            this.answer.innerHTML = "Bonne réponse, la traduction de : " 
            +  hiraganaVerso[this.valeur][this.valeur2] 
            + " était bien " 
            + "["+ hiraganaVerso[this.valeur][this.change] + "]." 
            + "<p>Exemple : " 
            + " [" 
            + hiraganaVerso[this.valeur][4][0][3] 
            + "]" 
            + " "
            + hiraganaVerso[this.valeur][4][0][1] 
            + " qui veut dire " 
            + " [" + hiraganaVerso[this.valeur][4][0][4] + "]</p>";

            this.goodAnswer.innerHTML = parseInt(this.goodAnswer.innerHTML) + 1;
        }else {
            this.answer.innerHTML = "Faux ! La bonne réponse de : " 
            + hiraganaVerso[this.valeur][this.valeur2] + " était " 
            + "["+ hiraganaVerso[this.valeur][this.change] + "]." 
            + "<p>Exemple : " 
            + " [" 
            + hiraganaVerso[this.valeur][4][0][3] 
            + "]" 
            + " "
            + hiraganaVerso[this.valeur][4][0][1] 
            + " qui veut dire " 
            + " [" + hiraganaVerso[this.valeur][4][0][4] + "]</p>";

            this.wrongAnswer.innerHTML = parseInt(this.wrongAnswer.innerHTML) + 1;
        }

        this.valeur = Math.floor(Math.random() * Math.floor(45)); //[1]
        this.wordToTranslate.innerText = hiraganaVerso[this.valeur][this.valeur2]; //[2]
        
        wordToGuess2.value = "";
        this.theIndice.innerText = ""; //[3]
        
        this.deleteSoluceButton();
        
    }

    reverse(){
        if (this.areYouReverse == 0)
        {
            this.areYouReverse = 1;
            this.wordToTranslate.innerText = hiraganaVerso[this.valeur][1];
            this.valeur2 = 1;
            this.change = 0;
        }else {
            this.areYouReverse = 0;
            this.wordToTranslate.innerText = hiraganaVerso[this.valeur][0];
            this.valeur2 = 0;
            this.change = 1;
        }

        this.valeur = Math.floor(Math.random() * Math.floor(45)); // Se répète avec [1]
        this.wordToTranslate.innerText = hiraganaVerso[this.valeur][this.valeur2]; // Se répète avec [2]
        this.theIndice.innerText = ""; // Se répète avec [3]

        this.clavierVirtuelFunction();
        this.deleteSoluceButton();
    }

    clavierVirtuelFunction(){
        if (this.areYouReverse == 1)
        {
            for (var i = 0; i < hiraganaVerso.length; i++) // A chaque boucle, ajoute un boutton
            {
                this.clavier(); 

                var nbButtons = document.querySelectorAll('#clavierVirtuel2 button'); //compte le nombre de bouttons du clavier

                this.clavier(nbButtons.length); //lance la fonction tant qu'il ne contient pas un bouton pour chaque hiragana
            }
        } else {
            this.clavierVirtuel.innerHTML = "";
        }
    }

    clavier(nbButton){
        for (var a = 0; a < hiraganaVerso.length; a++)
        {
            if (nbButton == hiraganaVerso[a][3]) // permet de mettre chaque touche dans l'ordre, si c'est la bonne touche alors on lui créer son bouton
            {
                this.clavierVirtuel.innerHTML = this.clavierVirtuel.innerHTML + '<button onclick="AppHira.clickClavier(event)" keyCode ="' + hiraganaVerso[a][2]+'"> ' + hiraganaVerso[a][0] + '</button>';

                if (nbButton == 11 || nbButton == 22 || nbButton == 33)
                {
                    this.clavierVirtuel.innerHTML = this.clavierVirtuel.innerHTML + "<br>";
                }
            }
        }
    }

    clickClavier(event){
        if (event.type == "click")
        {
            wordToGuess2.value = event.toElement.innerText;
        }else if (event.type == "keyup") 
        
        {
            for (var i = 0; i < hiraganaVerso.length; i++)
            {
                if (hiraganaVerso[i][2] == event.keyCode)
                {
                    wordToGuess2.value = hiraganaVerso[i][0];
                }
            }
        }
    }

    indiceByWord(){
        if (this.areYouReverse == 1){
            this.theIndice.innerText = hiraganaVerso[this.valeur][4][0][2];
        }else {
            this.theIndice.innerText = hiraganaVerso[this.valeur][4][0][0];
        }

        if(this.buttonSoluceOn == false)
        {
            this.createButtonSoluce();
        }
        
        
    }

    createButtonSoluce(){
        var btn = document.createElement("BUTTON");
        btn.innerText = "Solution";
        btn.setAttribute("onclick", "AppHira.soluce()");
        btn.setAttribute("id", "soluce");
        this.right.appendChild(btn);
        this.buttonSoluceOn = true;
    }

    soluce(){
        this.buttonSoluceClicked = true;
        if (this.areYouReverse == 1){
            this.theIndice.innerText = hiraganaVerso[this.valeur][4][0][3] + " [" + hiraganaVerso[this.valeur][4][0][4] + "]";
        }else {
            this.theIndice.innerText = hiraganaVerso[this.valeur][4][0][1] + " [" + hiraganaVerso[this.valeur][4][0][4] + "]";
        }
    }

    deleteSoluceButton(){
        var nbButtonsRight = document.querySelectorAll("#right2 button");

        //suppression du bouton soluce

        if(nbButtonsRight.length == 2)
        {
           this.right.removeChild(nbButtonsRight[1]);
           this.buttonSoluceOn = false;
        }
        this.buttonSoluceClicked = false;
    }

    getHiragana(){
        var theWord = document.querySelector(".theWord p");
        var theHiragana = document.querySelector(".theHiragana p");
        var theLatin = document.querySelector(".theLatin p");
        
        var id = 0;

        theWord.innerHTML = WordLibrary.word[id];
        var taille = WordLibrary.word[id].length;

        var i = 0;
        var syllabe = "";

        // tant que le mot n'a pas fini d'être traduit

        while (i < taille)
        {

            // Si la première lettre est une consonne
            //if (syllabe != "")
            if (syllabe != "" && WordLibrary.word[id][i] == "a" || WordLibrary.word[id][i] == "i" || WordLibrary.word[id][i] == "o" || WordLibrary.word[id][i] == "e" || WordLibrary.word[id][i] == "u")
            {
                theLatin.innerHTML = theLatin.innerHTML + " " + syllabe + WordLibrary.word[id][i];

                for (var a = 0; a < WordLibrary.dataAlphabet.latin.length; a++){
                    if (syllabe + WordLibrary.word[id][i] == WordLibrary.dataAlphabet.latin[a]){
                        theHiragana.innerHTML = theHiragana.innerHTML + WordLibrary.dataAlphabet.hiragana[a];
                        break;
                    }
                }
                
                i++;
                syllabe = "";   

            }

            // On vérifie si la première lettre est une voyelle
            // SI c'est vrai alors on l'affiche et on passe à la lettre suivante
            else if (WordLibrary.word[id][i] == "a" || WordLibrary.word[id][i] == "i" || WordLibrary.word[id][i] == "u" || WordLibrary.word[id][i] == "e" || WordLibrary.word[id][i] == "o")
            {
                theLatin.innerHTML = theLatin.innerHTML + " " + WordLibrary.word[id][i];

                for (var a = id; a < WordLibrary.dataAlphabet.latin.length; a++){
                    if (WordLibrary.word[id][i] == WordLibrary.dataAlphabet.latin[a]){
                        theHiragana.innerHTML = theHiragana.innerHTML + WordLibrary.dataAlphabet.hiragana[a];
                    }
                }

                i++;

            }

            // Si ce n'est pas une voyelle et on vérifie si c'est un pur son
            else if (WordLibrary.word[id][i] == "k" || WordLibrary.word[id][i] == "s" || WordLibrary.word[id][i] == "t" || WordLibrary.word[id][i] == "n" || WordLibrary.word[id][i] == "h" || WordLibrary.word[id][i] == "m" || WordLibrary.word[id][i] == "y" || WordLibrary.word[id][i] == "r" || WordLibrary.word[id][i] == "w")
            {
                syllabe = syllabe + WordLibrary.word[id][i];
                i++;

            }
        }
        
    }
}


var AppHira = new AppHiragana();
AppHira.getHiragana();

//Risque que l'indice ne reset pas quand on reverse
// finir le tableau de data.js
//définir un indice aléatoire
//propose les 5 premiers hiragana et doit atteindre minimum 3 juste pour passer à l'hiragana suivant
// faire en sorte que chaque lettre en hiragana il y a sa traduction latin en dessous
//Chaque lettre hiragana doit répresenter un chiffre, ce qui évite de tout traduire à chaque fois dans le data.js . Exemple : あ = 1 = a 
//mettre un timer qui au bout de 5 secondes affiche un indice et au bout de 10 secondes, la solution
//Souligner l'hiragana après la solution ou après la validation
