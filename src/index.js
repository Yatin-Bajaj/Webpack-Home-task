import laughing from "./assets/laughing.svg";
import "./main.scss";
import user from "./User.ts";

class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
    substract(num1, num2) {
        return num1 - num2;
    }
    multiply(num1, num2) {
        console.log(num1 * num2);
        return num1 * num2;
    }
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("number cannot be zero");
        }
        return num1 / num2;
    }
}

document.querySelector(
    "#user-details"
).innerHTML = `${user.name}----${user.id}`;
console.log(user);

const myArrowFunction = () => {
    return "Arpit, Yatin, Gautam, Kritika";
};
myArrowFunction();

const youtubeBtnHandler = (event) => {
    import("./fetchYoutubeData.js").then((module) => {
        module.fetchYoutubeData();
    });
};

const headlineBtnHandler = (event) => {
    import("./fetchHeadlineData").then((module) => {
        module.fetchHeadlineData();
    });
};

let youtubeBtn = document.createElement("button");
youtubeBtn.innerText = "Fetch Youtube";

let headlineBtn = document.createElement("button");
headlineBtn.innerText = "Fetch Headline";

youtubeBtn.addEventListener("click", youtubeBtnHandler);
headlineBtn.addEventListener("click", headlineBtnHandler);

let btnContainer = document.querySelector(".btn-container");
btnContainer.appendChild(youtubeBtn);
btnContainer.appendChild(headlineBtn);
