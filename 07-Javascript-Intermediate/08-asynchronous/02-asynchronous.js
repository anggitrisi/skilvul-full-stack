const isR18Plus = function (age) {
  let checkAge = age >= 18;
  return new Promise((resolve, reject) => {
    if (checkAge) {
      resolve("Anda sudah dewasa");
    } else {
      reject("Anda masih dibawah umur");
    }
  });
};

const printR18Plus = async () => {
  const underAge = await isR18Plus(10)
    .then((e) => e)
    .catch((e) => e);
  const properAge = await isR18Plus(19)
    .then((e) => e)
    .catch((e) => e);

  console.log(underAge);
  console.log(properAge);
};

printR18Plus();
