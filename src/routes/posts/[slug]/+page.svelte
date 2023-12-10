<script lang="ts">
    export let data;
</script>

<h1>{ data.title }</h1>
<h2>{ data.date }</h2>

<main class="container">
    <article class="prose mx-auto rounded bg-gray-300 p-3">
        <svelte:component this={data.content}>
        </svelte:component>
    </article>
</main>