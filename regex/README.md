## regex
Learn regex with code editor (vs-code). 

### Turn your Editor as Regex Playground

At `find` control,
- enable regex,
- enable case-sensitive.

After enter your regex, press "ENTER" to navigate the next matched character.


### Take away

- It only matches 1 character at a time.



### Snippets

```
.       - Any Character Except New Line
\d      - Digit (0-9)
\D      - Not a Digit (0-9)
\w      - Word Character
\W      - Not a Word Character 
\s      - Whitespace (space, tab, newline)
\S      - Not a Whitespace  (space, tab, newline)


\b      - Word boundary
\B      - Not a Word boundary
^       - Beginning of a String 
$       - End of a String

[]      - Matches Characters in brackets
[^ ]    - Matches Characters NOT in brackets
|       - Either or 
( )     - Group - to match a group of characters at one time.


By default, they only matches 1 character at a time. Use quantifier to match multiple Characters

Quantifiers:
*       - 0 or more
+       - 1 or more
?       - 0 or 1
{3}     - Exact Number 
{3,4}   - Range of Numbers (Minimum, Maximum)
```

### Challenges

1. email.in

- `/\S*@\S+/`
- `/\S*@[a-zA-Z-]+\.(com|net|edu)/`

2. url.in (grab domain name  + top-level-domain w/o www)

- `/(http|https)://[a-zA-Z.]+/`
- `/https?://(www\.)?\w+\.\w+/`
- to capture both domain + top-level-domain. `/https?://(www\.)?(\w+)(\.\w+)/`

To replace the captured group, use $1,$2,$3

3. aoc.in  (capture number of colored bags)

- my attempt. `/(\d+) (\w+ \w+) bags?/`
- alternative, `/(\d) (.+?) bags?[,.]/`


4. htlm.in (put greediness to end)

- bad, because its greedy `/<.+>/`
- correct, be greedy until you met '>' sign. `/<.+?>/`

### References 

- great intro. https://www.youtube.com/watch?v=sa-TUpSx1JA
- put greediness to end. https://www.youtube.com/watch?v=EkluES9Rvak
