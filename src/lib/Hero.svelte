<style>
    h1 {
        font-size: 12vw;
        margin: 0;
        padding-top: 1rem;
        text-shadow: 4px 8px var(--red), 8px 12px black;
    }

    .tagline {
        font-size: 5vw;
        text-shadow: 2px 4px var(--red), 4px 8px black;
    }

    .heroic {
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: matrix(1, 0.10, 0, 1, 0, 0);
        font-variant: small-caps;
        color: var(--yellow);
        text-align: center;
        font-weight: bolder;
        text-shadow: 4px 6px var(--red), 6px 10px black;
    }

    #hero {
        background: var(--light-blue);
        background-image: url("/hex.svg");
        color: white;
        padding: 4rem 2rem 8rem;
        position: relative;
    }

    #logo {
        position: absolute;
        top: 6px;
        right: 10px;
        display: block;
        width: 128px;
        height: auto;
        border-radius: 100%;
        border: 5px solid var(--yellow);
    }

    @media (max-width: 695px) {
        h1 {
            font-size: 13vw;
            text-shadow: 1px 3px var(--red), 3px 6px black;
            white-space: nowrap;
        }

        .tagline {
            text-shadow: 1px 2px var(--red), 2px 4px black;
        }

        #hero {
            padding-bottom: 6rem;
        }

        #logo {
            width: 64px;
        }
    }

    @media (min-width: 1200px) {
        #logo {
            width: 167px;
        }
    }

    #canvas {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
    }
</style>

<section id="hero">
  <canvas id="canvas"></canvas>
  <img alt="Jake Coffman" src="logo.png" id="logo">
  <div class="heroic">
    <h1>Jake Coffman</h1>
    <span class="tagline">Software Developer</span>
  </div>
</section>
