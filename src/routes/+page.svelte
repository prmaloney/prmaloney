<div class="columns">
	<div class="column">
		<img src="photo_patrick01.jpg" alt="Patrick" />
		<div class="socials">
			<a href="https://github.com/prmaloney">
				<img src="github-mark-white.svg" alt="GitHub" />
			</a>
			<a href="https://linkedin.com/in/prmaloney">
				<img src="linkedin-svgrepo-com.svg" alt="LinkedIn" />
			</a>
		</div>
	</div>
	<div class="column">
		<h1>Patrick Maloney</h1>
		<p>
			Hi I'm Patrick, a Software Engineer in Munich, Germany. I'm into lean software solutions that
			solve specific problems.
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
		gap: 1rem;
	}

	img {
		clip-path: circle();
		max-width: 20rem;
	}

	.socials {
		display: flex;
		gap: 1rem;
		justify-content: center;
		img {
			max-width: 3rem;
			padding: 5px;
			border-radius: 50%;
			border-width: 2px;
			border-style: solid;
			border-color: transparent;
			transition: border-color 300ms;
			&:hover {
				border-color: white;
			}
		}
	}
</style>
