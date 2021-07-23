<script>
    let isopen1 = false;
    let isopen2 = false;
    let isopen3 = false;
    let isopen4 = false;
    let isopen5 = false;

    
    import StationDetails from "./station_details.svelte";
    import CommunicationDetails from "./communication_details.svelte";
    import Geolocation from "./geolocation.svelte";
    import AttendanceParameters from "./attendance_parameters.svelte";
    import CostCenterConfig from "./cost_center_config.svelte";

    


</script>

<div>
    <button class:active={isopen1} class="accordion text-xl my-4" on:click={() => isopen1 = !isopen1}>Station Details
        {#if isopen1}
            
        <span class="icon">&minus;</span>
        {:else}
        <span class="icon">&plus;</span>
        {/if}
    </button>
    <div class="panel" class:open-panel1={isopen1}>
     <StationDetails />
     <!-- <ReadData /> -->
    </div>

    <button class:active={isopen2}  class="accordion text-xl my-4" on:click={() => isopen2 = !isopen2}>Communication Details 
        {#if isopen2}
            
        <span class="icon">&minus;</span>
        {:else}
        <span class="icon">&plus;</span>
        {/if}
    </button>
    <div class="panel" class:open-panel2={isopen2}>
     
     <!-- <WriteData /> -->
     <CommunicationDetails />

    </div>

    <button class:active={isopen3}  class="accordion text-xl my-4" on:click={() => isopen3 = !isopen3}>Facility Geo Location
        {#if isopen3}
            
        <span class="icon">&minus;</span>
        {:else}
        <span class="icon">&plus;</span>
        {/if}
    </button>
    <div class="panel" class:open-panel3={isopen3}>
     
     
     <Geolocation />

    </div>

    <button class:active={isopen4}  class="accordion text-xl my-4" on:click={() => isopen4 = !isopen4}>Attendance Parameters
        {#if isopen4}
            
        <span class="icon">&minus;</span>
        {:else}
        <span class="icon">&plus;</span>
        {/if}
    </button>
    <div class="panel" class:open-panel4={isopen4}>
     
     
     <!-- <Geolocation /> -->
     <AttendanceParameters />

    </div>
    <button class:active={isopen5}  class="accordion text-xl my-4" on:click={() => isopen5 = !isopen5}>Cost Center Config
        {#if isopen5}
            
        <span class="icon">&minus;</span>
        {:else}
        <span class="icon">&plus;</span>
        {/if}
    </button>
    <div class="panel" class:open-panel5={isopen5}>
     
     <CostCenterConfig />
    

    </div>
 
</div>

<style>
    /* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: rgb(204, 177, 248);
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  display: block;
  height: 0;
  overflow: hidden;
}
.open-panel1{
    height:auto;
}
.open-panel2{
    height: auto;
}
.open-panel3{
    height: auto;
}
.open-panel4{
    height: auto;
}
.open-panel5{
    height: auto;
}
.icon{
    text-align: right;
}
</style>