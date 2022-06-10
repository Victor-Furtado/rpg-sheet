<template>
<div class="app">
    <header class="flex justify-center items-center gap-3">
        <img src="/imgs/LOGO.svg" alt="Logo DICE PUNK">
        <h1>Título</h1>
    </header>
    <nav class="menu">
        <NuxtLink v-for="route in routes" :to="route.path" class="menu-item" active-class="active-item">{{ route.title }}</NuxtLink>
    </nav>
    <main>
        <slot />
    </main>
    <footer>
        <h4>Feito com 💚 por DevPunk</h4>
    </footer>
</div>
</template>

<script>
export default {
    computed: {
        routes() {
            return [{
                    title: "Inicio",
                    path: '/',
                },
                {
                    title: "Ficha de Jogo",
                    path: '/sheet',
                },
                // {
                //     title: "Regras",
                //     path: '/rules',
                // }
            ]
        }
    }
}
</script>

<style scoped>
.app {
    @apply flex;
    @apply flex-col;
}

img {
    width: 5rem;
    height: 5rem;
    filter: invert(100%)
}

nav.menu {
    @apply absolute;
    @apply flex;
    @apply flex-col;
    @apply h-full;
    @apply gap-3;
    @apply justify-center;
    @apply flex-wrap;
    @apply text-sm;
    @apply font-medium;
    @apply text-center;
    @apply border-l-2;
    @apply border-primary-500;
}

nav .menu-item {
    @apply inline-block;
    @apply p-4;
    @apply text-title;
    @apply bg-primary-200;
    @apply rounded-r-lg;
}

nav .active-item {
    @apply bg-primary-500;
    @apply text-white;
    @apply font-bold;
}

header,
footer {
    @apply py-4;
    @apply bg-title;
    @apply text-white;
    @apply uppercase;
    @apply text-center;
}

main {
    @apply flex;
    @apply justify-center;
    @apply 2xl:mx-96;
    @apply xl:mx-48;
    @apply sm:mx-32;
    @apply h-full;
}

header {
    @apply border-b border-primary-500;
}

footer {
    @apply border-t border-primary-500;
    @apply h-12;
}

header h1 {
    @apply text-5xl;
}
</style>
