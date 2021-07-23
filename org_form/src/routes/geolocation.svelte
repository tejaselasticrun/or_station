<script>
    let geo_data = {
        latitude: null,
        longitude: null
    }

</script>

<div>
    <form>
        <div>
            <div>
                <label for="latitude">Latitude:</label>
            </div>
            <div>
                <input type="text" bind:value={geo_data.latitude} class="border-solid border-2">
            </div>
        </div>
        <div>
            <div>
                <label for="longitude">Longitude:</label>
            </div>
            <div>
                <input type="text" bind:value={geo_data.longitude} class="border-solid border-2">
            </div>
        </div>
        <div>
            <button on:click={() => clickhandel()} class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
                Submit
              </button>
        </div>
        <div>
            <button on:click={() => clickhandel()} class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
                Get QR code
              </button>
        </div>
    </form>

</div>

<style>

</style>