import type { AppProps } from "next/app";
import "../styles/normalize.css";
import "../styles/globals.scss";
import LanguageProvider from "../hooks/LanguageContext";
import AuthProvider from "../hooks/AuthContext";
import TotalCostProvider from "../hooks/TotalCostContext";
import QuestionIndexProvider from "../hooks/QuestionIndexContext";
import RootLayout from "../Components/layout";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
    <LanguageProvider>
      <QuestionIndexProvider>
        <TotalCostProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </TotalCostProvider>
      </QuestionIndexProvider>
    </LanguageProvider>
    </RootLayout>
  );
}
