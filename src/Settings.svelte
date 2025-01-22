<script lang="ts">
    import type { DataBase } from "hollow-api";
    import { nameState } from "./states.svelte";
    let { db, unmount }: { db: DataBase|null, unmount: () => void } = $props();
  
    let xname = nameState.value;
  
    // Function to restore the previous state and close the settings window
    const exitSettings = () => {
      nameState.value = xname;  // Restore the original name state
      unmount();  // Unmount the settings component
    };
  
    // Function to save the current state to the database and close the settings window
    const save = () => {
      // Save the changes to the database here
      unmount();  // Unmount the settings component after saving
    };
  </script>
  
  <div class="settings">
    <div class="settings-window">
      <div class="settings-properties">
        <div class="settings-property">
          <div>
            <p class="settings-property-name">Name</p>
            <p class="settings-property-des">Change the name.</p>
          </div>
          <div>
            <!-- Control: Input field for changing the name -->
            <input class="input" bind:value={nameState.value} />
          </div>
        </div>
        <hr class="settings-separator" />
      </div>
      <div class="settings-end">
        <!-- Exit button: Restore previous state and close the settings window -->
        <button class="button-secondary" onclick={exitSettings}>Exit</button>
        <!-- Save button: Save changes and close the settings window -->
        <button class="button-primary" onclick={save}>Save</button>
      </div>
    </div>
  </div>
  
  <style>
    /* Styles can be added here */
  </style>
  