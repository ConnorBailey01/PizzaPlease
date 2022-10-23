type MenuItem = {
  title: string;
  body: string;
};

const entreeItems: MenuItem[] = [
  {
    title: "Chocalate Pizza",
    body: "Cheese and Chocalate, best combo ever",
  },
  {
    title: "Chocolate Calzone",
    body: "A calzone is an Italian oven-baked folded pizza, often described as a turnover, made with leavened dough. It originated in Naples in the 18th century.",
  },
];

const appitizerItems: MenuItem[] = [
  {
    title: "Breadsticks",
    body: "Breadsticks, also known as grissini, grissino or dipping sticks, are generally pencil-sized sticks of crisp, dry baked bread that originated in Italy. There is also a soft-baked breadstick version popular in North America.",
  },
  {
    title: "Bob",
    body: "Bob was here",
  },
];

const menuItemsElement = document.getElementById("MenuItems");

function generateMenuItems(menuItems: MenuItem[]) {
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    if (menuItemsElement) {
      menuItemsElement.innerHTML += renderMenuItem(
        menuItem.title,
        menuItem.body
      );
    }
  }
}

function renderMenuItem(title: string, body: string) {
  return `<li><h3>${title}</h3><p>${body}</p></li>`;
}
const menuItems = [...entreeItems, ...appitizerItems];
generateMenuItems(menuItems);
