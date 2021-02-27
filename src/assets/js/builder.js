// Function that takes an item object and converts it to a menu-item markdown
export const createMenuItem = (item) => {
  const prices = item.prices.map(
    (price) => `
        <div class="ml-2 flex flex-shrink-0 bg-green-50 ">
            <p class="font-light">${price.unit}</p>
            <p class="font-bold ml-1">$ ${price.value}</p>
        </div>
    `
  );

  return `
          <div class="menu-item mt-2 bg-yellow-500">
            <div class="flex">
              <div class="mr-2 flex flex-shrink-0 align-self-start">
                <p class="font-bold">${item.name}</p>
                <p class="font-light ml-1">${item.info}</p>
              </div>
              <div class="flex flex-grow justify-end bg-yellow-800">
              ${prices.join('')}
              </div>
            </div>
            ${
              item.ingredients
                ? `<p class="font-light">${item.ingredients}</p>`
                : null
            }
          </div>
          `;
};
