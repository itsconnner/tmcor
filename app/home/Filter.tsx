
export default function heroFilter(...names)
{
	return names.filter(Boolean).join(' ');
}
