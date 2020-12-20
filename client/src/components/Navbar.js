import React from "react";

const Navbar = () => {
	return (
		<nav>
			<div class='nav-wrapper'>
				<a href='sass.html' class='brand-logo center'>
					Logo
				</a>
				<ul id='nav-mobile' class='left'>
					<li>
						<a href='sass.html'>Sass</a>
					</li>
					<li>
						<a href='badges.html'>Components</a>
					</li>
					<li>
						<a href='collapsible.html'>JavaScript</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;