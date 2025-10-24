import { faCreditCard, faCouch, faBullseye, faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export const iconMap: Record<string, IconDefinition> = {
  apple: faApple,
  creditCard: faCreditCard,
  couch: faCouch,
  bullseye: faBullseye,
  coffee: faCoffee,
  shoppingCart: faShoppingCart,
}

export function getIcon(iconName: string): IconDefinition {
  return iconMap[iconName] || faCreditCard
}
