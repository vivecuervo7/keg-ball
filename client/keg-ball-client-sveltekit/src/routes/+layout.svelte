<header>Keg Ball</header>
<main>
	<nav>
		<a href="/">Home</a>
		<a href="/clubs">Clubs</a>
		<a href="/profile">Profile</a>
	</nav>
	<slot />
</main>

<style>
	header {
		font-size: 2rem;
	}

	main {
		display: grid;
		grid-template-rows: auto 1fr;
	}
</style>
