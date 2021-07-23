<script context="module">
	import { onMount } from 'svelte';
</script>

<script>
	let organisation;
	let station;
	let location;

	let lst1;
	let lst = [];
	let temp_list=[];
	
	
	onMount(async () => {
		const res = await fetch('./api/get_org');
		// console.log(res);
		// console.log(res.body);
		// lst1 = res.body;
		// console.log(lst1);
		if (res.ok)  lst1 = await res.json();
		lst = lst1.map(x => x['org_name']);
		for (let i = 0; i < lst.length; i++) 
		{
               temp_list[i] = lst[i];
        }
	});
	
</script> 


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
			{#each temp_list as temp }
	          <option value="{temp}">{temp}</option>
            {/each}
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
