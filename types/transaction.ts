export interface Transaction {
  id: string
  type: "Payment" | "Credit"
  name: string
  description: string
  amount: number
  date: Date
  pending: boolean
  authorizedUser?: string
  icon: string
  iconBgColor: string
  status?: string
  paymentMethod?: string
  time?: string
  percentage?: number
}

export interface CardData {
  balance: number
  limit: number
  dailyPoints: number
  transactions: Transaction[]
}
