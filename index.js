function shout(string) {
  return string.toUpperCase();
}
shout('HELLO');
function whisper(string) {
  return string.toLowerCase();
}
whisper('hello');
function sayHiToGrandma(string) {
	let lowercase = string;
	let uppercase = string;
  if(lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!";
  } else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!";
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  } else {
    return 'There was an error';
  }
}
