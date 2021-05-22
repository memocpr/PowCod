function books(name, isSaled, price) {
    this.name = name;
    this.isSaled = isSaled;
    this.price = price;
}

let book1 = new books("1984", true, 50);
let book2 = new books("Animal Farm", false, 40);
let book3 = new books("Alice", true, 20);

let shop = [book1.name, book2.name, book3.name];
let sortedShop = shop.sort();

let ul = document.querySelector('ul');

for (x of sortedShop) {
    console.log(x);
    li = document.createElement('li');
    li.innerText = x;
    ul.appendChild(li);

}