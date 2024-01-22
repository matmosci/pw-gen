const generateRandomString = () => {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let result = "";
  for (let i = 0; i < 12; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
};

const outputField = document.getElementById("outputField");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {
  const randomString = generateRandomString();
  outputField.value = randomString;
});

copyBtn.addEventListener("click", () => {
  outputField.select();
  document.execCommand("copy");
});
