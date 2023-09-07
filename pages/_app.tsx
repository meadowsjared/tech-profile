import type { AppProps } from "next/app";
import "../src/app/globals.css";

// Used primarily to load the global styles into the pages that live in /pages/*.tsx

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
