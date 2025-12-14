# Hillside Palms RV Park - Project Documentation

**Last Updated:** 2025-12-14
**Project Status:** Active Development
**Location:** St. George, Utah

---

## 🎯 Project Overview

This is a comprehensive web application for **Hillside Palms RV Park**, a premier RV park located in St. George, Utah. The project serves three primary purposes:

1. **Marketing & Lead Generation** - Drive more visitors and bookings through an optimized landing page, blog content, and marketing materials
2. **Custom CRM System** - Full-featured customer relationship management for the park owner
3. **Customer Portal** - Self-service dashboard for RV park guests and residents

---

## 🏗️ Architecture & Technology Stack

### Frontend
- **Framework:** Next.js 16.0.10 (App Router)
- **React:** 19.0.0
- **Styling:** Tailwind CSS 4.1.9
- **UI Components:** Radix UI, shadcn/ui components
- **Animations:** Framer Motion 12.4.10
- **3D Graphics:** Three.js with React Three Fiber
- **Forms:** React Hook Form with Zod validation
- **State Management:** React hooks, Context API
- **TypeScript:** ~5.7.2

### Backend & Data
- **Database:** Supabase (PostgreSQL)
- **File Storage:** Supabase Storage for all documents and media
- **Authentication:** Supabase Auth (planned)
- **Real-time:** Supabase Realtime subscriptions
- **Payment Processing:** TBD (planned for final phase)

### Deployment
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics
- **Domain:** TBD

---

## 📋 Project Components

### 1. Public-Facing Website (Marketing)

**Purpose:** Drive bookings and showcase the RV park

#### Current Pages
- **Homepage (`/`)** - Hero, features, pricing, testimonials, FAQ
- **Rates (`/rates`)** - Pricing information for different site types
- **City View (`/city-view`)** - Showcase the scenic views
- **Storage (`/storage`)** - RV/boat storage offerings
- **Seniors (`/seniors`)** - Senior-specific amenities and discounts
- **Events (`/events`)** - Community events and activities
- **Reserve (`/reserve`)** - Booking/reservation system
- **Contact (`/contact`)** - Contact form and information

#### Planned Features
- **Blog System** - SEO-optimized content marketing
  - Hiking guides near St. George
  - RV maintenance tips
  - Local attraction guides
  - Seasonal camping advice
- **Photo Gallery** - Professional photos of the park
- **Virtual Tours** - 360° views of sites and amenities
- **Testimonials/Reviews** - Social proof integration
- **Newsletter Signup** - Email marketing integration
- **Live Availability Calendar** - Real-time site availability

### 2. Owner Dashboard (CRM System)

**Purpose:** Complete business management and customer relationship tools

**Location:** `/admin/*`

#### Required Features (100% Functional)

**Guest Management**
- Complete guest database with search/filter
- Guest profiles (contact info, vehicle details, preferences)
- Reservation history and notes
- Guest communication log
- Automated email/SMS notifications
- Guest segmentation (long-term, seasonal, one-time)

**Reservation & Site Management**
- Interactive site map with availability
- Drag-and-drop reservation scheduling
- Multi-site management
- Maintenance scheduling per site
- Site assignment optimization
- Conflict detection and alerts

**Financial Management**
- Revenue tracking and reporting
- Payment processing integration (future)
- Invoice generation
- Expense tracking
- Financial analytics dashboard
- Monthly/yearly revenue reports
- Occupancy rate calculations

**Communication Tools**
- Mass email/SMS system
- Template management
- Automated reminders (check-in, check-out, payment)
- Emergency notifications
- Message history per guest

**Reporting & Analytics**
- Occupancy trends
- Revenue forecasts
- Guest demographics
- Seasonal patterns
- Marketing ROI tracking
- Custom report builder

**Maintenance & Operations**
- Work order system
- Maintenance schedules
- Equipment tracking
- Vendor management
- Inspection checklists

**Document Management**
- Contract templates
- Lease agreements
- Insurance documents
- Guest waivers
- File organization system (Supabase Storage)

**Security Features**
- Role-based access control
- Audit logs for all actions
- Data encryption at rest and in transit
- Secure document storage
- Backup and recovery systems
- Session management
- Two-factor authentication

### 3. Customer/Resident Portal

**Purpose:** Self-service tools for RV park guests

**Location:** `/resident/*`

#### Required Features (100% Functional)

**Account Management**
- Personal profile management
- Vehicle information
- Emergency contacts
- Preference settings

**Reservation Management**
- View current reservations
- Extend stay
- Modify reservations
- Cancellation requests
- Reservation history

**Payments & Billing**
- View invoices
- Payment history
- Download receipts
- Set up auto-pay (when payment processor added)
- Dispute resolution

**Communication**
- Message owner/staff
- View park announcements
- Event notifications
- Maintenance alerts

**Documents**
- View/download contracts
- Access park rules and regulations
- Store personal documents securely

**Amenities & Services**
- Laundry room availability
- Event calendar
- Facility reservations (clubhouse, etc.)
- Maintenance requests
- Package notifications

---

## 🗄️ Database Schema (Supabase)

### Core Tables

```sql
-- Users (leverages Supabase Auth)
users
  - id (uuid, pk)
  - role (enum: admin, staff, guest, resident)
  - created_at
  - updated_at

-- Guest Profiles
guests
  - id (uuid, pk)
  - user_id (fk to users)
  - first_name
  - last_name
  - email
  - phone
  - address
  - emergency_contact
  - vehicle_info (jsonb)
  - preferences (jsonb)
  - notes (text)
  - tags (array)
  - created_at
  - updated_at

-- Sites
sites
  - id (uuid, pk)
  - site_number
  - site_type (enum: full_hookup, partial, storage)
  - status (enum: available, occupied, maintenance)
  - amenities (jsonb)
  - daily_rate
  - weekly_rate
  - monthly_rate
  - location_coordinates (jsonb)
  - notes

-- Reservations
reservations
  - id (uuid, pk)
  - guest_id (fk)
  - site_id (fk)
  - check_in_date
  - check_out_date
  - status (enum: pending, confirmed, checked_in, checked_out, cancelled)
  - total_amount
  - paid_amount
  - notes
  - created_at
  - updated_at

-- Payments
payments
  - id (uuid, pk)
  - reservation_id (fk)
  - guest_id (fk)
  - amount
  - payment_method
  - transaction_id
  - status (enum: pending, completed, failed, refunded)
  - created_at

-- Communications
messages
  - id (uuid, pk)
  - from_user_id (fk)
  - to_user_id (fk)
  - guest_id (fk, optional)
  - subject
  - body
  - type (enum: email, sms, internal)
  - status (enum: draft, sent, delivered, read)
  - created_at

-- Maintenance
work_orders
  - id (uuid, pk)
  - site_id (fk)
  - title
  - description
  - priority (enum: low, medium, high, urgent)
  - status (enum: pending, in_progress, completed, cancelled)
  - assigned_to (fk to users)
  - created_by (fk to users)
  - created_at
  - completed_at

-- Documents
documents
  - id (uuid, pk)
  - guest_id (fk, optional)
  - title
  - description
  - file_path (Supabase Storage path)
  - file_type
  - category (enum: contract, invoice, waiver, other)
  - uploaded_by (fk to users)
  - created_at

-- Blog Posts
blog_posts
  - id (uuid, pk)
  - title
  - slug
  - content (text)
  - excerpt
  - featured_image
  - author_id (fk to users)
  - status (enum: draft, published, archived)
  - published_at
  - created_at
  - updated_at
  - seo_title
  - seo_description
  - tags (array)

-- Events
events
  - id (uuid, pk)
  - title
  - description
  - start_date
  - end_date
  - location
  - max_attendees
  - created_by (fk to users)
  - created_at
```

---

## 🔒 Security Requirements

### Data Protection
- **Encryption:** All sensitive data encrypted at rest (Supabase handles this)
- **HTTPS:** Enforce SSL/TLS for all connections
- **Input Validation:** Zod schemas for all user inputs
- **XSS Prevention:** React's built-in protections + sanitization
- **SQL Injection:** Supabase RPC and parameterized queries only
- **CORS:** Strict origin policies

### Authentication & Authorization
- **Row Level Security (RLS):** Enable on all Supabase tables
- **Role-Based Access:** Admin, Staff, Guest, Resident roles
- **Session Management:** Secure token handling with Supabase Auth
- **Password Policy:** Minimum 12 characters, complexity requirements
- **2FA:** Enable for admin accounts
- **Rate Limiting:** Prevent brute force attacks

### Audit & Compliance
- **Activity Logs:** Track all admin actions
- **Data Retention:** Configurable retention policies
- **GDPR Compliance:** Data export and deletion capabilities
- **Backup Strategy:** Daily automated backups
- **Disaster Recovery:** Regular backup testing

---

## 🎨 Design System

### Brand Colors
- Primary: TBD (RV park branding)
- Secondary: TBD
- Accent: TBD

### Typography
- **Sans Serif:** Figtree (body), Inter (UI)
- **Monospace:** Geist Mono (code, numbers)

### Components
Using shadcn/ui component library with Radix UI primitives for:
- Forms, tables, modals, dropdowns
- Data visualization (Recharts)
- Animations (Framer Motion)
- Drag-and-drop (dnd-kit)

---

## 📝 Development Phases

### Phase 1: Marketing Website (Current)
- [x] Basic landing page structure
- [ ] Complete all public pages
- [ ] Blog system implementation
- [ ] SEO optimization
- [ ] Contact forms with notifications

### Phase 2: Authentication & User Management
- [ ] Supabase setup and configuration
- [ ] User authentication system
- [ ] Role-based access control
- [ ] Email verification
- [ ] Password reset flow

### Phase 3: Owner Dashboard (CRM)
- [ ] Guest management system
- [ ] Reservation system with calendar
- [ ] Site management
- [ ] Communication tools
- [ ] Financial reporting
- [ ] Document management
- [ ] Analytics dashboard

### Phase 4: Customer Portal
- [ ] Customer profile management
- [ ] Reservation viewing/modification
- [ ] Payment history
- [ ] Message center
- [ ] Document access

### Phase 5: Payment Integration
- [ ] Payment processor selection
- [ ] Integration implementation
- [ ] Invoice generation
- [ ] Automated billing
- [ ] Refund handling

### Phase 6: Advanced Features
- [ ] Mobile app (React Native)
- [ ] SMS notifications
- [ ] Advanced analytics
- [ ] API for third-party integrations
- [ ] Automated marketing campaigns

---

## 🚀 Deployment & Operations

### Current Status
- Not yet initialized as git repository
- No deployment configured

### Planned Setup
- **Version Control:** Git + GitHub
- **CI/CD:** GitHub Actions → Vercel
- **Environments:** Development, Staging, Production
- **Monitoring:** Vercel Analytics, error tracking
- **Backups:** Automated daily backups via Supabase

---

## 📊 Success Metrics

### Marketing Goals
- Increase direct bookings by 50%
- Reduce booking abandonment rate
- Improve SEO rankings for "St. George RV Park"
- Build email list of 500+ subscribers

### Operational Goals
- Reduce admin time by 40%
- Automate 80% of routine communications
- Zero data loss or security incidents
- 99.9% uptime

---

## 🔄 Context Preservation

This document should be updated whenever:
- New features are added
- Architecture decisions are made
- Database schema changes
- Security requirements evolve
- Project phases complete

**How to update:** Edit this file directly and commit changes to preserve context across development sessions.

---

## 📞 Business Context

**Hillside Palms RV Park**
- Location: St. George, Utah
- Near Zion National Park
- Scenic city views
- Full hookups, storage options
- Target: Retirees, seasonal visitors, long-term residents
- Competitive advantage: Views, location, hospitality

---

## 🛠️ Current Issues & Blockers

_None at this time - project in initial setup phase_

---

## 💡 Ideas & Future Enhancements

- Integration with RV park booking platforms (RVLife, Good Sam)
- Weather-based dynamic pricing
- Loyalty program
- Referral system
- Mobile check-in with QR codes
- Smart gate access system
- IoT monitoring for utilities
- Automated site recommendations based on guest preferences

---

**End of Documentation**
