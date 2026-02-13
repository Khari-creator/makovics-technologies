/** @type {import('next').NextConfig} */
const isVercel = Boolean(process.env.VERCEL);

const nextConfig = isVercel
	? {}
	: {
			output: "export",
			trailingSlash: true,
			images: {
				unoptimized: true,
			},
		};

export default nextConfig;
