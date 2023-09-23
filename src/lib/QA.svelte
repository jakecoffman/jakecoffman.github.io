<section id="qa">
  <h2>Q &amp; A</h2>

  <h3>What are your general thoughts about programming?</h3>

  <ul>
    <li>Statically typed languages got a bad reputation and now we are paying the price for having large dynamically typed applications that are difficult to refactor.</li>
    <li>Just as pure OOP is not the answer, pure functional is not either.</li>
    <li>Don't use Mongo unless you are using it to store documents that have no relationship, nor ever will have relationships.</li>
    <li>ORMs will break down, be prepared to write queries by hand.</li>
    <li>Don't rewrite your codebase or re-architect unless it's really a problem. You work for a business, add value.</li>
  </ul>

  <h3>What are your general thoughts about managing developers?</h3>

  <ul>
    <li>Sometimes meetings are a waste of time. Instead, write an email or message in a chat. Asynchronous communication should be preferred.</li>
    <li>The reason you are calling so many meetings is probably because you don't write enough down.</li>
    <li>Project managers aren't above developers, nor the other way around. We are equals and need to decide what gets done next. You manage customer expectations and I'll get things done.</li>
    <li>Ideas are worthless without execution. Don't hire idea people if they can't bring the idea to reality.</li>
  </ul>

  <h3>Why do you use Go so much?</h3>

  <p>I like to use Go for my personal projects because it's simple to start a new project and code is easy, the syntax
    is simple is much easier than any other programming language out there. There definitely are some rough spots in the language such as lack of enums, but I find the trade-off is worth it.</p>

  <h3>How do you feel about language X or framework Y?</h3>

  <p>I think most languages and frameworks have redeeming factors so you won't hear me say I hate any particular one. The most challenging part of software is choosing the right stack for the problem at hand.</p>

  <p>I also think it's important to not limit your learning to just a single language or framework. You can learn so much more about your favorite language just by learning a different one.</p>

  <h3>Favorite OS for developing?</h3>

  <p>I have used Mac, Windows, and Linux desktops successfully in developing cross platform applications.</p>

  <p>I personally prefer Windows due to the low cost of hardware and have found WSL to be quite nice in filling in the gaps.</p>

  <p>2022 update - I now prefer Mac with the M1 chip 🙂</p>

  <p>
    Typically my Linux desktops last about 6 months before I do an upgrade that breaks everything and I go back to Windows.
    Linux on the Desktop is still to immature and tends to be more of a hobby than an OS.
  </p>

  <h3>Thoughts on testing?</h3>

  <p>
    Code that will go to production should always be tested, but I don't think every function should be tested in
    isolation. I prefer testing functionality (or behaviors), APIs, exported functions, and testing against a real
    database. These kinds of tests are much more valuable and won't break when you go to change the implementation,
    but gives a sense of security that things are still working.
  </p>
</section>
