import { pickAdvice } from "./api";
import { getAdvice, clearAdvice } from "./ui";




(() => {
  const showAdvice = () => {
    clearAdvice();
    pickAdvice()
      .then((response) => {
        getAdvice(response.data.slip.advice)
      })
      .catch((error) => {
        console.log(error + "Couldn't grab advice");
      })
  }
  window.addEventListener('load', () => {
    document
      .getElementById("button")
      .addEventListener("click", showAdvice)
  })
})();