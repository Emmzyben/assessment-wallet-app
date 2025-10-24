"use client"

import { useState } from "react"
import TransactionsList from "@/components/transactions-list"
import TransactionDetail from "@/components/transaction-detail"
import type { Transaction } from "@/types/transaction"

export default function Home() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {selectedTransaction ? (
        <TransactionDetail transaction={selectedTransaction} onBack={() => setSelectedTransaction(null)} />
      ) : (
        <TransactionsList onSelectTransaction={setSelectedTransaction} />
      )}
    </div>
  )
}
