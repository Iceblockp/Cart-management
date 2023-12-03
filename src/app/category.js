import { products } from "../core/data";
import { categoryGroup, categoryTemplate } from "../core/selectors"
import { productRender } from "./product";

export const categoryUi = (text) => {
    const category = categoryTemplate.content.cloneNode(true);
    category.querySelector(".cat-btn").innerText = text;
    return category;
}

export const categoryRender = (lists) => {
    lists.forEach(list => categoryGroup.append(categoryUi(list)));

}

export const categoryGroupHandler = (event) => {

    if (event.target.classList.contains("cat-btn")) {
        // console.log(event.target.innerText);
        const selectedCategory = event.target.innerText;
        //old active remove
        categoryGroup.querySelector("button.active")?.classList?.remove("active");
        //add new active
        event.target.classList.add("active");
        productRender(products.filter(product =>selectedCategory === "All" || product.category === selectedCategory))

    }
}