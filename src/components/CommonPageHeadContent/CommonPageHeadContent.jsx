import React from "react";
import { Helmet } from "react-helmet";

const CommonPageHeadContent = ({ title, description, robots, children }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} key="description" />
			<meta name="robots" content={robots} key="robots" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="icon" href="/favicon.ico" />
			{children}
		</Helmet>
	);
};

export default CommonPageHeadContent;
