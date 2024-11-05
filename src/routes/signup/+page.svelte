<script>
  import { goto } from "$app/navigation";

  /** @type {string}*/
  let email;

  /** @type {string}*/
  let password;

  /** @type {string}*/
  let username;

  /** @type {string}*/
  let userType;

  /** @type {Array<string>} */
  let adultRole = [];

  let parentNames = [{ firstName: '', lastName: '' }];
  let childNames = [{ firstName: '', lastName: '' }];

  // Function to add a new name input field
  const addParentName = () => {
    parentNames = [...parentNames, { firstName: '', lastName: '' }];
  };

  // Function to remove a specific name input field
  const removeParentName = (/** @type {number}*/ index) => {
    parentNames = parentNames.filter((_, i) => i !== index);
  };

  // Function to add a new child name input field
  const addChildName = () => {
    console.log("Adding child name");
    childNames = [...childNames, { firstName: '', lastName: '' }];
  };

  // Function to remove a specific child name input field
  const removeChildName = (/** @type {number}*/ index) => {
    childNames = childNames.filter((_, i) => i !== index);
  };

  const handleSubmit = (/** @type {Event} */ evt) => {
    let signUpFields = { username, email, password, userType};
    alert(signUpFields);
    return goto("/");
  };
</script>

<svelte:head>
  <!-- <title>LigerBots Registration</title> -->
  <link rel="stylesheet" href="/css/register.css" />
  <meta property="og:title" content="LigerBots Registration" />
</svelte:head>

<center>
  <div class="notindex-title">
    <a href="/gallery" style="color: white;">LIGERBOTS REGISTRATION</a>
  </div>
  <div class="row top-spacer"></div>
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-xs-12 no-side-padding">
      <b>
        <p>
          LigerBots team registration is for students registered in the Newton
          Public Schools high schools and their parents/guardians, and for
          LigerBots Mentors and Coaches, only.
        </p>
      </b>
      <p>
        Community members interested in FLL should refer to the <a href="/fll"
          >FLL page</a
        >.
      </p>
      <p>
        Otherwise, you can find contact information on the <a href="/contact"
          >Contact page</a
        >.
      </p>
      <br />
    </div>
  </div>
</center>

<div class="row side-margins bottom-margin">
  <div class="col-lg-6 col-lg-offset-3 col-xs-12 no-side-padding bottom-margin">
    <form method="post" on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label class="required" for="desired-username">Desired Username</label>
        <input
          type="text"
          id="desired-username"
          class="form-control"
          placeholder="liger123"
          name="username"
          aria-describedby="usernameHelp"
          required
        />
        <span id="usernameHelp" class="help-block"
          >At least 3 characters. Allows letters, numbers, underscore and
          period.</span
        >
      </div>

      <div class="form-group">
        <label class="required" for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="john.smith@gmail.com"
          name="email"
          aria-describedby="emailHelp"
          required
        />
        <span id="emailHelp"
          >Do <b>not</b> use an NPS student email; it cannot be used outside of
          NPS.<br />
          The LigerBots rely heavily on Google Drive, so an account with access to
          Google is preferable.</span
        >
      </div>

      <div class="form-group">
        <label class="required" for="name">Name</label>
        <div class="lb-input-group name-group">
          <input
            type="text"
            class="form-control"
            placeholder="John"
            name="first-name"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Smith"
            name="last-name"
          />
        </div>
      </div>

      <div class="form-group phone-group">
        <label class="required" for="phone">Phone</label>
        <input
          type="text"
          id="phone"
          maxlength="12"
          class="form-control"
          placeholder="123-456-7890"
          name="phone"
        />
      </div>

      <div class="form-group">
        <label class="required" for="address">Address</label>
        <input
          type="text"
          class="form-control"
          placeholder="Address line"
          name="address"
        />
        <div class="spacer"></div>
        <div class="lb-input-group address-group">
          <input
            type="text"
            class="form-control"
            placeholder="City"
            value="Newton"
            name="city"
          />
          <input
            type="text"
            class="form-control"
            placeholder="State"
            value="MA"
            name="state"
          />
          <input
            type="number"
            class="form-control"
            placeholder="Zip code"
            name="postalcode"
            maxlength="5"
          />
        </div>
      </div>

      <label class="required" for="school">School</label>
      <div class="radio lb-checkbox">
        <label>
          <input
            type="radio"
            id="school"
            name="school"
            value="North"
            required
          /> Newton North
        </label>
        <label>
          <input
            type="radio"
            id="school"
            name="school"
            value="South"
            required
          /> Newton South
        </label>
        <label>
          <input type="radio" id="school" name="school" value="none" required />
          N/A
        </label>
      </div>

      <label class="required" for="user-type">I am a...</label>
      <div class="radio lb-checkbox">
        <label>
          <input
            type="radio"
            id="user-type"
            name="user-type"
            value="student"
            bind:group={userType}
            required
          /> Student
        </label>
        <label>
          <input
            type="radio"
            id="user-type"
            name="user-type"
            value="adult"
            bind:group={userType}
            required
          /> Adult
        </label>
      </div>

      <!-- There are two different sections of the form based on whether the user selected "student" or "parent" -->
      {#if userType === "student"}
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
                  bind:value={parentNames[index].firstName}
                  name="parent-first-name[]"
                  data-required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Smith"
                  bind:value={parentNames[index].lastName}
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
            />
          </div>
        </div>
      {/if}

      {#if userType === "adult"}
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
                bind:group={adultRole}
              /> Parent/Guardian
            </label>
            <label>
              <input
                type="checkbox"
                id="adult-role"
                name="role-mentor"
                value="role-mentor"
                bind:group={adultRole}
              /> Mentor
            </label>
            <label>
              <input
                type="checkbox"
                id="adult-role"
                name="role-coach"
                value="role-coach"
                bind:group={adultRole}
              /> Coach
            </label>
          </div>
        </div>
        
        {#if adultRole.includes("role-parent")}
         <!-- same idea as the one for the student section -->
          <div class="form-section parent">
            <label class="required" for="child-names">Child(ren)'s Name(s)</label>
            <div class="multi-input">
              <!-- Render each parent name input group -->
              {#each childNames as child, index}
                <div class="lb-input-group name-group multi-name-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="John"
                    bind:value={childNames[index].firstName}
                    name="child-first-name[]"
                    data-required
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Smith"
                    bind:value={childNames[index].lastName}
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
      {/if}

      <div class="spacer"></div>

      <div class="form-group">
        <label class="required" for="password">Password</label>
        <div class="lb-input-group">
          <input
            type="password"
            id="password"
            pattern=""
            class="form-control"
            placeholder="Password"
            name="password"
            aria-describedby="passwordHelp"
          />
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Confirm"
            name="password-confirm"
          />
        </div>
        <span id="passwordHelp" class="help-block"
          >Password must be a minimum of 8 characters and contain mixed case and
          at least 1 digit.</span
        >
      </div>

      <div class="help-block">
        <label class="required" for="required"></label> required
      </div>
      <button type="submit" name="register" class="btn btn-default"
        >Submit</button
      >
    </form>
  </div>
</div>

