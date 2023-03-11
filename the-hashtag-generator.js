/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples:

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {
  str = str.replace(/\s+/g, " ").trim();
  if (str.length === 0) {
    return false;
  }
  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    str[0] = str[0].toUpperCase();
    if (str[i] === " ") {
      str[i + 1] = str[i + 1].toUpperCase();
    }
  }

  str = str.toString().split(",").join("");
  str = str.split(" ").join("");

  if (str.length + 1 > 140) {
    return false;
  }

  return `#${str}`;
}
