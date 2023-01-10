// MAPPING
const originalNumbers = [1, 2, 3, 4, 5];
originalNumbers.push()
const squaredNumbers = originalNumbers.map(function (num){
    return num * num;
})

console.log(squaredNumbers)
console.log(originalNumbers);

const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  
  const newEngineers = oldAccounts.map(function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });

  console.log(newEngineers);

  const userIDs = newEngineers.map((eng) => {
    return eng.userID;
  })
  console.log(userIDs);

  const title = newEngineers.map(function (job){
    return job.title;
  })

  console.log(title);


  const equippedEngineers = newEngineers.map(function(eng){
  return Object.assign({}, eng, {equipment: "Laptop"})
  })

  console.log(equippedEngineers);

  const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
  const rollcall = skiSchool.map(function (student){
    return student + " the skier"
  })

  console.log(rollcall);

  const robots = [
    { name: "Johnny 5", modes: 5, isActivated: false },
    { name: "C3PO", modes: 3, isActivated: false },
    { name: "Sonny", modes: 2.5, isActivated: false },
    { name: "Baymax", modes: 1.5, isActivated: false },
  ];

  const activatedRobots = robots.map((robot) =>{
    return Object.assign({}, robot, {
        modes: robot.modes * 2,
        isActivated: true,
    })
  })
  console.log(robots);
  console.log(activatedRobots);
  

  // FILTERING
  const myArray = [1, 2, 3, 4, 5];
  const filteredArray = myArray.filter(function (num){
    return num < 3;
  })
  console.log(filteredArray);


  const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

  function printFirstName(collection) {
    for (const user of collection) {
        console.log(user.firstName)
    }
  }
  printFirstName(users)


  function animalFilter(collection, animal) {
    for (const user of collection) {
        if(user.favoriteAnimal === animal) {
            console.log(user.firstName);
        }
        
    }
  }
  animalFilter(users, 'Penguin')

  function colorFilter(collection, color) {
    for (const user of collection) {
        if(user.favoriteColor === color) {
            console.log(user.lastName)
        }
    }
  }
  colorFilter(users, "Blue")



  // Reduce
  const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];

  function totalAmount(products) {
    let totalPrice = 0;

    for (const product of products) {
        totalPrice += product.price;
    };
    return totalPrice;
  }

  console.log(totalAmount(products));



  // FIND
  const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

console.log(cards.indexOf('ten of diamonds',));


const array = [5, 6, 7, 8, 9, 10]
function isOdd(element) {
    return element % 2 === 1;
}
console.log(array.find(isOdd));


// event listener
const input = document.getElementById('signIn');
input.addEventListener('click', function(){
    alert(prompt('Kindly input username'));
});

  
// Big O Notation
function findSock(laundry){
    for(const item of laundry) {
        if(item === 'sock') return item
    }
}

console.log(findSock(['shirt', 'shorts', 'sock', 'pants']));

const sortedLaundry= ["belt", "blouse", "pants", "shirt", "shorts", "socks", "underwear"];

function findSocks(sortedLaundry) {
    let start =  0;
    let end = sortedLaundry.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2 );
        if (sortedLaundry[mid]=== 'socks') return 'socks';
        if(sortedLaundry[mid] < 'socks') {
            start = mid + 1;
        }else {
            end = mid -1
        }
    }
}

//console.log(findSocks())


// Context
const byronPoodle = {
  name: "Byron",
  ageInYears: 2,
  warn: function() {
    console.log(`Bark bark bark`);
    console.log(this);
  }
};

console.log(byronPoodle.warn())

// Sophisticated way of using this
const blakeDoodle = {
  name: "Blake",
  breed: "Labradoodle",
  sonicAttack: "ear-rupturing atomic bark",
  mostHatedThing: "noises in the apartment hallway",
  warn: function() {
    console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
  }
};

console.log(blakeDoodle.warn());

// Context and explicit setting
const asgardianBrothers = [
  {
    firstName: "Thor",
    familyName: "Odinsson"
  },
  {
    firstName: "Loki",
    familyName: "Laufeysson-Odinsson"
  }
]

function intro(person, line) {
  return `${person.firstName} ${person.familyName} says: ${line}`
}

const phrase = "I like this brown drink very much, bring me another!"
 console.log(intro(asgardianBrothers[1], phrase))

 function introWithContext(line){
  return `${this.firstName} ${this.familyName} says: ${line}`
}

console.log(introWithContext.call(asgardianBrothers[0], phrase))
 
introWithContext.apply(asgardianBrothers[0], [phrase])


//Bind

const asgardianBrother = [
  {
    firstName: "Thor",
    familyName: "Odinsson"
  },
  {
    firstName: "Loki",
    familyName: "Laufeysson-Odinsson"
  }
]
function introWithContext(line){
  return `${this.firstName} ${this.familyName} says: ${line}`
}

const thorIntro = introWithContext.bind(asgardianBrother[0])
console.log(thorIntro("Hi, Jane"))

const lokiIntro = introWithContext.bind(asgardianBrother[1])

console.log(lokiIntro("I love snakes")) 
