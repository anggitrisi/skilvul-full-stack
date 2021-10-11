const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");
const elInputUsername = document.getElementsByName("username")

const createNotFoundElement = (comment) => {
  const elNotFoundCard = document.createElement("div");
  elNotFoundCard.insertAdjacentHTML(
    "beforeend",
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Not Found</h5>
      </div>
    </div>`
  );

  return elNotFoundCard;
};

const getGitHubUser = async(username) => { 
  if(username){
    try{
      const response = await fetch(`https://api.github.com/users/${username}`)
      const user = await response.json();
      return user;
    } catch(error) {
      return response
    }
  } else {
    return null;
  }
 }

const renderUser = async(username)=>{
  const user =  await getGitHubUser(username)
  console.log(user.message)
  console.log(typeof user)
  
  if(user.message == 'Not Found'){
    const notFoundElement = createNotFoundElement()
    const newCard = elCard.parentNode.replaceChild(notFoundElement, elCard);
    console.log(newCard)
  } else {
    elCard.classList.remove("d-none")
    elCardImg.setAttribute("src",user.avatar_url)
    elCardTitle.innerHTML = user.login;
    elCardBtn.setAttribute("href",user.html_url)
  }
}

elFormUsername.onsubmit = (e) => {
  e.preventDefault();
  const username = elInputUsername[0].value
  renderUser(username)
};
