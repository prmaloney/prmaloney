<script lang="ts">
	import Icon from '../components/icon.svelte';
</script>

<div>
	<div class="flex flex-col items-center">
		<h1>Patrick Maloney</h1>
		<img class="h-64 w-64 object-cover rounded-full mb-4" src="photo_patrick01.jpg" alt="Patrick" />
	</div>
	<div class="flex flex-col gap-4">
		<p>
			Hi I'm Patrick, a Software Engineer in Munich, Germany. I'm into lean software solutions that
			solve specific problems.
		</p>
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
		<h2>Contact me</h2>
		<div class="flex direction-row gap-4 mb-4">
			<a
				class="after:content-none bg-love hover:scale-110 transition ease-in-out duration-300"
				href="https://github.com/prmaloney"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="github" />
			</a>
			<a
				class="after:content-none bg-pine hover:scale-110 transition
        ease-in-out duration-300"
				href="https://linkedin.com/in/prmaloney"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="linkedin" />
			</a>
			<a
				class="after:content-none bg-iris hover:scale-110 transition
        ease-in-out duration-300"
				href="mailto:pmaloney16@gmail.com"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="mail" />
			</a>
		</div>
	</div>
</div>
