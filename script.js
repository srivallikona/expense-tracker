let balance = 0;

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = parseInt(document.getElementById("amount").value);

    let list = document.getElementById("list");
    let item = document.createElement("li");

    item.innerText = desc + ": ₹" + amount;
    list.appendChild(item);

    balance += amount;
    document.getElementById("balance").innerText = balance;
}
