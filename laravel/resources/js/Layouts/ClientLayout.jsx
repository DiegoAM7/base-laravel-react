import Navigation from '@/Components/Navigation'

export default function ClientLayout({ auth, children }) {
	return <Navigation auth={auth}>{children}</Navigation>
}
