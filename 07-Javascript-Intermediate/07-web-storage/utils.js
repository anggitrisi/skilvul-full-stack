export function loggedInHandler(
  uname,
  elDivUsername,
  elFormUsername,
  elUsername
) {
  elDivUsername.classList.remove("d-none");
  elFormUsername.classList.add("d-none");
  elUsername.innerHTML = uname;
}

export function drawUserCard(
  elListUser,
  githubUsers,
  username,
  profile
) {
  // check if username exist in session storage
  // read: check if user logged in already
  if (username !== null) {
    githubUsers.forEach((user) => {
      // element/card creation for each users
      const elCol = document.createElement("div");
      elCol.classList.add("col-xs-12", "col-sm-6", "col-md-4", "col-lg-3");
      const elCard = document.createElement("div");
      elCard.classList.add("card");
      const elCardImg = document.createElement("div");
      elCard.classList.add("card-img-top");
      elCard.setAttribute("src", user.avatar_url);
      const elCardBody = document.createElement("div");
      elCardBody.classList.add("card-body");
      const elCardTitle = document.createElement("div");
      elCardTitle.classList.add("card-title");
      elCardTitle.innerHTML = user.login;
      const elCardButton = document.createElement("button");

      // handle button state
      const followings = JSON.parse(profile);
      const alreadyFollow = followings?.find((u) => u.id === user.id);
      if (alreadyFollow !== undefined) {
        elCardButton.classList.add("follow-button", "btn", "btn-success", "w-100");
        elCardButton.setAttribute("type", "button");
        elCardButton.setAttribute("data-id", user.id)
        elCardButton.innerHTML = "Unfollow";
      } else {
        elCardButton.classList.add("follow-button", "btn", "btn-primary", "w-100");
        elCardButton.setAttribute("type", "button");
        elCardButton.setAttribute("data-id", user.id)
        elCardButton.innerHTML = "Follow";
      }

      // element attachment
      elCardBody.appendChild(elCardTitle);
      elCardBody.appendChild(elCardButton);
      elCard.appendChild(elCardBody);
      elCard.appendChild(elCardImg);
      elCol.appendChild(elCard);
      elListUser.appendChild(elCol);
    });
  }
}

export function drawFollowingsNumber(
  elBadgeUser,
  number){
  if (number > 0) {
        elBadgeUser.classList.remove("d-none");
      } else {
        elBadgeUser.classList.add("d-none");
      }
      elBadgeUser.innerHTML = number;
}

export function registerEventClickToEachButton(
  profile, githubUsers, elBadgeUser, username
) {
  // event handler when follow/unfollow button clicked
  let elFollowButtons = document.querySelectorAll(".follow-button");
  for (let i = 0; i < elFollowButtons.length; i++) {
    const followButton = elFollowButtons[i];
    followButton.addEventListener("click", function() {
      const userId = this.getAttribute("data-id");
      const followings = JSON.parse(profile) || [];
      const userTarget = followings.find((u) => u.id === Number(userId));
      const userDataFromDb = githubUsers.find((u) => u.id === Number(userId));
      if (!userTarget) {
        // when user not follow yet, FOLLOW
        const dataToBePush = [userDataFromDb, ...followings];
        localStorage.setItem(username, JSON.stringify(dataToBePush));
        profile = JSON.stringify(dataToBePush);
        // DOM
        this.classList.add("btn", "btn-success", "w-100");
        this.setAttribute("type", "button");
        this.innerHTML = "Unfollow";
        // mutate badge ++ followings.length
        // numberOfFollowings = dataToBePush.length
        drawFollowingsNumber(elBadgeUser,dataToBePush.length);
      } else {
        // when user already follow, UNFOLLOW
        const withoutUser = followings.filter((u) => u.id !== Number(userId))
        const dataToBePush = withoutUser;
        localStorage.setItem(username, JSON.stringify(dataToBePush));
        profile = JSON.stringify(dataToBePush);
        // DOM
        this.classList.remove("btn-success");
        this.classList.add("btn", "btn-primary", "w-100");
        this.setAttribute("type", "button");
        this.innerHTML = "Follow";
        // mutate badge -- followings.length
        drawFollowingsNumber(elBadgeUser, dataToBePush.length);

      }
    });
  }
}
