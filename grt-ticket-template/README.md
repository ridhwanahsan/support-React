
# GRT Ticket System - React Template

This is a React template for the GRT Ticket System, designed for WordPress integration.

## Project Structure

```
/src
  /apps
    /Admin        # Admin Dashboard Application
    /User         # User Frontend Application
  /components
    /common       # Shared UI Components (Button, Input, Card, Badge)
```

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm start
    ```
    This will launch the demo interface where you can switch between the Admin Dashboard and User Frontend.

## WordPress Integration (wp-scripts)

As recommended, to bundle this for WordPress, you should use `@wordpress/scripts`.

1.  **Install wp-scripts**:
    ```bash
    npm install @wordpress/scripts --save-dev
    ```

2.  **Update package.json**:
    Change your build scripts to use `wp-scripts build`. You may need to configure multiple entry points in `webpack.config.js` if you want separate JS files for Admin and User apps (e.g., `admin.js` and `frontend.js`).

    **Example `webpack.config.js` for multiple entries:**
    ```javascript
    const defaultConfig = require('@wordpress/scripts/config/webpack.config');
    module.exports = {
      ...defaultConfig,
      entry: {
        admin: './src/apps/Admin/index.js', // You would need to create this entry
        frontend: './src/apps/User/index.js', // And this one
      },
    };
    ```

3.  **Styling**:
    This template uses **CSS Modules** (`*.module.css`). This ensures that styles are scoped locally and will NOT conflict with other WordPress themes or plugins.

## Features implemented

-   **Admin Dashboard**: Overview stats, Recharts integration, Ticket List with filters, Settings pages.
-   **User Frontend**: Guest ticket submission, Login view, Scoped dashboard, Chat interface.
-   **Shared UI**: Custom lightweight component set (No MUI/Bootstrap).
