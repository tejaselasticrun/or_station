
<script>
    export const communication_data={
        area_manager: null,
        regional_manager: null,
        area_manager_email: null,
        regional_manager_email: null

    }

    const  clickhandel=() =>{
        alert("button clicked")
    }

</script>
<div>
    <form>
        <div>
            <div>
                <label for="area_manager">Area Manager:</label>
            </div>
            <div>
                <input type="text" id="area_manager"  class="border-solid border-2" bind:value={communication_data.area_manager}>
            </div>
        </div>
        <div>
            <div>
                <label for="area_manager_email">Area Manager Email:</label>
            </div>
            <div>
                <input type="text" id="area_manager_email" class="border-solid border-2" bind:value={communication_data.area_manager_email}>
            </div>
        </div>
        <div>
            <div>
                <label for="regional_manager">Regional Manager:</label>
            </div>
            <div>
                <input type="text" id="regional_manager" class="border-solid border-2" bind:value={communication_data.regional_manager}>
            </div>
        </div>
        <div>
            <div>
                <label for="regional_manager_email">Regional Manager Email:</label>
            </div>
            <div>
                <input type="text" id="regional_manager_email" class="border-solid border-2" bind:value={communication_data.regional_manager_email}>
            </div>
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