# Plately — Full-Stack Food & Nutrition App

A professional React/Vite frontend with an Express backend for authentication, meals/restaurants, cart + orders, admin APIs, and Razorpay checkout.

## 1. Frontend

```bash
npm install
npm run dev
```

Create `.env` from `.env.example` if your API is not at `http://localhost:5000/api`.

## 2. Backend

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

The API runs on `http://localhost:5000`.

## 3. Payments

The checkout is wired for **Razorpay**. Use Razorpay **Test Mode** credentials during development and put them in `backend/.env`:

- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`

If keys are not configured, checkout automatically uses a local **demo payment** path so you can test the order flow. Demo payments are not real transactions.

## 4. Features

- Responsive Plately-style dashboard
- Meal discovery and nutrition UI
- AI recipe UI
- Persistent cart
- Checkout and delivery details
- Order creation and order history
- Razorpay payment order creation + signature verification
- Payment webhook endpoint
- JWT authentication/register/login APIs
- Admin order/status APIs and revenue stats
- Seed restaurants and meals

## 5. GitHub

Commit source code, but **never commit `.env` or secrets**. The included `.gitignore` excludes environment files and dependencies.

For a production deployment, use PostgreSQL/MySQL instead of the included JSON development store, HTTPS, secure secret management, rate limiting, email/SMS notifications, inventory validation, and a properly configured Razorpay webhook.
