<div>
    <div class="headerText">
        <h1>Dashboard</h1>
        <h2>you are logged in as {data.user.username}</h2>
    </div>
    <div class="cardGridContainer">
        {#if data.cardData != false}
            <div class="cardGrid">
                {#each data.cardData as card}
                    <div class="card">
                        <a href={`dashboard/3d/${card.id}`}>
                            <Card2D {card} width="350"/>
                        </a>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="headerText">
                <h3>It looks like you dont have any cards</h3>
                <Button type="link" href="/new">
                    Get Started
                </Button>
            </div>
        {/if}
    </div>
</div>

<script>
    import Card2D from "$lib/components/Card2D.svelte";
    import Button from "$lib/components/Button.svelte";

    export let data;
</script>

<style lang="less">
    .headerText {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;

        h1 {
            font-size: 3rem;
            font-weight: 600;
            font-family: "Roboto";
            color: #fff;
            margin: 0;
            padding-bottom: 20px;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 400;
            font-family: "Roboto";
            color: #fff;
            margin: 0;
        }

        h3 {
            font-size: 1.3rem;
            font-weight: 400;
            font-family: "Roboto";
            color: #fff;
            margin: 0;
            padding-bottom: 20px;
        }
    }

    .cardGrid {
        padding-left: 2rem;
        padding-right: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, auto));
        grid-gap: 1rem;
        width: 100%;
    }
    .cardGridContainer {
        display: flex;
        justify-content: center;
    }

    a {
        text-decoration: none;
        width: fit-content;
        height: fit-content;
    }

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>