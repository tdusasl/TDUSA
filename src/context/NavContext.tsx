import React, { useState,ReactNode} from 'react';

export const NavContext = React.createContext(null as any);
interface Props {
    children?: ReactNode
    // any props that come into the component
}

const NavProvider= ({ children, ...props }:Props) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};
	return(
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	)

};

export default NavProvider;
