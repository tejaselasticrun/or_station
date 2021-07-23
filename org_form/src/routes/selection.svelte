<script context="module">
	import { onMount } from 'svelte';
	export async function load({fetch}){
		console.log("inside the method");
		const res = await fetch('./api/get_org');
		if (res.ok) return {props: {orgs: await res}};	
	}
	
	
	
</script>



<script>


	let organisation;
	let station;
	let location;
	let data = [];
	// import { onMount } from 'svelte';
	export let orgs;
	let lst1;
	let lst2;
	onMount(async () => {
		
		console.log("hiiiiiiiiiii");
		const res = await fetch('./api/get_org');
		// console.log(res);
		// console.log(res.body);
		// lst1 = res.body;
		// console.log(lst1);
		if (res.ok)  lst1 = await res.json()
		console.log(lst1);
		console.log(typeof(lst1));
		
        lst2 = lst1.filter( lst1 => lst1.values());
		console.log(lst2);
		console.log(typeof(lst2));
	});
	
</script> 


<!-- {#each {lst1} as {org_name} }
<h2>{org_name.org_name}</h2>	
{/each} -->
<!-- {#each {lst2} as {list1} }
	<h2>{list1.org_name}</h2>
{/each} -->
<div class=" space-x-4 ">
	<div class="m-8 flex">
		<div class="flex-1  m-8">
			<label for="slect organisation" class="text-2xl">Select Organisation</label>
			<select
				name="select_organisation"
				id="select_organisation"
				bind:value={organisation}
				class="text-2xl m-2 cursor-pointer"
			>
				<option disabled selected value> select Organisation</option>
				<option value="Amazon">Amazon</option>
				<option value="Flipkart">Filpkart</option>
				<option value="Snapdeal">Snapdeal</option>
			</select>
		</div>
		<div class=" flex-1  m-8">
			<label for="select_location" class="text-2xl">Select Location</label>
			<select
				name="select_location"
				id="select_location"
				bind:value={location}
				class="text-2xl m-2 cursor-pointer"
			>
				<option disabled selected value> Select Location</option>
				<option value="Amazon">Amazon</option>
				<option value="Flipkart">Filpkart</option>
				<option value="Snapdeal">Snapdeal</option>
			</select>
		</div>
		<div class=" flex-1  m-8">
			<label for="select Station" class="text-2xl">Select Station</label>
			<select
				name="select_station"
				id="select_station"
				bind:value={station}
				class="text-2xl m-2 cursor-pointer"
			>
				<option disabled selected value> select Station</option>
				<option value="BOMG">BOMG</option>
				<option value="PNQP">PNQP</option>
				<option value="BOMM">BOMM</option>
			</select>
		</div>
	</div>
</div>
