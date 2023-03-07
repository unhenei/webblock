<h1>Words and Visuals</h1>
<p>Welcome. In the website, you could generate your own letter with a few simple steps. There is also a bonus section where you could get quotes of the day. Now go pick a piece of paper and start writing!</p>
<hr>
<p>This website is a part of Zero To Mastery Hacktoberfest 2022 WEBBLOCKS project.</p>
<h2>What is ZTM Hacktoberfest 2022?</h2>
<p>Hacktoberfest is a month-long celebration of open source, organised by Digital Ocean. (<a href='https://github.com/zero-to-mastery/Hacktoberfest-2022/blob/master/README.md#what-is-hacktoberfest'>More details here</a>)</p>
<h2>My take in the project</h2>
<blockquote>The ZTM WEBBLOCKS project is to build a showcase library of components using vanilla HTML, CSS and maybe some Javascript.</blockquote>
<p>I sticked to the idea of building with vanilla HTML, CSS and Javascript. However, in order to try out different component/ webblock ideas, I stretched it a bit and make a one page website built with small components.</p>
<p>In the project, I aimed to build a website with clear structure, including an intro section (slider), multiple functional sections where data are collected to create a customized output, and a bonus interactive section which required close to zero input from user while still offering some fun results. I also wanted the route of the page to be light and easy. Therefore, besides the navigation bar, I added a back-to-top bottom, I also added a 'NEXT' button in the end of each section so the user could be brought to the next part with a simple click.</p>
<h2>Limitations and future improvement</h2>
<p>There are a few things I would like to enhance in the future.</p>
<h3>Letter Output</h3>
<p>The letter generator should offer to download the final letter with a button or a right click. However, it might require to use html2canvas library while I wanted to stick to the vanilla code rule. In the end, the letter is generated, but it can only be saved by screenshot not by downloaded, which could be fatal to user experience.</p>
<p>When download function is done, I would also like to add an email form, where we could just send the user their letter. Not only could we offer users more options for the ouput, if needed, we could also collect user information in the process.</p>
<h3>Letter Text Input</h3>
<p>I used <code>textarea</code> for letter input, it returned plain text so the paragraphs got messed up in the letter output section. An editor might be what I was looking for; nonetheless, to keep the code simple, I chose to ask users to create paragraphs manually with asigned words, and turn it into HTML format with a <code>replaceAll()</code> function. In exchange, I built a layout part in the output section where user could change the text alignment and font size. However, adding the asigned word could be painful for users, which definitely could be improved in the future.</p>
<h3>Mobile Responsive</h3>
<p>While the website could function under different window sized, the layout goes horribly wrong in mobile devices. With some more time and a bit work on CSS, I wish to solve it in near future.</p>
<h3>Clean Code</h3>
<p>The code could always be cleaner.</p>
<h2>Conclusion</h2>
<p>It was fun and exciting to build a website with vanilla code. I got to practice more on DOM manipulation and build some components that I really like. There are still places I wish to improve, yet consider the time I took to build the website, I am quite proud to provide you with 'Words and Visual'.</p>
<p>Thank you for reading. See you next time.</p>
