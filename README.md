# Wallet App

A modern, responsive wallet application built with Next.js that allows users to view their card balance, track transactions, and monitor daily points. The app provides a clean interface for managing financial data, including pending transactions, authorized users, and detailed transaction views.

## Features

### Core Functionality
- **Card Balance Overview**: Displays current card balance, credit limit, and available credit.
- **Daily Points Tracking**: Calculates and displays daily points based on seasonal progression (Spring, Summer, Fall, Winter).
- **Transaction Management**: View a list of the latest 10 transactions with detailed information.
- **Transaction Details**: Click on any transaction to view comprehensive details including amount, date, time, status, payment method, and authorized user (if applicable).

### Transaction Features
- **Transaction Types**: Supports both "Payment" (credited) and "Credit" (debited) transactions.
- **Pending Transactions**: Highlights pending transactions with an orange indicator.
- **Icons and Categories**: Each transaction has an associated icon (e.g., Apple, Credit Card, Coffee) with customizable background colors.
- **Percentage Display**: Shows percentage for certain transactions.
- **Date Formatting**: Smart date display (Today, Yesterday, day of week, or MM/DD/YY format).

### UI/UX
- **Responsive Design**: Optimized for mobile and desktop viewing.
- **Dark/Light Theme Support**: Integrated with next-themes for theme switching.
- **Accessible Components**: Built with Radix UI primitives for accessibility.
- **Smooth Interactions**: Hover effects and transitions for better user experience.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (built on Radix UI)
- **Icons**: FontAwesome (Solid and Brands)
- **Charts**: Recharts (for potential future features)
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Analytics**: Vercel Analytics
- **TypeScript**: Full type safety
- **Package Manager**: pnpm (with npm and yarn lock files)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd wallet-app2
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`.

## Usage

### Viewing Transactions
- The main screen displays your card balance, available credit, daily points, and payment status.
- Scroll down to see the latest transactions.
- Click on any transaction to view detailed information.

### Understanding Daily Points
- Points are calculated based on the current season:
  - Spring: March 1 - May 31
  - Summer: June 1 - August 31
  - Fall: September 1 - November 30
  - Winter: December 1 - February 28/29
- Points increase progressively each day using a specific formula.

### Data Structure
Transactions include:
- ID, type (Payment/Credit), name, description
- Amount, date, time
- Pending status, authorized user
- Icon and background color
- Status, payment method, percentage

## Project Structure

```
wallet-app2/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── components/                  # React components
│   ├── ui/                      # shadcn/ui components
│   ├── transaction-detail.tsx   # Transaction detail view
│   ├── transaction-item.tsx     # Individual transaction item
│   ├── transactions-list.tsx    # Main transactions list
│   └── theme-provider.tsx       # Theme provider
├── data/                        # Static data
│   ├── transactions.json        # Raw transaction data
│   └── transactions.ts          # Processed transaction data
├── hooks/                       # Custom React hooks
├── lib/                         # Utility libraries
│   ├── calculations.ts          # Points and date calculations
│   ├── icon-map.ts              # Icon mappings
│   └── utils.ts                 # General utilities
├── public/                      # Static assets
├── styles/                      # Additional styles
└── types/                       # TypeScript type definitions
    └── transaction.ts           # Transaction interfaces
```

## Scripts

- `pnpm dev` / `npm run dev` / `yarn dev`: Start development server
- `pnpm build` / `npm run build` / `yarn build`: Build for production
- `pnpm start` / `npm run start` / `yarn start`: Start production server
- `pnpm lint` / `npm run lint` / `yarn lint`: Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
