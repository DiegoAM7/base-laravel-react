import ClientLayout from '@/Layouts/ClientLayout'
import { Head } from '@inertiajs/react'

export default function Home({ auth }) {
	return (
		<ClientLayout auth={auth}>
			<Head title='Inicio' />
		</ClientLayout>
	)
}
