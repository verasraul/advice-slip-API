


export const clearAdvice = () => {
    const results = document.getElementById('advice-msg');
  
    while (results.firstChild) {
        results.firstChild.remove();
    }
  }
  
  export const getAdvice = (advice) => {
    let adviceInfo = document.createElement("p");
    adviceInfo.classList.add("get-advice");
    adviceInfo.innerHTML = `${advice}`;
  
    const adviceMsg = document.getElementById("advice-msg");
    adviceMsg.append(adviceInfo);
  }