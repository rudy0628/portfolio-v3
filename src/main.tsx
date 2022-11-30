import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { InitialLoading } from './components';
const App = React.lazy(() => import('./App'));
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<InitialLoading />}>
			<App />
		</Suspense>
	</React.StrictMode>
);
