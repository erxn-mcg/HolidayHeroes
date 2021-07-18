const questions = {
  question0: {
    question: "Which of these activities appeal to you?",
    option0: {
      type: "string",
      content:
        "Bungee Jumping",
      country: "Australia"
    },
    option1: {
      type: "string",
      content:
        "Visiting a library",
      country: "Germany"
    },
    option2: {
      type: "string",
      content:
        "Walking through the local market",
      country: "Maldives"
    },
    option3: {
      type: "string",
      content:
        "Relaxing on the beach",
      country: "Dubai"
    }
  },
  question1: {
    question: "What food would you most like to eat?",
    option0: {
      type: "string",
      content: "Lamb",
      country: "Australia"
    },
    option1: {
      type: "string",
      content: "Pretzels",
      country: "Germany"
    },
    option2: {
      type: "string",
      content: "Shawarma",
      country: "Maldives"
    },
    option3: {
      type: "string",
      content: "Samosas",
      country: "Dubai"
    }
  },
  question2: {
    question: "What can you never leave your house without?",
    option0: {
      type: "string",
      content: "Trainers",
      country: "Australia"
    },
    option1: {
      type: "string",
      content: "Sunglasses",
      country: "Dubai"
    },
    option2: {
      type: "string",
      content: "A book",
      country: "Germany"
    },
    option3: {
      type: "string",
      content: "A camera",
      country: "Maldives"
    }
  },
  question3: {
    question:
      "What weather do you enjoy?",
    option0: {
      type: "string",
      content:
        "Mild with an ocean breeze",
      country: "Maldives"
    },
    option1: {
      type: "string",
      content:
        "Wet and cool",
      country: "Germany"
    },
    option2: {
      type: "string",
      content: "Warm and windy",
      country: "Dubai"
    },
    option3: {
      type: "string",
      content:
        "Hot and dry",
      country: "Australia"
    }
  },
  question4: {
    question:
      "What is your ideal Friday night activity?",
    option0: {
      type: "string",
      content: "Going for a long walk",
      country: "Australia"
    },
    option1: {
      type: "string",
      content: "Going to the museum",
      country: "Germany"
    },
    option2: {
      type: "string",
      content: "Relaxing in front of the TV",
      country: "Dubai"
    },
    option3: {
      type: "string",
      content: "Go out partying",
      country: "Maldives"
    }
  }
};


const result = {
  Australia: [
    "If you want a trip filled with fun and adventure, look no further than Australia!.",
    "From bungee Jumping and rock climbing to sunbathing and surfing, Australia has got it all..",
    "Places of interest include the Gold Coast and Sydney."
  ],
  Maldives: [
    "If you are looking for somewhere to let go and relax, go to the Maldives!",
    "It is a secluded and private location with many hotels and experiences to choose from. You will certainly remember this trip forever.",
    "All the hotels are sensational, particularly those without ver water villas."
  ],
  Germany: [
    "If you are looking for an intellectually stimulating, but enjoyable holiday, then Germany is for you",
    "Germany is a diverse country with plenty to see no matter where you are or what you want to do!",
    "Places of interest include the Brandenburg Gate, Bavaria, and the old towns of cities such as Hamburg and Munich."
  ],
  Dubai: [
    "If you are looking for an unforgettable, exiting getaway then look no further than Dubai! It is an incredible location with lots to do.",
    "Dubai is a fairly new destination but that does not make it any less enjoyable. Soak up the sun on beaches, or go out and explore the local area, taking in the incredible culture.",
    "Places of interest include the Burj Khalifa, Dubai Marina, and many shopping centres!",
  ]
};


var score = {
  Australia: 0,
  Maldives: 0,
  Germany: 0,
  Dubai: 0
};


var currentQn = 0;


function setupQuestion() {

  var progress = 20 + currentQn * 20;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/5";

 
  var qn = questions["question" + currentQn];
  var qnText = document.getElementById("question");
  qnText.innerText = qn.question;

  for (var i = 0; i < 4; i++) {
    var option = document.getElementById("option" + i);
    var content = option.getElementsByClassName("content")[0];
    var qnOption = qn["option" + i];
    if (qnOption.type == "image") {
      var htmlStr = "<img src='" + qnOption.content + "'>";
      content.innerHTML = htmlStr;
    } else {
      var htmlStr = "<p>" + qnOption.content + "</p>";
      content.innerHTML = htmlStr;
    }
  }
}


function resetOptions() {
  var btn = document.getElementsByTagName("input");
  btn[0].checked = false;
  btn[1].checked = false;
  btn[2].checked = false;
  btn[3].checked = false;
}


function select(element) {
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  next();
}



function next() {
 
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];

  var country = qn["option" + ans].country;

  score[country]++;
  
  currentQn = currentQn + 1;
  
  resetOptions();
  
  if (currentQn < 5) {
 
    setupQuestion();
  } else {
    
    var highestScore = score["Australia"];
    var highestcountry = "Australia";
    if (highestScore < score["Germany"]) {
      highestScore = score["Germany"];
      highestcountry = "Germany";
    }
    if (highestScore < score["Maldives"]) {
      highestScore = score["Maldives"];
      highestcountry = "Maldives";
    }
    if (highestScore < score["Dubai"]) {
      highestScore = score["Dubai"];
      highestcountry = "Dubai";
    }
    

   
    var countryResult = result[highestcountry];
    document.getElementById("country-type").innerText =
      highestcountry;
    document.getElementById("country-part-1").innerText =
      countryResult[0];
    document.getElementById("country-part-2").innerText =
      countryResult[1];
    document.getElementById("country-recommended").innerText =
      countryResult[2];


    currentQn = 0;
    showPage(1);
  }
}

function showPage(num) {
  var pages = document.getElementsByClassName("container");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[num].style.display = "block";
}


