const signature = input => {
  const { name, position, mail, phone, examina, school } = input;
  return `<p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(51, 51, 51);"><b style="letter-spacing: 0.3em">${name}</b></p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(51, 51, 51); min-height: 16px;"><br></p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);">${position}</p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);">IAESTE Sweden - Internships Worldwide</p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);">Follow us on <a href="https://www.facebook.com/iaeste.sverige">Facebook</a>!</p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(126, 87, 194);"><a href="http://www.iaeste.se/">www.iaeste.se</a></p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(51, 51, 51); min-height: 16px;"><br></p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);">${examina}</p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);">${school}</p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(34, 34, 34);"><a href="mailto:${mail}">${mail}</a></p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);">${phone}</p>
    <p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);"><br></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: &quot;Helvetica Neue&quot;; color: rgb(68, 68, 68);"><img src="images/logo.png" alt="logo"/></p>`;
};
