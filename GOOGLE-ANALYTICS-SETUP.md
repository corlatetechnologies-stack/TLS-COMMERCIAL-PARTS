# Google Analytics Setup Guide for TSL Commercial Parts

## What Google Analytics Does (No Visual Changes to Your Site)
- **Invisible tracking** - Runs in background, visitors never see it
- **Zero impact** on site appearance, speed, or functionality
- **Pure data collection** - Shows you visitor statistics only

## Setup Steps

### 1. Create Google Analytics Account
1. Go to https://analytics.google.com
2. Click "Start measuring"
3. Enter account name: "TSL Commercial Parts"
4. Click "Next"

### 2. Set Up Property
1. Property name: "TSL Commercial Parts Website"
2. Time zone: "(GMT+02:00) South Africa"
3. Currency: "South African Rand (R)"
4. Click "Next"

### 3. Business Information
1. Industry: "Automotive"
2. Business size: Select your size
3. Click "Create"
4. Accept Terms of Service

### 4. Get Your Tracking ID
1. Choose "Web" platform
2. Enter website URL: https://tls-commercial-parts.com
3. Stream name: "TSL Website"
4. Click "Create stream"
5. **Copy your Measurement ID** (looks like: G-XXXXXXXXXX)

### 5. Add Tracking Code to Website
1. Open `index.html`
2. Find this section (around line 35):
```html
<!-- Google Analytics (Tracking only - doesn't change site appearance) -->
<!-- TODO: Replace 'G-XXXXXXXXXX' with your actual Google Analytics ID from analytics.google.com -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Replace **BOTH** instances of `G-XXXXXXXXXX` with your actual Measurement ID
4. Remove the TODO comment
5. Save and push to live site

### 6. Verify It's Working
1. Visit your website
2. Go back to Google Analytics (wait 24-48 hours for data)
3. Check "Realtime" report to see live visitors

## What You'll See in Google Analytics

### Dashboard Shows:
- **Users**: How many people visit daily/weekly/monthly
- **Sessions**: How many times people visit
- **Page views**: Most popular pages
- **Bounce rate**: % who leave immediately
- **Average session duration**: How long people stay
- **Traffic sources**: Where visitors come from
  - Google search
  - Facebook
  - Direct (typed URL)
  - Referrals from other sites

### Search Data:
- What keywords people searched to find you
- "motor parts Kempton Park"
- "truck parts Johannesburg"
- "Mercedes parts near me"

### Geographic Data:
- Cities: Kempton Park, Johannesburg, Pretoria, etc.
- Countries: Most from South Africa

### Device Data:
- Mobile vs Desktop visits
- Browser types

## Google Search Console Setup (Also Important!)

### 1. Verify Your Website
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter: https://tls-commercial-parts.com
4. Choose verification method: "HTML tag"
5. Copy the meta tag they give you
6. Add it to your index.html `<head>` section
7. Click "Verify"

### 2. Submit Your Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"

### 3. What You'll See:
- **Search queries**: Exact terms people search for
- **Impressions**: How many times you appear in Google
- **Clicks**: How many people click to your site
- **Average position**: Your ranking (#1, #5, #20, etc.)
- **Errors**: Technical SEO issues to fix

## Important Notes

✅ **Google Analytics is completely safe and standard** - used by millions of websites
✅ **Free forever** - No hidden costs
✅ **No visual changes** - Your site looks identical
✅ **No slowdown** - Minimal impact on page speed
✅ **Privacy compliant** - Anonymous visitor tracking

## Timeline
- **Day 1**: Install tracking code
- **Day 2-3**: First data appears
- **Week 1**: Basic traffic patterns visible
- **Month 1**: Full insights and trends available

After setup, check weekly to see:
- Which keywords bring customers
- Which pages need improvement
- Best times for traffic
- Where to focus SEO efforts
