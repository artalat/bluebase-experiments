export function joinPaths(...parts: string[]) {

	let allParts: string[] = [];

	parts.forEach(part => {
		allParts = allParts.concat(part.split('/').filter(s => s !== ''));
	});

	// allParts = ['', ...allParts];

	// return allParts.join('/');
	return `/${allParts.join('/')}`;
}