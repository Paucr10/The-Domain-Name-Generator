window.onload = () => {
  document.querySelector("#buttonURL").addEventListener("click", () => {
    document.querySelector("#url").innerHTML = NewURL();
  });
};

function NewURL() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dot = [".me", ".org", ".net", ".us", ".com"];

  let pronounIndx = Math.floor(Math.random() * pronoun.length);
  let adjIndx = Math.floor(Math.random() * adj.length);
  let nounIndx = Math.floor(Math.random() * noun.length);
  let dotIndx = Math.floor(Math.random() * dot.length);

  return pronoun[pronounIndx] + adj[adjIndx] + noun[nounIndx] + dot[dotIndx];
}
