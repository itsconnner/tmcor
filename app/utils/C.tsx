export default function C(...names)
{
	return names.filter(Boolean).join(' ');
}
