export function Label({ name_content, placeholder }) {
	return (
		<label>
			<p>
				{name_content}
				<span>*</span>
			</p>
			<input type="text" placeholder={placeholder} />
		</label>
	);
}
