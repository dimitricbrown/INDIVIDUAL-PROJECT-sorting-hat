console.log("Let's get this thang sortin!!!");

const legendary = [
  {
    id: 1,
    name: 'Nova',
    house: 'Haus of BALMAIN',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/2/26/House_of_Balmain.jpg/"
  },
  {
    id: 2,
    name: 'Mother Gia',
    house: 'Haus of TISCI',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/b/bb/S2_Tisci_Opening.gif/"
  },
  {
    id: 3,
    name: 'Titus',
    house: 'Haus of BALENCIAGA',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/a/a7/S2_Balenciaga_Opening.gif/"
  },
  {
    id: 4,
    name: 'Luxe',
    house: 'Haus of REVLON',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/0/01/S3_Revlon_Opening.gif/"
  }
]

//This is where the chopped childen will go
const candyLand = [];

// Render to DOM Function
const renderToDom = (divId, htmlToRender) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = htmlToRender;
};

// Rendering the children cards to DOM
const legendaryApp = (legendary) => {
  let domString="";

  for (const legend of legendary) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${legend.imageUrl}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${legend.name}</h5>
            <p class="card-text">${legend.house}</p>
            <button class="btn btn-danger" id="chop--${legend.id}">CHOP!</button>
          </div>
        </div>
      </div>
    </div>`;
  }

  renderToDom(".children", domString);
}

// Rendering the chopped children cards to DOM
const chopApp = (legendary) => {
  let chopString="";

  for (const legend of legendary) {
    chopString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://i.pinimg.com/736x/8f/c9/25/8fc925373ded642620bf1194c4734c19.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text"> Sorry, boo! Looks like little miss ${legend.name} has been CHOPPED and sent to Candy's Land!</p>
          </div>
        </div>
      </div>
    </div>`;
  }

  renderToDom(".candy", chopString);
}

const chopBtn = (event) => {
  if(event.target.id.includes('chop')) {
    const [throway, legendId] = event.target.id.split('--')

    const indexOfLegend = legendary.findIndex(
      (legend) => legend.id === Number(legendId)
    );

    const choppedChild = legendary.splice(indexOfLegend, 1);

    candyLand.push(choppedChild)

    chopApp(choppedChild);
    legendaryApp(legendary);
  }
}

//Function to make the new haus child form appear
const werkForm = () => {
  const werkString = 
  `<form id="werkForm">
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="name"
      placeholder="Leiomy"
      required
    />
    <label for="floatingInput">New Haus Child</label>
  </div> 

  <button type="submit" class="btn btn-success" id="form-submit">
    HOUSE WALK!
  </button>
</form>`;

//Makes the button and intro disappear and display the werk form.
const introBtn = document.querySelector(".intro-btn");
  const displaySetting = introBtn.style.display;
  
  if (displaySetting === 'block'){
    displaySetting = 'none';
  }
  
 renderToDom('.intro-btn', werkString);

 //event listener needs to be in the same scope in order to make the button clickable
 document.querySelector('#form-submit').addEventListener('click', newHausChild)
}

//This will make your new Haus member
const newHausChild = (event) => {
  event.preventDefault();

  const randomNumber = Math.floor(Math.random() * 3);

  const randomHaus = legendary[randomNumber];

  const newChild = {
    id: legendary.length + 2,
    name: document.querySelector("#name").value,
    house: randomHaus.house,
    imageUrl: randomHaus.imageUrl
  };

  legendary.push(newChild);
  legendaryApp(legendary);

  //Reset the form for another input
  document.querySelector('#werkForm').reset()
}

//Filtering the buttons
const buttonFilter = (event) => {
  if(event.target.id.includes('all')) {
    legendaryApp(legendary);
  }
  if(event.target.id.includes('balmain')) {
    const balmain = legendary.filter(item => item.house.toLowerCase() === 'haus of balmain');
    legendaryApp(balmain);
  }
  if(event.target.id.includes('balenciaga')) {
    const balenciaga = legendary.filter(item => item.house.toLowerCase() === 'haus of balenciaga');
    legendaryApp(balenciaga);
  }
  if(event.target.id.includes('tisci')) {
    const tisci = legendary.filter(item => item.house.toLowerCase() === 'haus of tisci');
    legendaryApp(tisci);
  }
  if(event.target.id.includes('revlon')) {
    const revlon = legendary.filter(item => item.house.toLowerCase() === 'haus of revlon');
    legendaryApp(revlon);
  }
  
}

//Function to start the inside functions, as the page renders.
const startApp = () => {
  legendaryApp(legendary);

  //Event listener added to all the button filters of the childen
  document.querySelector('.centerBtns').addEventListener('click', buttonFilter);

  //Event listener added to display the form for new child
  document.querySelector('#werkBtn').addEventListener('click', werkForm);

  //Event listener added to chop the children to Candy Land
  document.querySelector('.children').addEventListener('click', chopBtn);
}

startApp();
