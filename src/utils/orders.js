// Orders are saved in the browser (localStorage) because this is a frontend-only project.

const KEY = 'bb-orders'

export const money = (n) => `$${n.toFixed(2)}`

export function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

export function saveOrder(order) {
  try {
    localStorage.setItem(KEY, JSON.stringify([order, ...getOrders()]))
  } catch {
    /* storage blocked */
  }
}

export const findOrder = (id) => getOrders().find((o) => o.id === id.toUpperCase())

export const newOrderId = () => 'BB' + String(Date.now()).slice(-5)

// Each step starts a number of seconds after the order is placed (sped up for the demo)
export const STEPS = [
  { label: 'Order received', icon: '🧾', after: 0 },
  { label: 'Preparing', icon: '☕', after: 30 },
  { label: 'Ready', icon: '🔔', after: 90 },
  { label: 'Completed', icon: '✅', after: 180 },
]

export function currentStep(order, now = Date.now()) {
  const seconds = (now - order.createdAt) / 1000
  let step = 0
  STEPS.forEach((s, i) => {
    if (seconds >= s.after) step = i
  })
  return step
}
