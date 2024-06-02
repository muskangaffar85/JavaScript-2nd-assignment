let F = ["cake","apple pie","cookie","chips","patties"];

let searchItem = prompt("Enter an item to search:");

let valid = false;

for (let i = 0; i < F.length; i++) {
    if (searchItem.toLowerCase()===F[i]) {
        document.write(
            "<h1>" + searchItem +
            "is available at index"+ i +
            "in our bakery </h1>"
        );
        valid = true;
    }
}
 if (!valid) {
    document.write(
        "<h1>We are sorry. "+ searchItem +
        "is <strong> not available</strong> in our bakery </h1>"
    );
 }