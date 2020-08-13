//Alphabet Hiragana en tableau multidimensionel

var hiraganaVerso = [ // 0 = hiragana, 1 = alphabet latin, 2 = touche du clavier, 3 = ordre de la touche du clavier, 4 = indice [Nb = indice au hasard][0 = indice FR sans la lettre, 1 = indice FR solution, 2 = indice JA sans la lettre, 3 = indice JA solution, 4 = tranduction FR]

    ["あ","a",51, 2,[
            ["- ri ga to","a ri ga to","-りがと", "ありがと", "Merci"],
            ["-rigato","arigato","-りがと", "ありがと"]
        ]
    ], 
    ["い","i",69, 14,[
            ["ha-","hai","は-", "はい", "Oui"]
        ]
    ],  
    ["お","o",54, 5,[
            ["-hayō gozaimasu","ohayō gozaimasu","-はようございます", "おはようございます", "Bonjour"]
        ]
    ],  
    ["う","u",52, 3,[
            ["ju-","juu","じゅ-", "じゅう", "Dix"]
        ]
    ],  
    ["え","e",53, 4,[
            ["ii-","iie","いい-", "いいえ", "Non"]
        ]
    ], 
    ["か","ka",84, 16,[
            ["-ngearu","kangaeru","-んがえる", "かんがえる", "Penser"]
        ]
    ],  
    ["き","ki",71, 27,[
            ["O gen- desu ka","O genki desu ka","おげん-ですか", "おげんきですか", "Comment allez-vous ?"]
        ]
    ],  
    ["こ","ko",66, 40,[
            ["-nnichi wa","konnichi wa","-んにちは", "こんにちは", "Bonne après-midi"]
        ]
    ],  
    ["く","ku",72, 28,[
            ["i-ra desu ka","ikura desu ka","い-ら ですか", "いくら ですか", "C'est combien"]
        ]
    ],  
    ["け","ke",192, 33,[
            ["iie, -kko desu.","Iie, kekko desu.","いいえ -つこうです", "いいえ けつこうです", "Non merci"]
        ]
    ], 
    ["さ","sa",88, 37,[
            ["-yonara","sayonara","-ようなら", "さようなら", "Au revoir"]
        ]
    ],  
    ["し","shi",68, 25,[
            ["-ngō","shingō","-んごう", "しんごう", "Le feu de circulation"]
        ]
    ],  
    ["そ","so",67, 38,[
            ["gochi- sama deshita","gochiso sama deshita","ごち-さまでした", "ごちそさまでした", "C’était délicieux !"]
        ]
    ],  
    ["す","su",82,15,[
            ["-mimasen","sumimasen","-みません", "すみません", "Pardon"]
        ]
    ],  
    ["せ","se",80, 21,[
            ["wakarima-n","wakarimasen","わかりま-ん", "わかりません", "Je ne comprend pas"]
        ]
    ], 
    ["た","ta",65, 12,[
            ["-beru","taberu","-べる", "たべる", "Manger"]
        ]
    ],  
    ["ち","chi",81, 23,[
            ["-kai desu ka","chikai desu ka","-かいですか", "ちかいですか", "Est-ce près ?"]
        ]
    ],  
    ["と","to",83, 24,[
            ["ariga- gozaimasu","arigato gozaimasu","ありが-うございます", "ありがとうございます", "Merci beaucoup"]
        ]
    ],  
    ["つ","tsu",87, 36,[
            ["i-","itsu","い-", "いつ", "Quand"]
        ]
    ],  
    ["て","te",90, 13,[
            ["ji-nsha","jitensha","じ-んしゃ", "じてんしゃ", "Vélo"]
        ]
    ], 
    ["な","na",85, 18,[
            ["mi-mi","minami","み-み", "みなみ", "Sud"]
        ]
    ],  
    ["に","ni",73, 19,[
            ["- ikitai","ni ikitai","-いきたい", "にいきたい", "Je voudrais aller…"]
        ]
    ],  
    ["の","no",75, 30,[
            ["ki-o","kinoo","き-う", "きのう", "Hier"]
        ]
    ],  
    ["ぬ","nu",49, 0,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ね","ne",190, 43,[
            ["oka-","okane","おか-", "おかね","Argent"]
        ]
    ], 
    ["は","ha",70, 26,[
            ["konban -","konban ha","こんばん-", "こんばんは", "Bonsoir"]
        ]
    ],  
    ["ひ","hi",86, 39,[
            ["-kooki","hikooki","-こうき", "ひこうき", "Avion"]
        ]
    ],  
    ["ほ","ho",219, 10,[
            ["-n","hon","-ん", "ほん", "Le livre"]
        ]
    ],  
    ["ふ","fu",50,1,[
            ["-ne","fune","-ね", "ふね"]
        ]
    ],  
    ["へ","he",187, 11,[
            ["-ya","heya","-や", "へや", "La chambre"]
        ]
    ], 
    ["ま","ma",74, 29,[
            ["sumi-sen","sumimasen","すみ-せん", "すみません", "Excusez-moi"]
        ]
    ],  
    ["み","mi",78, 41,[
            ["-te iru dake desu","mite iru dake desu","-て いる だけ です", "みて いる だけ です", "Je ne fais que regarder"]
        ]
    ],  
    ["も","mo",188, 42,[
            ["-tte iru","motte iru","-っている", "もっている", "Avoir"]
        ]
    ],  
    ["む","mu",220, 34,[
            ["-sume","musume","-すめ", "むすめ", "La fille"]
        ]
    ],  
    ["め","me",223,45,[
            ["go-n nasai","gomen nasai","ご-ん なさい", "ごめん なさい"]
        ]
    ], 
    ["や","ya",55, 6,[
            ["-sui desu","yasui desu","-すい です", "やすい です", "C'est très bon marché"]
        ]
    ],   
    ["よ","yo",57, 8,[
            ["-okoso","yookoso","-うこそ", "ようこそ", "Bienvenue"]
        ]
    ],  
    ["ゆ","yu",56, 7,[
            ["-ka","yuka","-か", "ゆか", "Le sol"]
        ]
    ], 
    ["ら","ra",79, 20,[
            ["ka-kunai","karakunai","か-くない", "からくない", "Sans épice ! "]
        ]
    ],  
    ["り","ri",76, 31,[
            ["waka-mashita","wakarimashita","わか-ました", "わかりました", "Je comprend"]
        ]
    ],  
    ["ろ","ro",226, 35,[
            ["-ku","roku","-く", "ろく", "Six"]
        ]
    ],  
    ["る","ru",191, 44,[
            ["ku-ma","ku-ma","く-ま", "くるま", "Voiture"]
        ]
    ],  
    ["れ","re",77,32,[
            ["wasu-ru","wasureru","わす-る", "わすれる", "Oublier"]
        ]
    ], 
    ["わ","wa",48, 9,[
            ["-tashi ha .... desu.","watashi ha .... desu.","-たしは .... です", "わたしは .... です", "Je m’appelle…"]
        ]
    ],  
    ["を","wo",221, 22,[
            ["- karitai desu ka","wo karitai desu ka","-かりたいですか", "をかりたいですか", "Je voudrais louer..."]
        ]
    ],  
    ["ん","n",89, 17,[
            ["de-sha","densha","で-しゃ", "でんしゃ", "Train"]
        ]
    ]
];  

// Trouver un indice pour nu

//Version 4 

//Un tableau qui contient tous les mots en version latin et en japonais.
//Pour chaque mot il vas vérifier quel hiragana il correspond en latin et japonais, le remplacer par un "-".

var wordLibrary = [
    [
        ["a", "ri", "ga", "to"],
        ["あ","り","が","と"]
    ]

];

console.log(wordLibrary);

// 0 = hiragana, 1 = alphabet latin, 2 = touche du clavier, 3 = ordre de la touche du clavier

var hiraganaArray = [ 
    ["あ","a",51, 2], 
    ["い","i",69, 14],  
    ["お","o",54, 5],  
    ["う","u",52, 3],  
    ["え","e",53, 4], 
    ["か","ka",84, 16],  
    ["き","ki",71, 27],  
    ["こ","ko",66, 40],  
    ["く","ku",72, 28],  
    ["け","ke",192, 33], 
    ["さ","sa",88, 37],  
    ["し","shi",68, 25],  
    ["そ","so",67, 38],  
    ["す","su",82,15],  
    ["せ","se",80, 21], 
    ["た","ta",65, 12],  
    ["ち","chi",81, 23],  
    ["と","to",83, 24],  
    ["つ","tsu",87, 36],  
    ["て","te",90, 13], 
    ["な","na",85, 18],  
    ["に","ni",73, 19],  
    ["の","no",75, 30],  
    ["ぬ","nu",49, 0],  
    ["ね","ne",190, 43], 
    ["は","ha",70, 26],  
    ["ひ","hi",86, 39],  
    ["ほ","ho",219, 10],  
    ["ふ","fu",50,1],  
    ["へ","he",187, 11], 
    ["ま","ma",74, 29],  
    ["み","mi",78, 41],  
    ["も","mo",188, 42],  
    ["む","mu",220, 34],  
    ["め","me",223,45], 
    ["や","ya",55, 6],   
    ["よ","yo",57, 8],  
    ["ゆ","yu",56, 7], 
    ["ら","ra",79, 20],  
    ["り","ri",76, 31],  
    ["ろ","ro",226, 35],  
    ["る","ru",191, 44],  
    ["れ","re",77,32], 
    ["わ","wa",48, 9],  
    ["を","wo",221, 22],  
    ["ん","n",89, 17]
]; 

var WordLibrary = {
    dataAlphabet : {
        hiragana : ["ら", "か", "く", "な", "い"], 
        latin : ["ra", "ka", "ku", "na", "i"]
    }, 

    word : ["karakunai", "kairaikukanai"],
    
}

console.log(WordLibrary);