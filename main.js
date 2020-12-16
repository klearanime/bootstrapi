

const xhr = new XMLHttpRequest();


const getTaco = document.querySelector('p') 
getTaco.innerText
// getTaco.addEventListener('click', )

xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
})


xhr.open('GET', 'http://taco-randomizer.herokuapp.com/random/?full-taco=true')
xhr.setRequestHeader('Accept', 'application/json');
xhr.send();

console.log('hello')


console.log(data.recipe)






// ### Part 3 - Basic Interface

// You may have noticed that our interface is very very basic and also about dogs. Let's work on the dog part first. Unless your API actually WAS about dogs (the best ones are!), change the heading and subheading and button text and anything else to match your actual app!


// ### Part 4 - Bootstrap Stylin'

// Okay, now that your content is specific to your app, let's add some Bootstrap and make it look... pretty good?

// * Go check out [the docs for Bootstrap's card component](https://getbootstrap.com/docs/5.0/components/card/). We'll wait!
// * Now let's add some of those sweet card classes to the right elements and watch our site get way better! Start with the `.main` `section`. Give it the additional class `card`, and check out the differnce.
// * Next: give the `.button` element the additional classes `btn` and `btn-primary`.
// * Give the `h5` element the class `card-title`.
// * Give the `h6` element the clas `card-subtitle` and, optionally, `text-muted` (try it and see if you like it!)
// * Give the `p` element the additional class `card-text`.
// * Finally, give the `img` (if you need one) the class of `card-img-bottom`.

// You should now have a decent-looking site! If its look doesn't approximately match the one linked in the Introduction, you may have missed a class or two. Check over your code and look at the examples in the docs!
