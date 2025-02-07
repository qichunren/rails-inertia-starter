# Rails Inertia Starter

A modern Rails application starter template using Inertia.js with React and Vite, featuring:

- 🚀 [Rails 8.0](https://github.com/rails/rails)
- ⚡️ [Vite](https://vitejs.dev) for frontend tooling
- ⚛️ [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- 🔄 [Inertia.js](https://inertiajs.com) for seamless SPA-like navigation
- 🎨 [Tailwind CSS](https://tailwindcss.com) for styling
- 📦 [Propshaft](https://github.com/rails/propshaft) for asset pipeline
- 🐳 [Docker](https://www.docker.com) support with multi-stage builds
- 🚢 [Kamal](https://kamal-deploy.org) for deployment
- 🔋 [Solid Cache](https://github.com/rails/solid_cache), [Solid Queue](https://github.com/basecamp/solid_queue), and [Solid Cable](https://github.com/rails/solid_cable) for durable Rails services
- 🚦 GitHub Actions for CI/CD

## Prerequisites

- Ruby 3.3.4
- Node.js 20+
- SQLite 3

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/rails/rails-inertia-starter.git
cd rails-inertia-starter
```

2. Install dependencies:

```bash
./bin/setup
pnpm install
```

3. Start the development server:

```bash
pnpm run build
./bin/dev
```

The application will be available at http://localhost:3000.



## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.