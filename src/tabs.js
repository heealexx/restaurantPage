export function home(){
  const home = document.createElement("div");
  home.textContent = "The Chipotle Connesiours Club is the worlds most renowned social club for Chipotle lovers!";
  home.textContent += "Joining the club (with a discounted price of $199.99), you get special access to club perks.";
  home.textContent += "These perks include member social events, as well as exclusive deals on Chipotle goods!";

  return home;
}

export function menu(){
  const menu = document.createElement("div");

  return menu;
}

export function contact(){
  const contact = document.createElement("div");
  contact.textContent = "Due to the CCC's exclusivity and secrecy, contacting HQ is a hard task to do.";
  contact.textContent += "What you know about authentic Mexican food?";
  contact.textContent += "Nothing, until you've tried the best!"

  return contact;
}