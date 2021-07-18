const questions = {
  question0: {
    question: "Who is coming with you?",
    option0: {
      type: "string",
      content:
        "My children",
      country: "Atlantis"
    },
    option1: {
      type: "string",
      content:
        "My friends",
      country: "Five"
    },
    option2: {
      type: "string",
      content:
        "My colleagues",
      country: "Rixos"
    },
    option3: {
      type: "string",
      content:
        "My SO",
      country: "Anantara"
    }
  },
  question1: {
    question: "Do you need a pool?",
    option0: {
      type: "string",
      content: "And a waterpark!",
      country: "Atlantis"
    },
    option1: {
      type: "string",
      content: "As long as it looks good on Instagram",
      country: "Five"
    },
    option2: {
      type: "string",
      content: "Not necessarily",
      country: "Rixos"
    },
    option3: {
      type: "string",
      content: "A private one would be nice",
      country: "Anantara"
    }
  },
  question2: {
    question: "What is the budget like?",
    option0: {
      type: "string",
      content: "High! £400+ a night",
      country: "Atlantis"
    },
    option1: {
      type: "string",
      content: "Medium: around £200 a night",
      country: "Anantara"
    },
    option2: {
      type: "string",
      content: "Fairly low: around £150 a night",
      country: "Five"
    },
    option3: {
      type: "string",
      content: "Low: around £100 a night",
      country: "Rixos"
    }
  },
  question3: {
    question:
      "How close do you want to be to the city center?",
    option0: {
      type: "string",
      content:
        "Right in the center!",
      country: "Rixos"
    },
    option1: {
      type: "string",
      content:
        "Within walking distance",
      country: "Five"
    },
    option2: {
      type: "string",
      content: "No need to be close",
      country: "Anantara"
    },
    option3: {
      type: "string",
      content:
        "Very far away!",
      country: "Atlantis"
    }
  },
  question4: {
    question:
      "What amenity can you not live without?",
    option0: {
      type: "string",
      content: "A theme park",
      country: "Atlantis"
    },
    option1: {
      type: "string",
      content: "A luxurious spa",
      country: "Five"
    },
    option2: {
      type: "string",
      content: "Private villas",
      country: "Anantara"
    },
    option3: {
      type: "string",
      content: "Conference facilities",
      country: "Rixos"
    }
  }
};


const result = {
  Atlantis: [
    "Based on your responses, you're probably travelling with children and looking for somewhere where you, and the kids, will be relaxed and occupied.",
    "Atlantis is an iconic base for your getaway to Dubai. It has several waterparks and rollercoasters to keep everyone active no matter the age! With pools galore and an interesting range of restaurants, this is surely an unforgettable experience!",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)"
  ],
  Rixos: [
    "Based on your responses you are probably looking to go somewhere with colleagues or friends where you will be right in the heart of Dubai",
    "Rixos Premium Resort is very close to many major attractions including the Marina, the Burj Khalifa, The Dubai fountain, and so much more. It is a perfect base to explore the city, while also getting some work done. As a 5 start hotel, you are sure to enjoy it!",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)"
  ],
  Five: [
    "Based on your responses, you are an adventurous person looking for somewhere to chill with friends or family and enjoy some luxury service.",
    "Look no further than the FIVE Palm Jumeirah Hotel to ensure you get the most out of your stay in Dubai! It has a modern spa and sensational nightlife, with food made by world-class chefs. This will certainly be a holiday to remember!",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)"
  ],
  Anantara: [
    "Based on your responses you are looking for a relaxing, maybe romantic, getaway to somewhere private where you can truly enjoy the experience.",
    "Anantara The Palm Resort offers just that with its indulgent villas. Why not splurge on an over the water villa giving unparalleled views over the cityscape. Many pools mean you will never be too hot and bars spread across the resort allow any time to be cocktail hour!",
    "Press the button to see its website, as well as those of some other hot Dubai hotels :)",
  ]
};


var score = {
  Atlantis: 0,
  Rixos: 0,
  Five: 0,
  Anantara: 0
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
    
    var highestScore = score["Atlantis"];
    var highestcountry = "Atlantis";
    if (highestScore < score["Five"]) {
      highestScore = score["Five"];
      highestcountry = "Five";
    }
    if (highestScore < score["Rixos"]) {
      highestScore = score["Rixos"];
      highestcountry = "Rixos";
    }
    if (highestScore < score["Anantara"]) {
      highestScore = score["Anantara"];
      highestcountry = "Anantara";
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


