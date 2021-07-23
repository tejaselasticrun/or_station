<script>
    let cost_center_data={
        cost_center: null,
        warehouse: null
    }

</script>

<div>
    <form>
        <div>
            <label for="cost_center">Cost Center</label>
            <input type="text" id="cost_center" class="border-solid border-2" bind:value={cost_center_data.cost_center} >
        </div>
        <div>
            <label for="warehouse">Warehouse</label>
            <input type="text" id="warehouse" class="border-solid border-2" bind:value={cost_center_data.warehouse}>
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
