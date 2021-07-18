const questions = {
  question0: {
    question: "Who is coming with you?",
    option0: {
      type: "string",
      content:
        "My children",
      country: "Paradise"
    },
    option1: {
      type: "string",
      content:
        "My friends",
      country: "KarriValley"
    },
    option2: {
      type: "string",
      content:
        "My colleagues",
      country: "Hilton"
    },
    option3: {
      type: "string",
      content:
        "My SO",
      country: "Longitude131"
    }
  },
  question1: {
    question: "Do you need a pool?",
    option0: {
      type: "string",
      content: "And a waterpark!",
      country: "Paradise"
    },
    option1: {
      type: "string",
      content: "As long as it looks good on Instagram",
      country: "KarriValley"
    },
    option2: {
      type: "string",
      content: "Not necessarily",
      country: "Hilton"
    },
    option3: {
      type: "string",
      content: "A private one would be nice",
      country: "Longitude131"
    }
  },
  question2: {
    question: "What is the budget like?",
    option0: {
      type: "string",
      content: "High! £400+ a night",
      country: "Paradise"
    },
    option1: {
      type: "string",
      content: "Medium: around £200 a night",
      country: "Longitude131"
    },
    option2: {
      type: "string",
      content: "Fairly low: around £150 a night",
      country: "KarriValley"
    },
    option3: {
      type: "string",
      content: "Low: around £100 a night",
      country: "Hilton"
    }
  },
  question3: {
    question:
      "How close do you want to be to the city center?",
    option0: {
      type: "string",
      content:
        "Right in the center!",
      country: "Hilton"
    },
    option1: {
      type: "string",
      content:
        "Within walking distance",
      country: "KarriValley"
    },
    option2: {
      type: "string",
      content: "No need to be close",
      country: "Longitude131"
    },
    option3: {
      type: "string",
      content:
        "Very far away!",
      country: "Paradise"
    }
  },
  question4: {
    question:
      "What amenity can you not live without?",
    option0: {
      type: "string",
      content: "A theme park",
      country: "Paradise"
    },
    option1: {
      type: "string",
      content: "A luxurious spa",
      country: "KarriValley"
    },
    option2: {
      type: "string",
      content: "Private villas",
      country: "Longitude131"
    },
    option3: {
      type: "string",
      content: "Conference facilities",
      country: "Hilton"
    }
  }
};


const result = {
  Paradise: [
    "Based on your responses, you're probably travelling with children and looking for somewhere where you, and the kids, will be relaxed and occupied.",
    "Paradise Resort Gold Coast is an adventure-packed waterpark resort voted Australias best family resort 10 years in a row! And with games, a water park and entertainment it is not hard to see why! There are several great restaurants too.",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)"
  ],
  Hilton: [
    "Based on your responses you are probably looking to go somewhere with colleagues or friends where you will be right in the heart of Dubai",
    "Hilton Surfers Paradise Hotel is a conference hotel with 4 pools, a luxurious spa, and a world-class seafood restaurant! It is conveniently located in the center of the Gold Coast, only a 4 minute walk from Surfers Paradise Beach!",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)"
  ],
  KarriValley: [
    "Based on your responses, you are an adventurous person looking for somewhere to chill with friends or family and enjoy some luxury service.",
    "Look no further than the KarriValley Resort to ensure you get the most out of your stay in DAustralia! It is a modern cabin set on the edge of Warren National Park. There are incredible amenities such as a tennis court and a lazy river!",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)"
  ],
  Longitude131: [
    "Based on your responses you are looking for a relaxing, maybe romantic, getaway to somewhere private where you can truly enjoy the experience.",
    "Longitude131 is a luxury desert basecamp at Uluru-Kata Tjuta and is set in World Heritage-listed wilderness. It offers guided excursions and connection to ancient cultures. The food is a celebration of local ingredients, only serving to enhance the experience.",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)",
  ]
};


var score = {
  Paradise: 0,
  Hilton: 0,
  KarriValley: 0,
  Longitude131: 0
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
    
    var highestScore = score["Paradise"];
    var highestcountry = "Paradise";
    if (highestScore < score["KarriValley"]) {
      highestScore = score["KarriValley"];
      highestcountry = "KarriValley";
    }
    if (highestScore < score["Hilton"]) {
      highestScore = score["Hilton"];
      highestcountry = "Hilton";
    }
    if (highestScore < score["Longitude131"]) {
      highestScore = score["Longitude131"];
      highestcountry = "Longitude131";
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


