"use client"
import type { Transaction } from "@/types/transaction"
import { formatDate } from "@/lib/calculations"
import { getIcon } from "@/lib/icon-map"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChevronRight } from "lucide-react"

interface TransactionItemProps {
  transaction: Transaction
  onClick: () => void
}

export default function TransactionItem({ transaction, onClick }: TransactionItemProps) {
  const isPayment = transaction.type === "Payment"
  const amountColor = isPayment ? "text-green-600" : "text-gray-900"
  const amountPrefix = isPayment ? "+" : ""
  const icon = getIcon(transaction.icon)

  return (
    <div
      onClick={onClick}
      className="py-3 px-0 cursor-pointer hover:bg-gray-50 transition-colors flex items-start gap-3 border-b border-gray-200 last:border-b-0"
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg flex-shrink-0 ${transaction.iconBgColor}`}
      >
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Line 1: Name + Amount + Arrow */}
        <div className="flex items-center justify-between gap-2">
          <p className="font-semibold text-gray-900 text-sm">{transaction.name}</p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <p className={`font-semibold text-sm ${amountColor}`}>
              {amountPrefix}${transaction.amount.toFixed(2)}
            </p>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Line 2: Description + Percentage */}
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <div className="text-xs text-gray-600 min-w-0">
            {transaction.pending && <span className="text-orange-600 font-medium">Pending • </span>}
            <span>{transaction.description}</span>
          </div>
          {transaction.percentage && (
            <span className="text-xs text-gray-600 flex-shrink-0">{transaction.percentage}%</span>
          )}
        </div>

        {/* Line 3: Authorized User + Date */}
        <div className="text-xs text-gray-600 mt-0.5">
          {transaction.authorizedUser && <span>{transaction.authorizedUser} - </span>}
          <span>{formatDate(transaction.date)}</span>
        </div>
      </div>
    </div>
  )
}
