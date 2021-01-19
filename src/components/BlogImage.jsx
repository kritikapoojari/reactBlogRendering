function BlogImage({ imageUrl, className }) {
	return (
		<div className={className}>
			<img src={imageUrl} alt="BlogImage" />
		</div>
	);
}
export default BlogImage;
