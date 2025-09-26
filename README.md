# Navjyoti Herbals

> A visually stunning, minimalist three-page website designed to showcase a line of pure, raw herbal products. The design philosophy marries modern minimalism with a natural, earthy aesthetic, reflecting the brand's core values of purity and tradition.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/purohityaksh90-lang/Navjyoti-project)

## ✨ Key Features

-   **Three Unique Pages**: A captivating Home page, an informative About & Products page, and a functional Contact page.
-   **Elegant, Minimalist Design**: A clean, modern UI with an earthy color palette that reflects the brand's natural focus.
-   **Subtle & Smooth Animations**: Tasteful animations powered by Framer Motion enhance the user experience without being distracting.
-   **Fully Responsive**: A mobile-first design that ensures a flawless layout across all device sizes, from phones to desktops.
-   **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS for a high-performance, maintainable codebase.
-   **Component-Driven**: Leverages the power of shadcn/ui for a consistent and beautiful component library.

## 🚀 Technology Stack

-   **Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
-   **Deployment**: [Cloudflare Pages & Workers](https://pages.cloudflare.com/)

## 🏁 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine. This project uses Bun as the package manager and runtime.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/navjyoti_herbals.git
    cd navjyoti_herbals
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

## 🔧 Development

### Running the Development Server

To start the local development server, run the following command. This will open the application on `http://localhost:3000` (or the next available port).

```sh
bun dev
```

The server supports hot-reloading, so any changes you make to the code will be reflected in the browser instantly.

### Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command will compile and optimize the application assets into the `dist/` directory.

### Linting

To check the code for any linting errors and ensure code quality, run:

```sh
bun run lint
```

## ☁️ Deployment

This project is configured for seamless deployment to the Cloudflare network.

You can deploy this project with a single click:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/purohityaksh90-lang/Navjyoti-project)

Alternatively, you can deploy manually using the Wrangler CLI after setting up your `wrangler.toml` file.

1.  **Build the project:**
    ```sh
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    ```sh
    bun run deploy
    ```

This command will build the application and deploy it using the configurations specified in `wrangler.jsonc`.