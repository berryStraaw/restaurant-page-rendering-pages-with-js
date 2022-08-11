export default function setUp(){
  const nav=document.createElement('nav');
  const link=document.createElement('button');
  link.innerHTML="home";
  link.setAttribute('id','home');
  nav.appendChild(link);

  const link2=document.createElement('button');
  link2.innerHTML="about";
  link2.setAttribute('id','about');
  nav.appendChild(link2);

  const link3=document.createElement('button');
  link3.innerHTML="contact";
  link3.setAttribute('id','contact');
  nav.appendChild(link3);

  return nav;
}


/* const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })(); */