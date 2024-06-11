//fetch data from the API
const fetchData = async () => {
  try {
    const URL = "http://localhost:4000";

    const response = await fetch(URL);

    const result = await response.json();

    return result;
  } catch (error) {
    console.log("Failed to fetch data!");
    console.error(error);
  }
};

const main = async () => {
  try {
    const data = await fetchData();

    const title = data.title;
    const task_title = data.tasks[0].task_title;
    const task_description = data.tasks[0].task_description;
    const assets = data.tasks[0].assets;

    addTaskTitleAndDesc(title, task_title, task_description);
    addAssetIntoHtml(assets);

    // console.log(assets);
  } catch (error) {
    console.error("Error in main:", error);
  }
};

const addTaskTitleAndDesc = (title, task_title, task_description) => {
  let headingElem = document.querySelector(".padded_page > .heading");
  let descElem = document.querySelector(".padded_page > .description");

  headingElem.firstElementChild.textContent = title;
  descElem.children[0].textContent = task_title;
  descElem.children[1].textContent = task_description;
};

const addAssetIntoHtml = (assets) => {
  const cards = document.querySelectorAll(".card-section .card");
  const length = Object.keys(assets).length;

  for (let i = 0; i < length; i++) {
    //getting card and asset in serial order
    const card = cards[i];
    const asset = assets[i];
    const { asset_title, asset_description } = { ...asset };
    let heading = card.querySelector(".heading");
    let desc = card.querySelector(".desc");

    //assigning title and description to card
    heading.firstChild.textContent = asset_title;
    desc.lastChild.textContent = asset_description;
  }
};

main();

// addTaskTitleAndDesc("adf","adfa","adf");
