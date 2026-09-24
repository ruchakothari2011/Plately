# Plately API

Express backend for authentication, restaurant/meal data, orders, admin order management, and Razorpay payments.

## Setup

```bash
cd backend
npm install
copy .env.example .env   # Windows PowerShell: Copy-Item .env.example .env
npm run dev
```

API runs at `http://localhost:5000`.

### Razorpay
Create a Razorpay account and use **Test Mode** keys while developing. Put the key ID and secret in `.env`. Never commit `.env`.

Without Razorpay keys, the API intentionally exposes a **demo checkout** mode so the complete order flow can still be tested locally. Demo payments are not real payments.

### Main endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/restaurants`
- `GET /api/meals`
- `POST /api/orders`
- `GET /api/orders` (auth)
- `POST /api/payments/create-order` (auth)
- `POST /api/payments/verify` (auth)
- `GET /api/admin/stats` (admin)
- `GET /api/admin/orders` (admin)
- `PATCH /api/admin/orders/:id` (admin)

For production, replace the JSON store with PostgreSQL/MySQL and use HTTPS, proper secret management, rate limiting, email/SMS notifications, inventory checks, and a verified payment webhook.
