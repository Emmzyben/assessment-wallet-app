"use client"

import { useMemo } from "react"
import { Card } from "@/components/ui/card"
import TransactionItem from "./transaction-item"
import type { Transaction } from "@/types/transaction"
import { calculateDailyPoints, formatPoints } from "@/lib/calculations"
import { transactionsData } from "@/data/transactions"
import { Check } from "lucide-react"

interface TransactionsListProps {
  onSelectTransaction: (transaction: Transaction) => void
}

export default function TransactionsList({ onSelectTransaction }: TransactionsListProps) {
  const cardData = useMemo(() => {
    const limit = 1500
    const balance = transactionsData.balance
    const available = limit - balance
    const dailyPoints = calculateDailyPoints()

    return { limit, balance, available, dailyPoints }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <div className="grid grid-cols-2 gap-3 p-4">
        {/* Left Column - Two Stacked Cards */}
        <div className="flex flex-col gap-3">
          {/* Card Balance Block */}
          <Card className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-xs font-bold text-gray-600 mb-1">Card Balance</p>
            <p className="text-2xl font-bold text-gray-900">${cardData.balance.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1">${cardData.available.toFixed(2)} Available</p>
          </Card>

          {/* Daily Points Block */}
          <Card className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-xs font-bold text-gray-600 mb-1">Daily Points</p>
            <p className="text-lg font-bold text-gray-900">{formatPoints(cardData.dailyPoints)}</p>
          </Card>
        </div>

        {/* Right Column - No Payment Due Block */}
        <Card className="p-4 bg-white rounded-lg shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold text-gray-600 mb-1">No Payment Due</p>
            <p className="text-xs text-gray-700 leading-tight">You've paid your September balance.</p>
          </div>
          <div className="flex justify-end mt-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </Card>
      </div>

      {/* Latest Transactions Block */}
      <div className="px-4">
        <h2 className="text-base font-bold text-gray-900 mb-4">Latest Transactions</h2>
        <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
          {transactionsData.transactions.slice(0, 10).map((transaction) => (
            <div key={transaction.id} className="px-4">
              <TransactionItem transaction={transaction} onClick={() => onSelectTransaction(transaction)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
