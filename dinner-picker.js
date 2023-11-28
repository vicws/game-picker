const dinner = ["Sushi", "Pizza", "Mexican", "Burgers", "Unlimited Breadsticks and Salad", "Kebabs"]
function pickDinner(dinner) {

    let randomSelection = Math.floor(Math.random() * dinner.length);
    if (randomSelection == dinner.length - 1) {
        alert(`TONIGHT, WE SHALL FEAST ON THE SOULS OF THE UNWORTHY!!! ...*cough* sorry, I meant \"Babe, we're going out for kebabs\"`);
    } else {
        alert(`Alright, go put your make-up on; we're going out for ${dinner[randomSelection]}!`);
    }

}
pickDinner(dinner);