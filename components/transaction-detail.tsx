"use client"

import type { Transaction } from "@/types/transaction"
import { ChevronLeft } from "lucide-react"

interface TransactionDetailProps {
  transaction: Transaction
  onBack: () => void
}

export default function TransactionDetail({ transaction, onBack }: TransactionDetailProps) {
  const formatDetailDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "2-digit" })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with back button */}
      <div className="bg-gray-100 p-4 flex items-center">
        <button onClick={onBack} className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 space-y-6">
        {/* Amount Section */}
        <div className="text-center space-y-2">
          <p className="text-5xl font-bold text-gray-900">${transaction.amount.toFixed(2)}</p>
          <p className="text-lg text-gray-900 font-medium">{transaction.name}</p>
          <p className="text-sm text-gray-600">
            {formatDetailDate(transaction.date)}, {transaction.time || "12:00 PM"}
          </p>
        </div>

        {/* Status and Total Section */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Status Section */}
          <div className="p-4 space-y-3">
            <div>
              <p className="text-sm text-gray-600 font-medium">Status: {transaction.status || "Approved"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{transaction.paymentMethod || "Payment Method"}</p>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Total Section */}
          <div className="p-4 flex items-center justify-between">
            <p className="text-gray-900 font-medium">Total</p>
            <p className="text-gray-900 font-medium">${transaction.amount.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
