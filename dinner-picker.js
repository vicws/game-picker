const dinner = ["Sushi", "Pizza", "Mexican", "Burgers", "Unlimited Breadsticks and Salad"]
function pickDinner(dinner) {

    let randomSelection = Math.floor(Math.random() * dinner.length);
    alert(`Alright, go put your make-up on; we're going out for ${dinner[randomSelection]}!`)

}
pickDinner(dinner);