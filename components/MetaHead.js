import Head from 'next/head';

function MetaHead({ title, desc, url }) {
  return (
		<Head>
			<title key="title">{title}</title>
			<meta key="description" name="description" content={desc} />
			<meta key="twitter:title" name="twitter:title" content={title} />
			<meta
				key="twitter:description"
				name="twitter:description"
				content={desc}
			/>
			<meta key="og:title" property="og:title" content={title} />
			<meta key="og:description" property="og:description" content={desc} />
			<meta key="og:url" property="og:url" content={url} />
		</Head>
  );
}

export default MetaHead;
