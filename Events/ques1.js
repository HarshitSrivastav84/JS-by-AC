let btn = document.querySelector("button");
let click = 1;

btn.addEventListener("click", () => {
    if (click % 2 == 1) {
        document.body.style.backgroundColor = "black";
        click++;

    } else if (click % 2 == 0) {

        document.body.style.backgroundColor = "white";
        click++;
    }
});
