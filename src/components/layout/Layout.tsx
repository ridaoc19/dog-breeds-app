import { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className={`layout'}`} data-testid='layout'>
			<div className='layout__navbar'>
				<Navbar />
			</div>

			<div className='layout__children' data-testid='layout-children'>
				{children}
			</div>
		</div>
	);
}

export default Layout;
