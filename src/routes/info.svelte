<script>
	export let name;
	export let version;
	export let speed;
	export let website;
</script>

<p>
	����� <code>{name}</code> {speed} �������.
	��������� ������ {version} �� <a href="https://www.npmjs.com/package/{name}">npm</a>
	� ������� � ��� ������ <a href={website}>���</a>
</p>