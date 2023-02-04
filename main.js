console.log("Let's get this thang sortin!!!");

const legendary = [
  {
    id: 1,
    name: 'Nova',
    house: 'Haus of BALMAIN',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/4/4c/Torie_Balmain.jpg/revision/latest?cb=20200624182828"
  },
  {
    id: 2,
    name: 'Mother Gia',
    house: 'Haus of TISCI',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/b/bb/S2_Tisci_Opening.gif/revision/latest?cb=20220811101342"
  },
  {
    id: 3,
    name: 'Titus',
    house: 'Haus of BALENCIAGA',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/a/a7/S2_Balenciaga_Opening.gif/revision/latest?cb=20220811094732"
  },
  {
    id: 4,
    name: 'Luxe',
    house: 'Haus of REVLON',
    imageUrl: "https://static.wikia.nocookie.net/legendaryhbo/images/0/01/S3_Revlon_Opening.gif/revision/latest?cb=20220718051221"
  }
]

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
  document.querySelector('.centerBtns').addEventListener('click', buttonFilter)
}

startApp();
