import transactionsJson from "./transactions.json"
import type { Transaction } from "@/types/transaction"

export const transactionsData = {
  balance: transactionsJson.balance,
  transactions: transactionsJson.transactions.map((t) => ({
    ...t,
    date: new Date(t.date),
  })) as Transaction[],
}
