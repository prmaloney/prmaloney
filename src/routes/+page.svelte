<script>
	import Icon from '../components/icon.svelte';
</script>

<div class="columns">
	<div class="column">
		<img src="photo_patrick01.jpg" alt="Patrick" />
		<div class="socials">
			<a href="https://github.com/prmaloney" target="_blank" rel="noreferrer">
				<Icon name="github" />
			</a>
			<a href="https://linkedin.com/in/prmaloney" target="_blank" rel="noreferrer">
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
		<p>I studied Computer Science at the University of Portland, Oregon, USA.</p>
		<p>
			After I graduated in 2020 I worked at <a
				href="https://www.cdkglobal.com/"
				target="_blank"
				rel="noreferrer">CDK Global</a
			> in San Jose, CA. Here I gained experience building industrial React applications in the automotive
			industry.
		</p>
		<p>
			I moved to Germany in 2022, and I'm currently working at <a
				href="https://www.foobar.agency"
				target="_blank"
				rel="noreferrer">foobar Agency</a
			>. Here I work as a consultant for various clients in and around Germany.
		</p>
		<p>
			Mainly I work on web applications, but I've also worked on custom automation solutions and
			systems software in my free time.
		</p>
		<h2>My goals</h2>
		<p>
			I'm looking for a position where I can work on interesting problems with a team of people who
			are passionate about what they do.
		</p>
		<p>
			I'm interested in working on projects that have a positive impact on the world. I'm also
			interested in working on projects that are technically challenging and allow for constant
			learning.
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
			text-underline-offset: 0;
			transition: text-decoration-color 300ms, text-underline-offset 300ms;
			&:hover {
				text-decoration-color: #9ccfd8;
				text-underline-offset: 0.2em;
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

		list-style-type: none;
		padding: 0;
		margin: 1rem 0 0;

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			background: #eb6f92;
			padding: 0.5rem;
			width: 4rem;
			height: 4rem;
			transition: scale 300ms;
			&:hover {
				scale: 0.95;
			}
		}

		a:nth-child(2) {
			background: #f6c177;
		}
	}
</style>
