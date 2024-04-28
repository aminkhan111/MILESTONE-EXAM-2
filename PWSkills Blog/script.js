const modalContainer = document.querySelector('.modal-container');
const createBlog = document.getElementById('create-blog');
const blogs = document.querySelector('.blogs');
const addBlog = document.getElementById('add-blog');
const cancel = document.querySelector('.modal span');

const demoBlogPosts = [
    {
        url: "https://www.wscubetech.com/blog/wp-content/uploads/2024/02/html-and-html5.webp",
        title: "Difference Between HTML and HTML5: 2024 Comparison.",
        description: "HTML, or HyperText Markup Language, is the backbone of the web. It’s what helps create the structure and content of a website, from the headings and paragraphs to the links and images. ",
        content: "    Over the years, HTML has evolved to meet the growing demands of modern web design and development. The most significant leap in this evolution has been the jump from traditional HTML to HTML5. This shift wasn’t just a simple update; it introduced a new era of web development with richer features and improved capabilitie For anyone just starting in web development or looking to update their skills, understanding the difference between HTML and HTML5 is crucial. It’s like knowing the difference between an old, reliable bicycle and a modern, feature-rich bike. Both get you to your destination, but the latter offers a smoother, faster, and more enjoyable ride.HTML5 brings to the table elements and functionalities that make websites more interactive, multimedia-friendly, and adaptable to different devices—essentially, it makes the web developer’s job easier and the user’s experience better.  For those who are beginners in web development and eager to dive deeper into HTML and beyond, book a live demo session of the online web development course by WsCube Tech. It will help you equip with the knowledge and skills you need to master modern web development practices, and build a promising career as a web developer?"
    },
    
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5d23NxDuibSd66laALX1Bs1CqBa-sL7eBQ&usqp=CAU",
        title: "CSS3: Cascading Style Sheets 3",
        description: "CSS3, short for Cascading Style Sheets 3, is the latest version of the CSS language used to describe the presentation and layout of web pages.",
        content: `CSS3 introduced several new features and improvements over its predecessor, CSS2. Some of the key features and modules introduced in CSS3 include:

        Selectors: CSS3 introduced new types of selectors, allowing developers to target elements more precisely. Examples include attribute selectors, :nth-child(), :nth-of-type(), and more.
        
        Box Model: The box model was expanded to include properties like box-shadow, border-radius, and box-sizing. These properties enable more sophisticated layout and design possibilities.
        
        Transitions and Animations: CSS3 allows smooth transitions and animations using the transition and @keyframes rules. This allows developers to create dynamic and interactive web elements without relying on JavaScript.
        
        Media Queries: CSS3 introduced media queries, enabling web developers to create responsive designs that adapt to different screen sizes and devices. This has become crucial for modern web development as mobile and tablet usage continues to grow.
        
        Flexbox and Grid Layout: CSS3 introduced flexible box (flexbox) and grid layout systems, providing powerful tools for creating complex, responsive, and flexible page layouts.
        
        Multi-column Layout: CSS3 allows developers to create multi-column layouts for text content, making it easier to create newspaper-style designs.
        
        Custom Fonts: With CSS3, web developers can use the @font-face rule to include custom fonts on their websites, giving designers more creative freedom over typography.
        
        CSS Variables (Custom Properties): CSS3 introduced custom properties (variables) that allow developers to define reusable values throughout the stylesheet.
        
        Backgrounds and Gradients: CSS3 offers more options for background styles, including gradients, images, and blending modes.
        
        Transformations: CSS3 allows for 2D and 3D transformations, enabling developers to rotate, scale, skew, and translate elements in both 2D and 3D space.
        
        CSS3 has greatly expanded the possibilities of web design and has become widely supported by modern web browsers. However, it's important for developers to be aware of browser compatibility for certain CSS3 features, especially when targeting older browsers that might not fully support the latest CSS specifications. To ensure consistent user experiences, developers often use feature detection and fallback strategies when working with CSS3 features.`
    },
    {
        url: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_834,q_auto",
        title: "What Is JavaScript Used For?",
        description: "Unlock the power of JavaScript! Dive into its multifaceted uses from dynamic web pages to server-side applications. Discover why it's the cornerstone of modern web development!",
        content: "JavaScript is one of the most widely-used programming languages in software and web development. StackOverflow’s 2019 Developer Survey reports that 69.8% of developers use it more often than any other programming language. In 2020, JavaScript remains one of the most popular languages among developers and one of the most sought-after skills by businesses given that it’s used by 95.1% of all websitesJavaScript is known for being a naturally very fast programming language that speeds up websites and applications. It enables developers to carry out maintenance and upgrades easily and it makes the debugging process simple. The fact that it can be used alongside other programming languages makes it a catch-all choice for front-end web development.JavaScript software development services use this flexible language for a variety of purposes. Some of the most common uses of JavaScript are:"
    },

    {
        url: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/Banner-7-768x375.jpg",
        title: "Javascript Vs jQuery: What’s The Difference? ",
        description: "Amateur developers at the inception of their career are often struck with questions like – why jQuery while there is JavaScript; or what is the difference between JavaScript and jQuery; which is a better choice JavaScript or jQuery; or will jQuery supersede JavaScript, so on and so forth.",
        content: `
        JavaScript and jQuery are both popular tools used in web development, but they serve different purposes and operate at different levels of abstraction.
        
        JavaScript
        JavaScript is a programming language that was developed by Netscape Communications Corporation and is now standardized as ECMAScript. It's one of the core technologies of the web, alongside HTML and CSS. Here are some key points about JavaScript:
        
        Fundamental Technology: JavaScript is essential for web development. It's supported natively by web browsers and enables developers to create interactive and dynamic web pages.
        Versatility: JavaScript can be used for a broad range of applications, from simple scripts to complex applications. It runs on both the client-side (in the browser) and the server-side (on servers, e.g., Node.js).
        ES6 and Beyond: Modern JavaScript (ES6 onwards) provides a rich set of features like classes, modules, arrow functions, template literals, destructuring, promises, async/await, and more, which make the language more powerful and easier to work with.
        Frameworks and Libraries: JavaScript has a vast ecosystem of frameworks and libraries (React, Angular, Vue.js, etc.) that help in building complex applications more efficiently.
        jQuery
        jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. Here are some key points about jQuery:
        
        Simplicity: jQuery greatly simplifies JavaScript programming. It provides a simple API for tasks like DOM manipulation and event handling which would otherwise require more verbose, complex code.
        Cross-browser Compatibility: jQuery handles a lot of the headaches with cross-browser inconsistencies and makes JavaScript development smoother.
        Plugins: jQuery has an extensive network of plugins which extend its capabilities even further, allowing developers to easily add ready-made components to their projects.
        Declining Usage: Despite its benefits, the use of jQuery has declined with the rise of modern frameworks that handle dependencies and offer richer functionalities. Also, modern JavaScript (ES6 and beyond) has reduced the necessity of jQuery by providing many of the utilities that jQuery was used for.
        Comparison
        Nature: JavaScript is a language; jQuery is a library built in JavaScript.
        Utility: JavaScript can do everything jQuery can do, but jQuery can make certain tasks much simpler and shorter to code.
        Performance: Native JavaScript tends to be faster and more efficient as it does not require the additional overhead of loading a library.
        Learning Curve: jQuery is generally easier to learn and use, especially for those new to web development, but understanding JavaScript is crucial for more advanced programming and the use of modern frameworks.
        Conclusion
        While jQuery was once essential for dealing with various browser inconsistencies and simplifying complex tasks, modern JavaScript and its vast ecosystem of frameworks and tools have lessened the need for jQuery in many cases. Developers new to web programming might find jQuery useful for quick projects, but a deep understanding of JavaScript is essential for professional web development, especially in contemporary contexts where performance and modularity are increasingly important.
        .`
    }
];
const pos = JSON.parse(localStorage.getItem('blogPost'));
if (pos === null) {
    localStorage.setItem('blogPost', JSON.stringify(demoBlogPosts));
}


const getAllPosts = () => {
    let blogPosts = JSON.parse(localStorage.getItem('blogPost') || "[]");

    // removes each one from the DOM. This is crucial for refreshing the list of posts displayed, ensuring that posts from a previous state are cleared before new ones are added.

    document.querySelectorAll('.blog').forEach(blog => blog.remove());

    // iterates over each blog post
    blogPosts.forEach((blogpost, index) => {
        // localStorage.setItem('postIndex', JSON.parse(index));
        let blog = document.createElement('div');
        blog.classList.add('blog');

        blog.innerHTML = `
        <div class="img-cont">
            <img src=${blogpost.url} alt=${blogpost.title}>
        </div>
        <h4>${blogpost.title}</h4>
        <p>${blogpost.description}</p>
        <a href="./blogPost/blog.html" onclick="localStorage.setItem('postIndex',  ${index})">Read</a>
    `;
        blogs.appendChild(blog);
    });

}
getAllPosts();



createBlog.onclick = () => {
    modalContainer.classList.add('active');
}

cancel.onclick = () => {
    modalContainer.classList.remove('active');
}

addBlog.onclick = () => {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const content = document.querySelector('#post');
    const url = document.querySelector('#url');

    if (!title || !description || !content || !url) {
        alert('All field required')
        return
    }

    let obj = {
        title: title.value,
        description: description.value,
        content: content.value,
        url: url.value
    }
    let blogpost = JSON.parse(localStorage.getItem('blogPost'));
    console.log(blogpost);
    let array;
    if (blogpost) {
        array = [...blogpost, obj];
    }
    else {
        array = [obj]
    }
    // blogs.insertAdjacentHTML('afterend', blog);
    modalContainer.classList.remove('active');
    localStorage.setItem('blogPost', JSON.stringify(array));
    getAllPosts();
}
