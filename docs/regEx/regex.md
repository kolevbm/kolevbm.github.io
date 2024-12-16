---
sidebar_label: "RegExOne.com"
displayed_sidebar: regexSidebar
---

All of this are notes from (RegExOne)[https://regexone.com], a very good and comprehensive website to learn regular expressions.

TODO: edit the lessons to be more clear

## Lesson 1: An introduction, and the ABCs

In this case, the character `\d` can be used in place of any digit from 0 to 9.
`\d`
here is the concept of a wildcard, which is represented by the `.` (dot) metacharacter, and can match any single character (letter, digit, whitespace, everything)
`.` in order to specifically match a period, you need to escape the dot by using a slash `\.` accordingly

## Lesson 3: Matching specific characters

There is a method for matching specific characters using regular expressions, by defining them inside square brackets. For example, the pattern `[abc]` will only match a single a, b, or c letter and nothing else.

`[abc]`

## Lesson 4: Excluding specific characters

To represent this, we use a similar expression that excludes specific characters using the square brackets and the `^ (hat)`. For example, the pattern `[^abc]` will match any single character except for the letters a, b, or c.

match hog Success
match dog Success
skip bog

`[^b]og`

## Lesson 5: Character ranges

there is a shorthand for matching a character in list of sequential characters by using the dash to indicate a character range. For example, the pattern `[0-6]` will only match any single digit character from zero to six, and nothing else. And likewise, `[^n-p]` will only match any single character except for letters n to p

match Ana Success
match Bob Success
match Cpc Success
skip aax To be completed
skip bby To be completed
skip ccz To be completed

`[A-C][n-p][a-c]`

## Lesson 6: Character repetirions

We've so far learned how to specify the range of characters we want to match, but how about the number of repetitions of characters that we want to match? One way that we can do this is to explicitly spell out exactly how many characters we want, eg. `\d\d\d` which would match exactly three digits.

A more convenient way is to specify how many repetitions of each character we want using the curly braces notation. For example, `a{3}` will match the a character exactly three times. Certain regular expression engines will even allow you to specify a range for this repetition such that `a{1,3}` will match the a character no more than 3 times, but no less than once for example.

This quantifier can be used with any character, or special metacharacters, for example `w{3}` (three w's), `[wxy]{5}` (five characters, each of which can be a w, x, or y) and .`{2,6}` (between two and six of any character).

match wazzzzzup Success
match wazzzup Success
skip wazup

`waz{3,5}up`

## Lesson 7 kleen

A powerful concept in regular expressions is the ability to match an arbitrary number of characters. For example, imagine that you wrote a form that has a donation field that takes a numerical value in dollars. A wealthy user may drop by and want to donate $25,000, while a normal user may want to donate $25.

One way to express such a pattern would be to use what is known as the Kleene Star and the Kleene Plus, which essentially represents either 0 or more or 1 or more of the character that it follows (it always follows a character or group). For example, to match the donations above, we can use the pattern `\d\*` to match any number of digits, but a tighter regular expression would be `\d+` which ensures that the input string has at least one digit.

These quantifiers can be used with any character or special metacharacters, for example `a+` (one or more a's), `[abc]+` (one or more of any a, b, or c character) and `.\*` (zero or more of any character).

match aaaabcc Success
match aabbbbc Success
match aacc Success
skip a

`aa+b\*c+`

## Lesson 8 Optoional characters

Another quantifier that is really common when matching and extracting text is the `?` (question mark) metacharacter which denotes optionality. This metacharacter allows you to match either zero or one of the preceding character or group. For example, the pattern `ab?c` will match either the strings "abc" or "ac" because the b is considered optional.

match 1 file found? Success
match 2 files found? Success
match 24 files found? Success
skip No files found.

`\d+ files? found\?`

## Lesson 9 White Spaces

The most common forms of whitespace you will use with regular expressions are the space `(␣)`, the tab `(\t)`, the new line `(\n)` and the carriage return `(\r)` (useful in Windows environments), and these special characters match each of their respective whitespaces. In addition, a whitespace special character `\s` will match any of the specific whitespaces above and is extremely useful when dealing with raw input text.

In the strings below, you'll find that the content of each line is indented by some whitespace from the index of the line (the number is a part of the text to match). Try writing a pattern that can match each line containing whitespace characters between the number and the content. Notice that the whitespace characters are just like any other character and the special metacharacters like the star and the plus can be used as well.

match 1. abc Success
match 2. abc Success
match 3. abc Success
skip 4.abc

`\d.\s+abc`

## Lesson 10 Starting and ending

One way to tighten our patterns is to define a pattern that describes both the start and the end of the line using the special `^ (hat)` and `$` (dollar sign) metacharacters. In the example above, we can use the pattern `^success` to match only a line that begins with the word "success", but not the line "Error: unsuccessful operation". And if you combine both the hat and the dollar sign, you create a pattern that matches the whole line completely at the beginning and end.

match Mission: successful Success
skip Last Mission: unsuccessful To be completed
skip Next Mission: successful upon capture of target

`^Mission:\ssuccessful$`

## Lesson 11 Match Group

Regular expressions allow us to not just match text but also to extract information for further processing. This is done by defining groups of characters and capturing them using the special parentheses ( and ) metacharacters. Any subpattern inside a pair of parentheses will be captured as a group. In practice, this can be used to extract information like phone numbers or emails from all sorts of data.

Imagine for example that you had a command line tool to list all the image files you have in the cloud. You could then use a pattern such as `^(IMG\d+\.png)$` to capture and extract the full filename, but if you only wanted to capture the filename without the extension, you could use the pattern `^(IMG\d+)\.png$` which only captures the part before the period.

Go ahead and try to use this to write a regular expression that matches only the filenames (not including extension) of the PDF files below.

capture file_record_transcript.pdf file_record_transcript Success
capture file_07241999.pdf file_07241999 Success
skip testfile_fake.pdf.tmp

`^(file.+)\.pdf$`

## Lesson 12: Nested groups

When you are working with complex data, you can easily find yourself having to extract multiple layers of information, which can result in nested groups. Generally, the results of the captured groups are in the order in which they are defined (in order by open parenthesis).

Take the example from the previous lesson, of capturing the filenames of all the image files you have in a list. If each of these image files had a sequential picture number in the filename, you could extract both the filename and the picture number using the same pattern by writing an expression like `^(IMG(\d+))\.png$` (using a nested parenthesis to capture the digits).

The nested groups are read from left to right in the pattern, with the first capture group being the contents of the first parentheses group, etc.

For the following strings, write an expression that matches and captures both the full date, as well as the year of the date.

capture Jan 1987 Jan 1987 1987 Success
capture May 1969 May 1969 1969 Success
capture Aug 2011 Aug 2011 2011 Success

`^(\w{3}\s(\d{4}))`

## Lesson 13: More group work

As you saw in the previous lessons, all the quantifiers including the star `\*`, plus `+`, repetition `{m,n}` and the question mark `?` can all be used within the capture group patterns. This is the only way to apply quantifiers on sequences of characters instead of the individual characters themselves.

For example, if I knew that a phone number may or may not contain an area code, the right pattern would test for the existence of the whole group of digits `(\d{3})?` and not the individual characters themselves (which would be wrong).

Depending on the regular expression engine you are using, you can also use non-capturing groups which will allow you to match the group but not have it show up in the results.

Below are a couple different common display resolutions, try to capture the width and height of each display.

apture 1280x720 1280 720 Success
capture 1920x1600 1920 1600 Success
capture 1024x768 1024 768 Success

`(\d{4})\w(\d{2,4})`

## Lesson 14: It's all conditional

As we mentioned before, it's always good to be precise, and that applies to coding, talking, and even regular expressions. For example, you wouldn't write a grocery list for someone to Buy more `.\*` because you would have no idea what you could get back. Instead you would write Buy more milk or Buy more bread, and in regular expressions, we can actually define these conditionals explicitly.

Specifically when using groups, you can use the `|` (logical OR, aka. the pipe) to denote different possible sets of characters. In the above example, I can write the pattern "Buy more (milk|bread|juice)" to match only the strings Buy more milk, Buy more bread, or Buy more juice.

Like normal groups, you can use any sequence of characters or metacharacters in a condition, for example, `([cb]ats\*|[dh]ogs?)` would match either cats or bats, or, dogs or hogs. Writing patterns with many conditions can be hard to read, so you should consider making them separate patterns if they get too complex.

Go ahead and try writing a conditional pattern that matches only the lines with small fuzzy creatures below.

match I love cats Success
match I love dogs Success
skip I love logs To be completed
skip I love cogs

`I love (cats|dogs)`

## Lesson 15: Other special characters

This lesson will cover some extra metacharacters, as well as the results of captured groups.

We have already learned the most common metacharacters to capture digits using `\d`, whitespace using `\s`, and alphanumeric letters and digits using \w, but regular expressions also provides a way of specifying the opposite sets of each of these metacharacters by using their upper case letters. For example, `\D` represents any non-digit character, `\S` any non-whitespace character, and `\W` any non-alphanumeric character (such as punctuation). Depending on how you compose your regular expression, it may be easier to use one or the other.

Additionally, there is a special metacharacter \b which matches the boundary between a word and a non-word character. It's most useful in capturing entire words (for example by using the pattern `\w+\b`).

One concept that we will not explore in great detail in these lessons is back referencing, mostly because it varies depending on the implementation. However, many systems allow you to reference your captured groups by using `\0` (usually the full matched text), `\1` (group 1), `\2` (group 2), etc. This is useful for example when you are in a text editor and doing a search and replace using regular expressions to swap two numbers, you can search for `"(\d+)-(\d+)"` and replace it with `"\2-\1"` to put the second captured number first, and the first captured number second for example.
