# OnboardFlow — Multi-Tenant Client Onboarding & Document Verification SaaS

[![Live Demo](https://img.shields.io/badge/Live_Demo-onboardflow--f2z.pages.dev-0052FF?style=for-the-badge&logo=cloudflare&logoColor=white)](https://onboardflow-f2z.pages.dev)
[![Live Preview](https://img.shields.io/badge/Live_Preview-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://99d0df5a.onboardflow-f2z.pages.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/gauravdotio/OnboardFlow-saas-project)

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployed-F38020?style=flat-square&logo=cloudflare)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**OnboardFlow** is a modern, enterprise-grade multi-tenant SaaS application engineered for professional service firms (accounting & CA practices, law firms, wealth management advisories, and consulting agencies) to eliminate email chaos, automate document verification, and streamline client intake.

---

## 🌐 Live Demo & Preview Links

- 🚀 **Live Production Application**: [https://onboardflow-f2z.pages.dev](https://onboardflow-f2z.pages.dev)
- 🔗 **Live Preview Deployment**: [https://99d0df5a.onboardflow-f2z.pages.dev](https://99d0df5a.onboardflow-f2z.pages.dev)
- 📦 **GitHub Repository**: [https://github.com/gauravdotio/OnboardFlow-saas-project](https://github.com/gauravdotio/OnboardFlow-saas-project)
- ⚡ **Zero-Config Sandbox Mode**: Preloaded with realistic multi-tenant data (*Apex Advisory & Legal LLP* and *Vanguard CPA Partners*), questionnaires, audit logs, and versioned documents for immediate evaluation.

### 🧭 Quick Exploration Links (Live Site)
- **Marketing & Engineering Overview**: [https://onboardflow-f2z.pages.dev/about](https://onboardflow-f2z.pages.dev/about)
- **Staff / Admin Dashboard**: [https://onboardflow-f2z.pages.dev/dashboard](https://onboardflow-f2z.pages.dev/dashboard)
- **Dynamic Form Builder**: [https://onboardflow-f2z.pages.dev/dashboard/forms/builder](https://onboardflow-f2z.pages.dev/dashboard/forms/builder)
- **White-Labeled Client Intake Portal**: [https://onboardflow-f2z.pages.dev/portal/apex-advisory/case-001](https://onboardflow-f2z.pages.dev/portal/apex-advisory/case-001)
- **Transactional Outbox Simulator**: [https://onboardflow-f2z.pages.dev/dashboard/outbox](https://onboardflow-f2z.pages.dev/dashboard/outbox)
- **Security Audit Logs**: [https://onboardflow-f2z.pages.dev/dashboard/audit](https://onboardflow-f2z.pages.dev/dashboard/audit)

---

## ✨ Key Architectural Capabilities

### 1. Multi-Tenant Architecture & Dynamic Theming
- **Schema Isolation**: Tenant boundaries enforced per firm (`firms/{firmId}/...`) ensuring zero cross-tenant leakage.
- **Custom Branding Slugs**: Dedicated portal URLs (`/portal/{firmSlug}/{caseId}`) matching each firm's identity.
- **Dynamic Theme Switcher**: 5 curated enterprise palettes (Modern Indigo, Electric Ocean, Cyber Violet, Emerald Fintech, Midnight Slate) with instant live preview.

### 2. Four User Roles & Access Control (RBAC)
- **Admin (Firm Partner/Owner)**: Full management of firm branding, team members, form templates, cases, and immutable audit logs.
- **Case Manager / Reviewer**: Create and triage cases, review submissions, and approve or reject documents with structured comments.
- **Staff**: View-only access to assigned cases, documents, and client status.
- **Client**: Access isolated to their white-labeled onboarding portal with zero login friction.
- **1-Click Persona Switcher**: Instant switching between Admin, Reviewer, Staff, and Client perspectives for friction-free evaluation.

### 3. Dynamic Form Builder Engine & Conditional Logic
- **Modular Field Types**: Text, textarea, numeric, date pickers, dropdown selects, checkboxes, yes/no toggles.
- **Conditional Branching Engine**: Complex rule evaluations (e.g., *"If Entity Type == 'Corporation' → Show Articles of Incorporation checklist"*).
- **Sandboxed Live Preview**: Test conditional branching and field validations in real time prior to publishing.

### 4. Document Management & Multi-Version Auditing
- **Version History**: Subsequent re-uploads preserve all prior versions with timestamps and file sizes.
- **File Upload Engine**: Supports up to 25MB (PDF, PNG, JPG, DOCX).
- **Structured Review Workflows**: Reviewers mark documents as **Approved** or **Rejected** with specific audit feedback.
- **Immutable Audit Trail**: Every case event, form submission, status transition, and reviewer decision is logged to `firms/{firmId}/auditLog` and exportable as CSV/JSON.

### 5. Transactional Notifications & Outbox Simulator
- Automatic notification dispatch for client invites, document rejections, form submissions, and status updates.
- Interactive **Transactional Email Outbox** to inspect simulated transactional emails in real time.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) + React 18 |
| **Language** | TypeScript 5 (Strict mode) |
| **Styling** | Tailwind CSS with CSS custom variables |
| **Database & Auth** | Firebase (Firestore, Firebase Auth, Firebase Storage) |
| **Offline State** | Persistent LocalStorage/SessionStorage Seed Engine |
| **Icons & UI** | Lucide React + Canvas Confetti |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── layout.tsx                     # Root layout & theme configuration
│   ├── page.tsx                       # High-conversion marketing landing page
│   ├── about/                         # Platform architecture & engineering vision
│   ├── auth/login/                    # Multi-tenant gateway login
│   ├── dashboard/                     # Internal firm portal
│   │   ├── cases/                     # Case triage, Kanban, and details
│   │   ├── forms/                     # Form templates & drag-and-drop builder
│   │   ├── team/                      # Role management & invite pipeline
│   │   ├── outbox/                    # Transactional email simulator
│   │   └── audit/                     # Immutable security audit logs
│   └── portal/[firmSlug]/[caseId]/    # Branded client intake portal
├── components/
│   ├── dashboard/                     # Sidebar, Kanban, and Case tables
│   ├── documents/                     # Checklist upload, review & version modal
│   ├── forms/                         # Dynamic form engine & builder
│   ├── layout/                        # Navbar, Footer
│   ├── sections/                      # Hero, Features, Security, Industry solutions
│   └── shared/                        # ThemePreviewer, LogoMark, Toast, ErrorBoundary
└── lib/
    ├── context/                       # AuthContext, TenantContext
    ├── store/                         # Persistent DataStore & CSV export utilities
    └── firebase/                      # Firebase client configuration
```

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/gauravdotio/OnboardFlow-saas-project.git
cd OnboardFlow-saas-project
npm install
```

### 2. Environment Configuration (Optional)
```bash
cp .env.example .env.local
```
*(If Firebase environment variables are omitted, OnboardFlow automatically boots into **Demo Mode** with realistic preloaded seed data).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Marketing Landing Page**: [http://localhost:3000](http://localhost:3000)
- **Internal Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- **Dynamic Form Builder**: [http://localhost:3000/dashboard/forms/builder](http://localhost:3000/dashboard/forms/builder)
- **Branded Client Portal**: [http://localhost:3000/portal/apex-advisory/case-101](http://localhost:3000/portal/apex-advisory/case-101)
- **Transactional Outbox**: [http://localhost:3000/dashboard/outbox](http://localhost:3000/dashboard/outbox)
- **Audit Logs**: [http://localhost:3000/dashboard/audit](http://localhost:3000/dashboard/audit)

---

## 🔒 Security & Compliance

- `firestore.rules`: Strict multi-tenant isolation ensuring requests can only read/write data within their verified `firmId`.
- `storage.rules`: Document isolation enforcing 25MB max size and MIME type restrictions (PDF, PNG, JPG, DOCX).

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
