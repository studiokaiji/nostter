<script lang="ts">
	import IconExternalLink from '@tabler/icons-svelte/dist/svelte/icons/IconExternalLink.svelte';

	export let text: string = '';
	export let link: URL;
</script>

<a href={link.href} target="_blank" rel="noopener noreferrer">
	<slot>{text}</slot><IconExternalLink size={15} />
</a>
