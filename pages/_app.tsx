import type { AppProps } from "next/app";
import { HomeWrapper } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomeWrapper>
      <Component {...pageProps} />
    </HomeWrapper>
  );
}
export default MyApp;
