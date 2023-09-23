<script>
    import Hero from "$lib/Hero.svelte";
    import Projects from "$lib/Projects.svelte";
    import Intro from "$lib/Intro.svelte";
    import QA from "$lib/QA.svelte";
    import Contact from "$lib/Contact.svelte";
    import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
    <title>Jake Coffman</title>
</svelte:head>

<style>
    h1, p {
        margin: 0 auto;
    }

    h1 {
        font-size: 2.8em;
        font-weight: 700;
        margin: 0 0 0.5em 0;
    }

    p {
        margin: 1em auto;
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
</style>

<Nav/>
<!-- hey -->
<article>
    <Hero/>
    <Intro/>
    <Projects/>
    <QA/>
    <Contact/>
</article>
