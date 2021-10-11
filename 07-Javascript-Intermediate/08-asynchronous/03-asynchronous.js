const getGitHubUser = async(username) => { 
  if(username){
    try{
      const response = await fetch(`https://api.github.com/users/${username}`)
      const users = await response.json();
      return users;
    } catch {
      console.log('getUsers', error);
      throw error;
    }
  } else {
    return null;
  }
 }
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();
