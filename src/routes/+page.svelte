<script>
	import Icon from '../components/icon.svelte';
</script>

<div class="columns">
	<div class="column">
		<img src="photo_patrick01.jpg" alt="Patrick" />
		<div class="socials">
			<a href="https://github.com/prmaloney">
				<Icon name="github" />
			</a>
			<a href="https://linkedin.com/in/prmaloney">
				<Icon name="linkedin" />
			</a>
		</div>
	</div>
	<div class="column">
		<div class="intro">
			<h1>Patrick Maloney</h1>
			<p>
				Hi I'm Patrick, a Software Engineer in Munich, Germany. I'm into lean software solutions
				that solve specific problems.
			</p>
		</div>
		<h2>My background</h2>
		<p>
			I studied Computer Science at the University of Portland, Oregon, USA. I've worked in the US,
			and Germany. I've worked in the automotive industry and as a consultant. Mainly I work on web
			applications, but I've also worked on custom automation solutions and systems software in my
			free time.
		</p>
		<p>
			I moved to Germany in 2022, and I'm currently working at <a href="https://www.foobar.agency"
				>foobar Agency</a
			>.
		</p>
	</div>
</div>

<style lang="scss">
	.columns {
		display: flex;
	}

	.column {
		display: flex;
		flex-direction: column;

		a {
			color: #9ccfd8;
			text-decoration: underline rgba(1, 1, 1, 0);
			text-underline-offset: 0.2em;
			transition: text-decoration-color 300ms, text-underline-offset 300ms;
			&:hover {
				text-decoration-color: #9ccfd8;
				text-underline-offset: 0.4em;
			}
		}
	}
	.intro {
		h1 {
			margin-bottom: 0;
		}
	}

	img {
		clip-path: circle();
		max-width: 20rem;
	}

	.socials {
		display: flex;
		justify-content: space-evenly;
		max-height: fit-content;

		a {
			display: inline-block;
			text-decoration: none;
			border-radius: 100%;
			padding: 0 2px;
			outline: 1px solid transparent;
			outline-offset: 0px;
			transition: outline-color linear 300ms, outline-offset linear 300ms;
			&:hover {
				outline-offset: 2px;
				outline-color: white;
			}
		}
	}
</style>
