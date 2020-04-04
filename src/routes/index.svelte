<svelte:head>
	<title>Hesabfun - A base API accounting system</title>
</svelte:head>

<div class="grid grid-flow-col grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 bg-greyish-brown">
	<div class="bg-white w-full h-screen grid grid-rows-2 lg:col-start-2">
		<div class="flex flex-col">
			<img class="justify-center mt-12" src="hesabfun-logo.svg" alt="hesabfun logo">
			<p class="font-bold text-center text-6xl text-greyish-brown mt-2">Hesabfun</p>
			<p class="font-mono text-center tracking-tight font-book text-greyish -mt-3">open source financial platform</p>
			<a href="signup" class="mt-12 bg-butterscotch w-64 p-4 self-center text-1xl text-center tracking-tight">Create your free account</a>
			<a href="../" class="mt-4 bg-white border border-greyish w-64 p-3 self-center text-1xl tracking-tight font-bold relative flex"><img class="justify-center w-6 mr-4 ml-3" src="images/icons/btn_google_icon.svg" alt="hesabfun logo">Sign up with Google</a>
			<p class="mt-6 tracking-tight font-bold text-greyish text-center">Already have an account? <a class="hover:text-butterscotch" href="signin">Sign in</a></p>
		</div>
		<div class="self-end mb-4 flex justify-center text-greyish tracking-tight font-bold text-brown-grey">
			<a href="https://www.linkedin.com/company/hesabfun" class="hover:text-butterscotch" target="blank">Linkedin</a>
			<a href="https://twitter.com/hesabfun" class="ml-8 hover:text-butterscotch" target="blank">Twitter</a>
			<a href="https://github.com/hesabfun" class="ml-8 hover:text-butterscotch" target="blank">Github</a>
		</div>
	</div>
	<div class="w-full h-screen text-gray-300 lg:col-start-1">
		<div class="m-6 sm:m-12 text-white-text sm:text-justify">
			<h1 class="text-2xl">What is Hesabfun?</h1>
			<p class="mt-2">Hesabfun is a base API accounting system, it's open source and free. you can use HesabFun site for free or run it under 5 minutes by docker on your company's server.</p>
			<h1 class="text-2xl mt-6">Why do we need a base API accounting system?</h1>
			<p class="mt-2">Probably you as a developer don’t know much about accounting, tax, value-added, etc.</p>
			<p class="mt-2">But as far as we want salary from companies that we work for, companies should have income and us developers write financial system platforms, we have a lot of problems in this part, for example when your CTO comes in and says that accounting needs that kind of sale’s report and you had never designed it to get reports easily, or worth than that is when you have to export the reports, for example in the format of Excel so traditional accounting systems can be imported once a month.</p>
			<p class="mt-2">or there would be another kind of problem when you want to create something like CRM or E-commerce for a company that has done all things traditionally, inventory report or the last list of customers is like a nightmare. these systems don’t have any API, just designed for accountants to work with and get the daily reports.</p>
		</div>
	</div>
</div>