export default function validateLoginData(email, password){
  const regexEmail = new RegExp(/^[A-Za-z]+[\w\d]+@\w+\.\w+$/)
        const regexPassword = new RegExp(/[A-Za-z0-9](?=.*[!@#$%^&*]){8,}/)

        if(regexEmail.test(email)){
          if(regexPassword.test(password)){
            return ("Welcome to the jungle")
          } else{
            return ("Tolong masukkan password sesuai ketentuan")
          } 
        } else{
            return ("Tolong masukan email yang valid")
          }
}