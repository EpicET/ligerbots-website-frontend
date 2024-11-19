<script>
  import { goto } from "$app/navigation";
  import TopForm from "./TopForm.svelte";
  import StudentForm from "./StudentForm.svelte";
  import AdultForm from "./AdultForm.svelte";

  /** @type {string}*/
  let email;

  /** @type {string}*/
  let password;

  /** @type {string}*/
  let username;

  /** @type {string}*/
  let firstname;

  /** @type {string}*/
  let lastname;

  /** @type {string}*/
  let school;

  /** @type {string}*/
  let address;

  /** @type {string}*/
  let phone_number;

  /** @type {string}*/
  let graduation_year; // should be a number

  /** @type {string}*/
  let userType;

  /** @type {Array<string>} */
  let groups = [];

  let parentNames = [{ firstName: '', lastName: '' }];
  let childNames = [{ firstName: '', lastName: '' }];

  const handleSubmit = (/** @type {Event} */ evt) => {
    let fullname = `${firstname} ${lastname}`;
    let signUpFields = { username, email, password, fullname, phone_number, address, school, groups, graduation_year };
    // alert(signUpFields);
    console.log(signUpFields);
    // return goto("/");
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
      <TopForm
        bind:username={username}
        bind:email={email}
        bind:firstname={firstname}
        bind:lastname={lastname}
        bind:phone_number={phone_number}
        bind:address={address}
        bind:school={school}
      />

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
        <StudentForm
          bind:parentNames={parentNames}
          bind:graduation_year={graduation_year}
          />
      {/if}

      {#if userType === "adult"}
        <AdultForm
          bind:groups={groups}
          bind:childNames={childNames}
          />
      {/if}

      <div class="spacer"></div>

      <div class="form-group">
        <label class="required" for="password">Password</label>
        <div class="lb-input-group">
          <input
            type="password"
            id="password"
            
            class="form-control"
            placeholder="Password"
            name="password"
            bind:value={password}
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

