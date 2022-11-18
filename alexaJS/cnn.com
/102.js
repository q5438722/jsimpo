
// BEGIN Salesforce DMP JavaScript Consent Tag for "Turner International"
Krux( 'consent:set', {

  dc: true,
  al: true,
  tg: true,
  cd: true,
  sh: true,
  re: true

}, function(errors, body) {

   if (errors) {
    console.error(errors);
  } else {
    console.log('Successfully set consent flags.');
  }

});
// END Salesforce DMP JavaScript Consent Tag
