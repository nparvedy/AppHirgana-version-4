
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
            + this.getHiragana(hiraganaVerso[this.valeur][4][0][1])
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
            + this.getHiragana(hiraganaVerso[this.valeur][4][0][1])
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
            + this.getHiragana(hiraganaVerso[this.valeur][4][0][1])
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

    getHiragana(value){
        var theWord = document.querySelector(".theWord p");
        var theHiragana = document.querySelector(".theHiragana p");
        var theLatin = document.querySelector(".theLatin p");
        
        var id = 1;
        value = value.toLowerCase();
        theWord.innerHTML = value;
        console.log(theLatin);
        var taille = value.length;

        var i = 0;
        var syllabe = "";

        // tant que le mot n'a pas fini d'être traduit

        theHiragana.innerHTML = "";
        theLatin.innerHTML = "";

        while (i < taille)
        {
            //console.log(syllabe);
            //console.log(value[i]);
            // Si la première lettre est une consonne
            //if (syllabe != "")
            if (syllabe != "" && value[i] == "a" || value[i] == "i" || value[i] == "o" || value[i] == "e" || value[i] == "u" || value[i] == "ō")
            {
                theLatin.innerHTML = theLatin.innerHTML + " " + syllabe + value[i];

                for (var a = 0; a < WordLibrary.dataAlphabet.latin.length; a++){
                    if (syllabe + value[i] == WordLibrary.dataAlphabet.latin[a]){
                        theHiragana.innerHTML = theHiragana.innerHTML + WordLibrary.dataAlphabet.hiragana[a];
                        break;
                    }
                }
                
                i++;
                syllabe = "";   

            }

            //Si la prochaine lettre est un espace alors on l'a rajoute (seulement latin)
            else if (value[i] == " " || value[i] == "." || value[i] == ","){
                theLatin.innerHTML = theLatin.innerHTML +  value[i];
                i++;
            }

            // On vérifie si la première lettre est une voyelle
            // SI c'est vrai alors on l'affiche et on passe à la lettre suivante
            else if (value[i] == "a" || value[i] == "i" || value[i] == "u" || value[i] == "e" || value[i] == "o")
            {
                theLatin.innerHTML = theLatin.innerHTML + " " + value[i];

                for (var a = 0; a < WordLibrary.dataAlphabet.latin.length; a++){
                    if (value[i] == WordLibrary.dataAlphabet.latin[a]){
                        theHiragana.innerHTML = theHiragana.innerHTML + WordLibrary.dataAlphabet.hiragana[a];
                    }
                }

                i++;

            }

            // Si la lettre n n'est pas suivi d'une voyelle alors on l'a rajoute 
            else if (syllabe == "n" && value[i] != "a" || syllabe == "n" && value[i] != "o" || syllabe == "n" && value[i] != "u" || syllabe == "n" && value[i] != "e" || syllabe == "n" && value[i] != "i"){
                theLatin.innerHTML = theLatin.innerHTML + " " + syllabe;

                for (var a = 0; a < WordLibrary.dataAlphabet.latin.length; a++){
                    if (syllabe == WordLibrary.dataAlphabet.latin[a]){
                        theHiragana.innerHTML = theHiragana.innerHTML + WordLibrary.dataAlphabet.hiragana[a];
                        break;
                    }
                }
                syllabe = "";  
            }

            // Si ce n'est pas une voyelle et on vérifie si c'est un pur son
            else if (value[i] == "k" || value[i] == "s" || value[i] == "t" || value[i] == "n" || value[i] == "h" || value[i] == "m" || value[i] == "y" || value[i] == "r" || value[i] == "w" || value[i] == "c" || value[i] == "f")
            {
                syllabe = syllabe + value[i];
                i++;
            }

            // Si ce n'est pas une voyelle et on vérifie si c'est un impur son
            else if (value[i] == "g" || value[i] == "z" || value[i] == "j" || value[i] == "d" || value[i] == "b" || value[i] == "p")
            {
                syllabe = syllabe + value[i];
                i++;
            }
        }
        return theHiragana.innerHTML;
    }
}


var AppHira = new AppHiragana();
//AppHira.getHiragana();

//Risque que l'indice ne reset pas quand on reverse
// finir le tableau de data.js
//définir un indice aléatoire
//propose les 5 premiers hiragana et doit atteindre minimum 3 juste pour passer à l'hiragana suivant
// faire en sorte que chaque lettre en hiragana il y a sa traduction latin en dessous
//Chaque lettre hiragana doit répresenter un chiffre, ce qui évite de tout traduire à chaque fois dans le data.js . Exemple : あ = 1 = a 
//mettre un timer qui au bout de 5 secondes affiche un indice et au bout de 10 secondes, la solution
//Souligner l'hiragana après la solution ou après la validation

//Vu qu'on sait quand c'est un son pur et impur alors il n y a pas besoin de faire toute l'alphabet pour vérifier quelle hiragana on parle, on peut donc réduire la durée.