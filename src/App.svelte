<script lang="ts">
  import type { DataBase, HollowEvent, ICard } from "hollow-api";
  import type { Data } from "..";
  import Settings from "./Settings.svelte";
  import { nameState } from "./states.svelte";
  import { mount, onDestroy, onMount, unmount } from "svelte";

  let { card, app, data, db }: { card: ICard, app: HollowEvent, data: Data, db: DataBase | null } = $props();

  // Set initial name state from data
  nameState.value = data.name;

  // Reactive state for color and emoji
  let color = $state(data.color);
  let emoji = $state(data.emoji);

  let settings: Record<string, any>;
  let settingsContainer: HTMLElement | null = null;

  // Function to mount and render the Settings component into the 'hollow-pop-up' container.
  // The settings component provides a customizable interface for the plugin configuration.
  // In Svelte, mounting/unmounting components is manually handled instead of using React's createPortal.
  const showSettings = () => {
    const unmountSettings = () => unmount(settings);

    if (settingsContainer) {
      settings = mount(Settings, {
        target: settingsContainer,
        props: {
          db: db,
          unmount: unmountSettings,
        },
      });
    }
  };

  // Function to update the color state, triggered by the ColorPicker component.
  const updateColor = (newColor?: string) => {
    if (newColor) {
      color = newColor;
    }
  };

  const handleColorChange = () => {
    app.on('ColorPicker.changed', updateColor);
    app.emit('ColorPicker.color', color);
  };

  // Function to update the emoji state, triggered by the EmojiPicker component.
  const updateEmoji = (newEmoji?: string) => {
    if (newEmoji) {
      emoji = newEmoji;
    }
  };

  const handleEmojiChange = () => {
    app.on('EmojiPicker.changed', updateEmoji);
    app.emit('EmojiPicker.emoji', emoji);
  };

  
  onMount(() => {
    app.on(`SampleSveltePlugin-${card.name}-settings`, showSettings);

    const target = document.getElementById('hollow-pop-up');
    if (target) {
      settingsContainer = document.createElement('div');
      target.appendChild(settingsContainer);
    }
  });

  onDestroy(() => {
    app.off(`SampleSveltePlugin-${card.name}-settings`, showSettings);
  });
</script>

<div class="center" style="gap: 20px; height: var(--card-height);">
  <p style="color: var(--anti-secondary-color);">{nameState.value}'s data:</p>
  
  <button aria-label={color} class="display-f" onclick={handleColorChange}>
    <hr style={`width: 20px; height: 20px; border-radius: 5px; background: ${color}`} />
  </button>
  
  <button class="display-f" onclick={handleEmojiChange}>
    {emoji}
  </button>
</div>

<style>
    .display-f {
      padding: 5px;
      border-radius: 50%;
      font-size: 20px;
      background-color: rgb(var(--secondary-color-15));
      cursor: pointer;
    }
</style>
