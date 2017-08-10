//Full disclosure: this code was c/v from the following NSS grad:
//https://github.com/madduxTim/NSS-Exercises-WYSIWYG
//The requirements were met gracefully in Tim's code, and I re-wired and commented out 
//so I might better understand it, because it was a bitch for me, at the time of writing this. 


// ##Lessons Learned / Reinforced:

// _Sorting data in an array of objects
// _person elements
// _.insertBefore() method
// _writing dynamically to the DOM
// _string templating ${ }
// _event.target
// _event bubbling
// _add a Screenshot for quick viewing 

// var counter = 0;
// var outputEl = document.getElementById("outputEl");
// for (; counter < 5; counter++) {
//   // Give each person element a unique identifier
//   outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
// }

// // Now containerEl will have elements in it
// var containerEl = document.getElementsByClassName("person__container");

// // Event listeners are created
// for (var i = 0; i < containerEl.length; i++) {
//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
//   });
// };
////////////////////////////////////////////////////////////////////////////

//Create OBJECT key:value Structure for each person:
var theDons = [{
            name: "Alphonse Gabriel Capone",
            AKA: "Scarface, Big Al, Big Boy, Public Enemy No. 1",
            bio: "Al Capone was one of the most influential gangsters during the period. Born in Williamsburg, Brooklyn in 1899 to immigrant parents, Capone was recruited by members of the Five Points Gang in the early 1920s. Capone’s childhood friend, Lucky Luciano, was also originally a member of the Five Points Gang. Capone would rise to control a major portion of illicit activity such as gambling, prostitution, and bootlegging in Chicago during the early twentieth century.",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Al_Capone_in_1930.jpg",
            lifespan: {
                birth: 1899,
                death: 1947
            }
        },
        {
            name: "Du Yuesheng",
            AKA: "n/a",
            bio: "Du was born in Gaoqiao, a small town east of Shanghai, during the reign of the Guangxu Emperor in the late Qing dynasty. His family moved to Shanghai in 1889, a year after his birth. By the time he reached nine years old, Du had lost his immediate family — his mother died in childbirth, his sister was sold into slavery, his father died, and his stepmother vanished — so he went back to Gaoqiao and lived with his grandmother. He returned to Shanghai in 1902 and worked at a fruit stall in the French Concession but was fired for theft later. He wandered around for some time before becoming a bodyguard in a brothel, where he became acquainted with the Green Gang. He joined the gang at the age of 16.",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Du_Yuesheng2.jpg",
            lifespan: {
                birth: 1888,
                death: 1951
            }

        },
        {
            name: "Pablo Escobar",
            AKA: "Don Pablo, El Padrino, El Pablito, El Zar de la Cocaina",
            bio: "Pablo Emilio Escobar Gaviria (Spanish pronunciation: [ˈpaβ̞lo eˈmiljo eskoˈβ̞aɾ ɣ̞aˈβ̞iɾja]; 1 December 1949 – 2 December 1993) was a Colombian drug lord and narcoterrorist. His cartel supplied an estimated 80% of the cocaine smuggled into the United States at the height of his career, turning over US $21.9 billion a year in personal income.[2][3] He was often called 'The King of Cocaine' and was the wealthiest criminal in history, with an estimated known net worth of US $30 billion by the early 1990s (equivalent to about $55 billion as of 2016),[4] making him one of the richest men in the world in his prime.",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg",
            lifespan: {
                birth: 1949,
                death: 1993
            }
        },

        {
            name: "The Kray Twins",
            AKA: "Ronnie and Reggie",
            bio: "Twin brothers Ronald 'Ronnie' Kray (24 October 1933 – 17 March 1995) and Reginald 'Reggie' Kray (24 October 1933 – 1 October 2000) were English gangsters who were the foremost perpetrators of organised crime in the East End of London during the 1950s and 1960s. With their gang, the Firm, the Krays were involved in armed robberies, arson, protection rackets, assaults and the murders of Jack 'the Hat' McVitie and George Cornell.",
            image: "https://upload.wikimedia.org/wikipedia/en/0/07/Krays.jpg",
            lifespan: {
                birth: 1933,
                death: "1995 (Ronnie), 2000 (Reggie)"
            }
        },
    ]
    ////////////////////////////////////////////////////////////////////////////

//Declare and getelementsbyId/Class name...
let input = document.getElementById("inputField");
let cardArea = document.getElementById("cardArea");
var eachCard = document.getElementsByClassName("eachCard");
var eachBio = document.getElementsByClassName("eachBios");

////////////////////////////////////////////////////////////////////////////

//Declare a function which will allow each of theDons to be added to the dom 
function addtoDOM() {
    for (let i = 0; i < theDons.length; i++) {
        let oneDon = theDons[i];
        //invoke the "eachCard()" from below.
        makeCard(oneDon);
    }
    //also include the changeClick function from below
    changeClick();
}

//Declare a function which will use the HTML from the instructions to plug in 
//to the structure of each card:
function makeCard(oneDon) {
    cardArea.innerHTML += `<div class="eachCard">
    <h2>${oneDon.name}</h2>
    AKA:<h3>${oneDon.AKA}</h3>
        <section>
            <hr>
            <p class="eachBios">${oneDon.bio}
            </p><img src="${oneDon.image}"
        </section>
        <footer>${oneDon.lifespan.birth}-${oneDon.lifespan.death}</footer>
    </div><br>`
};

addtoDOM();
changeClick();
////////////////////////////////////////////////////////////////////////////

//Add an event listeners which will allow color change of cards, empty the input, focus on the input:

function changeClick(thisCard) {
    for (let i = 0; i < eachCard.length; i++) {
        let thisCard = eachCard[i];
        let thisBio = eachBio[i];
        thisCard.addEventListener("click", function() {
            //a function below which will refresh the class of the clicked card 
            removeClass();
            //add a class to clicked card
            thisCard.classList.add("selectedCard");
            //empty the input value 
            input.value = "";
            //focus on the input
            input.focus();
            //reference a later function
            changeBio(thisCard, thisBio);
        })
    }
};

function removeClass() {
    for (let i = 0; i < eachCard.length; i++) {
        eachCard[i].classList.remove("selectedCard");
    }
}

function changeBio(thisCard, thisBio) {
    input.addEventListener("keyup", function(enter) {
        if (thisCard.classList.contains("selectedCard")) {
            let newBio = enter.currentTarget.value;
            thisBio.innerHTML = newBio;
            if (enter.keyCode === 13) {
                thisBio.innerHTML = newBio;
                input.value = "";
            }
        }
    })
};