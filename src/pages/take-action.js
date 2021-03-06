import React from 'react'
import Layout from '../components/layout/Layout'
import ComingSoon from '../components/coming-soon/ComingSoon'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo/SEO'

export default function TakeAction() {
	return (
		<Layout>
			<SEO title="Take Action" />
			<ComingSoon
				title="Coming Soon!"
				info="Please contact us to learn about donating or requesting books for your organization!"
			>
				<AniLink to="/contact" className="btn-white" fade>
					Contact Us
				</AniLink>
			</ComingSoon>
		</Layout>
	)
}
