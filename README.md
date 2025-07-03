# JStacked - Premium AI Tools Blog

A sophisticated, high-end blog platform built with Next.js 14, designed to help freelancers, creators, and remote professionals discover and master the best AI tools available.

## 🚀 Features

- **Modern Design**: Clean, professional interface with sophisticated typography and spacing
- **Responsive Layout**: Optimized for all devices and screen sizes
- **SEO Optimized**: Built-in SEO features with proper meta tags and structured data
- **Fast Performance**: Server-side rendering and optimized assets
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: WCAG compliant design with proper focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jstacked.git
cd jstacked
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

The project uses a custom design system with:

- **Colors**: Primary blue palette with neutral grays
- **Typography**: Inter font with carefully crafted scale
- **Spacing**: Consistent spacing system using Tailwind
- **Components**: Reusable UI components with hover states
- **Animations**: Subtle transitions and micro-interactions

## 📁 Project Structure

```
jstacked/
├── app/                 # Next.js App Router
│   ├── blog/           # Blog pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/          # Reusable components
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                # Utility functions
│   └── utils.ts
├── public/             # Static assets
└── ...config files
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📝 Content Management

Currently, the blog uses static content defined in the components. For a production site, consider integrating with:

- **Headless CMS**: Contentful, Strapi, or Sanity
- **Markdown**: MDX for file-based content
- **API**: Custom API for dynamic content

## 🎯 Customization

### Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your brand colors
  },
  neutral: {
    // Your neutral colors
  }
}
```

### Typography
Modify fonts in `app/layout.tsx` and `tailwind.config.js`.

### Components
All components are modular and can be customized in the `components/` directory.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For questions or support, please open an issue on GitHub or contact [your-email@example.com](mailto:your-email@example.com).

---

Built with ❤️ using Next.js and Tailwind CSS 