<script>
  import { goto } from '$app/navigation'

  /** @type {string}*/
  let email

  /** @type {string}*/
  let password

  /** @type {string}*/
  let username 

  /** @type {string}*/
  let userType

  const handleSubmit = (/** @type {Event} */ evt) => {
    let loginFields = { email, password }
    alert(loginFields)
    return goto('/')
  }

  const navigateToSignup = () => {
    goto('/signup')
  }
</script>

<div class="row">
  <div class="title-bar">
    <center>
      <div class="notindex-title">
        <a href="/gallery" style="color: white;">SIGNUP</a>
      </div>
    </center>
    <br />
  </div>
  <div class="row bottom-margin row-margins">
    <div class="col-xs-12">
      <center>
        <div>This is the SIGNUP page.</div>
      </center>
    </div>
  </div>
</div>
<div class="row bottom-margin row-margins">
  <div class="col-xs-12">
    <center>
      <div class="col-lg-8 col-lg-offset-2 col-xs-12 no-side-padding">
                <b><p>LigerBots team registration is for students registered in the Newton Public Schools
        high schools and their parents/guardians, and for LigerBots Mentors and Coaches, only.
                </p></b>
                <p>Community members interested in FLL should refer to the <a href="/fll">FLL page</a>.</p>
                <p>Otherwise, you can find contact information on the <a href="/contact">Contact page</a>.</p>
                <br>
  </div>
      <div class="row side-margins bottom-margin">
            <div class="col-lg-6 col-lg-offset-3 col-xs-12 no-side-padding bottom-margin" style="text-align: left;">
              <form method="post" on:submit|preventDefault={handleSubmit}>
                  <div class="form-group">
                    <label class="required" for="desired-username">Desired Username</label>
                    <input type="text" id="desired-username" class="form-control" placeholder="liger123" name="username" aria-describedby="usernameHelp" required>
                    <span id="usernameHelp" class="help-block">At least 3 characters. Allows letters, numbers, underscore and period.</span>
                  </div>
                  
                  <div class="form-group">
                    <label class="required" for="email">Email</label>
                    <input type="email" id="email" class="form-control" placeholder="john.smith@gmail.com" name="email" aria-describedby="emailHelp" required>
                     <span id="emailHelp">Do <b>not</b> use an NPS student email; it cannot be used outside of NPS.<br>
                      The LigerBots rely heavily on Google Drive, so an account with access to Google is preferable.</span>
                  </div>
                  
                  <div class="form-group">
                   <label class="required" for="first-name">First Name</label>
                    <input type="text" id="first-name" class="form-control" placeholder="John" name="first-name" >
                    <label class="required" for="last-name">Last Name</label>
                    <input type="text" id="last-name" class="form-control" placeholder="Smith" name="last-name" >
                
                  </div>
                  
                  <div class="form-group phone-group">
                    <label class="required" for="phone">Phone</label>
                    <input type="text" id="phone" maxlength="12" class="form-control" placeholder="123-456-7890" name="phone" >
                  </div>
                  
                  <div class="form-group">
                    <label class="required" for="address">Address</label>
                    <input type="text" class="form-control" placeholder="Address line" name="address" >
                    <div class="spacer"></div>
                    <div class="lb-input-group address-group">
                      <input type="text" class="form-control" placeholder="City" value="Newton" name="city" >
                      <input type="text" class="form-control" placeholder="State" value="MA" name="state" >
                      <input type="number" class="form-control" placeholder="Zip code" name="postalcode" maxlength="5" >
                    </div>
                  </div>
                  
                  <label class="required" for="school">School</label>
                  <div class="radio lb-checkbox">
                    <label>
                      <input type="radio" id="school" name="school" value="North" required> Newton North
                    </label>
                    <label>
                      <input type="radio" id="school" name="school" value="South" required> Newton South
                    </label>
                    <label>
                      <input type="radio" id="school" name="school" value="none" required> N/A
                    </label>
                  </div>
                  
                  <label class="required" for="user-type">I am a...</label>
                  <div class="radio lb-checkbox">
                   <label>
                      <input type="radio" id="user-type" name="user-type" value="student" bind:group={userType} required /> Student
                    </label>
                    <label>
                      <input type="radio" id="user-type"name="user-type" value="adult" bind:group={userType} required /> Adult
                    </label>
                  </div>
                  
                  <!-- There are two different sections of the form based on whether the user selected "student" or "parent" -->
                    {#if userType === 'student'}
                    <div class="form-section student">
                      <label class="required">Parent/Guardian names</label>
                      <!-- allows for multiple copies of input elements via some scripting 
                           used to display a variable number of parent name inputs -->
                      <div class="multi-input">
                        <script type="text/html+template" class="multi-input-template">
                          <div class="lb-input-group name-group multi-name-group">
                            <input type="text" class="form-control" placeholder="John" name="parent-first-name[]" data-required />
                            <input type="text" class="form-control" placeholder="Smith" name="parent-last-name[]" data-required />
                            <span class="input-group-btn">
                              <button class="btn btn-default multi-input-remove" type="button">X</button>
                            </span>
                          </div>
                        </script>
                        <div class="multi-input-items"><div class="lb-input-group name-group multi-name-group">
                            <input type="text" class="form-control" placeholder="John" name="parent-first-name[]" data-required="">
                            <input type="text" class="form-control" placeholder="Smith" name="parent-last-name[]" data-required="">
                            <span class="input-group-btn">
                              <button class="btn btn-default multi-input-remove" type="button" >X</button>
                            </span>
                          </div></div>
                        <div class="spacer"></div>
                        <div class="multi-input-buttons">
                          <button type="button" class="btn multi-input-add">
                            Add
                          </button>
                        </div>
                        <div class="spacer"></div>
                      </div>
                      
                      <div class="form-group">
                        <label class="required" for="parent-email">Parent/Guardian email</label>
                        <input type="email" id="parent-email"class="form-control" placeholder="john.smith@example.com" name="parent_email" data-required="">
                      </div>
                      
                      <div class="form-group phone-group">
                        <label class="required" for="emergency-phone">Emergency Phone</label>
                        <input type="text" id="emergency-phone" maxlength="14" class="form-control" placeholder="123-456-7890" name="emergency_phone" data-required="">
                      </div>
                      
                      <div class="form-group">
                        <label class="required" for="graduation">Graduation year</label>
                        <input type="number" id="graduation" class="form-control" name="graduation" min="2020" max="2035">
                      </div>
                    </div>
                    {/if}

                    {#if userType === 'adult'}
                    <div class="roles-group">
                    <label class="required" for="adult-role">Adult roles</label>
                    <div class="checkbox lb-checkbox">
                      <label >
                        <input type="checkbox" id="adult-role" name="role-parent" disabled> Parent/Guardian
                      </label>
                      <label>
                        <input type="checkbox" id="adult-role" name="role-mentor" disabled> Mentor
                      </label>
                      <label>
                        <input type="checkbox" id="adult-role" name="role-coach" disabled> Coach
                      </label>
                    </div>
                  </div>
                    <div class="form-section parent">
                      <label class="required">Child(ren)'s Name(s)</label>
                      <!-- same idea as the one for the student section -->
                      <div class="multi-input">
                        <script type="text/html+template" class="multi-input-template">
                          <div class="lb-input-group name-group multi-name-group">
                            <input type="text" class="form-control" placeholder="John" name="child-first-name[]" data-required />
                            <input type="text" class="form-control" placeholder="Smith" name="child-last-name[]" data-required />
                            <span class="input-group-btn">
                              <button class="btn btn-default multi-input-remove" type="button">X</button>
                            </span>
                          </div>
                        </script>
                        <div class="multi-input-items"><div class="lb-input-group name-group multi-name-group">
                            <input type="text" class="form-control" placeholder="John" name="child-first-name[]" data-required="">
                            <input type="text" class="form-control" placeholder="Smith" name="child-last-name[]" data-required="">
                            <span class="input-group-btn">
                              <button class="btn btn-default multi-input-remove" type="button">X</button>
                            </span>
                          </div></div>
                        <div class="spacer"></div>
                        <div class="multi-input-buttons">
                          <button type="button" class="btn multi-input-add">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  {/if}

                  <div class="spacer"></div>

                  <div class="form-group">
                    <label class="required">Password</label>
                    <div class="lb-input-group">
                      <input type="password" pattern="" class="form-control" placeholder="Password" name="password" aria-describedby="passwordHelp">
                      <input type="password" class="form-control" placeholder="Confirm" name="password-confirm" >
                    </div>
                    <span id="passwordHelp" class="help-block">Password must be a minimum of 8 characters and contain mixed case and at least 1 digit.</span>
                  </div>
                  
                  <div class="help-block">
                    <label class="required"></label> required
                  </div>
                  <button type="submit" name="register" class="btn btn-default">Submit</button>
                </form>
                            </div>
          </div>
    </center>
  </div>
</div>
