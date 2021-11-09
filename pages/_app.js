import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Amplify from 'aws-amplify';
import { QueryClient, QueryClientProvider } from 'react-query';
import config from '../src/aws-exports';

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
