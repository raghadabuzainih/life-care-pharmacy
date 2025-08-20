# Pharmacy React Application

Built with **React**, featuring multiple pages, form validations, protected routes, dynamic routing, language selection, and performance optimization using lazy loading.

## Features

### Pages
- **Home**
- **About**
- **Products**
- **Contact Us**
- **Sign Up**
- **Login**

### Form Validation
- Built with **Formik** and **Yup**
- Sign Up form includes various field types:
  - Text
  - Radio buttons
  - Checkboxes
  - File upload
  - Date picker

### Routing
- Implemented using **React Router**
- **Dynamic routes** like `/item/:id` for product details
- **Protected routes**: Certain pages are accessible only to logged-in users

### Language Support
- Multi-language support: **Arabic** and **English**
- Implemented with **i18next**
- Translation files stored in a `data` folder
- Selected language is saved in **localStorage** to maintain user preference

### Performance Optimization
- **Lazy loading** used for the Products page to improve performance and reduce initial load time
