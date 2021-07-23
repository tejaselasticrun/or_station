import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const orgdata = derived(apiData, ($apiData) => {
    if ($apiData.message){
      return $apiData.message.map(org_nm => org_nm.org_name);
    }
    return [];
  });
