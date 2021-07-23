
<script>
    let data={
        station_name: null,
        business_owner: null,
        business_owner_email: null,
        station_type: null,
        is_internal: null,
        is_active: null,
        latitude: null,
        longitude: null,
        cost_center: null,
        warehouse: null,
        is_operational: null

    }
    const  clickhandel=() =>{
        alert("button clicked")
    }

</script>

<div>
    <form >
        <div>
            <div>
                <label for="station-name">Station Name:</label>
            </div>
            <div>
                <input type="text" id="station-name" name="station-name" class="border-solid border-2" bind:value={data.station_name}>
            </div>
        </div>
        <div>
            <div>
                <label for="business-owner" >Business Owner:</label>
            </div>
            <div>
                <input type="text" id="business-owner" name="business-owner" class="border-solid border-2" bind:value={data.business_owner}>
            </div>
        </div>
        <div>
            <div>
                <label for="business_owner_email" >Business Owner Email:</label>
            </div>
            <div>
                <input type="text" id="business_owner_email" name="business_owner_email" class="border-solid border-2" bind:value={data.business_owner_email}>
            </div>
        </div>
        <div>
            <div>
                <label for="station_type">Station Type:</label>
            </div>
            <div>
                <select name="station_type" id="station_type" bind:value={data.station_type}>
                    <option disabled selected value>  Select Station Type</option>
                    <option value="SLSP">SLSP</option>
                    <option value="LMA">LMA</option>
                    <option value="ODH">ODH</option>
                    <option value="SP">SP</option>
                    <option value="APM">APM</option>

                </select>
            </div>
        </div>
        <div>
            <div>
                <label for="is_iternal">Is Internal</label>
            </div>
            <div>
                <select name="is_internal" id="is_internal" bind:value={data.is_internal}>
                    <option disabled selected value>Select Option</option>
                    <option value="true">true</option>
                    <option value="false">false</option>

                </select>
            </div>
        </div>
        <div>
            <div>
                <label for="is_active">Is Active:</label>
            </div>
            <div>
                <select name="is_active" id="is_active" bind:value={data.is_active}>
                    <option disabled selected value>Select Option</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>
        </div>
        <div>
            <input type="checkbox" bind:value={data.is_operational} >
            Is Operational
            
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