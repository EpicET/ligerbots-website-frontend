<script>
  /** @type {string}*/
  export let graduation_year; // should be a number

  export let parentNames = [{ firstName: '', lastName: '' }];

  const addParentName = () => {
  parentNames = [...parentNames, { firstName: '', lastName: '' }];
  };

  const removeParentName = (/** @type {number}*/ index) => {
  parentNames = parentNames.filter((_, i) => i !== index);
  };
</script>

<div class="form-section student">
  <label class="required" for="parent-names"
    >Parent/Guardian names</label
  >
  <!-- allows for multiple copies of input elements via some scripting 
                    used to display a variable number of parent name inputs -->
  <div class="multi-input">
    <!-- Render each parent name input group -->
    {#each parentNames as parent, index}
      <div class="lb-input-group name-group multi-name-group">
        <input
          type="text"
          class="form-control"
          placeholder="John"
          bind:value={parent.firstName}
          name="parent-first-name[]"
          data-required
        />
        <input
          type="text"
          class="form-control"
          placeholder="Smith"
          bind:value={parent.lastName}
          name="parent-last-name[]"
          data-required
        />
        <span class="input-group-btn">
          <button
            class="btn btn-default multi-input-remove"
            type="button"
            disabled={parentNames.length === 1}
            on:click={() => removeParentName(index)}
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
    <button type="button" class="btn multi-input-add" on:click={addParentName}>
      Add
    </button>
  </div>
  <div class="spacer"></div>


  <div class="form-group">
    <label class="required" for="parent-email"
      >Parent/Guardian email</label
    >
    <input
      type="email"
      id="parent-email"
      class="form-control"
      placeholder="john.smith@example.com"
      name="parent_email"
      data-required=""
    />
  </div>

  <div class="form-group phone-group">
    <label class="required" for="emergency-phone">Emergency Phone</label
    >
    <input
      type="text"
      id="emergency-phone"
      maxlength="14"
      class="form-control"
      placeholder="123-456-7890"
      name="emergency_phone"
      data-required=""
    />
  </div>

  <div class="form-group">
    <label class="required" for="graduation">Graduation year</label>
    <input
      type="number"
      id="graduation"
      class="form-control"
      name="graduation"
      min="2020"
      max="2035"
      bind:value={graduation_year}
    />
  </div>
</div>