import "tailwindcss/tailwind.css";
import Amplify from "aws-amplify";
import config from "../src/aws-exports";
import { QueryClient, QueryClientProvider } from "react-query";

Amplify.configure({ ...config, ssr: true });
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
