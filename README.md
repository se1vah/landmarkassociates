# Landmark Associates — Official Business Website

Modern, premium, responsive business website for **Landmark Associates**, a leading construction materials rental, sales, and civil construction services company based in Tiruchirappalli, Tamil Nadu, India.

---

## 🏢 Business Overview

- **Company Name:** Landmark Associates
- **Established:** 2017
- **Founder / Office:** No. 33, Sakthi Nagar, 4th Street, Karumandapam, Tiruchirappalli, Tamil Nadu – 620001
- **Phone:** [+91 9944113226](tel:+919944113226)
- **Email:** [landmarktrichy@gmail.com](mailto:landmarktrichy@gmail.com)
- **Official Domain:** [landmarkassociates.in](https://landmarkassociates.in)
- **Instagram:** [@landmarkassociates](https://instagram.com/landmarkassociates)
- **GSTIN:** `33EZHPS1926P1ZQ`
- **Customer Network:** 600+ Local Customers & Parties, 150+ Authorized Business Parties

---

## 🚀 Key Website Features

1. **Modern Architectural Aesthetics:**
   - Designed with an authoritative corporate construction theme: Dark Navy Blue (`#0b1528`), Construction Amber/Yellow (`#f59e0b`), Slate Grey (`#1e293b`), and Crisp White.
   - High-contrast typography featuring `Outfit` and `Inter` Google Fonts.

2. **High-Resolution Realistic Imagery:**
   - **Hero Banner:** Active concrete structure with steel scaffolding and site blueprints.
   - **Service Portfolios:** 7 dedicated services with high-resolution visual cards.
   - **Material Catalogue:** Heavy-gauge steel column box moulds, centering plates, adjustable props (jockeys), and lattice spans.
   - **Projects Portfolio:** Gabion retaining walls, commercial plazas, luxury residential villas, institutional halls, and major shuttering supply sites.

3. **Shop Photograph Ready:**
   - Dedicated spotlight card in the **About Us** section pointing to `images/about/shop.jpg`.
   - When you have the actual photograph of the Landmark Associates shop, simply replace `images/about/shop.jpg` to update the photo across the website.

4. **Dedicated Materials Catalogue:**
   - Interactive category filtering (All, Centering & Side Sheets, Column Boxes, Jockeys & Props, Spans & Adjusters).
   - Real-time search by dimension (e.g. `9'x9'`, `5'x1'6"`, `3m`, `Span`).
   - One-click WhatsApp enquiry buttons with pre-filled product name and dimensions.
   - Multi-item **Quote List Cart** allowing contractors to select multiple materials with quantities and send a consolidated request to WhatsApp.
   - No placeholder/imaginary prices — strictly professional "Enquire Now" / "Request a Quote".

5. **Integrated Lead Generation:**
   - Direct WhatsApp integration with pre-configured messages (`+91 9944113226`).
   - Click-to-call direct links.
   - Clickable email (`landmarktrichy@gmail.com`).
   - Interactive contact form with auto-routing to WhatsApp and email.
   - Floating sticky WhatsApp and Quick Call action buttons for mobile devices.

6. **SEO & Performance:**
   - Valid HTML5 semantic structure.
   - Rich JSON-LD `GeneralContractor` Schema metadata for Google Local Search.
   - OpenGraph and Twitter social sharing tags.
   - `sitemap.xml` and `robots.txt` included.

---

## 📁 Directory Structure

```text
Landmark Associates - Index/
├── index.html                   # Main landing page
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap for Google Search Console
├── README.md                    # Project documentation
├── css/
│   └── style.css                # Custom modern responsive styling
├── js/
│   └── app.js                   # Interactivity, filters, search, quote basket
└── images/
    ├── hero-construction.jpg    # 16:9 Hero section banner
    ├── about/
    │   └── shop.jpg             # Shop / stockyard photo (replace with your upload)
    ├── services/
    │   ├── service_rental.jpg
    │   ├── service_sales.jpg
    │   ├── service_building.jpg
    │   ├── service_gabion.jpg
    │   ├── service_commercial.jpg
    │   ├── service_residential.jpg
    │   └── service_management.jpg
    ├── products/
    │   ├── material_column_box.jpg
    │   ├── material_centering_sheet.jpg
    │   ├── material_jockey_prop.jpg
    │   ├── material_telescopic_span.jpg
    │   └── material_adjustment_sheet.jpg
    └── projects/
        ├── project_gabion_retaining_wall.jpg
        ├── project_commercial_complex.jpg
        ├── project_luxury_residential.jpg
        ├── project_institutional_non_commercial.jpg
        └── project_material_supply_site.jpg
```

---

## 💻 How to Run Locally

### Option 1: Direct Browser
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Option 2: Local HTTP Server (Optional)
If using Node.js:
```bash
npx serve .
```
Or with Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` or `http://localhost:3000`.

---

## 🌐 Deployment to `landmarkassociates.in`

This website is completely self-contained with zero server runtime dependencies:
1. **cPanel / Shared Hosting / Apache / Nginx:**
   Upload all files directly into your hosting account's `public_html` directory.
2. **Vercel / Netlify / Hostinger:**
   Drag and drop the folder or connect via Git. The root directory contains `index.html`.

