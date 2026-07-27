# Islah Foundation administration guide

## Before launch

- Replace `hello@islahfoundation.org` only after the mailbox exists.
- Add genuine activity photographs only after written consent review; use WebP/AVIF and meaningful alt text.
- Confirm every programme status with its coordinator.
- Leave impact, partners and testimonials empty until evidence and consent are recorded.
- Obtain governance/legal approval for every policy template.

## Publishing content

The public claims and empty collections are centralized in `src/content/site.ts`. A production CMS should expose equivalent fields and apply these roles: Super Administrator, Content Editor, Programme Manager, Finance Viewer and Grievance Officer. Content Editors must never see grievance or donation records.

Every statistic requires a value, unit, description, reporting period, internal evidence note and public visibility flag. Every testimonial requires the exact approved statement and consent record. Reports require title, category, reporting year, publication date, file size and language.

## Forms

`/api/forms` provides schema-size checks, a honeypot and basic per-instance rate limiting. Before deployment, connect an approved encrypted database, CAPTCHA and transactional email. Store grievances separately from the CMS and restrict access to the Grievance Officer role.

## Donations

Do not connect a gateway until PAN, an active trust bank account, donation accounting and gateway verification are complete. Do not claim tax deduction until 80G approval is formally received. After approval, add Razorpay server-side order creation, signed webhook verification and sequential receipts.

## Backups

Enable daily encrypted database backups and weekly media backups, retain a documented restoration test, and keep secrets only in the deployment platform. Export CMS content before schema changes. Test restoration quarterly.
