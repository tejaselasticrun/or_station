<script context="module">
	import { onMount } from 'svelte';
</script>

<script>
	let organisation;
	let station;
	let location;
    /////////////////////////////////
	let lst1;
	let lst = [];
	export let temp_list=[];
	////////////////////////////////////
	let loc_list;
	let temp_lst;
	export let location_list = [];
	
	
	onMount(async () => {
		//fetching and parsing station data 
		const res = await fetch('./api/get_org');
		if (res.ok)  lst1 = await res.json();
		lst = lst1.map(x => x['org_name']);
		for (let i = 0; i < lst.length; i++) 
		{
               temp_list[i] = lst[i];
        }

		////////////////////////////////////////////////////////////////////////
		//fetching and parcing 
		const res2 = await fetch('./api/get_er_location');
		if (res2.ok) loc_list= await res2.json();
		//loc_list = loc_list.message;
		console.log(loc_list.length);
		console.log(loc_list);

		for (let i = 0; i < loc_list.length; i++) 
		{
            //  temp_lst = loc_list[i];	 
			temp_lst = [];
			temp_lst.push(loc_list[i]['location_name']);
			temp_lst.push(loc_list[i]['location_code']);
			temp_lst.push(loc_list[i]['location_id']);
			location_list[i] = temp_lst;
			// console.log(temp_lst);
			
        }
		console.log(location_list);

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
				class="text-2xl m-2 cursor-pointer">
				<option disabled selected value> Select Location</option>

               {#each location_list as loc }
                 <option value="{loc[2]}" title="{loc[0]}">{loc[1]} / {loc[0]}</option>
   
               {/each}
				
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
