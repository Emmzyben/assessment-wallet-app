export function calculateDailyPoints(): number {
  const today = new Date()
  const year = today.getFullYear()

  // Determine season start date
  let seasonStart: Date
  const month = today.getMonth()

  if (month >= 2 && month <= 4) {
    // Spring: March 1
    seasonStart = new Date(year, 2, 1)
  } else if (month >= 5 && month <= 7) {
    // Summer: June 1
    seasonStart = new Date(year, 5, 1)
  } else if (month >= 8 && month <= 10) {
    // Fall: September 1
    seasonStart = new Date(year, 8, 1)
  } else {
    // Winter: December 1
    seasonStart = new Date(year, 11, 1)
  }

  // Calculate day of season (1-indexed)
  const dayOfSeason = Math.floor((today.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24)) + 1

  // Calculate points based on formula
  if (dayOfSeason === 1) {
    return 2
  } else if (dayOfSeason === 2) {
    return 3
  } else {
    // Day 3+: 100% of day before previous + 60% of previous day
    let prev2 = 2 // Day 1
    let prev1 = 3 // Day 2

    for (let i = 3; i <= dayOfSeason; i++) {
      const current = Math.round(prev2 + prev1 * 0.6)
      prev2 = prev1
      prev1 = current
    }

    return prev1
  }
}

export function formatPoints(points: number): string {
  if (points >= 1000) {
    return `${Math.round(points / 1000)}K`
  }
  return points.toString()
}

export function formatDate(date: Date): string {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const isToday = date.toDateString() === today.toDateString()
  const isYesterday = date.toDateString() === yesterday.toDateString()

  if (isToday) {
    return "Today"
  } else if (isYesterday) {
    return "Yesterday"
  }

  // Check if within last 7 days
  const daysDiff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  if (daysDiff < 7) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[date.getDay()]
  }

  // Format as MM/DD/YY
  return date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "2-digit" })
}
