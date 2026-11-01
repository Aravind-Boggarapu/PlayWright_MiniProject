


import {test , expect } from '../../customFixtures/LoginFixture_Logout.ts'



test(" regristration flow", async ({ Login, registration }) => {
    await registration.registrationpageVerification();
    await registration.registartiondetailsFill();

} );


