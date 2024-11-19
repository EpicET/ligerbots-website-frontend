<script>
  export let username = '';
  export let email = '';
  export let firstname = '';
  export let lastname = '';
  export let phone_number = '';
  export let address = '';
  export let school = '';

</script>





<div class="form-group">
  <label class="required" for="desired-username">Desired Username</label>
  <input
    type="text"
    id="desired-username"
    class="form-control"
    placeholder="liger123"
    name="username"
    bind:value={username}
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
    bind:value={email}
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
      bind:value={firstname}
    />
    <input
      type="text"
      class="form-control"
      placeholder="Smith"
      name="last-name"
      bind:value={lastname}
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
    bind:value={phone_number}
  />
</div>

<div class="form-group">
  <label class="required" for="address">Address</label>
  <input
    type="text"
    class="form-control"
    placeholder="Address line"
    name="address"
    bind:value={address}
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
      bind:group={school}
      required
    /> Newton North
  </label>
  <label>
    <input
      type="radio"
      id="school"
      name="school"
      value="South"
      bind:group={school}
      required
    /> Newton South
  </label>
  <label>
    <input type="radio" id="school" name="school" value="none" bind:group={school} required />
    N/A
  </label>
</div>
