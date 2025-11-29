## How to Add Your Logo

1. Save the logo image you shared (the TSL Commercial Parts logo) as `logo.png` in the `/images` folder

2. The logo should be:
   - PNG format with transparent background (preferred)
   - Recommended size: 200-300px wide, 80-120px height
   - Will automatically resize to fit the navbar

3. The logo will appear on the **far right** of the navigation bar

4. If you want to use a different filename, update this line in `src/components/Navbar.jsx`:
   ```jsx
   <img src="/images/YOUR-LOGO-NAME.png" alt="TLS Commercial Parts Logo" />
   ```

The logo is already configured to:
- Display on the far right corner
- Scale responsively on mobile devices  
- Shrink slightly when scrolling down
- Hover effect with subtle zoom

Just save your logo file as `logo.png` in the images folder and refresh the page!
