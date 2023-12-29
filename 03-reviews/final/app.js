// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

/****** link variables ********/
const pic = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
/****** link buttons ********/
const nxt = document.querySelector('.next-btn');
const pre = document.querySelector('.prev-btn');
const rand = document.querySelector('.random-btn');
let record_Id = 0;
/****** event listners ********/
nxt.addEventListener('click', function () {
  record_Id++;
  if (record_Id > reviews.length - 1) {
    record_Id = 0;
  }
  showHisFeedback(record_Id);
});
pre.addEventListener('click', function () {
  record_Id--;
  if (record_Id < 0) {
    record_Id = reviews.length - 1;
  }
  showHisFeedback(record_Id);
});
rand.addEventListener('click', function () {
  record_Id = Math.floor(Math.random() * reviews.length);
  showHisFeedback(record_Id);
  console.log(record_Id);
})
/** show  this person **/
function showHisFeedback(id_to_show) {
  const articleVal = reviews[id_to_show];
  pic.src = articleVal.img;
  author.textContent = articleVal.name;
  job.textContent = articleVal.job;
  info.textContent = articleVal.text;
}