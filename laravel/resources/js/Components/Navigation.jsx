import { useState } from 'react'

import Dropdown from './Dropdown'
import NavLink from './NavLink'
import ResponsiveNavLink from './ResponsiveNavLink'

export default function Navigation(props) {
	const [open, setOpen] = useState(false)

	return (
		<div className='min-h-screen bg-gray-100'>
			<nav className='bg-white border-b border-gray-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between h-16'>
						<div className='flex'>
							<div className='shrink-0 flex items-center'>
								<NavLink href={'/'}>
									<img
										className='h-12'
										src='assets/images/logo.png'
										alt='Logo'
									/>
								</NavLink>
							</div>

							<div className='hidden space-x-8 sm:-my-px sm:ml-10 sm:flex'>
								<NavLink
									href={route('home')}
									active={route().current('home')}>
									Inicio
								</NavLink>
							</div>
						</div>

						<div className='hidden sm:flex sm:items-center sm:ml-6'>
							<NavLink href={route('login')}>
								<i className='pi pi-shopping-cart text-2xl'></i>
							</NavLink>

							<Dropdown>
								<Dropdown.Trigger>
									<button className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'>
										{props?.auth?.user?.name ? props.auth.user.name : 'Invitado'}

										<div className='ml-1'>
											<svg
												className='fill-current h-4 w-4'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'>
												<path
													fillRule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clipRule='evenodd'
												/>
											</svg>
										</div>
									</button>
								</Dropdown.Trigger>

								<Dropdown.Content>
									{props?.auth?.user?.role === 'admin' && <Dropdown.Link href={route('dashboard')}>Administración</Dropdown.Link>}

									{props?.auth?.user ? (
										<Dropdown.Link
											method='post'
											href={route('logout')}
											as='button'>
											Cerrar Sesión
										</Dropdown.Link>
									) : (
										<>
											<Dropdown.Link href={route('register')}>Registrarse</Dropdown.Link>
											<Dropdown.Link href={route('login')}>Iniciar Sesión</Dropdown.Link>
										</>
									)}
								</Dropdown.Content>
							</Dropdown>
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

				<div className={open ? 'block sm:hidden' : 'hidden sm:hidden'}>
					<div className='pt-2 pb-3 space-y-1'>
						<ResponsiveNavLink
							href={route('home')}
							active={route().current('home')}>
							Inicio
						</ResponsiveNavLink>

						<ResponsiveNavLink
							href={route('dashboard')}
							active={route().current('dashboard')}>
							Productos
						</ResponsiveNavLink>

						<ResponsiveNavLink
							href={route('dashboard')}
							active={route().current('dashboard')}>
							Sales
						</ResponsiveNavLink>

						<ResponsiveNavLink
							href={route('dashboard')}
							active={route().current('dashboard')}>
							Contacto
						</ResponsiveNavLink>

						<ResponsiveNavLink
							href={route('dashboard')}
							active={route().current('dashboard')}>
							Life Diary
						</ResponsiveNavLink>

						<ResponsiveNavLink
							href={route('dashboard')}
							active={route().current('dashboard')}>
							<div className='flex items-center gap-2'>
								<i className='pi pi-shopping-cart text-xl'></i>
								Carrito
							</div>
						</ResponsiveNavLink>
					</div>

					<div className='pt-4 pb-1 border-t border-gray-200'>
						<div className='space-y-1'>
							{props?.auth?.user?.role === 'admin' && (
								<ResponsiveNavLink
									href={route('dashboard')}
									active="request()->routeIs('dashboard')">
									Administración
								</ResponsiveNavLink>
							)}

							{props?.auth?.user ? (
								<ResponsiveNavLink
									method='post'
									href={route('logout')}
									as='button'>
									Cerrar Sesión
								</ResponsiveNavLink>
							) : (
								<ResponsiveNavLink href={route('login')}>Iniciar Sesión</ResponsiveNavLink>
							)}
						</div>
					</div>
				</div>
			</nav>

			{props.children}
		</div>
	)
}
