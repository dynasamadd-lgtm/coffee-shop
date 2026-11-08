// Menu data. "prices" = [Small, Medium, Large] (null = not available)
// "price" = single price

export const menu = [
  {
    id: 'hot', title: 'Hot', sized: true,
    items: [
      { name: 'Double Espresso', prices: [3.25, null, null] },
      { name: 'Americano', prices: [3.5, 4.0, 4.5] },
      { name: 'Latte', prices: [4.0, 4.5, 5.5] },
      { name: 'Flavored Latte', prices: [4.5, 5.5, 6.0] },
      { name: 'Cappuccino', prices: [4.0, 4.5, 5.5] },
      { name: 'Flat White', prices: [4.5, null, null] },
      { name: 'Cortado', prices: [4.5, null, null] },
      { name: 'Spanish Latte', prices: [5.0, 5.5, 6.0] },
      { name: 'Lebanese Coffee', prices: [3.0, 4.0, 4.5] },
      { name: 'Filtered Coffee', prices: [3.5, 4.0, 4.5] },
      { name: 'Mocha / White Mocha', prices: [4.5, 5.5, 6.0] },
      { name: 'Matcha Latte', prices: [5.0, 5.5, 6.0] },
      { name: 'Hot Chocolate', prices: [4.25, 5.0, 5.5] },
      { name: 'Tea', prices: [null, 5.5, null] },
    ],
  },
  {
    id: 'specialty', title: 'Specialty Coffee', sized: true,
    items: [
      { name: 'Cold Brew', prices: [null, 6.0, null] },
      { name: 'V60', prices: [null, 5.5, null], desc: 'Peru · Indonesia Geisha · Mexico · Ethiopia · Low Caffeine Huila · Colombia Decaf' },
    ],
  },
  {
    id: 'cold', title: 'Cold', sized: true,
    items: [
      { name: 'Freddo Espresso', prices: [4.0, null, null] },
      { name: 'Iced Americano', prices: [4.5, 5.0, 5.5] },
      { name: 'Iced Latte', prices: [4.5, 5.5, 6.0] },
      { name: 'Iced Flavored Latte', prices: [5.0, 5.5, 6.5] },
      { name: 'Iced Spanish Latte', prices: [5.0, 5.5, 6.0] },
      { name: 'Iced Mocha / White Mocha', prices: [5.0, 6.0, 6.5] },
      { name: 'Iced Matcha Latte', prices: [5.5, 6.5, 7.0] },
      { name: 'Iced Tea (Peach / Lemon)', prices: [3.5, 4.5, 5.5] },
      { name: 'Fresh Orange Juice', prices: [null, 4.0, null] },
      { name: 'Fresh Lemonade', prices: [null, 4.0, null] },
    ],
  },
  {
    id: 'milkshakes', title: 'Milkshakes', sized: true,
    items: [
      { name: 'Vanilla Milkshake', prices: [4.5, 5.5, 6.0] },
      { name: 'Chocolate Milkshake', prices: [4.5, 5.5, 6.0] },
      { name: 'Strawberry Milkshake', prices: [4.5, 5.5, 6.0] },
      { name: 'Peanut Butter Milkshake', prices: [5.5, 6.0, 6.5] },
      { name: 'Nutella Milkshake', prices: [5.5, 6.0, 6.5] },
      { name: 'Nutella Peanut Milkshake', prices: [5.5, 6.5, 7.0] },
      { name: 'Caramel Milkshake', prices: [5.5, 6.5, 7.0] },
    ],
  },
  {
    id: 'smoothies', title: 'Fresh Smoothies', sized: true,
    items: [
      { name: 'Mango Smoothie', prices: [5.0, 6.0, 7.0] },
      { name: 'Strawberry Smoothie', prices: [5.0, 6.0, 7.0] },
      { name: 'Mango Strawberry Smoothie', prices: [5.0, 6.0, 7.0] },
    ],
  },
  {
    id: 'frappes', title: 'Frappes', sized: true,
    items: [
      { name: 'Coffee Frappe', prices: [4.5, 5.5, 6.5] },
      { name: 'Caramel Frappe', prices: [5.5, 6.5, 7.0] },
      { name: 'Salted Caramel Frappe', prices: [5.5, 6.5, 7.0] },
      { name: 'Mocha / White Mocha Frappe', prices: [5.5, 6.5, 7.0] },
      { name: 'Toffee Nut Frappe', prices: [5.5, 6.5, 7.0] },
      { name: 'Matcha Frappe', prices: [5.5, 6.5, 7.0] },
      { name: 'Cookies & Cream Frappe', prices: [5.5, 6.5, 7.0] },
      { name: 'Nutella Frappe', prices: [5.5, 6.5, 7.0] },
      { name: 'Peanut Butter Frappe', prices: [5.5, 6.5, 8.0] },
      { name: 'Nutella Peanut Butter Frappe', prices: [5.5, 6.5, 8.0] },
    ],
  },
  {
    id: 'water', title: 'Water',
    items: [
      { name: 'Small Water', price: 0.5 },
      { name: 'Sparkling Water', price: 2.0 },
    ],
  },
  {
    id: 'bagels', title: 'Bagels',
    items: [
      { name: 'Labneh', price: 5.0 },
      { name: 'Cream Cheese', price: 6.0 },
      { name: 'Halloumi Pesto', price: 7.5 },
      { name: 'Turkey & Cheese', price: 7.5 },
      { name: 'Three Cheese', price: 7.0 },
      { name: 'Turkey & Cream Cheese', price: 7.5 },
      { name: 'Smoked Salmon (Multi Cereal)', price: 13.0 },
    ],
    note: 'Choose your bagel: Plain · Poppy Seed · Olive · Sesame Seed · Multi Cereal +2.00 · Everything +2.00',
  },
  {
    id: 'bagel-packs', title: 'Bagel Packs', subtitle: 'pack of 4',
    items: [
      { name: 'Plain · Poppy Seed · Olive', price: 7.0 },
      { name: 'Sesame Seed · Multi Cereal · Everything', price: 8.0 },
    ],
  },
  {
    id: 'bagel-chips', title: 'Bagel Chips',
    items: [{ name: 'Salt · Cheese · Zaatar', price: 4.0 }],
  },
  {
    id: 'croissandwich', title: 'Croissandwich',
    items: [
      { name: 'Labneh Zaatar', price: 4.5 },
      { name: 'Turkey & Cheese', price: 6.5 },
      { name: 'Almond Nutella', price: 5.5 },
    ],
  },
  {
    id: 'croissant', title: 'Croissant',
    items: [
      { name: 'Plain', price: 2.5 },
      { name: 'Cheese', price: 3.0 },
      { name: 'Zaatar', price: 3.0 },
      { name: 'Chocolate', price: 3.0 },
      { name: 'Almond', price: 3.5 },
    ],
  },
  {
    id: 'sandwiches', title: 'Sandwiches & Wraps',
    items: [
      { name: 'Italian Trio', price: 10.0 },
      { name: 'Halloumi Pesto', price: 9.0 },
      { name: 'Turkey & Cheese', price: 9.5 },
      { name: 'Chicken Melt', price: 9.0 },
      { name: 'Turkey & Cheese Wrap', price: 8.5 },
      { name: 'Chicken Caesar Wrap', price: 9.5 },
    ],
  },
  {
    id: 'salads', title: 'Salads',
    items: [
      { name: 'Tuna Pasta Salad', price: 7.5 },
      { name: 'Chef Salad', price: 9.0 },
      { name: 'Chicken Caesar Salad', price: 8.0 },
      { name: 'Asian Protein Bowl', price: 9.5 },
    ],
  },
  {
    id: 'bars', title: 'Bars & Mixes',
    items: [
      { name: 'Peanut Butter & Chocolate Balls', price: 4.5 },
      { name: 'Energy Date Balls', price: 4.0 },
      { name: 'Almond Oat Granola Bar', price: 4.0 },
      { name: 'Peanut Butter Bar', price: 5.5 },
      { name: 'Rice Crispy Bar', price: 7.0, tag: '15g protein' },
      { name: 'Almond Coffee Bar', price: 7.0, tag: '15g protein' },
      { name: 'Cranberry Pistachio Bar', price: 5.0 },
      { name: 'Healthy Mix', price: 5.0 },
      { name: 'Sugar Free Cookie', price: 4.5, tag: 'sugar free' },
      { name: 'Reset Blend', price: 6.0 },
      { name: 'Cold Brew', price: 6.0 },
      { name: 'Sparkling Water', price: 2.0 },
      { name: 'Small Water', price: 0.5 },
      { name: 'Brownie Protein Shake', price: 6.0 },
      { name: 'Strawberry Cheese Shake', price: 6.0 },
    ],
  },
  {
    id: 'sweets', title: 'Sweets',
    items: [
      { name: 'Triple Chocolate Muffin', price: 4.0 },
      { name: 'Double Chocolate Muffin', price: 4.0 },
      { name: 'Apple Cinnamon Muffin', price: 4.0 },
      { name: 'Chocolate Éclair', price: 5.0 },
      { name: 'Strawberry Éclair', price: 5.0 },
      { name: 'Oreo Brownie', price: 5.0 },
      { name: 'Chocolate Brownie', price: 4.5 },
      { name: 'Choco Red Velvet Brownie', price: 5.0 },
      { name: 'Blueberry Granola Parfait', price: 8.0 },
      { name: 'Strawberry Granola Parfait', price: 8.0 },
      { name: 'Mango Granola Parfait', price: 8.0 },
      { name: 'Mixed Fruits Granola Parfait', price: 8.0 },
      { name: "Cookies N' Cream Brookie", price: 5.0 },
      { name: 'Molasses Sfouf', price: 3.0 },
      { name: 'Chocolate Chip Cookie', price: 4.0 },
      { name: 'Double Chocolate Cookie', price: 4.0 },
      { name: 'Nutella Red Velvet Cookie', price: 5.0 },
      { name: 'Lazy Cake', price: 5.0 },
      { name: 'Choux à la Crème', price: 5.0 },
      { name: 'Sablé', price: 4.0 },
      { name: 'Kinder Cup', price: 6.0 },
      { name: 'Fruit Cup', price: 5.0 },
      { name: 'Blueberry Cheesecake', price: 7.0 },
      { name: 'Oriental Pistachio Cheesecake', price: 7.0 },
      { name: 'Ube Cheesecake', price: 7.0 },
      { name: 'Honey Cake', price: 6.5 },
      { name: 'Flourless Chocolate Cake', price: 6.0 },
      { name: 'Donuts', price: 3.5 },
      { name: 'Stuffed Donuts (Nutella or Oreo)', price: 4.5 },
      { name: 'Stuffed Donuts (Lotus)', price: 5.5 },
      { name: 'Lazy Molasses & Tahini', price: 5.0 },
      { name: 'Cinnamon Roll', price: 5.0 },
      { name: 'Almond Biscotti', price: 1.5 },
    ],
  },
]

// Extras for drinks
export const extras = {
  milk: [
    { name: 'Full Fat', price: null },
    { name: 'Skimmed Milk', price: null },
    { name: 'Lactose Free Milk', price: 0.5 },
    { name: 'Almond Milk', price: 1.7 },
    { name: 'Oat Milk', price: 1.5 },
    { name: 'Coconut Milk', price: 1.5 },
  ],
  ingredients: [
    { name: 'Nutella', price: 1.5 },
    { name: 'Caramel Sauce', price: 1.5 },
    { name: 'White Chocolate Sauce', price: 1.5 },
    { name: 'Peanut Butter', price: 1.5 },
    { name: 'Oreo', price: 0.5 },
    { name: 'Extra Shot', price: 1.5 },
    { name: 'Make it Decaf', price: 0.5 },
    { name: 'Whipped Cream', price: 0.9 },
  ],
  syrupPrice: 0.5,
  syrups: ['Vanilla', 'Sugar Free Vanilla', 'Caramel', 'Sugar Free Caramel', 'Salted Caramel', 'Hazelnut', 'Coconut', 'Irish', 'Toffee Crunch', 'Mint'],
}

// Menu categories. Each one gets its own dynamic page: /menu/:categoryId
export const categories = [
  {
    id: 'drinks',
    label: 'Drinks',
    icon: '☕',
    blurb: 'Espresso classics, cold drinks, milkshakes, smoothies and frappes.',
    sections: ['hot', 'specialty', 'cold', 'milkshakes', 'smoothies', 'frappes', 'water'],
  },
  {
    id: 'food',
    label: 'Food',
    icon: '🥯',
    blurb: 'Bagels, croissants, sandwiches, wraps and fresh salads.',
    sections: ['bagels', 'bagel-packs', 'bagel-chips', 'croissandwich', 'croissant', 'sandwiches', 'salads'],
  },
  {
    id: 'healthy',
    label: 'Bars & Mixes',
    icon: '🥜',
    blurb: 'Protein bars, energy balls and sugar-free treats.',
    sections: ['bars'],
  },
  {
    id: 'sweets',
    label: 'Sweets',
    icon: '🍰',
    blurb: 'Muffins, cheesecakes, cookies, donuts and more.',
    sections: ['sweets'],
  },
]

export const getCategory = (id) => categories.find((c) => c.id === id)
export const getSections = (category) => menu.filter((s) => category.sections.includes(s.id))
export const countItems = (category) =>
  getSections(category).reduce((sum, s) => sum + s.items.length, 0)
