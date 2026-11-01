


import {test , expect } from '../../customFixtures/LoginFixture_Logout.ts'



test(" regristration flow @web", async ({ Login, registration }) => {
    await registration.registrationpageVerification();
    await registration.registartiondetailsFill();

} );


