import React from 'react';
import { NavLink } from 'react-router-dom';

export const MediaBar = () => {
	return (
		<section className = "mediabar-section-media">
			<div className = "mediabar-media">
				<h6 className = "mediabar-text-media">Para una atención personalizada buscanos en nuestras redes</h6>
				<div className = "mediabar-logos-media">
					<NavLink 
						className = "mediabar-logo-media bi bi-instagram"
						to = "https://instagram.com/"
						target = "_BLANK"
					/>
					<NavLink
						className = "mediabar-logo-media bi bi-facebook"
						to = "https://facebook.com/"
						target = "_BLANK"
					/>
					<NavLink
						className = "mediabar-logo-media bi bi-twitter"
						to = "https://twitter.com/"
						target = "_BLANK"
					/>
					<NavLink
						className = "mediabar-logo-media bi bi-whatsapp"
						to = "https://whatsapp.com/"
						target = "_BLANK"
					/>
				</div>
			</div>
		</section>
	)
}