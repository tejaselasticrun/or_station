<script>
    let attendance_data={
        no_partner_link_check : null,
        exclude_vol_check: null,
        allow_multi_van_partner: null,
        van_load_target: null,
        van_volumetric_count: null,
        van_volumetric_per: null,
        first_mile_load_threshold: null
    }
     let clickhandel = () =>{
         alert("button clicked");
     }

</script>

<div>
    <form >
        <div>
             <input type="checkbox" bind:value={attendance_data.no_partner_link_check}>
             No Partner Link Check
        </div>
        <div>
            <input type="checkbox" bind:value={attendance_data.exclude_vol_check}>
            Exclude Vol Check
        </div>
        <div>
            <input type="checkbox" bind:value={attendance_data.allow_multi_van_partner}>
            Allow Multi Van Partner
        </div>
        <div>
            <label for="van_load_target" > Van Load Target</label>
            <input id="van_load_target" class="border-solid border-2" type="text" bind:value={attendance_data.van_load_target}>
        </div>
        <div>
            <label for="van_volumetric_count">Van Volumetric Count</label>
            <input type="text" id="van_volumetric_count" class="border-solid border-2" bind:value={attendance_data.van_volumetric_count}>
        </div>
        <div>
            <label for="van_volumetric_per">Van Volumetric Per</label>
            <input type="text" id="van_volumetric_per" class="border-solid border-2" bind:value={attendance_data.van_volumetric_per}>

        </div>
        <div>
            <label for="first_mile_load_threshold">First Mile Load Threshold</label> 
            <input type="text" id="first_mile_load_threshold" class="border-solid border-2" bind:value={attendance_data.first_mile_load_threshold}>
        </div>
        <div>
            <button on:click={() => clickhandel()} class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
                Submit
              </button>
        </div>
    </form>

</div>

<style>

</style>