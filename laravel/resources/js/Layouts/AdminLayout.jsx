import { useState } from 'react'
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import ClientLayout from './ClientLayout'

export default function AdminLayout({ auth, children }) {
	const [open, setOpen] = useState(false)

	return (
		<ClientLayout auth={auth}>
			<div className='min-h-screen bg-gray-100'>
				<nav className='bg-white border-b border-gray-100'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-between h-16'>
							<div className='flex'>
								<div className='hidden space-x-8 sm:-my-px sm:ml-10 sm:flex'>
									<NavLink
										href={route('dashboard')}
										active={route().current('dashboard')}>
										Dashboard
									</NavLink>
								</div>
							</div>

							<div className='-mr-2 flex items-center sm:hidden'>
								<button
									onClick={() => setOpen(!open)}
									className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'>
									<i className={open ? 'inline-flex' : 'hidden' + ' pi pi-bars'}></i>
									<i className={!open ? 'inline-flex' : 'hidden' + ' pi pi-times'}></i>
								</button>
							</div>
						</div>
					</div>

					<div className={(open ? 'block' : 'hidden') + ' sm:hidden'}>
						<div className='pt-2 pb-3 space-y-1'>
							<ResponsiveNavLink
								href={route('dashboard')}
								active={route().current('dashboard')}>
								Dashboard
							</ResponsiveNavLink>
						</div>
					</div>
				</nav>

				<main>{children}</main>
			</div>
		</ClientLayout>
	)
}
