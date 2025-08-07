# React Resume Site

A modern, responsive personal resume website built with React.js and Vite. This project showcases a multi-language portfolio site with clean design and smooth navigation.

## 🚀 Features

- **Multi-language Support**: English and Turkish language options
- **Responsive Design**: Optimized for all device sizes
- **Single Page Application**: Fast navigation with React Router
- **Modern Tech Stack**: Built with React 18 and Vite
- **Interactive UI**: Font Awesome icons and smooth animations
- **Multiple Sections**: Home, About, Projects, Experience, Education, Contact

## 🛠️ Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM 6.16.0** - Client-side routing
- **Vite 4.5.2** - Build tool and development server
- **Font Awesome** - Icons and visual elements
- **CSS3** - Styling and animations
- **ESLint** - Code quality and linting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd React-Resume-Site-main/resume-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the site

## 🏗️ Project Structure

```
resume-site/
├── public/                 # Static assets
│   ├── images/            # Profile photos, certificates, projects
│   ├── resume.pdf         # Downloadable resume
│   └── favicon.ico        # Site icon
├── src/
│   ├── Components/        # Reusable components
│   │   ├── Layout.jsx     # Main layout wrapper
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── LanguageSelector.jsx # Language switching
│   │   ├── MainContent.jsx # Content wrapper
│   │   ├── YoutubeEmbed.jsx # Video embedding
│   │   └── Translations.json # Language data
│   ├── Pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About section
│   │   ├── Projects.jsx   # Project showcase
│   │   ├── Experience.jsx # Work experience
│   │   ├── Education.jsx  # Educational background
│   │   └── Contact.jsx    # Contact information
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.jsx         # Application entry point
│   └── index.css         # Base styles
└── package.json          # Project dependencies
```

## 🎨 Pages Overview

- **Home**: Welcome message and introduction
- **About**: Personal background and skills
- **Projects**: Portfolio of completed projects with demos
- **Experience**: Professional work experience
- **Education**: Academic achievements and certifications
- **Contact**: Contact information and social links

## 🌐 Multi-language Support

The site supports both English and Turkish languages through a centralized translation system located in `src/Components/Translations.json`. Users can switch languages using the language selector component.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen resolutions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

The project includes a `_redirects` file in the public directory for proper routing on static hosting platforms.

## 🎯 Customization

To customize this resume site for your own use:

1. **Update personal information** in the translation files
2. **Replace images** in the `public/` directory
3. **Modify styling** in CSS files
4. **Add/remove sections** by creating new page components
5. **Update social links** in the contact section

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show your support

Give a ⭐️ if you like this project!
