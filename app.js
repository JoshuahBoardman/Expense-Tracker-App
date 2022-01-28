
const form = document.getElementById("expense-input");
const table = document.getElementById("expense-output");
const rowTemplate = document.getElementById("row-template");
// User input fields
let paymentType = document.getElementById("payment-type");
let productPurchased = document.getElementById("product-purchased");
let date = document.getElementById("date");
let amountPayed = document.getElementById("amount-payed");

function createTableRow(paymentType, productPurchased, date, amountPayed) {
    const row = document.importNode(rowTemplate.content, true);
    const paymentOutput = row.querySelector(".expense-output-payment-method");
    const productOutput = row.querySelector(".expense-output-product-name");
    const dateOutput = row.querySelector(".expense-output-transaction-date");
    const amountPayedOutput = row.querySelector(".expense-output-amount-payed");

    paymentOutput.append(paymentType);
    productOutput.append(productPurchased);
    dateOutput.append(date);
    amountPayedOutput.append("$" + amountPayed);

    table.append(row);
};

form.addEventListener("submit", e => {
    e.preventDefault();

    const paymentTypeValue = paymentType.value;
    const productPurchasedValue = productPurchased.value;
    const dateValue = date.value;
    const amountPayedValue = amountPayed.value;
    
    if(paymentTypeValue === "null") return;
    if(productPurchasedValue === null || productPurchasedValue === "") return;
    if(dateValue === null) return;
    if(amountPayed === null || amountPayed === "") return;

    createTableRow(paymentTypeValue,  productPurchasedValue, dateValue, amountPayedValue);

    paymentType.value = "";
    productPurchased.value = "";
    date.value = "";
    amountPayed.value = "";

});

table.addEventListener("click", e => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

