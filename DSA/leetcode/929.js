function numUniqueEmails(emails) {
  let uniqueEmails = new Set();

  emails.forEach((email) => {
    let [local, domain] = email.split("@");
    local = local.split("+")[0];
    local = local.replace(/\./g, "");

    uniqueEmails.add(local + "@" + domain);
  });

  return uniqueEmails;
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
