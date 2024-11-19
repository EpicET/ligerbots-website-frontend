<script>
  /** @type {Array<string>} */
  export let groups = [];

  export let childNames = [{ firstName: '', lastName: '' }];

  const addChildName = () => {
      childNames = [...childNames, { firstName: '', lastName: '' }];
  };

  const removeChildName = (/** @type {number}*/ index) => {
      childNames = childNames.filter((_, i) => i !== index);
  };

</script>


<div class="roles-group active">
  <label class="required" id="required" for="adult-role"
    >Adult roles</label>
  <div class="checkbox lb-checkbox">
    <label>
      <input
        type="checkbox"
        id="adult-role"
        name="role-parent"
        value="role-parent"
        bind:group={groups}
      /> Parent/Guardian
    </label>
    <label>
      <input
        type="checkbox"
        id="adult-role"
        name="role-mentor"
        value="role-mentor"
        bind:group={groups}
      /> Mentor
    </label>
    <label>
      <input
        type="checkbox"
        id="adult-role"
        name="role-coach"
        value="role-coach"
        bind:group={groups}
      /> Coach
    </label>
  </div>
</div>

{#if groups.includes("role-parent")}
 <!-- same idea as the one for the student section -->
  <div class="form-section parent">
    <label class="required" for="child-names">Child(ren)'s Name(s)</label>
    <div class="multi-input">
      <!-- Render each child name input group -->
      {#each childNames as child, index}
        <div class="lb-input-group name-group multi-name-group">
          <input
            type="text"
            class="form-control"
            placeholder="John"
            bind:value={child.firstName}
            name="child-first-name[]"
            data-required
          />
          <input
            type="text"
            class="form-control"
            placeholder="Smith"
            bind:value={child.lastName}
            name="child-last-name[]"
            data-required
          />
          <span class="input-group-btn">
            <button
              class="btn btn-default multi-input-remove"
              type="button"
              disabled={childNames.length === 1}
              on:click={() => removeChildName(index)}
            >
              X
            </button>
          </span>
        </div>
        <div class="spacer"></div>
      {/each}
      </div>
    <div class="spacer"></div>
    <div class="multi-input-buttons">
      <button type="button" class="btn multi-input-add" on:click={addChildName}>
        Add
      </button>
    </div>
    <div class="spacer"></div>
  </div>
{/if}