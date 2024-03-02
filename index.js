

// let div = document.createElement("div");
// let h2 = document.createElement("h2");
// h2.innerText = "hello";
// let p = document.createElement("p");
// p.innerText= "paragraph";
// div.appendChild(h2);
// div.appendChild(p);
// let rootDiv = document.getElementById("root");
// rootDiv.appendChild(div);

const h1 = React.createElement('h1', {
    style: {
        fontSize:'5rem'
    }
}, 'Learn web development');

const p1 = React.createElement('p', {
    style: {fontSize:'1.5rem'}
}, 'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.');
const link = React.createElement('a',{href:"", style: {fontSize:'1.5rem'}}, ' rest of MDN ');
const span1= React.createElement('span',{
    style: {fontSize:'1.5rem'}
},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the ');
const span2= React.createElement('span',{},'and other intermediate to advanced resources that assume a lot of previous knowledge.')

const p2 = React.createElement('p', {style: {fontSize:'1.5rem'}}, [span1, link, span2]);

const p3 = React.createElement('p',{style: {fontSize:'1.5rem'}},'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.');

const div = React.createElement('div',{
    style: {padding:'10rem'}
},[h1, p1, p2, p3]);

ReactDOM.render(div, document.getElementById("root"));
