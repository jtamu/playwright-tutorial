import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Playwright Hands-On',
  description: 'First step of Playwright Hands-On'
};

export default function Home() {
  return (
    <main>
      <h1>Playwright Hands-On</h1>
      <p>This is the first step of Playwright Hands-On</p>
      <p>
        <button>Click me</button>
      </p>
    </main>
  );
};
